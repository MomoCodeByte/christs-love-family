import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { events } from '../data/data';
import EventCard from '../Components/EventCard';

const EventsPage = () => {
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

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
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
          <Calendar className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Clock className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        >
          <MapPin className="w-full h-full" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <Calendar className="w-4 h-4" aria-label="Upcoming Events" />
            <span>Upcoming Events</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Upcoming Events
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join us for{" "}
            <motion.span
              className="inline-block"
              variants={pulseAnimation}
              animate="animate"
            >
              life-changing conferences
            </motion.span>
            , missions, and revivals that will transform your spiritual journey
          </motion.p>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {events.map((event, index) => (
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
                <EventCard event={event} />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors inline-flex items-center space-x-3"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Register for an Event</span>
              <ArrowRight className="w-5 h-5" aria-label="Navigate to Contact Page" />
            </motion.button>
            <motion.p 
              className="text-gray-600 mt-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Can't find what you're looking for? Contact us for more information
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default EventsPage;