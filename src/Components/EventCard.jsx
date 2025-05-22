import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
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
);

export default EventCard;