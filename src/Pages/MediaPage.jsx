import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { sermons } from '../data/data';
import SermonCard from '../Components/SermonCard';
import { 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Play, 
  Download, 
  BookOpen, 
  Heart,
  Grid,
  List,
  Volume2,
  Sparkles
} from 'lucide-react';

const MediaPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  // Custom hook for intersection observer
  const useScrollAnimation = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, isInView];
  };

  const [heroRef, heroInView] = useScrollAnimation();
  const [filtersRef, filtersInView] = useScrollAnimation();
  const [sermonsRef, sermonsInView] = useScrollAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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

  // Filter and search logic
  const categories = ['all', 'prophetic', 'teaching', 'worship', 'testimonial'];
  
  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || sermon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedSermons = [...filteredSermons].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'duration':
        return b.duration - a.duration;
      default:
        return 0;
    }
  });

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-full"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-32 w-12 h-12 bg-yellow-400/20 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-8 h-8 bg-white/10 rounded-full"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <Volume2 className="w-4 h-4" />
            <span>Spiritual Resources</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Media & Sermons
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Access our rich collection of anointed teachings and Spirit-filled messages
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              variants={itemVariants}
            >
              <BookOpen className="w-5 h-5 text-yellow-400" />
              <span className="text-sm">{sermons.length} Messages Available</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              variants={itemVariants}
            >
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm">Lives Transformed Daily</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters and Search Section */}
      <motion.section
        ref={filtersRef}
        className="py-8 bg-white border-b sticky top-20 z-40 backdrop-blur-sm bg-white/95"
        variants={containerVariants}
        initial="hidden"
        animate={filtersInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
            variants={containerVariants}
          >
            {/* Search Bar */}
            <motion.div 
              className="relative flex-1 max-w-md"
              variants={itemVariants}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <motion.input
                type="text"
                placeholder="Search sermons, speakers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Filter Controls */}
            <motion.div 
              className="flex items-center space-x-4"
              variants={containerVariants}
            >
              {/* Category Filter */}
              <motion.div 
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Sort Options */}
              <motion.div 
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <Calendar className="w-4 h-4 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title A-Z</option>
                  <option value="duration">Longest First</option>
                </select>
              </motion.div>

              {/* View Mode Toggle */}
              <motion.div 
                className="flex items-center bg-gray-100 rounded-lg p-1"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Results Count */}
          <motion.div 
            className="mt-4 text-center"
            variants={itemVariants}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={filteredSermons.length}
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {filteredSermons.length === 0 ? (
                  "No sermons found matching your criteria"
                ) : (
                  `Showing ${filteredSermons.length} sermon${filteredSermons.length === 1 ? '' : 's'}`
                )}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Sermons Grid/List */}
      <motion.section
        ref={sermonsRef}
        className="py-12 bg-gray-50 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate={sermonsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredSermons.length > 0 ? (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${sortBy}`}
                className={`grid gap-8 ${
                  viewMode === 'grid' 
                    ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1 max-w-4xl mx-auto'
                }`}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {sortedSermons.map((sermon, index) => (
                  <motion.div
                    key={`${sermon.id || index}-${viewMode}`}
                    variants={itemVariants}
                    whileHover={{ 
                      y: viewMode === 'grid' ? -8 : -2, 
                      scale: viewMode === 'grid' ? 1.02 : 1.01 
                    }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <SermonCard sermon={sermon} viewMode={viewMode} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Search className="w-12 h-12 text-gray-400" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  No Sermons Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Featured Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Stay Connected</span>
            </motion.div>

            <h2 className="text-4xl font-bold mb-6">
              Never Miss a Message
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our podcast and get notified whenever new sermons are available
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Subscribe to Podcast</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Watch Latest</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MediaPage;