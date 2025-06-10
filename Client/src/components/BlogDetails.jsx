import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../bloggy/assets';

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/blogs/${id}`);
        setData(res.data.blog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 px-5 sm:px-12 bg-gradient-to-b from-purple-900 to-pink-800 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-8">{data.title}</h1>
          <div className="flex flex-col items-center">
            <div className="mb-4 w-20 h-20 rounded-full border-4 border-white overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                src={data.authorImg} 
                alt="author" 
              />
            </div>
            <p className="text-lg font-medium text-pink-200">{data.author}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-5 sm:px-6 py-12 -mt-10 bg-white rounded-t-3xl shadow-xl">
        <article className="prose prose-lg sm:prose-xl max-w-none">
          <figure className="mb-12">
            <img 
              src={data.image} 
              alt="blogs image" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </figure>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-purple-900 mb-6">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{data.description}</p>
          </section>

          {data.content && data.content.map((section, index) => (
            <section key={index} className="mb-10">
              {section.heading && (
                <h3 className="text-2xl font-semibold text-purple-800 mb-4">{section.heading}</h3>
              )}
              {section.body && (
                <p className="text-gray-700 leading-relaxed mb-6">{section.body}</p>
              )}
            </section>
          ))}

          <section className="mt-12">
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Conclusion</h3>
            <p className="text-gray-700 leading-relaxed">{data.conclusion}</p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default BlogDetails;