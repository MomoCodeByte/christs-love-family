import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Play, Book, Users, Globe, Gift, Phone, Mail, MapPin, Star, Calendar, ArrowRight, Menu, X, Facebook, Youtube, Instagram, Twitter, Send, CheckCircle, Clock, UserCheck, Headphones, Download, Eye, Quote, Church, Cross } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide for hero section
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-slide for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, [currentPage]);

  const heroSlides = [
    {
      title: "Rooted in Love. Driven by Purpose.",
      subtitle: "Empowered by the Holy Spirit",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
      cta: "Watch Latest Sermon"
    },
    {
      title: "Raising Kingdom Leaders",
      subtitle: "Through the EQUIP Movement",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=1080&fit=crop",
      cta: "Join EQUIP Today"
    },
    {
      title: "Reaching the Unreached",
      subtitle: "Gospel Missions Worldwide",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop",
      cta: "Support Missions"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Dar es Salaam, Tanzania",
      text: "Through CLFMI's EQUIP program, I discovered my calling as a leader. The training transformed not just my ministry but my entire approach to life.",
      image: "https://images.unsplash.com/photo-1494790108775-ad1c8e2c4b28?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Pastor Michael",
      location: "Kampala, Uganda",
      text: "The Gospel Missions outreach brought revival to our community. Lives were transformed and a new church was planted.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Grace Mwamba",
      location: "Nairobi, Kenya",
      text: "Conqueror Duncan's book 'The Winning Mindset' changed my perspective on challenges. Now I see them as opportunities for growth.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const books = [
    { 
      title: "Wisdom and Power", 
      price: "$15", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop", 
      bestseller: true 
    },
    { 
      title: "I Will Rise Again", 
      price: "$12", 
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop", 
      bestseller: false 
    },
    { 
      title: "The Winning Mindset", 
      price: "$18", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop", 
      bestseller: true 
    },
    { 
      title: "Shake off the dust", 
      price: "$14", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop", 
      bestseller: false 
    },
    { 
      title: "Profile of a leader", 
      price: "$16", 
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=300&fit=crop", 
      bestseller: false 
    },
    { 
      title: "Understand God's Silence", 
      price: "$13", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop", 
      bestseller: false 
    },
    { 
      title: "The Heart of a Pastor", 
      price: "$17", 
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=200&h=300&fit=crop", 
      bestseller: false 
    },
    { 
      title: "A BABY KING (Parenting Christian kids)", 
      price: "$19", 
      image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=200&h=300&fit=crop", 
      bestseller: true 
    },
    { 
      title: "The heart of Pastors wife", 
      price: "$15", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop", 
      bestseller: false 
    },
    { 
      title: "MY inner Me", 
      price: "$14", 
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop", 
      bestseller: false 
    }
  ];

  const events = [
    {
      title: "Leadership Summit 2025",
      date: "March 15-17, 2025",
      location: "Dar es Salaam Convention Center",
      type: "Conference",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop"
    },
    {
      title: "Gospel Missions Outreach",
      date: "April 10-20, 2025",
      location: "Northern Tanzania",
      type: "Mission",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=250&fit=crop"
    },
    {
      title: "Youth Revival Night",
      date: "February 28, 2025",
      location: "CLFMI Main Campus",
      type: "Revival",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=250&fit=crop"
    }
  ];

  const sermons = [
    {
      title: "The Power of Faith",
      date: "January 15, 2025",
      duration: "45 min",
      views: "12,450",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=225&fit=crop"
    },
    {
      title: "Walking in Purpose",
      date: "January 8, 2025",
      duration: "52 min",
      views: "8,920",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=225&fit=crop"
    },
    {
      title: "Overcoming Life's Storms",
      date: "January 1, 2025",
      duration: "38 min",
      views: "15,670",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
    },
    {
      title: "The Heart of Worship",
      date: "December 25, 2024",
      duration: "41 min",
      views: "22,340",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=225&fit=crop"
    }
  ];

  const ministryImpact = [
    { number: "50,000+", label: "Lives Touched", icon: Heart },
    { number: "1,200+", label: "Leaders Trained", icon: Users },
    { number: "25+", label: "Nations Reached", icon: Globe },
    { number: "100+", label: "Communities Served", icon: Church }
  ];

  const devotions = [
    {
      title: "Peace in the Storm",
      date: "May 19, 2025",
      excerpt: "Find peace amidst life's challenges through faith in Christ.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop"
    },
    {
      title: "Walking in Faith",
      date: "May 18, 2025",
      excerpt: "Trust God's plan even when the path is unclear.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=225&fit=crop"
    }
  ];

  const Header = () => (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Cross className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`font-bold text-xl ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>
                CLFMI
              </h1>
              <p className={`text-sm ${scrollY > 50 ? 'text-gray-600' : 'text-white/80'}`}>
                Christ's Love Family
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {['home', 'about', 'ministries', 'media', 'books', 'events', 'devotional', 'contact', 'donate', 'partner'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`font-medium capitalize transition-colors ${
                  currentPage === page
                    ? (scrollY > 50 ? 'text-blue-600' : 'text-yellow-400')
                    : (scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-400')
                }`}
              >
                {page}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setCurrentPage('donate')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Donate
            </button>
            <button
              onClick={() => setCurrentPage('partner')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Partner
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {['home', 'about', 'ministries', 'media', 'books', 'events', 'devotional', 'contact', 'donate', 'partner'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left font-medium capitalize text-gray-700 hover:text-blue-600 transition-colors"
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );

  const HomePage = () => (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden animate-on-scroll">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105">
                {heroSlides[currentSlide].cta}
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ministryImpact.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* About Section */}
          <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Meet Our Founder
                </h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Conqueror Duncan
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A prophetic preacher, author, and seasoned leadership trainer with over a decade 
                  of impactful ministry. As the visionary founder of CLFMI, he carries a burning 
                  passion to see souls saved, leaders equipped, and lives restored.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  His sermons pierce hearts, his leadership seminars ignite purpose, and his books 
                  have transformed countless lives across nations. Through divine grace, he ministers 
                  with a powerful prophetic edge, drawing many to the feet of Jesus.
                </p>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Conqueror Duncan"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-4 rounded-lg">
                  <Quote className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Sermons</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Be edified through our rich collection of anointed teachings and Spirit-filled messages
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sermons.slice(0, 4).map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
                    Live
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center piston-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{sermon.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{sermon.duration}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{sermon.views} views</span>
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('media')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View All Sermons
            </button>
          </div>
        </div>
      </section>

     
      {/* Testimonials */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Life Transformations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from those whose lives have been touched by God's power through our ministry
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === testimonialSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <p className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === testimonialSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of something greater. Whether through giving, partnering, or joining our programs, 
            help us transform lives and advance God's kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('partner')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105"
            >
              Become a Partner
            </button>
            <button 
              onClick={() => setCurrentPage('ministries')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium text-lg transition-all"
            >
              Explore Ministries
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About CLFMI</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Rooted in Love. Driven by Purpose. Empowered by the Holy Spirit.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mandate</h2>
              <p className="text-lg text-gray-600">
                Guided by the Holy Spirit and grounded in the Word, our ministry exists to proclaim 
                the Gospel with power and love across cities, villages, and nations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Gospel Proclamation</h3>
                <p className="text-gray-600">
                  Proclaim the Gospel of Jesus Christ with power and love, across cities, 
                  villages, and nations, bringing hope and salvation to all.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Leadership Development</h3>
                <p className="text-gray-600">
                  Equip leaders through the EQUIP Movement, training and releasing visionary, 
                  purpose-driven Christian leaders to influence their generation.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Mission Outreach</h3>
                <p className="text-gray-600">
                  Engage in Gospel Missions to indigenous communities, bringing hope, 
                  healing, and salvation to the unreached.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Charity & Support</h3>
                <p className="text-gray-600">
                  Support the destitute through Hearts Unite programs—those wholly committed 
                  to Christ but lacking basic life needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Founder Details */}
        <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=face"
                  alt="Conqueror Duncan"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Conqueror Duncan
                </h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                  Founder & Lead Pastor
                </h3>
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
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">Ministry Highlights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Over 10 years in ministry</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Author of 10+ transformative books</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Trained 1,200+ leaders across Africa</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Established churches in 25+ nations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const MinistriesPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Ministries</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Three core arms working together to advance God's kingdom and transform lives
          </p>
        </div>
      </section>

     
{/* EQUIP Movement */}
<section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Users className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">EQUIP Movement</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The EQUIP Movement is dedicated to training and empowering Christian leaders to fulfill their God-given purpose. Through workshops, seminars, and mentorship, we equip individuals with the tools to lead with vision and impact.
                </p>
                <button
                  onClick={() => setCurrentPage('partner')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Join EQUIP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
                  alt="EQUIP Movement"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Gospel Missions */}
       <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop"
                  alt="Gospel Missions"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Gospel Missions</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Gospel Missions outreach brings the message of Jesus Christ to unreached communities. From remote villages to urban centers, we share hope, plant churches, and transform lives through the power of the Gospel.
                </p>
                <button
                  onClick={() => setCurrentPage('donate')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Support Missions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Hearts Unite */}
     <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mb-6">
                  <Gift className="w-10 h-10" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Hearts Unite</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Hearts Unite supports the destitute and marginalized, providing food, shelter, and education to those in need. We believe in showing Christ's love through practical acts of charity and compassion.
                </p>
                <button
                  onClick={() => setCurrentPage('donate')}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center space-x-2"
                >
                  <span>Give Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                  alt="Hearts Unite"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const MediaPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Media & Sermons</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access our rich collection of anointed teachings and Spirit-filled messages
          </p>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sermons.map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
                    Live
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{sermon.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{sermon.duration}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1 text-sm text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span>{sermon.views} views</span>
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const BooksPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Books</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover transformative books by Conqueror Duncan to inspire and equip you
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover"
                  />
                  {book.bestseller && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{book.price}</p>
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const EventsPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for life-changing conferences, missions, and revivals
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full md:w-1/3 h-64 object-cover"
                />
                <div className="p-6 flex-1">
                  <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded text-sm mb-2">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const DevotionalPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Daily Devotionals</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Enhance your day with verses, reflections, and prayers from CLFMI
          </p>
        </div>
      </section>

      {/* Devotionals List */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {devotions.map((devotion, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={devotion.image}
                  alt={devotion.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{devotion.title}</h3>
                  <p className="text-gray-600 mb-2">{devotion.date}</p>
                  <p className="text-gray-600 mb-4">{devotion.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Subscribe to Devotionals
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Reach out to CLFMI for inquiries, prayer requests, or to get involved
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    placeholder="Your Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Mail className="w-6 h-6 text-teal-600" />
                  <span>info@clfmi.org</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-teal-600" />
                  <span>+255 123 456 789</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  <span>Dar es Salaam, Tanzania</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-6 h-6 text-teal-600" />
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const DonatePage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your generosity helps us proclaim the Gospel, equip leaders, and transform lives
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Give Now</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Donation Amount</label>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['$10', '$25', '$50', '$100'].map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="bg-gray-100 hover:bg-red-600 hover:text-white px-4 py-2 rounded-full transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom Amount"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Donate Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  const PartnerPage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Become a Partner</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join hands with us to advance God's kingdom and impact lives globally
          </p>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Partner with CLFMI?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As a partner, you’ll play a vital role in supporting our mission to proclaim the Gospel, equip leaders, and serve communities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Make an Impact",
                description: "Your support helps transform lives through our ministries."
              },
              {
                icon: Book,
                title: "Exclusive Resources",
                description: "Access special teachings, books, and updates."
              },
              {
                icon: Users,
                title: "Community",
                description: "Join a global network of like-minded believers."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-gray-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Join as a Partner</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message (Optional)</label>
                <textarea
                  placeholder="Why do you want to partner with us?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Become a Partner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'ministries':
        return <MinistriesPage />;
      case 'media':
        return <MediaPage />;
      case 'books':
        return <BooksPage />;
      case 'events':
        return <EventsPage />;
      case 'devotional':
        return <DevotionalPage />;
      case 'contact':
        return <ContactPage />;
      case 'donate':
        return <DonatePage />;
      case 'partner':
        return <PartnerPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Include animate.css for scroll animations */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <Header />
      {renderPage()}
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CLFMI</h3>
              <p className="text-gray-400">
                Rooted in Love. Driven by Purpose. Empowered by the Holy Spirit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'about', 'ministries', 'media', 'books', 'events', 'devotional', 'contact'].map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => setCurrentPage(page)}
                      className="text-gray-400 hover:text-yellow-400 capitalize"
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@clfmi.org</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+255 123 456 789</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dar es Salaam, Tanzania</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/clfmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://youtube.com/clfmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/clfmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/clfmi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 bg-gray-700 text-white border-none rounded-l-lg px-4 py-2 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>© 2025 CLFMI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;