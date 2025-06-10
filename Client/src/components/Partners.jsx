import React from 'react';
import { motion } from 'framer-motion';
import Pdf from './Pdf';
import Count from './Count';
import Marquee from './Marquee';
import prescence from '../assets/prescence.svg'

const Partners = () => {
  return (
    <div className="bg-white py-10 md:py-20 text-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-2 md:py-8 max-w-7xl mx-auto ">
        {/* First column */}
        <div className="space-y-4 mb-4">
          <div className="flex items-center justify-center md:justify-start gap-10">
            <Count />
            <p>
              <span className="font-semibold pr-2 text-xl">Number of</span>
              <span className="font-bold capitalize text-xl md:text-2xl text-[#640433]">Registered journalists</span>
            </p>
          </div>
          {/* pdf */}
          <Pdf />
        </div>

        {/* Images section */}
        <div className="flex flex-col items-start space-y-4">
          <img className='w-auto h-full img-fluid flex justify-start items-start' src={prescence} alt="presence" />
        </div>
      </div>
      {/* partners marquee */}
      <Marquee />
    </div>
  );
};

export default Partners;