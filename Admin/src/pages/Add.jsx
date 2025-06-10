import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from "axios"
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Technology")
  const [authorImg, setAuthorImg] = useState(null)
  const [author, setAuthor] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Validate required fields
      if (!image || !authorImg) {
        throw new Error("Both blog image and author image are required")
      }
      if (!title || !description || !author) {
        throw new Error("Please fill all required fields")
      }

      const formData = new FormData()
      formData.append("image", image)
      formData.append("authorImg", authorImg)
      formData.append("title", title)
      formData.append("description", description)
      formData.append("category", category)
      formData.append("author", author)

      const response = await axios.post(`${backendUrl}/api/blogs`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        toast.success("Blog created successfully")
        // Reset form
        setTitle("")
        setDescription("")
        setAuthor("")
        setImage(null)
        setAuthorImg(null)
      }
    } catch (error) {
      console.error("Error submitting blog:", error)
      toast.error(error.response?.data?.message || error.message || "Failed to create blog")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-6'>Add New Blog</h1>
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-6 max-w-3xl'>
        
        {/* Blog Image */}
        <div>
          <label className='block mb-2 font-medium'>Blog Image*</label>
          <label htmlFor='image' className='cursor-pointer'>
            <img 
              className='w-40 h-40 object-cover border rounded-lg' 
              src={image ? URL.createObjectURL(image) : assets.upload_area} 
              alt='Blog thumbnail' 
            />
            <input 
              onChange={(e) => setImage(e.target.files[0])} 
              type='file' 
              id='image' 
              accept='image/*'
              className='hidden' 
              required
            />
          </label>
        </div>

        {/* Title */}
        <div>
          <label className='block mb-2 font-medium'>Title*</label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            type='text' 
            placeholder='Blog title'
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className='block mb-2 font-medium'>Description*</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full p-3 border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Blog content'
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className='block mb-2 font-medium'>Category*</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="General">General</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label className='block mb-2 font-medium'>Author Name*</label>
          <input 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            type='text' 
            placeholder='Author name'
            required
          />
        </div>

        {/* Author Image */}
        <div>
          <label className='block mb-2 font-medium'>Author Image*</label>
          <label htmlFor='authorImg' className='cursor-pointer'>
            <img 
              className='w-40 h-40 object-cover border rounded-lg' 
              src={authorImg ? URL.createObjectURL(authorImg) : assets.upload_area} 
              alt='Author' 
            />
            <input 
              onChange={(e) => setAuthorImg(e.target.files[0])} 
              type='file' 
              id='authorImg' 
              accept='image/*'
              className='hidden' 
              required
            />
          </label>
        </div>

        <button 
          type='submit' 
          disabled={isSubmitting}
          className='w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400'
        >
          {isSubmitting ? 'Creating...' : 'Create Blog'}
        </button>
      </form>
    </div>
  )
}

export default Add