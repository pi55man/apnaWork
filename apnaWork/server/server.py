from   flask import Flask, jsonify, request
from   flask_cors import CORS
from   sqlalchemy import create_engine
from   sqlalchemy.orm import sessionmaker
from   sqlalchemy_utils import database_exists, create_database
from   flask_sqlalchemy import SQLAlchemy
from   sqlalchemy.exc import OperationalError
from   sqlalchemy import text
from   sqlalchemy.dialects.postgresql import UUID
from   geopy.distance import geodesic
from   sklearn.metrics import adjusted_rand_score
from   sklearn.feature_extraction.text import TfidfVectorizer
from   sklearn.metrics.pairwise import cosine_similarity
from   sklearn.feature_extraction.text import ENGLISH_STOP_WORDS
import string 
from   sqlalchemy import create_engine
import uuid
import string
import pandas as pd

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:chauhan@localhost/freelance'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)



class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,primary_key = True)
    email = db.Column(db.String(),unique = True)
    password = db.Column(db.String(),unique=False)
    name = db.Column(db.String(80), unique=True,nullable=False)
    skills = db.Column(db.String(1200),nullable=True)
    totalJobs = db.Column(db.Integer,nullable=True)
    latitude = db.Column(db.Double,nullable=True)
    longitude = db.Column(db.Double,nullable=True)

class Job(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer,primary_key = True)
    title = db.Column(db.String(80), unique=True,nullable=False)
    description = db.Column(db.String(1200),nullable=True)
    skills = db.Column(db.String(1200),nullable=True)
    pay = db.Column(db.Integer,nullable=True)
    latitude = db.Column(db.Double,nullable=True)
    longitude = db.Column(db.Double,nullable=True)

def calculate_distance(user_lat, user_lon, job_lat, job_lon):
    user_coords = (user_lat, user_lon)
    job_coords = (job_lat, job_lon)
    distance = geodesic(user_coords, job_coords).kilometers
    return distance

def get_distances_for_user(user_id):
    user = User.query.get(user_id)
    job=Job.query.all()
    distances = []
    for jobs in job:
        if jobs.latitude and jobs.longitude:
            distance = calculate_distance(user.latitude,user.longitude,jobs.latitude,jobs.longitude)
            distances.append({
                'job_id':jobs.id,
                'distance':distance
            })
    distances.sort(key=lambda x: x['distance'])
    return distances

engine = create_engine("postgresql://postgres:chauhan@localhost/freelance")


def preprocess_data():
    job_listings = pd.read_sql_table('jobs', engine)
    user_profiles = pd.read_sql_table('users', engine)

    # Print the original data for debugging
    # print("Original job listings:\n", job_listings.head())
    # print("Original user profiles:\n", user_profiles.head())

    # Drop rows with missing data in key columns
    job_listings.dropna(subset=['title', 'description'], inplace=True)
    user_profiles.dropna(subset=['skills'], inplace=True)

    # Print after dropping NaN values
    # print("Job listings after dropping NaNs:\n", job_listings.head())
    # print("User profiles after dropping NaNs:\n", user_profiles.head())

    # Convert text to lowercase
    job_listings['title'] = job_listings['title'].str.lower()
    job_listings['description'] = job_listings['description'].str.lower()
    user_profiles['skills'] = user_profiles['skills'].str.lower()

    # Print after converting to lowercase
    # print("User profiles after lowercase conversion:\n", user_profiles.head())

    # Remove punctuation
    translator = str.maketrans('', '', string.punctuation)
    job_listings['title'] = job_listings['title'].str.translate(translator)
    job_listings['description'] = job_listings['description'].str.translate(translator)
    user_profiles['skills'] = user_profiles['skills'].str.translate(translator)

    stop_words = set(ENGLISH_STOP_WORDS)

    def remove_stopwords(text):
        return ' '.join([word for word in text.split() if word not in stop_words])

    job_listings['description'] = job_listings['description'].apply(remove_stopwords)
    job_listings['title'] = job_listings['title'].apply(remove_stopwords)
    user_profiles['skills'] = user_profiles['skills'].apply(remove_stopwords)

    # Combine title and description into one field
    job_listings['combined'] = job_listings['description'] + " " + job_listings['title']

    # Print after preprocessing
    # print("Final job listings:\n", job_listings.head())
    # print("Final user profiles:\n", user_profiles.head())

    return job_listings, user_profiles



