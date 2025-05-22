import React from 'react';
import { Heart, Users, Globe, Church } from 'lucide-react';

const iconMap = {
  Heart,
  Users,
  Globe,
  Church
};

const ImpactStat = ({ stat }) => {
  const Icon = iconMap[stat.icon];
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  );
};

export default ImpactStat;