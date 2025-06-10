import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ThematicAreaCard = ({ join }) => {
    return (
        <div className='py-4 md:py-6 relative max-w-7xl mx-auto px-4 md:px-8 mt-2 rounded-2xl shadow-2xl shadow-black-600/90 border-t-6 border-[#640433]'>
            <p className="text-xl md:text-4xl font-bold text-[#640433] mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-8">Our Pillars</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4 items-center">
                <div className="absolute top-0 right-0 ">
                    <svg className="w-32 h-32 text-[#640433]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                    </svg>
                </div>
                {join.map((join, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center space-y-2 p-4 border-l-6 border-[#640433] rounded-2xl" 
                    >
                        <div className="flex justify-center w-full"> 
                            {join.icon && <img src={join.icon} alt={join.title} className="w-12 h-12" />}
                        </div>

                        {/* Text Section */}
                        <div className='space-y-4 md:space-y-6'>
                            <h3 className="text-xl font-semibold mb-1 text-start">{join.title}</h3>
                            <p className="text-sm opacity-75 text-start">{join.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* Learn More Button */}
            <div className="flex justify-center mt-6">
                <Link 
                    to="/about" 
                    className="px-6 py-3 bg-[#640433] text-white rounded-lg hover:bg-[#8a0a4a] transition-colors duration-300 font-medium"
                >
                    Learn more about us
                </Link>
            </div>
        </div>
    );
};

ThematicAreaCard.propTypes = {
    join: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ThematicAreaCard;