def genrecs(uid):
    job_listings, user_profiles = preprocess_data()

    # Ensure that both the column and uid are of the same type
    user_profiles['id'] = user_profiles['id'].astype(int)  # Ensure 'id' is an integer
    uid = int(uid)  # Ensure uid is also an integer

    print(f"Data type of 'id' column: {user_profiles['id'].dtype}")
    print(f"Data type of 'uid': {type(uid)}")

    user_profile = user_profiles[user_profiles['id'] == uid]
    
    if user_profile.empty:
        raise ValueError(f"No valid skills data found for user ID {uid} after preprocessing.")
    
    user_skills = user_profile['skills'].iloc[0]
    print(f"Skills for user ID {uid}: {user_skills}")

    if not isinstance(user_skills, str) or not user_skills.strip():
        raise ValueError(f"Skills for user ID {uid} are either empty or not a valid string.")

    vectorizer = TfidfVectorizer(stop_words='english')

    job_tfidf = vectorizer.fit_transform(job_listings['combined'])
    user_tfidf = vectorizer.transform([user_skills])

    simmatrix = cosine_similarity(user_tfidf, job_tfidf)
    
    recjobs = simmatrix.argsort()[0][::-1]  # Get indices of sorted jobs
    rcj = job_listings.iloc[recjobs][['id', 'title', 'description','pay']].to_dict(orient='records')
    
    return rcj



dfd = pd.read_csv("techrec.csv")
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(dfd['Technologies Used'])

def recommend_technologies(known_technologies, tfidf_matrix, vectorizer, top_n=5):
    input_vector = vectorizer.transform([", ".join(known_technologies)])
    
    cosine_similarities = cosine_similarity(input_vector, tfidf_matrix).flatten()
    
    similar_indices = cosine_similarities.argsort()[-top_n:][::-1]
    
    recommended_technologies = set()
    for index in similar_indices:
        technologies = dfd.iloc[index]['Technologies Used'].split(', ')
        recommended_technologies.update(technologies)
    
    # Remove the known technologies from the recommendations
    recommended_technologies.difference_update(known_technologies)
    
    return list(recommended_technologies)


known_technologies = ["Java", "C++"]
recommendations = recommend_technologies(known_technologies, tfidf_matrix, vectorizer)
# print("--------------------------------")
# print("You might be interested in: ",recommendations[:3])
# print("--------------------------------")





#TODO: make two different tables, one for jobs and one for users ---COMPLETE---
#TODO: put this value {recieved as a list}in postgres database of user preferences
#TODO: process this value against the jobs database and return most relevant jobs

# @app.route('/api/user/new',methods=['POST'])
# def create_user():
#     data = request.json

#     new_user = User(
#         name=data['name'],
#         skills=data.get['skills',''],
#         totalJobs=data.get['totalJobs',''],
#         latitude=data.get['latitude',''],
#         longitude=data.get['longitude','']
#     )
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({"id":"user.id"}),200


@app.route('/api/user/<id>',methods=['GET'])
def get_user(id):
     user = User.query.get(id)
     if user:
        user_data = {
          "id": user.id,
           "name" : user.name,
           "email":user.email,
           "password":user.password,
           "skills": user.skills,
           "latitude":user.latitude,
           "longitude":user.longitude,
           "totalJobs":user.totalJobs
     }
     
    #  print(user)
     return jsonify(user_data)


# @app.route('api/user/<id>',methods=['PUT'])
# def update_user(id):
#     user = User.query.get(id)
#     #todo: if user not found
#     data = request.json
#     user.name = data.get("name",user.name)
#     user.skills = data.get("skills",user.skills)

#     db.session.commit()
    
#     updated_user = {
#         "id": user.id,
#         "name": user.name,
#         "skills": user.skills
#     }
#     return jsonify(updated_user)


# @app.route('api/user/<id>',methods=['DELETE'])
# def delete_user(id):
#     user = User.query.get(id)
#     #todo: if user not found
#     db.session.delete(user)
#     db.session.commit()
#     return jsonify({"msg":"user deleted"}),200

#frontend send get req to agriculture, with user id, retrives distances, returns json

@app.route('/api/user/<id>/agriculture',methods=['GET'])
def job_distances(id):
    distances = get_distances_for_user(id)
    return jsonify(distances)

@app.route('/api/<id>/gigs/',methods=['GET'])
def job_recs(id):
    a = genrecs(id)
    return jsonify(a)
    

if __name__ == '__main__':
    app.run(debug = True,port=8080)
    
