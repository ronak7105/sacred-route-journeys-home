
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Heart, Calendar, User } from 'lucide-react';

// Featured pilgrimage data
const featuredPilgrimages = [
  {
    id: 1,
    title: 'Camino de Santiago',
    location: 'Spain',
    image: 'https://images.unsplash.com/photo-1543785832-0781599970c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    duration: '14 days',
    difficulty: 'Moderate',
    price: '$2,499',
    description: 'A gentle pace version of the famous pilgrimage route, with accessible accommodations and support.',
  },
  {
    id: 2,
    title: 'Jerusalem & Holy Land',
    location: 'Israel',
    image: 'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    duration: '10 days',
    difficulty: 'Easy',
    price: '$3,299',
    description: 'Visit sacred sites in Jerusalem, Bethlehem and Nazareth with specialized guides and comfortable accommodations.',
  },
  {
    id: 3,
    title: 'Buddhist Circuit',
    location: 'India & Nepal',
    image: 'https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    duration: '12 days',
    difficulty: 'Moderate',
    price: '$2,799',
    description: 'Journey through the birthplace of Buddhism with visits to Lumbini, Bodh Gaya, and other significant sites.',
  },
];

const FeaturedPilgrimages = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Pilgrimages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular spiritual journeys, specifically designed for elderly travelers with comfort and accessibility in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPilgrimages.map((pilgrimage) => (
            <Card key={pilgrimage.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <img
                  src={pilgrimage.image}
                  alt={pilgrimage.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sacred-primary font-semibold">
                  {pilgrimage.price}
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">{pilgrimage.title}</CardTitle>
                    <CardDescription className="text-lg flex items-center mt-1">
                      <MapPin className="h-5 w-5 mr-1 inline text-sacred-primary" />
                      {pilgrimage.location}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="icon" aria-label="Add to favorites">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {pilgrimage.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-sacred-light text-sacred-primary px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {pilgrimage.duration}
                  </span>
                  <span className="bg-sacred-light text-sacred-primary px-3 py-1 rounded-full text-sm font-medium">
                    Difficulty: {pilgrimage.difficulty}
                  </span>
                  <span className="bg-sacred-light text-sacred-primary px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Small Groups
                  </span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-sacred-primary hover:bg-sacred-primary/90 text-lg">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/pilgrimages">
            <Button variant="outline" size="lg" className="text-lg">
              View All Pilgrimages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPilgrimages;
