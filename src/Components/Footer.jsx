import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Twitter, Send, Heart, Cross } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      x: 5,
      color: "#FCD34D",
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      color: "#FCD34D",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  const contactItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const quickLinks = ['home', 'about', 'ministries', 'media', 'books', 'events', 'devotional', 'contact'];
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/clfmi', name: 'Facebook' },
    { icon: Youtube, url: 'https://youtube.com/clfmi', name: 'YouTube' },
    { icon: Instagram, url: 'https://instagram.com/clfmi', name: 'Instagram' },
    { icon: Twitter, url: 'https://twitter.com/clfmi', name: 'Twitter' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@clfmi.org', type: 'email' },
    { icon: Phone, text: '+255 123 456 789', type: 'phone' },
    { icon: MapPin, text: 'Dar es Salaam, Tanzania', type: 'location' },
    { icon: MapPin, text: 'Nairobi, Kenya', type: 'location' }
  ];

  return (
    <motion.footer 
      ref={ref}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white py-16 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Cross className="w-24 h-24" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Cross className="w-32 h-32" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center"
                whileHover={{ 
                  rotate: 360,
                  background: 'linear-gradient(135deg, #3B82F6, #1E40AF)'
                }}
                transition={{ duration: 0.8 }}
              >
                <Cross className="w-5 h-5 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CLFMI
              </h3>
            </motion.div>
            <motion.p 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Rooted in Love. Driven by Purpose. Empowered by the Holy Spirit.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-2 mt-4 text-sm text-gray-500"
              variants={itemVariants}
            >
              <span>Spreading love</span>
              <motion.div variants={heartVariants} animate="animate">
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>across nations</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Quick Links</h3>
            <motion.ul 
              className="space-y-3"
              variants={containerVariants}
            >
              {quickLinks.map((page, index) => (
                <motion.li 
                  key={page}
                  variants={linkVariants}
                  whileHover="hover"
                  custom={index}
                >
                  <motion.button
                    onClick={() => setCurrentPage(page)}
                    className="text-gray-400 hover:text-yellow-400 capitalize transition-colors flex items-center space-x-2 group"
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
                      layout
                    />
                    <span>{page}</span>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Contact</h3>
            <motion.ul 
              className="space-y-4 text-gray-400"
              variants={containerVariants}
            >
              {contactInfo.map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-3 group cursor-pointer"
                  variants={contactItemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="p-2 bg-gray-700 rounded-lg group-hover:bg-yellow-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <contact.icon className="w-4 h-4 group-hover:text-white" />
                  </motion.div>
                  <span className="group-hover:text-white transition-colors">
                    {contact.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">Connect With Us</h3>
            
            {/* Social Media */}
            <motion.div 
              className="flex space-x-4 mb-8"
              variants={containerVariants}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-lg text-gray-400 hover:text-yellow-400 hover:bg-yellow-500 transition-all group"
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white" />
                </motion.a>
              ))}
            </motion.div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <motion.form 
                onSubmit={handleNewsletterSubmit}
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex">
                  <motion.input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="flex-1 bg-gray-700 text-white border-none rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-r-lg transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                      />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
                
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm flex items-center space-x-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                    >
                      ✓
                    </motion.div>
                    <span>Thank you for subscribing!</span>
                  </motion.p>
                )}
              </motion.form>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 text-center"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center justify-center space-x-2 text-gray-400"
            whileHover={{ scale: 1.02 }}
          >
            <span>© 2025 CLFMI. Made with</span>
            <motion.div variants={heartVariants} animate="animate">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>for His glory. All rights reserved.</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-center space-x-4 mt-4 text-sm text-gray-500"
            variants={containerVariants}
          >
            <motion.button
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.button>
            <span>•</span>
            <motion.button
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.button>
            <span>•</span>
            <motion.button
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cookie Policy
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;