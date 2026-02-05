import { Cloud, Waves, AlertTriangle, CheckCircle } from 'lucide-react';

const WeatherWidget = () => {
  const weather = {
    condition: 'Nuageux',
    temperature: 14,
    nextLowTide: '14h30',
    status: 'good' as 'good' | 'warning' | 'danger'
  };

  const getStatusConfig = () => {
    switch (weather.status) {
      case 'good':
        return {
          bg: 'bg-green-500/20',
          border: 'border-green-500/30',
          text: 'text-green-300',
          icon: CheckCircle,
          message: 'Idéal pour ramasser !'
        };
      case 'warning':
        return {
          bg: 'bg-orange-500/20',
          border: 'border-orange-500/30',
          text: 'text-orange-300',
          icon: AlertTriangle,
          message: 'Attention marée'
        };
      case 'danger':
        return {
          bg: 'bg-red-500/20',
          border: 'border-red-500/30',
          text: 'text-red-300',
          icon: AlertTriangle,
          message: 'Tempête - Reportez'
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <div className={`fixed top-24 right-4 z-40 ${statusConfig.bg} backdrop-blur-md rounded-2xl p-4 border ${statusConfig.border} shadow-lg max-w-xs`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-bold text-sm">Météo & Marées</h3>
        <StatusIcon className={`w-4 h-4 ${statusConfig.text}`} />
      </div>
      
      <div className="space-y-3">
        {/* Weather */}
        <div className="flex items-center space-x-3">
          <Cloud className="w-5 h-5 text-white/70" />
          <div>
            <div className="text-white font-medium text-sm">{weather.condition}</div>
            <div className="text-white/60 text-xs">{weather.temperature}°C</div>
          </div>
        </div>
        
        {/* Tide */}
        <div className="flex items-center space-x-3">
          <Waves className="w-5 h-5 text-acid-green" />
          <div>
            <div className="text-white font-medium text-sm">Marée basse</div>
            <div className="text-acid-green text-xs">{weather.nextLowTide}</div>
          </div>
        </div>
        
        {/* Status */}
        <div className={`pt-2 border-t ${statusConfig.border}`}>
          <div className={`text-xs font-medium ${statusConfig.text}`}>
            {statusConfig.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
