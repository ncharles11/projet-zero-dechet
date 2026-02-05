import { Link } from 'react-router-dom';
import { Waves, Heart, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-deep-ocean/90 backdrop-blur-md z-50 border-b border-acid-green/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Waves className="w-8 h-8 text-acid-green group-hover:animate-wave" />
            <span className="text-2xl font-black text-white tracking-tight">
              ZÉRO DÉCHETS
            </span>
            <span className="text-acid-green font-black text-2xl">EN RADE</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-acid-green transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/events" 
              className="text-white hover:text-acid-green transition-colors font-medium"
            >
              Events
            </Link>
            <Link 
              to="/profile" 
              className="text-white hover:text-acid-green transition-colors font-medium"
            >
              Profile
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-acid-green/10 hover:bg-acid-green/20 transition-colors">
              <Heart className="w-5 h-5 text-acid-green" />
            </button>
            <Link to="/profile" className="p-2 rounded-full bg-acid-green/10 hover:bg-acid-green/20 transition-colors">
              <User className="w-5 h-5 text-acid-green" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
