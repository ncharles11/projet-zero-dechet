import { useState, useRef, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const DIRTY_IMAGE = "/dirty.png";
const CLEAN_IMAGE = "/clean.jpeg";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, percentage)));
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          NOTRE IMPACT
          <span className="text-acid-green block">EN IMAGES</span>
        </h2>
        <p className="text-white/80 text-lg">
          Glisse la barre pour voir la transformation
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img 
            src={DIRTY_IMAGE}
            alt="Plage polluée avant nettoyage"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-bold">
            AVANT
          </div>
        </div>

        {/* After Image */}
        <div 
          className="absolute inset-0"
          style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
          }}
        >
          <img 
            src={CLEAN_IMAGE}
            alt="Plage propre après nettoyage"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-acid-green/90 text-deep-ocean px-3 py-1 rounded-full text-sm font-bold">
            APRÈS
          </div>
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex space-x-1">
              <ArrowLeft className="w-4 h-4 text-deep-ocean" />
              <ArrowRight className="w-4 h-4 text-deep-ocean" />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {isDragging ? 'Glisse...' : 'Clique et glisse pour comparer'}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="text-3xl font-black text-acid-green mb-1">-95%</div>
          <div className="text-white/70 text-sm">Déchets plastiques</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-acid-green mb-1">+200%</div>
          <div className="text-white/70 text-sm">Faune revenue</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-acid-green mb-1">100%</div>
          <div className="text-white/70 text-sm">Bénévoles fiers</div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
