import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { mockEvents } from '../data/events';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix pour les icônes Leaflet dans Vite
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        background: linear-gradient(135deg, #39FF14, #58a4b0);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid white;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-size: 20px;
        color: #003f5c;
        font-weight: bold;
      ">
        📍
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

// Coordonnées approximatives pour les lieux de la Rade de Brest
const eventCoordinates: Record<string, [number, number]> = {
  'Plouzané': [48.3833, -4.5667],
  'Port de Brest': [48.3904, -4.4861],
  'Pointe du Diable': [48.3542, -4.5753],
  'Plougastel': [48.4167, -4.3833],
  'Multiple spots': [48.3904, -4.4861]
};

const MapEvents = () => {
  const customIcon = createCustomIcon();

  return (
    <div className="w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 mb-8">
      <MapContainer 
        center={[48.3904, -4.4861]} 
        zoom={11} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {mockEvents.map((event) => {
          const coords = eventCoordinates[event.location] || [48.3904, -4.4861];
          
          return (
            <Marker 
              key={event.id} 
              position={coords}
              icon={customIcon}
            >
              <Popup className="custom-popup">
                <div className="p-3 min-w-[200px]">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-2xl">{event.image}</span>
                    <h3 className="font-bold text-white text-sm">
                      {event.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-1 text-xs text-white/80 mb-3">
                    <div>📍 {event.location}</div>
                    <div>👥 {event.participants}/{event.maxParticipants} participants</div>
                    <div>🏷️ {event.tags.join(', ')}</div>
                  </div>
                  
                  <Link 
                    to={`/events/${event.id}`}
                    className="inline-block w-full bg-acid-green text-deep-ocean text-center py-2 px-3 rounded-lg font-bold text-sm hover:bg-acid-green/90 transition-colors"
                  >
                    Voir les détails
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-deep-ocean/90 backdrop-blur-md rounded-xl p-3 border border-acid-green/30">
        <div className="text-white text-xs font-bold mb-2">Légende</div>
        <div className="flex items-center space-x-2 text-xs text-white/80">
          <div className="w-6 h-6 bg-gradient-to-br from-acid-green to-wave-blue rounded-full border-2 border-white flex items-center justify-center text-xs">
            📍
          </div>
          <span>Event de nettoyage</span>
        </div>
      </div>
    </div>
  );
};

export default MapEvents;
