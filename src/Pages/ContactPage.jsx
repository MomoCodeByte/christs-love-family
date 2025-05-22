import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation variants (aligned with EventsPage)
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

  const contactItems = [
    { icon: Mail, text: "info@clfmi.org", label: "Email", ariaLabel: "Contact via email" },
    { icon: Phone, text: "+255 123 456 789", label: "Phone", ariaLabel: "Contact via phone" },
    { icon: MapPin, text: "Dar es Salaam, Tanzania", label: "Location", ariaLabel: "Dar es Salaam office location" },
    { icon: MapPin, text: "Nairobi, Kenya", label: "Location", ariaLabel: "Nairobi office location" }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background Pattern (aligned with EventsPage) */}
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
          <Calendar className="w-full h-full" aria-label="Calendar icon" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Clock className="w-full h-full" aria-label="Clock icon" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        >
          <MapPin className="w-full h-full" aria-label="Location icon" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <Mail className="w-4 h-4" aria-label="Contact Us" />
            <span>Contact Us</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Reach out to us for{" "}
            <motion.span
              className="inline-block"
              variants={pulseAnimation}
              animate="animate"
            >
              inquiries, prayer requests
            </motion.span>
            , or to get involved in our mission
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Contact Form */}
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu"
            >
              <div className="p-8 lg:p-10">
                <motion.div
                  className="flex items-center mb-8"
                  variants={itemVariants}
                >
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Send className="w-8 h-8 text-teal-600" aria-label="Send message icon" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Send Message
                  </h2>
                </motion.div>
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
                      placeholder="Enter your full name"
                      className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      required
                      aria-label="Full name input"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                      required
                      aria-label="Email address input"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-700 font-semibold mb-3 text-sm uppercase tracking-wider">
                      Your Message
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                      rows="6"
                      whileFocus={{ scale: 1.02 }}
                      required
                      aria-label="Message input"
                    />
                  </motion.div>
                  <motion.button
                    onClick={handleSubmit}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-5 rounded-full font-bold text-lg shadow-lg flex items-center justify-center space-x-3 transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <Send className="w-6 h-6" aria-label="Send message" />
                    <span>Send Message</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact Information & Office Hours */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform-gpu"
              >
                <div className="p-8 lg:p-10">
                  <motion.h2
                    className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8"
                    variants={itemVariants}
                  >
                    Contact Information
                  </motion.h2>
                  <div className="space-y-6">
                    {contactItems.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-5 p-4 rounded-xl hover:bg-teal-50 transition-colors duration-300 cursor-pointer"
                        variants={itemVariants}
                      >
                        <div className="bg-teal-100 p-4 rounded-full transition-colors duration-300 hover:bg-teal-200">
                          <item.icon className="w-6 h-6 text-teal-600" aria-label={item.ariaLabel} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                            {item.label}
                          </p>
                          <p className="text-gray-800 font-semibold text-lg">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Office Hours Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-teal-400 via-teal-500 to-teal-700 text-white rounded-2xl shadow-xl overflow-hidden transform-gpu"
              >
                <div className="p-8 lg:p-10">
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold mb-6"
                    variants={itemVariants}
                  >
                    Office Hours
                  </motion.h3>
                  <motion.div
                    className="space-y-4"
                    variants={itemVariants}
                  >
                    <div className="flex justify-between items-center py-2 border-b border-teal-500 border-opacity-30">
                      <span className="font-medium">Monday - Friday</span>
                      <span className="text-teal-100">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-teal-500 border-opacity-30">
                      <span className="font-medium">Saturday</span>
                      <span className="text-teal-100">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Sunday</span>
                      <span className="text-teal-100">Full Time</span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="mt-8 pt-6 border-t border-teal-500 border-opacity-30"
                    variants={itemVariants}
                  >
                    <p className="text-teal-100 leading-relaxed">
                      We typically respond to messages within 24 hours during business days. 
                      For urgent matters, please call us directly.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
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
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors inline-flex items-center space-x-3"
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join Our Community</span>
              <Send className="w-5 h-5" aria-label="Join community" />
            </motion.button>
            <motion.p 
              className="text-gray-600 mt-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Want to learn more about our mission? Reach out today!
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;