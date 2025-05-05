
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PilgrimageFilter from '@/components/pilgrimages/PilgrimageFilter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Heart, Calendar, User, Filter, ArrowRight, CheckCircle } from 'lucide-react';

// Sample pilgrimage data
const pilgrimages = [
  {
    id: 1,
    title: 'Camino de Santiago',
    location: 'Spain',
    image: 'https://images.unsplash.com/photo-1543785832-0781599970c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    duration: '14 days',
    difficulty: 'Moderate',
    price: '$2,499',
    description: 'A gentle pace version of the famous pilgrimage route, with accessible accommodations and support.',
    accessibility: ['Limited walking routes', 'Van support', 'Private bathrooms'],
    tradition: 'Christian',
    dates: ['May 15, 2023', 'Sep 10, 2023'],
    rating: 4.8
  },
  {
    id: 2,
    title: 'Jerusalem & Holy Land',
    location: 'Israel',
    image: 'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    duration: '10 days',
    difficulty: 'Easy',
    price: '$3,299',
    description: 'Visit sacred sites in Jerusalem, Bethlehem and Nazareth with specialized guides and comfortable accommodations.',
    accessibility: ['Wheelchair accessible', 'Elevator access', 'Medical staff'],
    tradition: 'Interfaith',
    dates: ['Jun 5, 2023', 'Oct 12, 2023'],
    rating: 4.9
  },
  {
    id: 3,
    title: 'Buddhist Circuit',
    location: 'India & Nepal',
    image: 'https://images.unsplash.com/photo-1610809027249-86c649feacd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    duration: '12 days',
    difficulty: 'Moderate',
    price: '$2,799',
    description: 'Journey through the birthplace of Buddhism with visits to Lumbini, Bodh Gaya, and other significant sites.',
    accessibility: ['Limited walking options', 'Air-conditioned transportation', 'Western-style bathrooms'],
    tradition: 'Buddhist',
    dates: ['Mar 20, 2023', 'Nov 5, 2023'],
    rating: 4.7
  },
  {
    id: 4,
    title: 'Marian Shrines Tour',
    location: 'Portugal, Spain & France',
    image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    duration: '11 days',
    difficulty: 'Easy',
    price: '$2,899',
    description: 'Visit Fatima, Lourdes and other Marian shrines across Europe with specialized guides and comfortable accommodations.',
    accessibility: ['Minimal walking required', 'Elevator access', '4-star hotels'],
    tradition: 'Christian',
    dates: ['Apr 10, 2023', 'Aug 22, 2023'],
    rating: 4.9
  },
  {
    id: 5,
    title: 'Ancient Greek Spiritual Journey',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    duration: '8 days',
    difficulty: 'Moderate',
    price: '$2,199',
    description: 'Explore the ancient spiritual sites of Greece including Delphi, Meteora, and Mount Athos.',
    accessibility: ['Some uneven terrain', 'Transportation provided', 'Rest areas available'],
    tradition: 'Interfaith',
    dates: ['May 28, 2023', 'Sep 15, 2023'],
    rating: 4.6
  },
  {
    id: 6,
    title: 'Sacred Sites of Japan',
    location: 'Japan',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    duration: '13 days',
    difficulty: 'Moderate',
    price: '$3,899',
    description: 'Visit Zen temples, Shinto shrines, and sacred mountains across Japan with expert guides and traditional accommodations.',
    accessibility: ['Some steps required', 'Private transportation', 'Modified itinerary options'],
    tradition: 'Buddhist',
    dates: ['Apr 5, 2023', 'Oct 25, 2023'],
    rating: 4.8
  },
];

const Pilgrimages = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <Layout>
      <section className="bg-sacred-light py-12">
        <div className="container-page">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-sacred-dark mb-4">Find Your Sacred Journey</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our curated pilgrimages designed with elderly travelers in mind, 
              featuring accessibility options and community support.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container-page">
          <div className="md:hidden mb-6">
            <Button 
              onClick={() => setFilterVisible(!filterVisible)}
              className="w-full flex items-center justify-between text-lg"
              variant="outline"
            >
              <span className="flex items-center">
                <Filter className="mr-2 h-5 w-5" /> 
                {filterVisible ? 'Hide Filters' : 'Show Filters'}
              </span>
              <span>{pilgrimages.length} pilgrimages</span>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className={`md:w-1/4 ${filterVisible ? 'block' : 'hidden md:block'}`}>
              <PilgrimageFilter />
            </div>
            
            <div className="md:w-3/4">
              <div className="bg-sacred-secondary/10 p-4 rounded-lg mb-6 flex justify-between items-center">
                <div className="text-lg">
                  <span className="font-medium">{pilgrimages.length} pilgrimages</span> found
                </div>
                <div className="flex items-center">
                  <label htmlFor="sort" className="mr-2 text-lg">Sort by:</label>
                  <select id="sort" className="p-2 rounded-md border border-sacred-secondary/30 text-lg">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Duration: Short to Long</option>
                    <option>Rating: High to Low</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-8">
                {pilgrimages.map((pilgrimage) => (
                  <Card key={pilgrimage.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-60 md:h-auto relative">
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
                      
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-2xl">{pilgrimage.title}</CardTitle>
                              <CardDescription className="text-lg flex items-center mt-1">
                                <MapPin className="h-5 w-5 mr-1 inline text-sacred-primary" />
                                {pilgrimage.location}
                              </CardDescription>
                            </div>
                            <div className="bg-sacred-light text-sacred-primary px-3 py-1 rounded-full text-sm font-medium">
                              {pilgrimage.tradition}
                            </div>
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
                          
                          <div className="mb-4">
                            <p className="font-medium mb-2">Accessibility Features:</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {pilgrimage.accessibility.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-700">
                                  <CheckCircle className="h-4 w-4 mr-2 text-sacred-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            <p className="font-medium mr-2">Upcoming Dates:</p>
                            {pilgrimage.dates.map((date, idx) => (
                              <span key={idx} className="bg-sacred-light px-3 py-1 rounded-full text-sm">
                                {date}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        
                        <CardFooter className="flex justify-between flex-wrap gap-4">
                          <div className="flex items-center">
                            <div className="text-lg font-semibold mr-2">Rating: {pilgrimage.rating}/5</div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-5 h-5 ${i < Math.floor(pilgrimage.rating) ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <div className="flex space-x-3">
                            <Button variant="outline" size="icon">
                              <Heart className="h-5 w-5" />
                            </Button>
                            <Button className="bg-sacred-primary hover:bg-sacred-primary/90">
                              View Details <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-2">
                  <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                    1
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                    2
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                    3
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                    ...
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 flex items-center justify-center">
                    8
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pilgrimages;
