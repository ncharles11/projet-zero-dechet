import { useParams, Link } from 'react-router-dom';
import { mockEvents } from '../data/events';
import { ArrowLeft, MapPin, Calendar, Users, Clock} from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-deep-ocean via-ocean-blue to-wave-blue pt-20 px-4">
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-4xl font-black text-white mb-4">Événement non trouvé</h1>
          <Link to="/events" className="text-acid-green hover:text-acid-green/80">
            ← Retour aux events
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long',
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
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

  const spotsRemaining = event.maxParticipants - event.participants;
  const isFull = spotsRemaining === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-ocean via-ocean-blue to-wave-blue pt-20 px-4">
      <div className="container mx-auto py-8 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/events"
          className="inline-flex items-center space-x-2 text-acid-green hover:text-acid-green/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour aux events</span>
        </Link>

        {/* Event Header */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-5xl">{event.image}</span>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <h1 className="text-4xl font-black text-white mb-4">
                {event.title}
              </h1>
              
              <p className="text-xl text-white/80 mb-6">
                {event.description}
              </p>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-acid-green" />
                <span className="text-white font-medium">Lieu</span>
              </div>
              <p className="text-white/80">{event.location}</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Calendar className="w-5 h-5 text-acid-green" />
                <span className="text-white font-medium">Date</span>
              </div>
              <p className="text-white/80">{formatDate(event.date)}</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-acid-green" />
                <span className="text-white font-medium">Participants</span>
              </div>
              <p className="text-white/80">
                {event.participants}/{event.maxParticipants} personnes
              </p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Clock className="w-5 h-5 text-acid-green" />
                <span className="text-white font-medium">Durée</span>
              </div>
              <p className="text-white/80">Environ 2 heures</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-white/60 mb-2">
              <span>Places disponibles</span>
              <span>{spotsRemaining} restantes</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div 
                className={`h-3 rounded-full transition-all duration-500 ${
                  isFull 
                    ? 'bg-red-500' 
                    : 'bg-gradient-to-r from-acid-green to-wave-blue'
                }`}
                style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            className={`w-full py-4 rounded-full font-black text-lg transition-all ${
              isFull
                ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed border border-gray-500/30'
                : 'bg-acid-green text-deep-ocean hover:bg-acid-green/90 hover:scale-105 shadow-lg shadow-acid-green/25'
            }`}
            disabled={isFull}
          >
            {isFull ? 'COMPLET' : `S'INSCRIRE À L'EVENT`}
          </button>
        </div>

        {/* Additional Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6">Informations importantes</h2>
          
          <div className="space-y-4 text-white/80">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-acid-green rounded-full mt-2"></div>
              <p>Matériel fourni : gants, sacs, pinces</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-acid-green rounded-full mt-2"></div>
              <p>Pensez à venir avec des chaussures adaptées et de l'eau</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-acid-green rounded-full mt-2"></div>
              <p>Arrivée 15 minutes avant le début pour le briefing</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-acid-green rounded-full mt-2"></div>
              <p>Certificat de participation et badges à la clé !</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
