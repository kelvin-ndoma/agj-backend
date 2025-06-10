import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const EditBlog = ({ token }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Technology',
    author: '',
    image: null,
    authorImg: null,
    currentImage: '',
    currentAuthorImg: ''
  })

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/blogs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.data.success) {
          const blog = response.data.blog
          setFormData({
            title: blog.title,
            description: blog.description,
            category: blog.category,
            author: blog.author,
            image: null,
            authorImg: null,
            currentImage: blog.image,
            currentAuthorImg: blog.authorImg
          })
        }
      } catch (error) {
        console.error('Error fetching blog:', error)
        toast.error('Failed to load blog data')
        navigate('/list')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [id, token, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('category', formData.category)
      formDataToSend.append('author', formData.author)
      
      if (formData.image) {
        formDataToSend.append('image', formData.image)
      }
      if (formData.authorImg) {
        formDataToSend.append('authorImg', formData.authorImg)
      }

      const response = await axios.put(`${backendUrl}/api/blogs/${id}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })

      if (response.data.success) {
        toast.success('Blog updated successfully')
        navigate('/list')
      }
    } catch (error) {
      console.error('Error updating blog:', error)
      toast.error(error.response?.data?.message || 'Failed to update blog')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading blog data...</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-3xl">
        {/* Blog Image */}
        <div>
          <label className="block mb-2 font-medium">Blog Image</label>
          <div className="flex items-center gap-4">
            <label htmlFor="image" className="cursor-pointer">
              <img 
                className="w-40 h-40 object-cover border rounded-lg" 
                src={
                  formData.image 
                    ? URL.createObjectURL(formData.image) 
                    : formData.currentImage || assets.upload_area
                } 
                alt="Blog thumbnail" 
              />
              <input 
                onChange={handleFileChange}
                type="file" 
                id="image" 
                name="image"
                accept="image/*"
                className="hidden" 
              />
            </label>
            {formData.currentImage && !formData.image && (
              <div className="text-sm text-gray-500">
                <p>Current image:</p>
                <img 
                  src={formData.currentImage} 
                  alt="Current blog" 
                  className="w-20 h-20 object-cover mt-1"
                />
              </div>
            )}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">Title*</label>
          <input 
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            placeholder="Blog title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description*</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Blog content"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-2 font-medium">Category*</label>
          <select 
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Technology">Technology</option>
            <option value="Startup">Startup</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="General">General</option>
          </select>
        </div>

        {/* Author */}
        <div>
          <label className="block mb-2 font-medium">Author Name*</label>
          <input 
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" 
            placeholder="Author name"
            required
          />
        </div>

        {/* Author Image */}
        <div>
          <label className="block mb-2 font-medium">Author Image</label>
          <div className="flex items-center gap-4">
            <label htmlFor="authorImg" className="cursor-pointer">
              <img 
                className="w-40 h-40 object-cover border rounded-lg" 
                src={
                  formData.authorImg 
                    ? URL.createObjectURL(formData.authorImg) 
                    : formData.currentAuthorImg || assets.upload_area
                } 
                alt="Author" 
              />
              <input 
                onChange={handleFileChange}
                type="file" 
                id="authorImg" 
                name="authorImg"
                accept="image/*"
                className="hidden" 
              />
            </label>
            {formData.currentAuthorImg && !formData.authorImg && (
              <div className="text-sm text-gray-500">
                <p>Current author image:</p>
                <img 
                  src={formData.currentAuthorImg} 
                  alt="Current author" 
                  className="w-20 h-20 object-cover mt-1 rounded-full"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            type="submit" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Update Blog
          </button>
          <button 
            type="button"
            onClick={() => navigate('/list')}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditBlog