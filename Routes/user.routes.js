import {Router} from "express";

const userRouter = Router();

userRouter.get('/',(req,res) => {
  res.send({title: 'GET all users'});
});

userRouter.get('/:id',(req,res) => {
  res.send({title: `GET user Details`});
});

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








