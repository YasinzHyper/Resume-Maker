// MongoDB initialization script for Resume Maker
// This script will be executed when the MongoDB container starts for the first time

db = db.getSiblingDB('resume_maker');

// Create a user for the resume_maker database
db.createUser({
  user: 'resume_user',
  pwd: 'resume_password',
  roles: [
    {
      role: 'readWrite',
      db: 'resume_maker'
    }
  ]
});

// Create initial collections if needed
db.createCollection('users');

// Insert a welcome document (optional)
db.users.insertOne({
  _id: ObjectId(),
  message: 'Resume Maker Database Initialized Successfully!',
  createdAt: new Date()
});

print('Resume Maker database initialization completed!');