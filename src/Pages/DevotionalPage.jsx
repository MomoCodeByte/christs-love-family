import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Star, Mail, ArrowRight } from 'lucide-react';
import { devotions } from '../data/data';
import DevotionalCard from '../Components/DevotionalCard';

const DevotionalPage = () => {
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

  const slideInUp = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInScale = {
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

  const cardVariants = {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 text-white/10"
          variants={floatingAnimation}
          animate="animate"
        >
          <BookOpen className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Heart className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        >
          <Star className="w-full h-full" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <BookOpen className="w-4 h-4" aria-label="Daily Devotionals" />
            <span>Daily Devotionals</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Daily Devotionals
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Enhance your day with{" "}
            <motion.span
              className="inline-block"
              variants={pulseAnimation}
              animate="animate"
            >
              verses, reflections
            </motion.span>
            , and prayers from CLFMI
          </motion.p>
        </div>
      </motion.section>

      {/* Devotionals Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {devotions.map((devotion, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="transform-gpu"
              >
                <DevotionalCard devotion={devotion} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Subscribe Section */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors inline-flex items-center space-x-3"
              whileHover={cardHover.hover}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Subscribe to Devotionals</span>
              <ArrowRight className="w-5 h-5" aria-label="Subscribe" />
            </motion.button>
            <motion.p 
              className="text-gray-600 mt-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get daily spiritual nourishment delivered to your inbox
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DevotionalPage;