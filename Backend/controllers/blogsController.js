import { v2 as cloudinary } from "cloudinary";
import BlogModel from "../models/blogModel.js";

const allowedCategories = ['Technology', 'Startup', 'Lifestyle', 'General'];

// Create a blog
const createBlog = async (req, res) => {
    try {
        const { title, description, category, author } = req.body;

        if (!allowedCategories.includes(category)) {
            return res.status(400).json({ success: false, message: "Invalid category" });
        }

        const imageFile = req.files?.image?.[0];
        const authorImageFile = req.files?.authorImg?.[0];

        if (!imageFile || !authorImageFile) {
            return res.status(400).json({ success: false, message: "Both blog image and author image are required" });
        }

        // Upload both images to Cloudinary
        const uploadedBlogImage = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });

        const uploadedAuthorImage = await cloudinary.uploader.upload(authorImageFile.path, {
            resource_type: "image",
        });

        const blogData = {
            title,
            description,
            category,
            author,
            image: uploadedBlogImage.secure_url,
            authorImg: uploadedAuthorImage.secure_url,
            date: Date.now(),
        };

        const blog = new BlogModel(blogData);
        await blog.save();

        res.status(201).json({ success: true, message: "Blog created successfully", blog });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};
// List all blogs
const listBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find().sort({ date: -1 });
        res.json({ success: true, blogs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Get single blog by ID
const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await BlogModel.findById(id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        res.json({ success: true, blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Update blog
const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, category, author, authorImg } = req.body;

        if (category && !allowedCategories.includes(category)) {
            return res.status(400).json({ success: false, message: "Invalid category" });
        }

        const blog = await BlogModel.findById(id);
        if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

        // Check if image file included for update
        const imageFile = req.files?.image?.[0] || req.file;
        if (imageFile) {
            const uploadedImage = await cloudinary.uploader.upload(imageFile.path, {
                resource_type: "image",
            });
            blog.image = uploadedImage.secure_url;
        }

        // Update other fields if provided
        blog.title = title || blog.title;
        blog.description = description || blog.description;
        blog.category = category || blog.category;
        blog.author = author || blog.author;
        blog.authorImg = authorImg || blog.authorImg;

        await blog.save();

        res.json({ success: true, message: "Blog updated successfully", blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await BlogModel.findById(id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    // Replace blog.remove() with blog.deleteOne()
    await blog.deleteOne();

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message || "Server error" });
  }
};


export { createBlog, listBlogs, getBlog, updateBlog, deleteBlog };
