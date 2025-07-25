import { JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

/* //! what this middleware do
  1. some one make request to get user details -> Authraize Middleware -> verfiy token 
  -> if token is valid -> get user from database 



*/
const authorize = async (req, res, next) => {
  try {
    let token;
    // Fix typo: 'authraization' -> 'authorization'
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) return res.status(401).json({ message: "Unauthorized, Please login to get access" });

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(401).json({ message: "Unauthorized, Please login to get access" });

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
};
export default authorize;