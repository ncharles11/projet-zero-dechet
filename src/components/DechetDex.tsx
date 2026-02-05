import { dechetDexItems } from '../data/dechetDex';
import { Lock, Star, Trophy, Crown } from 'lucide-react';

const DechetDex = () => {
  const unlockedCount = dechetDexItems.filter(item => item.isUnlocked).length;
  const totalCount = dechetDexItems.length;
  const progressPercentage = (unlockedCount / totalCount) * 100;

  const getRarityConfig = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return {
          border: 'border-gray-400',
          bg: 'bg-gradient-to-br from-gray-500 to-gray-600',
          text: 'text-gray-300',
          icon: Trophy,
          label: 'Commun'
        };
      case 'rare':
        return {
          border: 'border-blue-400',
          bg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
          text: 'text-blue-300',
          icon: Star,
          label: 'Rare'
        };
      case 'legendary':
        return {
          border: 'border-yellow-400',
          bg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
          text: 'text-yellow-300',
          icon: Crown,
          label: 'Légendaire'
        };
      default:
        return {
          border: 'border-gray-400',
          bg: 'bg-gradient-to-br from-gray-500 to-gray-600',
          text: 'text-gray-300',
          icon: Trophy,
          label: 'Commun'
        };
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-acid-green" />
          <h3 className="text-2xl font-bold text-white">Déchet-Dex</h3>
        </div>
        <div className="text-acid-green font-bold text-sm">
          {unlockedCount}/{totalCount}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-white/60 mb-2">
          <span>Collection complétée</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-acid-green to-wave-blue h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dechetDexItems.map((item) => {
          const rarityConfig = getRarityConfig(item.rarity);
          const RarityIcon = rarityConfig.icon;

          return (
            <div
              key={item.id}
              className={`relative rounded-2xl p-4 border-2 transition-all hover:scale-105 ${
                item.isUnlocked
                  ? `${rarityConfig.border} ${rarityConfig.bg} hover:shadow-lg`
                  : 'border-gray-600 bg-gray-800/50 opacity-60'
              }`}
            >
              {/* Lock Overlay */}
              {!item.isUnlocked && (
                <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center z-10">
                  <Lock className="w-8 h-8 text-gray-400" />
                </div>
              )}

              {/* Content */}
              <div className={`text-center ${!item.isUnlocked && 'filter grayscale'}`}>
                {/* Icon */}
                <div className="text-4xl mb-3">
                  {item.isUnlocked ? item.icon : '❓'}
                </div>

                {/* Rarity Badge */}
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <RarityIcon className={`w-3 h-3 ${item.isUnlocked ? rarityConfig.text : 'text-gray-500'}`} />
                  <span className={`text-xs font-medium ${item.isUnlocked ? rarityConfig.text : 'text-gray-500'}`}>
                    {rarityConfig.label}
                  </span>
                </div>

                {/* Name */}
                <h4 className={`font-bold text-sm mb-1 ${item.isUnlocked ? 'text-white' : 'text-gray-400'}`}>
                  {item.isUnlocked ? item.name : '???'}
                </h4>

                {/* Description */}
                <p className={`text-xs ${item.isUnlocked ? 'text-white/70' : 'text-gray-500'}`}>
                  {item.isUnlocked ? item.description : 'Non découvert'}
                </p>
              </div>

              {/* Shine Effect for Unlocked Items */}
              {item.isUnlocked && item.rarity === 'legendary' && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-transparent pointer-events-none"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Stats */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-300">
              {dechetDexItems.filter(item => item.rarity === 'common' && item.isUnlocked).length}
            </div>
            <div className="text-xs text-gray-500">Communs</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-300">
              {dechetDexItems.filter(item => item.rarity === 'rare' && item.isUnlocked).length}
            </div>
            <div className="text-xs text-blue-500">Rares</div>
          </div>
          <div>
            <div className="text-lg font-bold text-yellow-300">
              {dechetDexItems.filter(item => item.rarity === 'legendary' && item.isUnlocked).length}
            </div>
            <div className="text-xs text-yellow-500">Légendaires</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DechetDex;
