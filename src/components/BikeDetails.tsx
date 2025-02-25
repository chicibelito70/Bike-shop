import React from 'react';
import { Bike } from '../types';
import { X, Calendar, CreditCard } from 'lucide-react';

interface BikeDetailsProps {
  bike: Bike;
  onClose: () => void;
  onReserve: (bike: Bike) => void;
}

export function BikeDetails({ bike, onClose, onReserve }: BikeDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <img 
            src={bike.image} 
            alt={bike.name} 
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{bike.name}</h2>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {bike.type.replace('_', ' ')}
              </span>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">
                ${bike.price.toLocaleString()}
              </p>
              <p className="text-green-600 font-medium">
                {bike.available ? 'Available' : 'Not Available'}
              </p>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{bike.description}</p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Frame</dt>
                  <dd className="font-medium">{bike.specs.frame}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Groupset</dt>
                  <dd className="font-medium">{bike.specs.groupset}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Wheels</dt>
                  <dd className="font-medium">{bike.specs.wheels}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Weight</dt>
                  <dd className="font-medium">{bike.specs.weight}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => onReserve(bike)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
            >
              <Calendar size={20} />
              Reserve Now
            </button>
            <button
              onClick={() => onReserve(bike)}
              className="flex-1 bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700"
            >
              <CreditCard size={20} />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}