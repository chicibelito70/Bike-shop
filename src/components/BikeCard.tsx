import React from 'react';
import { Bike } from '../types';
import { ArrowRight } from 'lucide-react';

interface BikeCardProps {
  bike: Bike;
  onClick: (bike: Bike) => void;
}

export function BikeCard({ bike, onClick }: BikeCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={() => onClick(bike)}
    >
      <img 
        src={bike.image} 
        alt={bike.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{bike.name}</h3>
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {bike.type.replace('_', ' ')}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{bike.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${bike.price.toLocaleString()}</span>
          <button 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            View Details
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}