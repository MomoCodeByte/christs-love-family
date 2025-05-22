import React from 'react';

const HeroSection = ({ slides, currentSlide, setCurrentSlide }) => (
  <section className="relative h-screen overflow-hidden animate-on-scroll">
    {slides.map((slide, index) => (
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
          {slides[currentSlide]?.title || 'Loading...'}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {slides[currentSlide]?.subtitle || 'Loading...'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105">
            {slides[currentSlide]?.cta || 'Action'}
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {slides.map((_, index) => (
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
);

export default HeroSection;