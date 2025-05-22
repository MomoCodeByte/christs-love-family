import React, { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Users, Heart, Gift, CheckCircle, Cross, Sparkles, Award, Target } from 'lucide-react';

const AboutPage = ({ setCurrentPage }) => {
  // Set page state on mount
  useEffect(() => {
    setCurrentPage('about');
  }, [setCurrentPage]);

  // Custom hook for intersection observer
  const useScrollAnimation = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return [ref, isInView];
  };

  const [heroRef, heroInView] = useScrollAnimation();
  const [mandateRef, mandateInView] = useScrollAnimation();
  const [valuesRef, valuesInView] = useScrollAnimation();
  const [founderRef, founderInView] = useScrollAnimation();

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

  // Ministry mandate data
  const mandateItems = [
    {
      icon: Globe,
      title: "Gospel Proclamation",
      description: "Proclaim the Gospel of Jesus Christ with power and love, across cities, villages, and nations, bringing hope and salvation to all.",
      color: "blue",
      bgGradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Equip leaders through the EQUIP Movement, training and releasing visionary, purpose-driven Christian leaders to influence their generation.",
      color: "yellow",
      bgGradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "Mission Outreach",
      description: "Engage in Gospel Missions to indigenous communities, bringing hope, healing, and salvation to the unreached.",
      color: "green",
      bgGradient: "from-green-500 to-green-600"
    },
    {
      icon: Gift,
      title: "Charity & Support",
      description: "Support the destitute through Hearts Unite programs—those wholly committed to Christ but lacking basic life needs.",
      color: "red",
      bgGradient: "from-red-500 to-red-600"
    }
  ];

  // Core values data
  const coreValues = [
    {
      icon: Cross,
      title: "Faith",
      description: "Anchored in unwavering trust in God, we live by faith, believing in His promises and guidance.",
      color: "purple",
      bgGradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Love",
      description: "Rooted in Christ’s love, we serve others selflessly, fostering unity and compassion.",
      color: "pink",
      bgGradient: "from-pink-500 to-pink-600"
    },
    {
      icon: Sparkles,
      title: "Excellence",
      description: "Pursuing excellence in all we do, reflecting God’s glory through diligence and integrity.",
      color: "indigo",
      bgGradient: "from-indigo-500 to-indigo-600"
    }
  ];

  const highlights = [
    { text: "Over 10 years in ministry", icon: Award },
    { text: "Author of 10+ transformative books", icon: Target },
    { text: "Trained 1,200+ leaders across Africa", icon: Users },
    { text: "Established churches in 25+ nations", icon: Globe }
  ];

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
            <Cross className="w-4 h-4" />
            <span>Our Ministry</span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            variants={slideInUp}
          >
            About CLFMI
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
              Rooted in Love.
            </motion.span>{" "}
            Driven by Purpose. Empowered by the Holy Spirit.
          </motion.p>
        </div>
      </motion.section>

      {/* Mandate Section */}
      <motion.section
        ref={mandateRef}
        className="py-20"
        variants={containerVariants}
        initial="hidden"
        animate={mandateInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mandate</h2>
              <p className="text-lg text-gray-600">
                Guided by the Holy Spirit and grounded in the Word, our ministry exists to proclaim 
                the Gospel with power and love across cities, villages, and nations.
              </p>
            </motion.div>
            <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
              {mandateItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8"
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.bgGradient} text-white rounded-full flex items-center justify-center mb-6`}>
                    <item.icon className="w-8 h-8" aria-label={item.title} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-20 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate={valuesInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                Our ministry is built on values that reflect our commitment to God’s calling and our service to others.
              </p>
            </motion.div>
            <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8"
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.bgGradient} text-white rounded-full flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8" aria-label={value.title} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Founder Section */}
      <motion.section
        ref={founderRef}
        className="py-20 bg-gray-50"
        variants={containerVariants}
        initial="hidden"
        animate={founderInView ? "visible" : "hidden"}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div className="grid lg:grid-cols-2 gap-12 items-center" variants={containerVariants}>
              <motion.div variants={slideInLeft}>
                {/* Replace with actual image path in your project */}
                <div className="relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=face"
                    alt="Conqueror Duncan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.className = `relative w-full h-[400px] rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center`;
                      e.target.parentElement.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-white">
                          <Cross className="w-16 h-16 mb-4" aria-label="Image Placeholder" />
                          <span className="text-lg font-semibold">Conqueror Duncan</span>
                        </div>
                      `;
                    }}
                  />
                </div>
              </motion.div>
              <motion.div variants={slideInRight}>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Conqueror Duncan</h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">Founder & Lead Pastor</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Conqueror Duncan is a prophetic preacher, author, and seasoned leadership 
                    trainer with over a decade of impactful ministry. As the visionary founder 
                    of CLFMI, he carries a burning passion to see souls saved, leaders equipped, 
                    and lives restored.
                  </p>
                  <p>
                    His sermons pierce hearts, his leadership seminars ignite purpose, and his 
                    books have transformed countless lives across nations. Through divine grace, 
                    he ministers with a powerful prophetic edge, drawing many to the feet of Jesus.
                  </p>
                  <p>
                    With a heart for the nations and a vision for kingdom advancement, Conqueror 
                    Duncan continues to impact lives through various ministry arms, equipping the 
                    next generation of Christian leaders.
                  </p>
                </div>
                <motion.div className="mt-8" variants={itemVariants}>
                  <h4 className="text-xl font-semibold mb-4">Ministry Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    {highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                      >
                        <highlight.icon className="w-5 h-5 text-green-600" aria-label={highlight.text} />
                        <span>{highlight.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;