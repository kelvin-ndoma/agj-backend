import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../config/mongodb.js';
import connectCloudinary from '../config/cloudinary.js';
import userRouter from '../routes/userRouter.js';
import blogRouter from '../routes/blogRouter.js';

const app = express();

await connectDB();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/blogs', blogRouter);

app.get('/', (req, res) => {
  res.send('✅ API running from Vercel');
});

export default app; // DO NOT use app.listen()
