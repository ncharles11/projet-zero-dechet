import { Link } from 'react-router-dom';
import ImpactCounter from '../components/ImpactCounter';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import WeatherWidget from '../components/WeatherWidget';
import { ArrowRight, Sparkles, Waves } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-ocean via-ocean-blue to-wave-blue">
      <WeatherWidget />
      <div className="pt-20 px-4">
        {/* Hero Section */}
        <section className="container mx-auto py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-acid-green/10 rounded-full px-4 py-2 mb-6 border border-acid-green/30">
              <Sparkles className="w-4 h-4 text-acid-green" />
              <span className="text-acid-green font-medium text-sm">Gen Z Movement</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              SAUVE TA 
              <span className="text-acid-green block animate-wave">RADE</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Rejoins la génération qui nettoie nos plages. 
              <span className="text-acid-green font-bold"> Un geste, un impact.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/events"
                className="group inline-flex items-center space-x-2 bg-acid-green text-deep-ocean px-8 py-4 rounded-full font-black text-lg hover:bg-acid-green/90 transition-all hover:scale-105 shadow-lg shadow-acid-green/25"
              >
                <span>JOIN THE MOVEMENT</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/profile"
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/15 transition-all"
              >
                <Waves className="w-5 h-5" />
                <span>Mon Impact</span>
              </Link>
            </div>
          </div>
          
          {/* Impact Counter */}
          <ImpactCounter />
          
          {/* Before/After Slider */}
          <BeforeAfterSlider />
          
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl mb-4">🌊</div>
              <h3 className="text-2xl font-bold text-white mb-2">Clean Your Coast</h3>
              <p className="text-white/70">Chaque ramassage compte. Zéro déchet, maximum d'impact.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-2">Community First</h3>
              <p className="text-white/70">Rejoins des milliers de jeunes engagés pour la planète.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-center hover:bg-white/10 transition-all">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-2">Level Up</h3>
              <p className="text-white/70">Gagne des badges, deviens un éco-héros de la rade.</p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto py-16">
          <div className="bg-gradient-to-r from-acid-green/20 to-wave-blue/20 rounded-3xl p-12 border border-acid-green/30 text-center">
            <h2 className="text-4xl font-black text-white mb-4">
              PRÊT À FAIRE LA DIFFÉRENCE ?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Le prochain ramassage commence bientôt. Ta place t'attend.
            </p>
            <Link 
              to="/events"
              className="inline-flex items-center space-x-2 bg-acid-green text-deep-ocean px-8 py-4 rounded-full font-black text-lg hover:bg-acid-green/90 transition-all hover:scale-105 shadow-lg shadow-acid-green/25"
            >
              <span>VOIR LES EVENTS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
