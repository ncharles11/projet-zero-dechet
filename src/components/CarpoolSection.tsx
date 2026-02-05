import { useState } from 'react';
import { Car, MapPin, Users, CheckCircle } from 'lucide-react';

interface CarpoolOffer {
  id: string;
  driverName: string;
  departure: string;
  availableSeats: number;
  totalSeats: number;
  isBooked?: boolean;
}

const CarpoolSection = () => {
  const [carpools, setCarpools] = useState<CarpoolOffer[]>([
    {
      id: '1',
      driverName: 'Thomas',
      departure: 'Brest Centre',
      availableSeats: 3,
      totalSeats: 4
    },
    {
      id: '2',
      driverName: 'Sarah',
      departure: 'Plouzané',
      availableSeats: 1,
      totalSeats: 3
    },
    {
      id: '3',
      driverName: 'Équipe "Green"',
      departure: 'Technopôle',
      availableSeats: 0,
      totalSeats: 5
    }
  ]);

  const handleBook = (carpoolId: string) => {
    setCarpools(prev => prev.map(carpool => {
      if (carpool.id === carpoolId && carpool.availableSeats > 0) {
        return {
          ...carpool,
          availableSeats: carpool.availableSeats - 1,
          isBooked: true
        };
      }
      return carpool;
    }));
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-4">
      <div className="flex items-center space-x-2 mb-4">
        <Car className="w-5 h-5 text-green-600" />
        <h4 className="text-lg font-bold text-green-800">Éco-Trajets disponibles</h4>
      </div>

      <div className="space-y-3">
        {carpools.map((carpool) => (
          <div 
            key={carpool.id}
            className="bg-white rounded-xl p-4 border border-green-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              {/* Driver Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{carpool.driverName}</div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{carpool.departure}</span>
                  </div>
                </div>
              </div>

              {/* Seats & Action */}
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-700">
                    {carpool.availableSeats}/{carpool.totalSeats} places
                  </div>
                  <div className="text-xs text-gray-500">
                    {carpool.availableSeats === 0 ? 'Complet' : 'Disponible'}
                  </div>
                </div>

                <button
                  onClick={() => handleBook(carpool.id)}
                  disabled={carpool.availableSeats === 0 || carpool.isBooked}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    carpool.isBooked
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : carpool.availableSeats === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-500 text-white hover:bg-green-600 active:scale-95'
                  }`}
                >
                  {carpool.isBooked ? (
                    <span className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Validé</span>
                    </span>
                  ) : carpool.availableSeats === 0 ? (
                    'Complet'
                  ) : (
                    'Réserver'
                  )}
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${((carpool.totalSeats - carpool.availableSeats) / carpool.totalSeats) * 100}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-4 border-t border-green-200">
        <div className="flex items-center space-x-2 text-sm text-green-700">
          <Car className="w-4 h-4" />
          <span>
            {carpools.reduce((sum, c) => sum + c.availableSeats, 0)} places disponibles au total
          </span>
        </div>
        <p className="text-xs text-green-600 mt-1">
          Covoiturer = Réduire notre empreinte carbone collective 🌱
        </p>
      </div>
    </div>
  );
};

export default CarpoolSection;
