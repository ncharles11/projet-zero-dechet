import { mockUser } from '../data/user';
import { useState } from 'react';
import DechetDex from '../components/DechetDex';
import ShareImpact from '../components/ShareImpact';
import ImpactCalculator from '../components/ImpactCalculator';
import { Trophy, Target, Award, Star } from 'lucide-react';

const Profile = () => {
  const { name, level, xp, badges, totalWasteCollected, eventsParticipated } = mockUser;
  const [showShareImpact, setShowShareImpact] = useState(false);
  
  const xpForNextLevel = (level + 1) * 100;
  const xpProgress = (xp / xpForNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-ocean via-ocean-blue to-wave-blue pt-20 px-4">
      <div className="container mx-auto py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            MON
            <span className="text-acid-green block">IMPACT</span>
          </h1>
          <p className="text-xl text-white/80">
            Suivi de ta progression écologique
          </p>
        </div>

        {/* User Info Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-acid-green to-wave-blue rounded-full flex items-center justify-center text-4xl font-black text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-acid-green" />
                  <span className="text-white font-medium">Level {level}</span>
                </div>
                <div className="text-white/60">•</div>
                <div className="text-white/80">
                  {xp} / {xpForNextLevel} XP
                </div>
              </div>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-white/60 mb-2">
              <span>Progression vers le niveau {level + 1}</span>
              <span>{Math.round(xpProgress)}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-acid-green to-wave-blue h-3 rounded-full transition-all duration-500"
                style={{ width: `${xpProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-acid-green mb-1">
                {totalWasteCollected}
              </div>
              <div className="text-xs text-white/60">kg collectés</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-acid-green mb-1">
                {eventsParticipated}
              </div>
              <div className="text-xs text-white/60">events</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-acid-green mb-1">
                {badges.filter(b => b.unlocked).length}
              </div>
              <div className="text-xs text-white/60">badges</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-acid-green mb-1">
                #42
              </div>
              <div className="text-xs text-white/60">classement</div>
            </div>
          </div>
        </div>

        {/* Dechet-Dex Section */}
        <DechetDex />

        {/* Impact Calculator Section */}
        <ImpactCalculator totalWeight={totalWasteCollected} />

        {/* Badges Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="w-6 h-6 text-acid-green" />
            <h3 className="text-2xl font-bold text-white">Mes Badges</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {badges.map((badge) => (
              <div 
                key={badge.id}
                className={`relative rounded-2xl p-6 border transition-all ${
                  badge.unlocked 
                    ? 'bg-white/10 border-acid-green/30 hover:bg-white/15' 
                    : 'bg-white/5 border-white/10 opacity-50'
                }`}
              >
                <div className="text-4xl mb-3 text-center">
                  {badge.icon}
                </div>
                <h4 className="font-bold text-white text-center mb-2">
                  {badge.name}
                </h4>
                <p className="text-xs text-white/60 text-center">
                  {badge.description}
                </p>
                {badge.unlocked && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-acid-green rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-deep-ocean" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-6 h-6 text-acid-green" />
            <h3 className="text-2xl font-bold text-white">Objectifs à venir</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Éco-Héros</span>
                <span className="text-acid-green text-sm">52.5kg restants</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-acid-green to-wave-blue h-2 rounded-full" style={{ width: '47.5%' }}></div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Master Océan</span>
                <span className="text-acid-green text-sm">13 events restants</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-gradient-to-r from-acid-green to-wave-blue h-2 rounded-full" style={{ width: '48%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Impact Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowShareImpact(true)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-black text-lg hover:shadow-lg transition-all hover:scale-105"
          >
            <span>Partager mon impact</span>
            <span>✨</span>
          </button>
        </div>
      </div>

      {/* Share Impact Modal */}
      <ShareImpact isOpen={showShareImpact} onClose={() => setShowShareImpact(false)} />
    </div>
  );
};

export default Profile;
