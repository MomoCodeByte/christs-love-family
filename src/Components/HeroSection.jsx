import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';

const HeroSection = ({ slides, currentSlide, setCurrentSlide }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [particles, setParticles] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Mouse position for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  // Validate props
  if (!slides || !Array.isArray(slides) || slides.length === 0) {
    console.error('Invalid slides prop:', slides);
    return <div className="h-screen bg-black text-white flex items-center justify-center">No slides available</div>;
  }

  // Ensure currentSlide is within bounds
  useEffect(() => {
    if (currentSlide < 0 || currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slides, setCurrentSlide]);

  // Generate particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: ['#60A5FA', '#A78BFA', '#F472B6', '#34D399'][Math.floor(Math.random() * 4)],
        phase: Math.random() * Math.PI * 2,
        frequency: Math.random() * 0.02 + 0.01,
      }));
      setParticles(newParticles);
    };

    if (dimensions.width && dimensions.height) {
      generateParticles();
    }
  }, [dimensions]);

  // Handle resize and mouse move with debouncing
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    const handleMouseMove = debounce((e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }
    }, 16);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Canvas-based particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dimensions.width || !dimensions.height) return;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        const time = Date.now();
        const x = particle.x + Math.sin(time * particle.frequency + particle.phase) * 50;
        const y = particle.y + Math.cos(time * particle.frequency * 0.7 + particle.phase) * 30;
        const opacity = particle.opacity * (0.5 + 0.5 * Math.sin(time * 0.001 + particle.phase));
        const scale = 1 + 0.3 * Math.sin(time * 0.002 + particle.phase);

        ctx.beginPath();
        ctx.arc(x, y, particle.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(draw);
  }, [particles, dimensions]);

  // Simplified slide transition variants
  const quantumSlideVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 0.8,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 1.2,
      x: direction < 0 ? 100 : -100,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    }),
  };

  // Simplified image variants
  const holographicImageVariants = {
    initial: { opacity: 0, scale: 1.2 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    glitch: {
      x: [0, -5, 5, 0],
      transition: { duration: 0.5, times: [0, 0.3, 0.7, 1] },
    },
  };

  // Content variants
  const prismaticContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 20 },
    },
  };

  // Button variants
  const neuralButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15, delay: index * 0.2 },
    }),
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 400, damping: 10 } },
    tap: { scale: 0.9, transition: { duration: 0.1 } },
  };

  // Dot indicator variants
  const quantumDotVariants = {
    inactive: { scale: 1, opacity: 0.5, backgroundColor: 'rgba(255, 255, 255, 0.3)' },
    active: {
      scale: 1.5,
      opacity: 1,
      backgroundColor: '#60A5FA',
      transition: { duration: 0.5 },
    },
    hover: { scale: 2, transition: { type: 'spring', stiffness: 300 } },
  };

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 300);
      }
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative h-screen bg-black"
      style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Holographic Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167, 139, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          x: useTransform(springX, (x) => (x - 0.5) * 20),
          y: useTransform(springY, (y) => (y - 0.5) * 20),
        }}
      />

      {/* Slide Transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={quantumSlideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-10"
        >
          <motion.img
            src={slides[currentSlide]?.image || 'https://via.placeholder.com/1920x1080'}
            alt={slides[currentSlide]?.title || 'Slide'}
            onError={(e) => {
              console.error(`Failed to load image: ${slides[currentSlide]?.image}`);
              e.target.src = 'https://via.placeholder.com/1920x1080';
            }}
            className="w-full h-full object-cover"
            variants={holographicImageVariants}
            initial="initial"
            animate={glitchActive ? 'glitch' : 'animate'}
            whileHover="hover"
            style={{
              x: useTransform(springX, (x) => (x - 0.5) * 50),
              y: useTransform(springY, (y) => (y - 0.5) * 25),
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div className="absolute inset-0 flex items-center justify-center text-center text-white z-20">
        <div className="max-w-4xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={prismaticContentVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="p-12 bg-black/20 backdrop-blur-xl rounded-3xl"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                style={{
                  background: 'linear-gradient(45deg, #60A5FA, #A78BFA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {slides[currentSlide]?.title || 'QUANTUM'}
              </motion.h1>
              <motion.p className="text-xl md:text-2xl mb-8">
                {slides[currentSlide]?.subtitle || 'Experience the Future'}
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 rounded-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400"
                  variants={neuralButtonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  custom={0}
                >
                  {slides[currentSlide]?.cta || 'INITIALIZE'}
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-lg font-bold border-2 border-blue-400 text-blue-400"
                  variants={neuralButtonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  custom={1}
                >
                  EXPLORE
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Dot Indicators */}
      <motion.div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="w-4 h-4 rounded-full"
            variants={quantumDotVariants}
            initial="inactive"
            animate={index === currentSlide ? 'active' : 'inactive'}
            whileHover="hover"
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;