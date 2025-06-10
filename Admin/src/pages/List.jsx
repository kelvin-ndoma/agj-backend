import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const List = ({ token }) => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [expandedDescriptions, setExpandedDescriptions] = useState({})
  const navigate = useNavigate()

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.data.success) {
        setBlogs(response.data.blogs)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error fetching blog list:', error)
      toast.error(error.response?.data?.message || 'Failed to fetch blogs')
    } finally {
      setLoading(false)
    }
  }

  const deleteBlog = async (id) => {
    try {
      if (!window.confirm('Are you sure you want to delete this blog?')) return
      
      const response = await axios.delete(`${backendUrl}/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (response.data.success) {
        toast.success('Blog deleted successfully')
        await fetchBlogs()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error deleting blog:', error)
      toast.error(error.response?.data?.message || 'Failed to delete blog')
    }
  }

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const truncateDescription = (text, length = 100) => {
    return text.length > length ? `${text.substring(0, length)}...` : text
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading blogs...</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <img src={assets.empty_box} alt="No blogs" className="w-20 mb-4" />
          <p>No blogs found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border">Image</th>
                  <th className="p-3 border">Title</th>
                  <th className="p-3 border">Description</th>
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Author</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="border-b hover:bg-gray-50">
                    <td className="p-3 border">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="p-3 border font-medium">{blog.title}</td>
                    <td className="p-3 border text-sm text-gray-600">
                      <div 
                        onClick={() => toggleDescription(blog._id)}
                        className="cursor-pointer"
                      >
                        {expandedDescriptions[blog._id] 
                          ? blog.description 
                          : truncateDescription(blog.description)}
                        {blog.description.length > 100 && (
                          <span className="text-blue-500 ml-1">
                            {expandedDescriptions[blog._id] ? 'Show less' : 'Show more'}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 border capitalize">{blog.category}</td>
                    <td className="p-3 border">
                      <div className="flex items-center gap-2">
                        <img 
                          src={blog.authorImg} 
                          alt={blog.author} 
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        {blog.author}
                      </div>
                    </td>
                    <td className="p-3 border">
                      {new Date(blog.date).toLocaleDateString()}
                    </td>
                    <td className="p-3 border text-center">
                      <div className="flex justify-center gap-3">
                        <button 
                          onClick={() => navigate(`/edit/${blog._id}`)}
                          className="text-blue-500 hover:text-blue-700 p-1"
                          title="Edit"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => deleteBlog(blog._id)}
                          className="text-red-500 hover:text-red-700 p-1"
                          title="Delete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile List View */}
          <div className="md:hidden space-y-4">
            {blogs.map((blog) => (
              <div key={blog._id} className="border rounded-lg p-4">
                <div className="flex gap-4 mb-3">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{blog.title}</h3>
                    <p className="text-sm text-gray-500 capitalize mb-2">{blog.category}</p>
                    <div 
                      onClick={() => toggleDescription(blog._id)}
                      className="text-sm text-gray-600 mb-2 cursor-pointer"
                    >
                      {expandedDescriptions[blog._id] 
                        ? blog.description 
                        : truncateDescription(blog.description)}
                      {blog.description.length > 100 && (
                        <span className="text-blue-500 ml-1">
                          {expandedDescriptions[blog._id] ? 'Show less' : 'Show more'}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <img 
                        src={blog.authorImg} 
                        alt={blog.author} 
                        className="w-6 h-6 rounded-full object-cover mr-2"
                      />
                      <span className="text-sm">{blog.author}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => navigate(`/edit/${blog._id}`)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => deleteBlog(blog._id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default List