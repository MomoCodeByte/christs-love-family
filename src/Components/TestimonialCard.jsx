import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial, isActive }) => (
  <div className={`transition-opacity duration-500 ${
    isActive ? 'opacity-100' : 'opacity-0 absolute inset-0'
  }`}>
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
);

export default TestimonialCard;