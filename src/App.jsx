import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import MinistriesPage from './Pages/MinistriesPage';
import MediaPage from './Pages/MediaPage';
import BooksPage from './Pages/BooksPage';
import EventsPage from './Pages/EventsPage';
import DevotionalPage from './Pages/DevotionalPage';
import ContactPage from './Pages/ContactPage';
import DonatePage from './Pages/DonatePage';
import PartnerPage from './Pages/PartnerPage';
import useScrollAnimation from './utils/useScrollAnimation';
import { heroSlides, testimonials } from './data/data';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            testimonialSlide={testimonialSlide}
            setTestimonialSlide={setTestimonialSlide}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'ministries':
        return <MinistriesPage setCurrentPage={setCurrentPage} />;
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
        return (
          <HomePage
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            testimonialSlide={testimonialSlide}
            setTestimonialSlide={setTestimonialSlide}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollY={scrollY}
      />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;