
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-sacred-light via-white to-sacred-light py-16 md:py-20">
      <div className="container-page grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-sacred-secondary/20 px-4 py-2 rounded-full mb-4">
            <p className="text-sacred-primary font-medium">Meaningful Journeys for All Ages</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-sacred-dark mb-6 leading-tight">
            Sacred Pilgrimages with <span className="text-sacred-primary">Safety</span> and <span className="text-sacred-primary">Community</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Experience spiritual journeys designed for elderly travelers with 
            comfort, safety, and community at the heart of every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-xl bg-sacred-primary hover:bg-sacred-primary/90 h-auto py-4">
              Browse Pilgrimages
            </Button>
            <Button size="lg" variant="outline" className="text-xl h-auto py-4">
              How It Works
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <img 
                  src="/lovable-uploads/961c35cf-5aa7-44e4-9c4f-998098136bd9.png" 
                  alt="Sacred Routes Logo" 
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h3 className="font-medium text-sacred-dark">Community Support</h3>
                <p className="text-gray-600">Never journey alone</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <Shield className="h-8 w-8 text-sacred-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sacred-dark">Enhanced Safety</h3>
                <p className="text-gray-600">Peace of mind</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <MapPin className="h-8 w-8 text-sacred-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sacred-dark">Family Tracking</h3>
                <p className="text-gray-600">Stay connected</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-white p-4 rounded-xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Elderly pilgrims on a scenic mountain journey" 
              className="rounded-lg w-full h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-sacred-primary">
              <p className="text-lg font-medium">
                "Sacred Routes helped me fulfill my lifelong dream of walking the Camino. The support was incredible!"
              </p>
              <p className="mt-2 text-sacred-primary font-medium">- Martha, 72</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-sacred-primary text-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-bold">1,000+ Pilgrims</p>
            <p>Safely Journeyed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
