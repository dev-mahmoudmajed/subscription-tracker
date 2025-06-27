import {Router} from "express";
const authRouter = Router();

// eslint-disable-next-line no-unused-vars
import { signUp,signIn,signOut } from '../controllers/auth.controller.js';

//PATH /api/v1/auth/sign-up
authRouter.post('/sign-up',signUp);
authRouter.post('/sign-in',signIn);
authRouter.post('/sign-out',signOut);

export default authRouter;