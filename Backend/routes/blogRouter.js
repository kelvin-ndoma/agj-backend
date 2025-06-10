import express from 'express';
import adminAuth from '../middleware/adminAuth.js';
import upload from '../middleware/multer.js';
import {
  createBlog,
  listBlogs,
  getBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogsController.js';

const router = express.Router();

// Upload handler: expects image and authorImg as files
const uploadFields = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'authorImg', maxCount: 1 }
]);

// Create a new blog (admin or superadmin)
router.post('/', adminAuth, uploadFields, createBlog);

// Get all blogs
router.get('/', listBlogs);

// Get single blog by id
router.get('/:id', getBlog);

// Update blog by id (admin or superadmin)
router.put('/:id', adminAuth, uploadFields, updateBlog);

// Delete blog by id (admin or superadmin)
router.delete('/:id', adminAuth, deleteBlog);

export default router;
