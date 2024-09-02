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


class Job(db.Model):
    __tablename__ = 'jobs'
    id = db.Column(db.Integer,primary_key = True)
    title = db.Column(db.String(80), unique=False,nullable=False)
    description = db.Column(db.String(1200),nullable=True)
    skills = db.Column(db.String(1200),nullable=True)
    pay = db.Column(db.Integer,nullable=True)
    latitude = db.Column(db.Double,nullable=True)
    longitude = db.Column(db.Double,nullable=True)

def load_csv():
    df = pd.read_csv('freelancing_jobs_dataset.csv').head(200)
    for index,rows in df.iterrows():
        print(f"Processing row {index}: {rows}") 
        job = Job(
            title=rows['title'][:80] ,
            skills=rows['skills'][:1200] ,
            description = rows['description'],
            pay=rows['pay'],
            latitude = rows['latitude'] ,
            longitude = rows['longitude'])
        db.session.add(job)
    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        load_csv()
        print("data loaded success")