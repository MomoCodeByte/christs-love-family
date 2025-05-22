import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { books } from '../data/data';
import BookCard from '../Components/BookCard';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Star, 
  Download, 
  ShoppingCart,
  Heart,
  Eye,
  Award,
  Users,
  Calendar,
  Sparkles,
  Quote,
  Grid,
  List,
  SortAsc,
  Tag
} from 'lucide-react';

const BooksPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [favorites, setFavorites] = useState([]);

  // Custom hook for intersection observer
  const useScrollAnimation = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, isInView];
  };

  const [heroRef, heroInView] = useScrollAnimation();
  const [statsRef, statsInView] = useScrollAnimation();
  const [filtersRef, filtersInView] = useScrollAnimation();
  const [booksRef, booksInView] = useScrollAnimation();
  const [featuredRef, featuredInView] = useScrollAnimation();

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
      y: [-15, 15, -15],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bookPageFlip = {
    animate: {
      rotateY: [0, 10, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Mock data for filtering (you can replace with actual book data)
  const categories = ['all', 'spiritual growth', 'leadership', 'prophecy', 'prayer', 'relationships'];
  const formats = ['all', 'hardcover', 'paperback', 'ebook', 'audiobook'];
  
  // Filter and search logic
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesFormat = selectedFormat === 'all' || book.format === selectedFormat;
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'oldest':
        return new Date(a.publishDate) - new Date(b.publishDate);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price':
        return (a.price || 0) - (b.price || 0);
      default:
        return 0;
    }
  });

  const toggleFavorite = (bookId) => {
    setFavorites(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  // Mock stats data
  const bookStats = [
    { icon: BookOpen, label: 'Total Books', value: books.length, color: 'text-blue-600' },
    { icon: Star, label: 'Avg Rating', value: '4.9', color: 'text-yellow-600' },
    { icon: Users, label: 'Readers', value: '10K+', color: 'text-green-600' },
    { icon: Award, label: 'Awards', value: '15', color: 'text-purple-600' }
  ];

  return (
    <div className="pt-20 relative overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500 text-white relative overflow-hidden"
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
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating book elements */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-20 bg-white/10 rounded-lg"
          variants={floatingAnimation}
          animate="animate"
        />
        <motion.div
          className="absolute top-32 right-32 w-12 h-16 bg-white/10 rounded-lg"
          variants={bookPageFlip}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-10 h-14 bg-white/10 rounded-lg"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <BookOpen className="w-4 h-4" />
            <span>Literary Collection</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Our Books
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Discover transformative books by Conqueror Duncan to inspire and equip you
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              variants={itemVariants}
            >
              <Quote className="w-5 h-5 text-yellow-200" />
              <span className="text-sm">Words that Transform Lives</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              variants={itemVariants}
            >
              <Award className="w-5 h-5 text-yellow-200" />
              <span className="text-sm">Award-Winning Content</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-16 bg-white border-b"
        variants={containerVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
          >
            {bookStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </motion.div>
                <motion.h3 
                  className="text-3xl font-bold text-gray-800 mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filters and Search Section */}
      <motion.section
        ref={filtersRef}
        className="py-8 bg-gray-50 border-b sticky top-20 z-40 backdrop-blur-sm bg-gray-50/95"
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
                placeholder="Search books, authors, topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Filter Controls */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              variants={containerVariants}
            >
              {/* Category Filter */}
              <motion.div 
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <Tag className="w-4 h-4 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Format Filter */}
              <motion.div 
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <BookOpen className="w-4 h-4 text-gray-600" />
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                >
                  {formats.map(format => (
                    <option key={format} value={format}>
                      {format.charAt(0).toUpperCase() + format.slice(1)}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Sort Options */}
              <motion.div 
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <SortAsc className="w-4 h-4 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title A-Z</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price Low-High</option>
                </select>
              </motion.div>

              {/* View Mode Toggle */}
              <motion.div 
                className="flex items-center bg-white rounded-lg p-1 shadow-sm"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-yellow-500 text-white shadow-sm' : 'text-gray-600'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-4 h-4" />
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-yellow-500 text-white shadow-sm' : 'text-gray-600'}`}
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
                key={filteredBooks.length}
                className="text-gray-600"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {filteredBooks.length === 0 ? (
                  "No books found matching your criteria"
                ) : (
                  `Showing ${filteredBooks.length} book${filteredBooks.length === 1 ? '' : 's'}`
                )}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Books Grid/List */}
      <motion.section
        ref={booksRef}
        className="py-12 bg-gray-50 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate={booksInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredBooks.length > 0 ? (
              <motion.div
                key={`${viewMode}-${selectedCategory}-${selectedFormat}-${sortBy}`}
                className={`grid gap-8 ${
                  viewMode === 'grid' 
                    ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1 max-w-4xl mx-auto'
                }`}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {sortedBooks.map((book, index) => (
                  <motion.div
                    key={`${book.id || index}-${viewMode}`}
                    variants={itemVariants}
                    whileHover={{ 
                      y: viewMode === 'grid' ? -10 : -3, 
                      scale: viewMode === 'grid' ? 1.03 : 1.01,
                      rotate: viewMode === 'grid' ? [0, 1, -1, 0] : 0
                    }}
                    transition={{ duration: 0.4 }}
                    layout
                  >
                    <BookCard 
                      book={book} 
                      viewMode={viewMode}
                      isFavorite={favorites.includes(book.id)}
                      onToggleFavorite={() => toggleFavorite(book.id)}
                    />
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
                  className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <BookOpen className="w-12 h-12 text-yellow-600" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  No Books Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <motion.button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedFormat('all');
                  }}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
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

      {/* Featured Author Section */}
      <motion.section
        ref={featuredRef}
        className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={featuredInView ? "visible" : "hidden"}
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white rounded-full" />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div variants={itemVariants}>
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Featured Author</span>
            </motion.div>

            <motion.h2 
              className="text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              About Conqueror Duncan
            </motion.h2>

            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              A prophetic voice in this generation, Conqueror Duncan writes with divine inspiration, 
              delivering powerful truths that transform lives and strengthen faith.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              variants={containerVariants}
            >
              <motion.button
                className="bg-white text-yellow-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                <span>View Author Profile</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-3 rounded-full font-medium transition-colors flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Catalog</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BooksPage;