import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../config/mongodb.js';
import connectCloudinary from '../config/cloudinary.js';
import userRouter from '../routes/userRouter.js';
import blogRouter from '../routes/blogRouter.js';

// Create express app
const app = express();

// DB + Cloudinary setup
await connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRouter);
app.use('/api/blogs', blogRouter);

app.get('/', (req, res) => {
  res.send('API is running from Vercel 🎉');
});

export default app;
