import mongoose from "mongoose"
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env.js'  // Fixed typo

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined. Please check your environment variables.');
}

export const signUp = async(req,res,next)=>{
  const session = await mongoose.startSession();
  session.startTransaction();
  //----
  try {
    const { name, email, password } = req.body;

    // Check if a user already exists
    const existingUser = await User.findOne({ email });

    if(existingUser) {
      const error = new Error('User already exists');
      error.statusCode = 409;
      throw error;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //after hashing password
    const newUsers = await User.create([{ name, email, password: hashedPassword }], { session });
    const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    // check if user created succesfully
    await session.commitTransaction();
    session.endSession();
    // back with response
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        token,
        user: newUsers[0],
      }
    })
    //error handling 
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
}


export const signIn = async(req,res,next)=>{
  //Impelement signin logic
  try{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // Check if user exists
    if (!user) {
      const error = new Error('User not found');
      error.statusCode = 404;
      throw error;
    }
    //now check password if correct 
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      const error = new Error('Invalid password');
      error.statusCode = 401;
      throw error;
    }
    //generate token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    //back with response
    res.status(200).json({
      success: true,
      message: 'User signed in successfully',
      data: {
        token,
        user,
      }
    });
  }catch(error){
    next(error);
    
  }

}

export const signOut = async(req,res,next)=>{
  //Impelement signup logic

}














