import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const DonatePage = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: ''
  });

  const handleAmountSelect = (amount) => {
    setFormData({ ...formData, amount: amount.replace('$', '') });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Donation submitted:', formData);
    // Add actual form submission logic here (e.g., API call)
  };

  // Animation variants (aligned with ContactPage)
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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

  const donationAmounts = ['$10', '$25', '$50', '$100'];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Background Pattern */}
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
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 text-white/10"
          variants={floatingAnimation}
          animate="animate"
        >
          <Heart className="w-full h-full" aria-label="Heart icon" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Heart className="w-full h-full" aria-label="Heart icon" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <Heart className="w-4 h-4" aria-label="Support Our Mission" />
            <span>Support Our Mission</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Support Our Mission
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Your generosity helps us{" "}
            <motion.span
              className="inline-block"
              variants={pulseAnimation}
              animate="animate"
            >
              proclaim the Gospel
            </motion.span>
            , equip leaders, and transform lives
          </motion.p>
        </div>
      </motion.section>

      {/* Donation Form Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 transform-gpu"
          >
            <motion.div
              className="flex items-center justify-center mb-8"
              variants={itemVariants}
            >
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <Heart className="w-8 h-8 text-red-600" aria-label="Donate icon" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Give Now
              </h2>
            </motion.div>
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                  Donation Amount
                </label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {donationAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      className="bg-gray-100 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition-colors font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`Select ${amount} donation`}
                    >
                      {amount}
                    </motion.button>
                  ))}
                </div>
                <motion.input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  placeholder="Custom Amount"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                  aria-label="Custom donation amount input"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                  Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                  aria-label="Name input"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                  Email
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                  aria-label="Email input"
                />
              </motion.div>
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-full font-bold text-lg shadow-lg flex items-center justify-center space-x-3 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
                aria-label="Submit donation"
              >
                <Heart className="w-6 h-6" />
                <span>Donate Now</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default DonatePage;