import React from 'react';
import { Link } from 'react-router-dom';  // Import Link
import { textContent } from './constants'
import Button from './Button';

function HeroSection() {
  return (
    <div className="bg-custom-image bg-cover bg-center text-white py-10 md:py-20"
      style={{
        backgroundColor: "rgba(49, 2, 25, 1)",
        backgroundBlendMode: "overlay",
      }}>
      <header className="container mx-auto px-4 flex justify-between items-center">
      </header>
      <div className="container mx-auto px-4 md:px-8 py-16 md:flex items-center justify-between">
        <div className="md:w-1/2 lg:w-5/12 text-center md:text-left">

          <p className="text-xl text-white/90 leading-relaxed mb-8">
            {textContent}
          </p>
          <div className="flex justify-start items-start">
            {/* Use Link instead of href */}
            <Link to="/about">
              <Button buttons={[{ label: "read more", variant: "primary" }]} />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-7/12 flex justify-center mt-10 md:mt-0">
          <div className="relative w-80 h-60 md:w-96 md:h-72">
            <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] rounded-full opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold opacity-50">AGJK</div>
          </div>
        </div>
      </div>
      {/* Angled bottom section */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[rgba(0,0,0,0.7)] transform skew-y-[-4deg] origin-bottom pointer-events-none"></div>
      </div>
    </div>
  );
}

export default HeroSection;