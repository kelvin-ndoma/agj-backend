// Client/src/components/BlogList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogItem from './BlogItem';

const BlogList = () => {
  const [menu, setMenu] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/blogs');
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((item) =>
    menu === 'All' ? true : item.category === menu
  );

  if (loading) return <p className="text-center">Loading blogs...</p>;

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        {['All', 'Technology', 'Startup', 'Lifestyle'].map((cat) => (
          <button
            key={cat}
            onClick={() => setMenu(cat)}
            className={
              menu === cat
                ? 'bg-black text-white py-1 px-4 rounded-sm'
                : 'py-1 px-4 rounded-sm border border-black'
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filteredBlogs.map((item) => (
          <BlogItem
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
