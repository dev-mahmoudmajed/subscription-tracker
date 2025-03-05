import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    minLength:true,
    maxLength:true
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength:6,
  },
}, {timestamps: true});


const User = mongoose.model('User', userSchema);

export default User;

// {name: 'John Doe', email: 'jhondoe@gmail.com', password: 'password'}

// User.create({name: 'John Doe', email: 'jhondoe@gmail.com', password: 'password'})
















