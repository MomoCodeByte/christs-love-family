import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = ({ slides, currentSlide, setCurrentSlide }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.8 },
        scale: { duration: 1.2 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4 }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8 + (index * 0.1),
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const indicatorVariants = {
    inactive: {
      scale: 1,
      opacity: 0.5,
      backgroundColor: "rgba(255, 255, 255, 0.5)"
    },
    active: {
      scale: 1.2,
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 1)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30
      }
    },
    hover: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      <AnimatePresence mode="wait" custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <motion.img
            src={slides[currentSlide]?.image}
            alt={slides[currentSlide]?.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Animated Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
          />
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 8}%`,
              }}
              variants={particleVariants}
              animate="animate"
              transition={{ delay: i * 0.5 }}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
        <div className="max-w-4xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Title with Vibrant Animation */}
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  transition: {
                    duration: 1,
                    delay: 0.2,
                    ease: "easeOut"
                  }
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {slides[currentSlide]?.title || 'Loading...'}
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl mb-8 opacity-90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.5
                  }
                }}
              >
                {slides[currentSlide]?.subtitle || 'Loading...'}
              </motion.p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  custom={0}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {slides[currentSlide]?.cta || 'Action'}
                  </motion.span>
                  
                  {/* Button Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{
                      x: '100%',
                      transition: { duration: 0.6 }
                    }}
                  />
                </motion.button>

                <motion.button 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all backdrop-blur-sm"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  custom={1}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { delay: 1, duration: 0.6 }
        }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-3 h-3 rounded-full backdrop-blur-sm"
            variants={indicatorVariants}
            initial="inactive"
            animate={index === currentSlide ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            {/* Active indicator glow */}
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 rounded-full bg-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ width: "0%" }}
        animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <span className="text-sm">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;