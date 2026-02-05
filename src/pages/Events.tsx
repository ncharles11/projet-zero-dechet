import { useState } from 'react';
import EventCard from '../components/EventCard';
import MapEvents from '../components/MapEvents';
import { mockEvents } from '../data/events';
import { Search, Filter } from 'lucide-react';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || event.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const uniqueTags = Array.from(new Set(mockEvents.flatMap(event => event.tags)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-ocean via-ocean-blue to-wave-blue pt-20 px-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            EVENTS
            <span className="text-acid-green block">CLEAN-UP</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Rejoins les prochains ramassages de déchets sur la rade de Brest
          </p>
        </div>

        {/* Map */}
        <MapEvents />

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Rechercher un event..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-acid-green transition-colors"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-acid-green" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-acid-green transition-colors"
                >
                  <option value="all" className="bg-deep-ocean">Tous les types</option>
                  {uniqueTags.map(tag => (
                    <option key={tag} value={tag} className="bg-deep-ocean">
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Aucun event trouvé
            </h3>
            <p className="text-white/70">
              Essaye avec d'autres filtres ou termes de recherche
            </p>
          </div>
        )}

        {/* Stats Bar */}
        <div className="mt-16 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-acid-green mb-2">
                {mockEvents.length}
              </div>
              <div className="text-white/70">Events cette semaine</div>
            </div>
            <div>
              <div className="text-3xl font-black text-acid-green mb-2">
                {mockEvents.reduce((sum, event) => sum + event.participants, 0)}
              </div>
              <div className="text-white/70">Bénévoles inscrits</div>
            </div>
            <div>
              <div className="text-3xl font-black text-acid-green mb-2">
                {mockEvents.reduce((sum, event) => sum + event.maxParticipants, 0) - mockEvents.reduce((sum, event) => sum + event.participants, 0)}
              </div>
              <div className="text-white/70">Places disponibles</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
