
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PaymentModal from '@/components/ui/payment-modal';
import { Check } from 'lucide-react';

const PilgrimageDetail = () => {
  const { id } = useParams();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  
  // This would be fetched from an API in a real implementation
  // We're using dummy data for demonstration
  const pilgrimage = {
    id: id,
    name: "Varanasi Spiritual Journey",
    description: "Experience the spiritual essence of one of the world's oldest continuously inhabited cities. Varanasi, also known as Kashi, is regarded as the spiritual capital of India and a major pilgrimage site for Hindus.",
    longDescription: "Situated on the banks of the sacred River Ganges, Varanasi has been a center of learning and civilization for over 3,000 years. According to Hindu mythology, Lord Shiva founded the city. The city's ghats (river banks with steps) are famous for religious ceremonies, cremations, and spiritual rituals. Pilgrims visit to wash away their sins in the holy waters and to perform last rites for the deceased, believing that those who die in Varanasi achieve moksha (liberation from the cycle of rebirth).",
    images: [
      "https://images.unsplash.com/photo-1524492514790-1377e5612d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609948543372-74e748e7a64c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596284466247-c31819d87bf3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    ],
    location: "Varanasi, Uttar Pradesh, India",
    difficulty: "Moderate",
    duration: "7 days",
    price: 45000,
    cost: {
      accommodation: 20000,
      meals: 10000,
      transportation: 8000,
      guides: 5000,
      misc: 2000
    },
    highlights: [
      "Morning boat ride on the sacred Ganges river",
      "Attend the mesmerizing evening Ganga Aarti ceremony",
      "Visit the ancient Kashi Vishwanath Temple dedicated to Lord Shiva",
      "Explore the ancient Buddhist site of Sarnath",
      "Guided meditation sessions at peaceful riverside locations",
      "Cultural performances of classical music and dance"
    ],
    accessibility: [
      "Most sites accessible with minimal walking",
      "Wheelchair access available at major temples",
      "Golf cart transportation between distant sites",
      "Medical staff available throughout the journey",
      "Special dietary accommodations available"
    ],
    inclusions: [
      "6 nights accommodation in senior-friendly hotels",
      "All meals (vegetarian with non-vegetarian options)",
      "Air-conditioned transportation throughout",
      "English-speaking spiritual guide",
      "All entrance fees to temples and sites",
      "Daily yoga and meditation sessions",
      "Travel insurance covering medical emergencies"
    ]
  };

  const handleBookNow = () => {
    setIsPaymentModalOpen(true);
  };

  // Determine the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === pilgrimage.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? pilgrimage.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Layout>
      <section className="py-12 bg-sacred-light">
        <div className="container-page">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Image Gallery */}
            <div className="relative h-[400px] md:h-[500px]">
              {pilgrimage.images && pilgrimage.images.length > 0 && (
                <img 
                  src={pilgrimage.images[currentImageIndex]}
                  alt={`${pilgrimage.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", pilgrimage.images[currentImageIndex]);
                    e.currentTarget.src = "https://images.unsplash.com/photo-1524492514790-1377e5612d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
              )}
              
              {/* Image Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button 
                  onClick={goToPreviousImage}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={goToNextImage}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full">
                {currentImageIndex + 1} / {pilgrimage.images?.length || 0}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8">
              <div className="mb-8 border-b pb-6">
                <h1 className="text-4xl font-bold text-sacred-dark mb-2">{pilgrimage.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{pilgrimage.location}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-sacred-primary/10 text-sacred-primary px-4 py-2 rounded-full font-medium">
                    {pilgrimage.duration}
                  </span>
                  <span className="bg-sacred-primary/10 text-sacred-primary px-4 py-2 rounded-full font-medium">
                    {pilgrimage.difficulty} Difficulty
                  </span>
                </div>
                
                <p className="text-lg text-gray-700 mb-6">{pilgrimage.description}</p>
                <p className="text-lg text-gray-700">{pilgrimage.longDescription}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
                {/* Left Column - Highlights & Accessibility */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-sacred-dark mb-4">Highlights</h2>
                    <ul className="space-y-3">
                      {pilgrimage.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-sacred-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                          <span className="text-lg text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-sacred-dark mb-4">Accessibility Features</h2>
                    <ul className="space-y-3">
                      {pilgrimage.accessibility.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-sacred-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                          <span className="text-lg text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Right Column - Pricing & Inclusions */}
                <div className="space-y-8">
                  <div className="bg-sacred-light p-6 rounded-lg border border-sacred-primary/20">
                    <h2 className="text-2xl font-bold text-sacred-dark mb-4">Pricing</h2>
                    <div className="text-center mb-6">
                      <p className="text-lg text-gray-700">Total Price Per Person</p>
                      <p className="text-4xl font-bold text-sacred-primary">₹{pilgrimage.price.toLocaleString('en-IN')}</p>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">Cost Breakdown</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-lg">
                        <span>Accommodation:</span>
                        <span>₹{pilgrimage.cost.accommodation.toLocaleString('en-IN')}</span>
                      </li>
                      <li className="flex justify-between text-lg">
                        <span>Meals:</span>
                        <span>₹{pilgrimage.cost.meals.toLocaleString('en-IN')}</span>
                      </li>
                      <li className="flex justify-between text-lg">
                        <span>Transportation:</span>
                        <span>₹{pilgrimage.cost.transportation.toLocaleString('en-IN')}</span>
                      </li>
                      <li className="flex justify-between text-lg">
                        <span>Guides & Activities:</span>
                        <span>₹{pilgrimage.cost.guides.toLocaleString('en-IN')}</span>
                      </li>
                      <li className="flex justify-between text-lg">
                        <span>Miscellaneous:</span>
                        <span>₹{pilgrimage.cost.misc.toLocaleString('en-IN')}</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full text-xl py-6 bg-sacred-primary hover:bg-sacred-primary/90"
                        onClick={handleBookNow}
                      >
                        <Check className="mr-2 h-6 w-6" />
                        Book Now
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-sacred-dark mb-4">What's Included</h2>
                    <ul className="space-y-3">
                      {pilgrimage.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-start">
                          <span className="bg-sacred-primary text-white h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">✓</span>
                          <span className="text-lg text-gray-700">{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={pilgrimage.price}
        pilgrimageName={pilgrimage.name}
      />
    </Layout>
  );
};

export default PilgrimageDetail;
