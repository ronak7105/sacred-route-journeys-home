
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, User, LogIn, PhoneCall } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import EmergencyModal from '../ui/emergency-modal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
          {isLoggedIn && (
            <Link to="/trips" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
              Current & Upcoming Trips
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/vote" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
              Vote on Next Trip
            </Link>
          )}
          <Link to="/about" className="text-lg font-medium text-sacred-dark hover:text-sacred-primary transition-colors">
            About Us
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Button variant="outline" className="text-lg" asChild>
                <Link to="/login">
                  <LogIn className="mr-2 h-5 w-5" /> Sign In
                </Link>
              </Button>
              <Button className="text-lg bg-sacred-primary hover:bg-sacred-primary/90" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="text-lg" asChild>
                <Link to="/dashboard">
                  <User className="mr-2 h-5 w-5" /> My Dashboard
                </Link>
              </Button>
              <Button 
                variant="outline" 
                className="text-lg text-red-500 border-red-500 hover:bg-red-50"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </>
          )}
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
          {isLoggedIn && (
            <Link 
              to="/trips" 
              className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
            >
              Current & Upcoming Trips
            </Link>
          )}
          {isLoggedIn && (
            <Link 
              to="/vote" 
              className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
            >
              Vote on Next Trip
            </Link>
          )}
          <Link 
            to="/about" 
            className="block p-4 text-xl font-medium text-sacred-dark hover:bg-sacred-light rounded-md"
          >
            About Us
          </Link>

          <div className="pt-4 space-y-2">
            {!isLoggedIn ? (
              <>
                <Button variant="outline" className="w-full text-lg justify-center" asChild>
                  <Link to="/login">
                    <LogIn className="mr-2 h-5 w-5" /> Sign In
                  </Link>
                </Button>
                <Button className="w-full text-lg bg-sacred-primary hover:bg-sacred-primary/90" asChild>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" className="w-full text-lg justify-center" asChild>
                  <Link to="/dashboard">
                    <User className="mr-2 h-5 w-5" /> My Dashboard
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full text-lg text-red-500 border-red-500 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Help Button */}
      <button 
        className="emergency-btn fixed bottom-4 right-4 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-red-700 transition-colors z-50"
        onClick={() => setIsEmergencyModalOpen(true)}
      >
        <PhoneCall className="h-5 w-5" />
        <span className="font-bold">Emergency Help</span>
      </button>
      
      {/* Emergency Modal */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        guide={{ name: "Anita Singh", phone: "+91 98765 43210" }}
        bus={{ driver: "Rajesh Kumar", phone: "+91 87654 32109" }}
      />
    </nav>
  );
};

export default Navbar;
