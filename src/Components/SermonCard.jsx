import React from 'react';
import { Play, Calendar, Clock, Eye } from 'lucide-react';

const SermonCard = ({ sermon }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
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
);

export default SermonCard;