import { useState } from 'react';
import { X, Camera, Share2, Heart, MessageCircle, Bookmark } from 'lucide-react';

interface ShareImpactProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareImpact = ({ isOpen, onClose }: ShareImpactProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleScreenshot = () => {
    setIsTakingScreenshot(true);
    // Simulate screenshot effect
    setTimeout(() => {
      setIsTakingScreenshot(false);
      // In a real app, this would trigger actual screenshot functionality
      alert('📸 Screenshot capturé ! Prêt à partager sur Instagram ✨');
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm">
        {/* Instagram Story Container (9:16 ratio) */}
        <div className="relative aspect-[9/16] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Instagram UI Elements */}
          <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50"></div>
              <div className="text-white text-sm font-medium">zero_dechets_en_rade</div>
            </div>
            <div className="text-white text-xs">•••</div>
          </div>

          {/* Progress Bar */}
          <div className="absolute top-16 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-white rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            
            {/* Logo/Icon */}
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8 border-2 border-white/30">
              <div className="text-4xl">🌍</div>
            </div>

            {/* Impact Number */}
            <div className="text-7xl font-black text-white mb-4 drop-shadow-lg">
              5.2
            </div>
            
            {/* Unit */}
            <div className="text-2xl font-bold text-white mb-6 drop-shadow">
              KG DE DÉCHETS
            </div>

            {/* Message */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/30">
              <p className="text-white font-bold text-lg mb-2">
                Ramassés aujourd'hui ! 💪
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <span>📍</span>
                <span>Plage du Moulin Blanc</span>
              </div>
            </div>

            {/* Hashtag */}
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
              <span className="text-white font-bold text-lg">#ZeroDechetsEnRade</span>
            </div>

            {/* Achievement Badge */}
            <div className="absolute bottom-8 right-8 bg-yellow-400 text-deep-ocean rounded-full p-3 shadow-lg">
              <div className="text-2xl">🏆</div>
            </div>
          </div>

          {/* Instagram Bottom Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <Heart className="w-6 h-6 text-white" />
                <MessageCircle className="w-6 h-6 text-white" />
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <Bookmark className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Screenshot Effect */}
          {isTakingScreenshot && (
            <div className="absolute inset-0 bg-white/30 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <Camera className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                <p className="text-purple-600 font-bold">Capture en cours...</p>
              </div>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/20"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col space-y-3">
          <button
            onClick={handleScreenshot}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Camera className="w-5 h-5" />
            <span>📸 Screenshot & Partage !</span>
          </button>
          
          <button
            onClick={onClose}
            className="w-full bg-white/10 backdrop-blur-sm text-white py-3 rounded-2xl font-medium border border-white/20 hover:bg-white/15 transition-colors"
          >
            Plus tard
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-4 text-center">
          <p className="text-white/60 text-sm">
            📱 Appuie sur le bouton pour capturer ta Story Instagram !
          </p>
          <p className="text-white/40 text-xs mt-1">
            Partage tes exploits et inspire tes amis 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareImpact;
