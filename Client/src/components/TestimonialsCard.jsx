import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = () => (
  <div className="w-full overflow-hidden">
    <motion.div 
      className="w-full bg-[#640433] text-white px-4 py-12 md:px-8 md:py-16 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-none mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-4 text-white text-8xl opacity-10 font-serif">"</div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white opacity-90">
            What people say?
          </h2>
          
          <blockquote className="mb-8 w-full">
            <p className="text-2xl md:text-4xl font-light leading-tight md:leading-snug italic max-w-4xl mx-auto">
              "Equity is not about equality for women but rather an equal platform for all players"
            </p>
          </blockquote>
          
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#640433] font-bold">
              BW
            </div>
            <div>
              <p className="font-bold text-lg">Bev Watkinson</p>
              <p className="text-white opacity-80">Equity Advocate</p>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-0 right-4 text-white text-8xl opacity-10 font-serif">"</div>
      </div>
    </motion.div>
  </div>
);

export default TestimonialCard;