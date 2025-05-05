
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4" aria-label="Main navigation">
      <div className="container-page flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" aria-label="Sacred Routes home">
          <Heart className="h-10 w-10 text-sacred-primary" />
          <span className="text-2xl font-bold text-sacred-dark">Sacred Routes</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/pilgrimages" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
            Pilgrimages
          </Link>
          <Link to="/community" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
            Community
          </Link>
          <Link to="/safety" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
            Safety & Support
          </Link>
          <Link to="/about" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
            About Us
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-lg">
            <User className="mr-2 h-5 w-5" /> Sign In
          </Button>
          <Button className="text-lg bg-sacred-primary hover:bg-sacred-primary/90">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sacred-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16m-7 6h7" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-2">
          <Link 
            to="/pilgrimages" 
            className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
          >
            Pilgrimages
          </Link>
          <Link 
            to="/community" 
            className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
          >
            Community
          </Link>
          <Link 
            to="/safety" 
            className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
          >
            Safety & Support
          </Link>
          <Link 
            to="/about" 
            className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
          >
            About Us
          </Link>

          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full text-lg justify-center">
              <User className="mr-2 h-5 w-5" /> Sign In
            </Button>
            <Button className="w-full text-lg bg-sacred-primary hover:bg-sacred-primary/90">
              Register
            </Button>
          </div>
        </div>
      </div>

      {/* Emergency Help Button */}
      <button className="emergency-btn">
        Emergency Help
      </button>
    </nav>
  );
};

export default Navbar;
