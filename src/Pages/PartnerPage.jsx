import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Book, Users, Send } from 'lucide-react';

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add form submission logic here (e.g., API call)
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

  const benefits = [
    {
      icon: Heart,
      title: "Make an Impact",
      description: "Your support helps transform lives through our ministries.",
      ariaLabel: "Make an impact benefit"
    },
    {
      icon: Book,
      title: "Exclusive Resources",
      description: "Access special teachings, books, and updates.",
      ariaLabel: "Exclusive resources benefit"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a global network of like-minded believers.",
      ariaLabel: "Community benefit"
    }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "60px 60px"
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
          <Book className="w-full h-full" aria-label="Book icon" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        >
          <Users className="w-full h-full" aria-label="Users icon" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <Heart className="w-4 h-4" aria-label="Partner with us" />
            <span>Partner with Us</span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Become a Partner
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join hands with us to advance{" "}
            <motion.span
              className="inline-block"
              variants={pulseAnimation}
              animate="animate"
            >
              God's kingdom
            </motion.span>{" "}
            and impact lives globally
          </motion.p>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-800 mb-6"
              variants={itemVariants}
            >
              Why Partner with CLFMI?
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              As a partner, you’ll play a vital role in supporting our mission to proclaim the Gospel, equip leaders, and serve communities.
            </motion.p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow-xl p-6 text-center transform-gpu"
              >
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" aria-label={benefit.ariaLabel} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Form Section */}
      <motion.section
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-6 text-center"
              variants={itemVariants}
            >
              Join as a Partner
            </motion.h2>
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                  aria-label="Full name input"
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
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                  required
                  aria-label="Email input"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                  Message (Optional)
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Why do you want to partner with us?"
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 resize-none"
                  rows="4"
                  whileFocus={{ scale: 1.02 }}
                  aria-label="Message input"
                />
              </motion.div>
              <motion.button
                onClick={handleSubmit}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-5 rounded-full font-bold text-lg shadow-lg flex items-center justify-center space-x-3 transition-colors"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <Send className="w-6 h-6" aria-label="Submit form" />
                <span>Become a Partner</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PartnerPage;