import React, { useState } from 'react';
import { Bike } from './types';
import { bikes } from './data/bikes';
import { BikeCard } from './components/BikeCard';
import { BikeDetails } from './components/BikeDetails';
import { ReservationForm } from './components/ReservationForm';
import { Bike as BikeIcon } from 'lucide-react';

function App() {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [showReservation, setShowReservation] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const bikeTypes = ['MTB', 'RUTA', 'E_BIKE', 'GRAVEL'];

  const filteredBikes = selectedType 
    ? bikes.filter(bike => bike.type === selectedType)
    : bikes;

  const handleReservation = (formData: any) => {
    // Here you would typically handle the reservation submission
    console.log('Reservation submitted:', formData);
    setShowReservation(false);
    setSelectedBike(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <BikeIcon size={32} className="text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Bike Shop</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-4 py-2 rounded-full ${
              selectedType === null
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Bikes
          </button>
          {bikeTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                selectedType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {type.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBikes.map(bike => (
            <BikeCard
              key={bike.id}
              bike={bike}
              onClick={setSelectedBike}
            />
          ))}
        </div>
      </main>

      {selectedBike && !showReservation && (
        <BikeDetails
          bike={selectedBike}
          onClose={() => setSelectedBike(null)}
          onReserve={() => setShowReservation(true)}
        />
      )}

      {selectedBike && showReservation && (
        <ReservationForm
          bike={selectedBike}
          onClose={() => setShowReservation(false)}
          onSubmit={handleReservation}
        />
      )}
    </div>
  );
}

export default App;