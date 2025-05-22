import React, { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, Gift, ArrowRight, Cross } from 'lucide-react';

const MinistriesPage = ({ setCurrentPage }) => {
  // Set page state on mount
  useEffect(() => {
    setCurrentPage('ministries');
  }, [setCurrentPage]);

  // Custom hook for intersection observer
  const useScrollAnimation = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, isInView];
  };

  const [heroRef, heroInView] = useScrollAnimation();
  const [equipRef, equipInView] = useScrollAnimation();
  const [missionsRef, missionsInView] = useScrollAnimation();
  const [heartsRef, heartsInView] = useScrollAnimation();

  // Animation variants (same as AboutPage)
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

  const cardHover = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
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
        ref={heroRef}
        className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
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
          <Cross className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 w-12 h-12 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <Cross className="w-full h-full" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 text-white/10"
          variants={floatingAnimation}
          animate="animate"
          style={{ animationDelay: "4s" }}
        >
          <Cross className="w-full h-full" />
        </motion.div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={fadeInScale}
          >
            <Cross className="w-4 h-4" aria-label="Our Ministries" />
            <span>Our Ministries</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            Our Ministries
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block"
              variants={pulseAnimation}
              animate="animate"
            >
              Three core arms
            </motion.span>{" "}
            working together to advance God's kingdom and transform lives
          </motion.p>
        </div>
      </motion.section>

      {/* EQUIP Movement Section */}
      <motion.section
        ref={equipRef}
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate={equipInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
              <motion.div variants={slideInLeft}>
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mb-6"
                  variants={fadeInScale}
                >
                  <Users className="w-10 h-10" aria-label="EQUIP Movement" />
                </motion.div>
                <motion.h2 className="text-4xl font-bold text-gray-800 mb-6" variants={itemVariants}>
                  EQUIP Movement
                </motion.h2>
                <motion.p className="text-gray-600 mb-6 leading-relaxed" variants={itemVariants}>
                  The EQUIP Movement is dedicated to training and empowering Christian leaders to fulfill their God-given purpose. Through workshops, seminars, and mentorship, we equip individuals with the tools to lead with vision and impact.
                </motion.p>
                <motion.button
                  onClick={() => setCurrentPage('partner')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                >
                  <span>Join EQUIP</span>
                  <ArrowRight className="w-4 h-4" aria-label="Navigate to Partner Page" />
                </motion.button>
              </motion.div>
              <motion.div variants={slideInRight}>
                <div className="relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden">
                  {/* Replace with actual image path in your project */}
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
                    alt="EQUIP Movement"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = `relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center`;
                      e.target.parentElement.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-white">
                          <Cross className="w-16 h-16 mb-4" aria-label="Image Placeholder" />
                          <span className="text-lg font-semibold">EQUIP Movement</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gospel Missions Section */}
      <motion.section
        ref={missionsRef}
        className="py-20 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate={missionsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
              <motion.div className="order-2 lg:order-1" variants={slideInLeft}>
                <div className="relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden">
                  {/* Replace with actual image path in your project */}
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                    alt="Gospel Missions"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = `relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center`;
                      e.target.parentElement.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-white">
                          <Cross className="w-16 h-16 mb-4" aria-label="Image Placeholder" />
                          <span className="text-lg font-semibold">Gospel Missions</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
              <motion.div className="order-1 lg:order-2" variants={slideInRight}>
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mb-6"
                  variants={fadeInScale}
                >
                  <Globe className="w-10 h-10" aria-label="Gospel Missions" />
                </motion.div>
                <motion.h2 className="text-4xl font-bold text-gray-800 mb-6" variants={itemVariants}>
                  Gospel Missions
                </motion.h2>
                <motion.p className="text-gray-600 mb-6 leading-relaxed" variants={itemVariants}>
                  Our Gospel Missions outreach brings the message of Jesus Christ to unreached communities. From remote villages to urban centers, we share hope, plant churches, and transform lives through the power of the Gospel.
                </motion.p>
                <motion.button
                  onClick={() => setCurrentPage('donate')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                >
                  <span>Support Missions</span>
                  <ArrowRight className="w-4 h-4" aria-label="Navigate to Donate Page" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Hearts Unite Section */}
      <motion.section
        ref={heartsRef}
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate={heartsInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
              <motion.div variants={slideInLeft}>
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full flex items-center justify-center mb-6"
                  variants={fadeInScale}
                >
                  <Gift className="w-10 h-10" aria-label="Hearts Unite" />
                </motion.div>
                <motion.h2 className="text-4xl font-bold text-gray-800 mb-6" variants={itemVariants}>
                  Hearts Unite
                </motion.h2>
                <motion.p className="text-gray-600 mb-6 leading-relaxed" variants={itemVariants}>
                  Hearts Unite supports the destitute and marginalized, providing food, shelter, and education to those in need. We believe in showing Christ's love through practical acts of charity and compassion.
                </motion.p>
                <motion.button
                  onClick={() => setCurrentPage('donate')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                >
                  <span>Give Now</span>
                  <ArrowRight className="w-4 h-4" aria-label="Navigate to Donate Page" />
                </motion.button>
              </motion.div>
              <motion.div variants={slideInRight}>
                <div className="relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden">
                  {/* Replace with actual image path in your project */}
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                    alt="Hearts Unite"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = `relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center`;
                      e.target.parentElement.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-white">
                          <Cross className="w-16 h-16 mb-4" aria-label="Image Placeholder" />
                          <span className="text-lg font-semibold">Hearts Unite</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MinistriesPage;