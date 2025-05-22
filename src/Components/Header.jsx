import React from 'react';
import { Cross, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen, scrollY }) => {
  // Navigation items organized by category
  const mainNavItems = ['home', 'about', 'ministries', 'media'];
  const resourceItems = ['books', 'events', 'devotional'];
  const actionItems = ['contact', 'donate', 'partner'];
  
  // Animation variants
  const headerVariants = {
    transparent: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      backdropFilter: 'blur(0px)',
      boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
    },
    solid: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const navItemVariants = {
    initial: { y: -10, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    initial: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    animate: { 
      opacity: 1,
      height: 'auto',
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      className="fixed w-full z-50 transition-all duration-300"
      variants={headerVariants}
      animate={scrollY > 50 ? 'solid' : 'transparent'}
      initial="transparent"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ 
                background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
              }}
            >
              <Cross className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <motion.h1 
                className={`font-bold text-xl transition-colors ${
                  scrollY > 50 ? 'text-gray-800' : 'text-white'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                CLFMI
              </motion.h1>
              <motion.p 
                className={`text-sm transition-colors ${
                  scrollY > 50 ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                Christ's Love Family
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {mainNavItems.map((page, index) => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 font-medium capitalize rounded-lg transition-all ${
                    currentPage === page
                      ? (scrollY > 50 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-yellow-400 bg-white/10')
                      : (scrollY > 50 
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                          : 'text-white hover:text-yellow-400 hover:bg-white/10')
                  }`}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className={`w-px h-6 mx-2 ${
              scrollY > 50 ? 'bg-gray-300' : 'bg-white/30'
            }`} />

            {/* Resources */}
            <div className="flex items-center space-x-1">
              {resourceItems.map((page, index) => (
                <motion.button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 font-medium capitalize rounded-lg transition-all ${
                    currentPage === page
                      ? (scrollY > 50 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-yellow-400 bg-white/10')
                      : (scrollY > 50 
                          ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                          : 'text-white hover:text-yellow-400 hover:bg-white/10')
                  }`}
                  variants={navItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  style={{ animationDelay: `${(mainNavItems.length + index) * 0.1}s` }}
                >
                  {page}
                </motion.button>
              ))}
            </div>

            {/* Divider */}
            <div className={`w-px h-6 mx-2 ${
              scrollY > 50 ? 'bg-gray-300' : 'bg-white/30'
            }`} />

            {/* Contact */}
            <motion.button
              onClick={() => setCurrentPage('contact')}
              className={`px-4 py-2 font-medium capitalize rounded-lg transition-all ${
                currentPage === 'contact'
                  ? (scrollY > 50 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-yellow-400 bg-white/10')
                  : (scrollY > 50 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' 
                      : 'text-white hover:text-yellow-400 hover:bg-white/10')
              }`}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              contact
            </motion.button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button
              onClick={() => setCurrentPage('donate')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-2.5 rounded-full font-medium shadow-lg transition-all"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              ✨ Donate
            </motion.button>
            <motion.button
              onClick={() => setCurrentPage('partner')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-full font-medium shadow-lg transition-all"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              🤝 Partner
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="px-4 py-6 space-y-2">
              {/* Main Navigation */}
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                  Navigation
                </p>
                {mainNavItems.map((page) => (
                  <motion.button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 font-medium capitalize rounded-lg transition-all ${
                      currentPage === page
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    variants={mobileItemVariants}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>

              {/* Resources */}
              <div className="space-y-1 pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                  Resources
                </p>
                {resourceItems.map((page) => (
                  <motion.button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 font-medium capitalize rounded-lg transition-all ${
                      currentPage === page
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    variants={mobileItemVariants}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>

              {/* Contact & Actions */}
              <div className="space-y-1 pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2">
                  Get Involved
                </p>
                <motion.button
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 font-medium capitalize rounded-lg transition-all ${
                    currentPage === 'contact'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  variants={mobileItemVariants}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  contact
                </motion.button>
                
                <div className="flex space-x-2 px-4 pt-4">
                  <motion.button
                    onClick={() => {
                      setCurrentPage('donate');
                      setIsMenuOpen(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-3 rounded-lg font-medium text-center"
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ✨ Donate
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      setCurrentPage('partner');
                      setIsMenuOpen(false);
                    }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium text-center"
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🤝 Partner
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;