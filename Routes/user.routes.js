import {Router} from "express";
const userRouter = Router();
import { getUser,getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
userRouter.get('/',getUsers);

userRouter.get('/:id',authorize,getUser);

userRouter.post('/',(req,res) => {
  res.send({title: `Create New user`});
});
userRouter.put('/:id',(req,res) => {
  res.send({title: `update user Details`});
});
userRouter.delete('/:id',(req,res) => {
  res.send({title: `Delete user `});
});

export default userRouter;








