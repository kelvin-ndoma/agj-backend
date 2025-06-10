import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import blogRouter from './routes/blogRouter.js';  // Import blog routes

// App Config
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/blogs', blogRouter);  // Add blog routes

app.get('/', (req, res) => {
  res.send('First api in express, fucking working');
});

app.listen(port, () => console.log('server started on port : ' + port));
