import User from "../models/user.model.js";

export const getUsers = async (req,res,next)=>{
  try {
    const users = await User.find();
    res.status(200).json({
      sucess:true,
      data:users
    })
  }catch(error){
    next(error);
  }
}

export const getUser = async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id).select('-password');
    if(!user){
      const error = new error('user not found');
      error.statusCode=404
      throw
    }
    
    res.status(200).json({
      sucess:true,
      data:user
    })
  }catch(error){
    next(error);
  }
}









