import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { heroSlides, ministryImpact, sermons, testimonials } from '../data/data';
import HeroSection from '../Components/HeroSection';
import ImpactStat from '../Components/ImpactStat';
import SermonCard from '../Components/SermonCard';
import TestimonialCard from '../Components/TestimonialCard';
import { ArrowRight, Quote, Sparkles, Heart, Users, BookOpen } from 'lucide-react';

const HomePage = ({ currentSlide, setCurrentSlide, testimonialSlide, setTestimonialSlide, setCurrentPage }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Custom hook for intersection observer
  const useScrollAnimation = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, isInView];
  };

  const [impactRef, impactInView] = useScrollAnimation();
  const [founderRef, founderInView] = useScrollAnimation();
  const [sermonsRef, sermonsInView] = useScrollAnimation();
  const [testimonialsRef, testimonialsInView] = useScrollAnimation();
  const [ctaRef, ctaInView] = useScrollAnimation();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with enhanced wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection slides={heroSlides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      </motion.div>

      {/* Ministry Impact Stats */}
      <motion.section
        ref={impactRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={impactInView ? "visible" : "hidden"}
      >
        {/* Background decorative elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-10 left-10 w-32 h-32 border-8 border-blue-300 rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border-6 border-yellow-300 rounded-full" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
              variants={scaleUp}
            >
              <Sparkles className="w-4 h-4" />
              <span>Ministry Impact</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Transforming Lives Across Nations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the incredible impact of God's love through our ministry
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {ministryImpact.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ImpactStat stat={stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        ref={founderRef}
        className="py-20 relative"
        variants={containerVariants}
        initial="hidden"
        animate={founderInView ? "visible" : "hidden"}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft}>
                <motion.div
                  className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6"
                  variants={scaleUp}
                >
                  <Users className="w-4 h-4" />
                  <span>Leadership</span>
                </motion.div>

                <motion.h2 
                  className="text-4xl font-bold text-gray-800 mb-6"
                  variants={itemVariants}
                >
                  Meet Our Founder
                </motion.h2>

                <motion.h3 
                  className="text-2xl font-semibold text-blue-600 mb-4"
                  variants={itemVariants}
                >
                  Conqueror Duncan
                </motion.h3>

                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  variants={itemVariants}
                >
                  A prophetic preacher, author, and seasoned leadership trainer with over a decade 
                  of impactful ministry. As the visionary founder of CLFMI, he carries a burning 
                  passion to see souls saved, leaders equipped, and lives restored.
                </motion.p>

                <motion.p 
                  className="text-gray-600 mb-8 leading-relaxed"
                  variants={itemVariants}
                >
                  His sermons pierce hearts, his leadership seminars ignite purpose, and his books 
                  have transformed countless lives across nations. Through divine grace, he ministers 
                  with a powerful prophetic edge, drawing many to the feet of Jesus.
                </motion.p>

                <motion.button 
                  onClick={() => setCurrentPage('about')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all inline-flex items-center space-x-2 group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                  <motion.div
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </motion.div>

              <motion.div 
                className="relative"
                variants={slideInRight}
              >
                <motion.div
                  className="relative"
                  variants={floatingAnimation}
                  animate="animate"
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                    alt="Conqueror Duncan"
                    className="rounded-lg shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-4 rounded-lg shadow-lg"
                    variants={pulseAnimation}
                    animate="animate"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Quote className="w-8 h-8" />
                  </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Heart className="w-8 h-8 text-blue-600" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Latest Sermons */}
      <motion.section
        ref={sermonsRef}
        className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate={sermonsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
              variants={scaleUp}
            >
              <BookOpen className="w-4 h-4" />
              <span>Spiritual Growth</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Sermons</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be edified through our rich collection of anointed teachings and Spirit-filled messages
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {sermons.slice(0, 4).map((sermon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <SermonCard sermon={sermon} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.button 
              onClick={() => setCurrentPage('media')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Sermons
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        ref={testimonialsRef}
        className="py-20 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
      >
        {/* Background decoration */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-yellow-300 rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-blue-300 rounded-full" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
              variants={scaleUp}
            >
              <Quote className="w-4 h-4" />
              <span>Testimonies</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Life Transformations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from those whose lives have been touched by God's power through our ministry
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative overflow-hidden"
              variants={itemVariants}
            >
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  index === testimonialSlide && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                    >
                      <TestimonialCard
                        testimonial={testimonial}
                        isActive={true}
                      />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </motion.div>

            <motion.div 
              className="flex justify-center mt-8 space-x-2"
              variants={itemVariants}
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setTestimonialSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === testimonialSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              variants={scaleUp}
            >
              <Sparkles className="w-4 h-4" />
              <span>Join the Movement</span>
            </motion.div>

            <motion.h2 
              className="text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Join the Movement
            </motion.h2>

            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Be part of something greater. Whether through giving, partnering, or joining our programs, 
              help us transform lives and advance God's kingdom.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.button 
                onClick={() => setCurrentPage('partner')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🤝 Become a Partner
              </motion.button>

              <motion.button 
                onClick={() => setCurrentPage('ministries')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium text-lg transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🔍 Explore Ministries
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-12 h-12 bg-white/10 rounded-full"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-20 w-8 h-8 bg-yellow-400/20 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
      </motion.section>
    </div>
  );
};

export default HomePage;