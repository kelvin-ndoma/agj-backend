import React, { useState, useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const Gallery = () => {
  const imageCount = 24;
  const images = Array.from({ length: imageCount }, (_, i) => ({
    src: `/src/gallery/${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
    id: `img-${i + 1}`
  }));

  // State
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeout = useRef(null);
  const modalRef = useRef(null);

  // Prevents scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overscrollBehavior = 'contain';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overscrollBehavior = '';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overscrollBehavior = '';
    };
  }, [selectedImage]);

  // Handle keyboard navigation
  const navigateImages = useCallback((direction) => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex]);
    resetControlsTimeout();
  }, [selectedImage, images]);

  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;

    switch (e.key) {
      case 'Escape':
        setSelectedImage(null);
        break;
      case 'ArrowRight':
        navigateImages('next');
        break;
      case 'ArrowLeft':
        navigateImages('prev');
        break;
      case 'f':
        setIsFullscreen(!isFullscreen);
        break;
      default:
        break;
    }
  }, [selectedImage, navigateImages, isFullscreen]);

  // Fullscreen handling
  const toggleFullscreen = () => {
    if (!document.fullscreenElement && modalRef.current) {
      modalRef.current.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
    resetControlsTimeout();
  };

  // Controls visibility timeout
  const resetControlsTimeout = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(controlsTimeout.current);
    };
  }, [handleKeyDown]);

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigateImages('next'),
    onSwipedRight: () => navigateImages('prev'),
    trackMouse: true
  });

  // Image loading handler
  const handleImageLoad = (id) => {
    setLoadedImages(prev => [...prev, id]);
  };

  // Motion variants
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const controlsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Gallery | AGJK - Visual Stories from Grassroots Journalism in Kenya</title>
        <meta
          name="description"
          content="Explore our gallery of powerful images and moments captured from AGJK's grassroots journalism activities, training sessions, community outreach, and events across Kenya."
        />
        <meta
          name="keywords"
          content="AGJK Kenya gallery, grassroots journalism photos, media gallery Kenya, AGJK events, journalist training pictures, community journalism visuals"
        />
        <meta property="og:title" content="Gallery | AGJK Kenya" />
        <meta
          property="og:description"
          content="A collection of impactful images showcasing AGJK’s work empowering grassroots journalists throughout Kenya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.agjkenya.com/gallery" />
        <meta property="og:image" content="https://www.agjkenya.com/images/og-gallery.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | AGJK Kenya" />
        <meta
          name="twitter:description"
          content="See AGJK in action through our gallery – a visual journey of grassroots journalism across Kenya."
        />
        <meta name="twitter:image" content="https://www.agjkenya.com/images/twitter-gallery.jpg" />
        <link rel="canonical" href="https://www.agjkenya.com/gallery" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-3 text-gray-800 ">
          Visual Showcase
        </h2>
        <p className="text-lg  max-w-3xl mx-auto">
          Immerse yourself in our stunning collection.
        </p>
      </motion.div>

      {/* Responsive Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative break-inside-avoid rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
            onClick={() => {
              setSelectedImage(image);
              resetControlsTimeout();
            }}
            whileHover={{ scale: 1.02 }}
            layoutId={`image-${image.id}`}
          >
            <div className={`relative aspect-square transition-opacity duration-500 ${loadedImages.includes(image.id) ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoad(image.id)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </span>
              </div>
            </div>
            {!loadedImages.includes(image.id) && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-xl"></div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal for Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            ref={modalRef}
            {...swipeHandlers}
            onMouseMove={resetControlsTimeout}
          >
            {/* Main Image Content */}
            <div className="flex-grow flex items-center justify-center p-4 relative">
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                layoutId={`image-${selectedImage.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                onClick={() => navigateImages('prev')}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all"
                onClick={() => navigateImages('next')}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Controls */}
            <AnimatePresence>
              {showControls && (
                <motion.div
                  className="w-full bg-gradient-to-t from-black/80 to-transparent p-4"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={controlsVariants}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="text-white">
                      {images.findIndex(img => img.id === selectedImage.id) + 1} / {images.length}
                    </div>

                    <div className="flex gap-3">
                      <button
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        onClick={toggleFullscreen}
                        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {isFullscreen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 16L4 20l4-2m10 2l2-4-4 2M4 8l2 4 2-4m12 0l-2 4-2-4" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          )}
                        </svg>
                      </button>

                      <button
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = selectedImage.src;
                          link.download = `image-${selectedImage.id}.jpg`;
                          link.click();
                        }}
                        aria-label="Download image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>

                      <button
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close gallery"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;