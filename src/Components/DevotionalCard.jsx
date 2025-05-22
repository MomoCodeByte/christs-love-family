import React from 'react';

const DevotionalCard = ({ devotion }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
);

export default DevotionalCard;