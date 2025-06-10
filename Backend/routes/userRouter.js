import express from 'express';
import {
    loginUser,
    registerUser,
    logoutUser
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/login', loginUser);        // Admin + Super Admin login
userRouter.post('/logout', logoutUser);      // Just clears token on frontend
userRouter.post('/register', registerUser);  // Only Super Admin can create admins

export default userRouter;
