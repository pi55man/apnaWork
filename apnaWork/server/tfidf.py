import pandas as pd
from sklearn.metrics import adjusted_rand_score
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import ENGLISH_STOP_WORDS
import string 
from sqlalchemy import create_engine

engine = create_engine("postgresql://postgres:chauhan@localhost/freelance")



from nltk.stem import PorterStemmer, WordNetLemmatizer #not using yet

job_listings = pd.read_sql_table('jobs',engine)
user_profiles = pd.read_csv('users',engine)

job_listings = job_listings.sample(n=100,random_state=42)
user_profiles = user_profiles.sample(n=100,random_state=50)

job_listings.dropna(subset=['title','description'],inplace=True)
user_profiles.dropna(subset=['skills'],inplace =True)

job_listings['description'] = job_listings['title'].str.lower()
job_listings['description'] = job_listings['description'].str.lower()
user_profiles['skills'] = user_profiles['skills'].str.lower()

translator = str.maketrans('','',string.punctuation)
job_listings['title'] = job_listings['title'].str.translate(translator)
job_listings['description'] = job_listings['description'].str.translate(translator)
user_profiles['skills'] = user_profiles['skills'].str.translate(translator)

stop_words = set(ENGLISH_STOP_WORDS)

def remove_stop_words(text):
    return " ".join([word for word in text.split() if word not in stop_words])

job_listings['title'] = job_listings['title'].apply(remove_stop_words)
job_listings['description'] = job_listings['description'].apply(remove_stop_words)
user_profiles['skills'] = user_profiles['skills'].apply(remove_stop_words)

# stemmer = PorterStemmer()
# lemmatizer = WordNetLemmatizer()
# job_listings['Description'] = job_listings['Description'].apply(lambda text: " ".join([stemmer.stem(word) for word in text.split()]))
# user_profiles['skills'] = user_profiles['skills'].apply(lambda text: " ".join([lemmatizer.lemmatize(word) for word in text.split()]))

job_listings['combined_text'] = job_listings['title'] +" "+job_listings['description']

vectorizer = TfidfVectorizer(stop_words='english')

job_tfidf = vectorizer.fit_transform(job_listings['combined_text'])
user_tfidf = vectorizer.transform(user_profiles['skills'])

similarity_matrix = cosine_similarity(user_tfidf, job_tfidf)
recommendations = {}

for i, user_name in enumerate(user_profiles['name']):
    similar_jobs_indices = similarity_matrix[i].argsort()[-3:][::-1]
    recommended_jobs = job_listings.iloc[similar_jobs_indices]['id'].tolist()

    recommendations[user_name] = recommended_jobs

for user_name,jobs in recommendations.items():
    print(f"user {user_name} is recommended: {jobs}")   