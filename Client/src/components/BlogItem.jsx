import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../bloggy/assets';

const BlogItem = ({ id, title, description, category, image }) => {
  // Truncate description to ~150 characters without cutting words
  const shortDescription =
    description.length > 150
      ? description.substring(0, description.lastIndexOf(' ', 150)) + '...'
      : description;

  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#640433]'>
      <Link to={`/blogs/${id}`}>
        <img src={image} alt={title} width={400} height={400} className="border-b border-black" />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">{category}</p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">{title}</h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">{shortDescription}</p>
        <Link to={`/blogs/${id}`} className="inline-flex items-center py-2 font-semibold text-center">
          Read More <img src={assets.arrow} alt="arrow" width={12} className='ml-2' />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
