import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
import { DB_URI, NODE_ENV } from '../config/env.js';


if(!DB_URI){
  throw new Error('Please define The MongoDB URI its required ');
  // process.exit(1);
}

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.DB_URI);
    console.log(`MongoDB connected to DB Successfully`);
  }catch (error){
    console.error(`Error: ${error.message}`);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
}

export default connectDB;
