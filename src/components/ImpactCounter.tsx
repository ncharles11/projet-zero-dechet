import { TrendingUp, Users, Recycle, Trophy } from 'lucide-react';

const ImpactCounter = () => {
  const stats = [
    { 
      icon: Recycle, 
      value: '1.2 Tonnes', 
      label: 'Ramassées cette semaine',
      color: 'text-acid-green'
    },
    { 
      icon: Users, 
      value: '342', 
      label: 'Bénévoles actifs',
      color: 'text-wave-blue'
    },
    { 
      icon: Trophy, 
      value: '28', 
      label: 'Events organisés',
      color: 'text-yellow-400'
    },
    { 
      icon: TrendingUp, 
      value: '+47%', 
      label: 'Impact vs mois dernier',
      color: 'text-green-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all hover:scale-105"
        >
          <div className="flex items-center justify-between mb-3">
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
            <div className="w-2 h-2 bg-acid-green rounded-full animate-pulse-acid"></div>
          </div>
          <div className="text-2xl font-black text-white mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-white/70">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpactCounter;
