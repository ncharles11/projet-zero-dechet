import { calculateImpact, getMonthlyProgress } from '../utils/impactCalculator';
import { Turtle, Wine, Car, TrendingUp } from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip
} from 'recharts';

interface ImpactCalculatorProps {
  totalWeight: number;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-white/20 shadow-lg">
        <p className="text-deep-ocean font-bold">{`${payload[0].value} kg`}</p>
        <p className="text-deep-ocean/70 text-sm">{payload[0].payload.month}</p>
      </div>
    );
  }
  return null;
};

const ImpactCalculator = ({ totalWeight }: ImpactCalculatorProps) => {
  const impact = calculateImpact(totalWeight);
  const monthlyData = getMonthlyProgress(totalWeight);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Ton Impact Calculé</h3>
        <p className="text-acid-green font-medium">Bravo ! Regarde ce que tu as accompli ! 🌟</p>
      </div>

      {/* Équivalences Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Tortues Sauvées */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Turtle className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-black text-white mb-2">
            {impact.turtlesSaved}
          </div>
          <div className="text-white/90 font-medium">
            Tortues Sauvées 🐢
          </div>
          <div className="text-white/70 text-sm mt-2">
            Chaque kg compte !
          </div>
        </div>

        {/* Bouteilles Recyclées */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wine className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-black text-white mb-2">
            {impact.bottlesRecycled}
          </div>
          <div className="text-white/90 font-medium">
            Bouteilles Recyclées 🥤
          </div>
          <div className="text-white/70 text-sm mt-2">
            Hors des océans !
          </div>
        </div>

        {/* CO2 Compensé */}
        <div className="bg-gradient-to-br from-gray-500 to-slate-500 rounded-2xl p-6 text-center hover:scale-105 transition-transform">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Car className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-black text-white mb-2">
            {impact.co2KmCompensated}
          </div>
          <div className="text-white/90 font-medium">
            km de CO2 Évités 🚗
          </div>
          <div className="text-white/70 text-sm mt-2">
            Pour la planète !
          </div>
        </div>
      </div>

      {/* Graphique d'Évolution */}
      <div className="bg-white/5 rounded-2xl p-6">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-5 h-5 text-acid-green" />
          <h4 className="text-lg font-bold text-white">Ton Évolution</h4>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorKg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#39FF14" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#39FF14" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.6)"
              tick={{ fill: 'rgba(255,255,255,0.8)' }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.6)"
              tick={{ fill: 'rgba(255,255,255,0.8)' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="kg" 
              stroke="#39FF14" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorKg)" 
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
          <div className="text-center">
            <div className="text-lg font-bold text-acid-green">
              +{monthlyData[2].kg - monthlyData[0].kg}kg
            </div>
            <div className="text-xs text-white/60">Progression totale</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-acid-green">
              {Math.round((monthlyData[2].kg - monthlyData[1].kg) / 2)}kg/mois
            </div>
            <div className="text-xs text-white/60">Moyenne récente</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-acid-green">
              {Math.round(((monthlyData[2].kg - monthlyData[0].kg) / monthlyData[0].kg) * 100)}%
            </div>
            <div className="text-xs text-white/60">Croissance</div>
          </div>
        </div>
      </div>

      {/* Message de motivation */}
      <div className="mt-6 text-center">
        <p className="text-white/80 text-sm">
          Continue comme ça ! Chaque geste fait une différence énorme 🌍💚
        </p>
      </div>
    </div>
  );
};

export default ImpactCalculator;
