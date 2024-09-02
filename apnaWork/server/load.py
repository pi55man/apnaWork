from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy_utils import database_exists, create_database
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import OperationalError
from sqlalchemy import text
import pandas as pd
import uuid
from sqlalchemy.dialects.postgresql import UUID

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:chauhan@localhost/freelance'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(80), unique=True,nullable=False)
    skills = db.Column(db.String(1200),nullable=True)
    totalJobs = db.Column(db.Integer,nullable=True)
    latitude = db.Column(db.Double,nullable=True)
    longitude = db.Column(db.Double,nullable=True)

def load_csv():
    df = pd.read_csv('users.csv').head(50)
    for index,rows in df.iterrows():
        print(f"Processing row {index}: {rows}") 
        user = User(
            name=rows['name'][:80] ,
            skills=rows['skills'][:1200] ,
            totalJobs = rows['totalJobs'],
            latitude = rows['latitude'] ,
            longitude = rows['longitude'])
        db.session.add(user)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        load_csv()
        print("data loaded success")