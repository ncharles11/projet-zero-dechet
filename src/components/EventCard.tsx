import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { Event } from '../types';
import { MapPin, Calendar, Users, Car } from 'lucide-react';
import CarpoolSection from './CarpoolSection';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [showCarpool, setShowCarpool] = useState(false);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'short', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getTagColor = (tag: string) => {
    const colors: Record<string, string> = {
      'Plastique': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Mégots': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Verre': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Déchets marins': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Filets de pêche': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Aluminium': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
      'Tout type': 'bg-acid-green/20 text-acid-green border-acid-green/30',
      'Équipe': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
    };
    return colors[tag] || 'bg-white/20 text-white border-white/30';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all hover:scale-105 hover:border-acid-green/50 group">
      <Link 
        to={`/events/${event.id}`}
        className="block p-6"
      >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl mb-2">{event.image}</div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(event.tags[0])}`}>
          {event.tags[0]}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-acid-green transition-colors">
        {event.title}
      </h3>
      
      <p className="text-white/70 text-sm mb-4 line-clamp-2">
        {event.description}
      </p>
      
      <div className="space-y-2">
        <div className="flex items-center text-white/60 text-sm">
          <MapPin className="w-4 h-4 mr-2 text-acid-green" />
          {event.location}
        </div>
        
        <div className="flex items-center text-white/60 text-sm">
          <Calendar className="w-4 h-4 mr-2 text-acid-green" />
          {formatDate(event.date)}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white/60 text-sm">
            <Users className="w-4 h-4 mr-2 text-acid-green" />
            {event.participants}/{event.maxParticipants}
          </div>
          
          <div className="flex -space-x-1">
            {event.tags.slice(0, 3).map((tag, index) => (
              <div 
                key={index}
                className={`w-6 h-6 rounded-full border-2 border-deep-ocean flex items-center justify-center text-xs ${getTagColor(tag)}`}
              >
                {tag[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="w-full bg-white/10 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-acid-green to-wave-blue h-2 rounded-full transition-all duration-500"
            style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
          ></div>
        </div>
      </div>
      </Link>

      {/* Carpool Section */}
      <div className="px-6 pb-6">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setShowCarpool(!showCarpool);
          }}
          className="w-full flex items-center justify-center space-x-2 bg-green-500/20 hover:bg-green-500/30 text-green-300 py-2 rounded-lg transition-colors text-sm font-medium"
        >
          <Car className="w-4 h-4" />
          <span>{showCarpool ? 'Masquer' : 'Voir'} les covoiturages 🚗</span>
        </button>

        {showCarpool && (
          <div className="mt-4">
            <CarpoolSection />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
