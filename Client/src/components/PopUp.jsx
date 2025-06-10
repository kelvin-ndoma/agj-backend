import React, { useState, useEffect } from 'react';
import conferenceImage from '../gallery/7.jpg'; // Update with your image path

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const eventEndDate = new Date('2025-12-05');

  useEffect(() => {
    const currentDate = new Date();
    if (currentDate > eventEndDate) return;

    const popupShown = sessionStorage.getItem('popupShown');
    
    if (!popupShown) {
      setIsVisible(true);
      sessionStorage.setItem('popupShown', 'true');
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[9999] animate-fadeIn">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-[95%] md:w-[90%] shadow-2xl overflow-hidden flex flex-col md:flex-row"
        style={{ boxShadow: '0 10px 25px rgba(100, 4, 51, 0.5)' }}
      >
        {/* Image Section (Left) */}
        <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
          <img 
            src={conferenceImage} 
            alt="AGJ Kenya Community Conference"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Section (Right) */}
        <div className="w-full md:w-3/5 bg-[#640433] p-6 md:p-8 flex flex-col">
          {/* Metallic accent border */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#c79e6e] to-transparent"></div>
          
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/80 hover:text-white text-2xl transition-all hover:scale-110"
            aria-label="Close popup"
          >
            &times;
          </button>
          
          <div className="relative z-10 text-center space-y-4 h-full flex flex-col justify-between">
            <div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#ffd6e8] uppercase bg-white/10 rounded-full">
                  Event Announcement
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                AGJ Kenya Community Conference 2025
              </h2>
              
              <div className="flex flex-col items-center space-y-3 mt-4">
                <div className="flex items-center text-white/90 bg-white/5 px-4 py-2 rounded-lg w-full max-w-xs">
                  <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg font-medium">1st - 5th December 2025</span>
                </div>
                
                <div className="flex items-center text-white/90 bg-white/5 px-4 py-2 rounded-lg w-full max-w-xs">
                  <svg className="w-5 h-5 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg font-medium">Pride Inn Paradise, Mombasa</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <p className="text-lg font-semibold text-[#ffd6e8] italic">
                  "Community Media Sustainability & Viability"
                </p>
              </div>
              
              <button 
                onClick={handleClose}
                className="mt-6 px-6 py-2 bg-white text-[#640433] font-semibold rounded-full hover:bg-[#f8f8f8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Got It!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;