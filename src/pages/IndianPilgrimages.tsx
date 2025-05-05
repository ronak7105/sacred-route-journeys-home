
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ArrowDown, ArrowUp } from 'lucide-react';

const indianPilgrimages = [
  {
    id: 1,
    name: "Char Dham Yatra",
    locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    baseLocation: "Uttarakhand",
    duration: "14 days",
    difficulty: "Moderate to High",
    price: 45000,
    description: "The most sacred pilgrimage circuit in the Himalayas visiting four holy sites.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Visit all four abodes of the Char Dham",
      "Special pujas and rituals arranged at each temple",
      "Comfortable accommodations suitable for elderly",
      "Medical support throughout the journey"
    ],
    bestTime: "May to June and September to October"
  },
  {
    id: 2,
    name: "Varanasi Spiritual Journey",
    locations: ["Varanasi", "Sarnath"],
    baseLocation: "Uttar Pradesh",
    duration: "7 days",
    difficulty: "Low",
    price: 25000,
    description: "Experience the spiritual capital of India with its ancient ghats and temples.",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Morning boat ride on the Ganges",
      "Witness the evening Ganga Aarti",
      "Visit to Sarnath where Buddha gave his first sermon",
      "Explore the ancient lanes and temples of Varanasi"
    ],
    bestTime: "October to March"
  },
  {
    id: 3,
    name: "Golden Triangle with Amritsar",
    locations: ["Delhi", "Agra", "Jaipur", "Amritsar"],
    baseLocation: "Multiple States",
    duration: "10 days",
    difficulty: "Low",
    price: 35000,
    description: "Combine the cultural Golden Triangle with a spiritual visit to the Golden Temple.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Visit the Golden Temple and participate in langar seva",
      "Experience the Taj Mahal at sunrise",
      "Explore the Pink City of Jaipur",
      "Witness the Wagah Border ceremony"
    ],
    bestTime: "October to March"
  },
  {
    id: 4,
    name: "South Indian Temple Tour",
    locations: ["Chennai", "Mahabalipuram", "Kanchipuram", "Tirupati", "Madurai", "Rameshwaram"],
    baseLocation: "Tamil Nadu & Andhra Pradesh",
    duration: "12 days",
    difficulty: "Low to Moderate",
    price: 30000,
    description: "Discover the magnificent Dravidian temples of South India.",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Darshan at Tirupati Balaji Temple",
      "Visit the ancient shore temples of Mahabalipuram",
      "Explore the massive Meenakshi Temple complex in Madurai",
      "Bath in the 22 holy wells at Rameshwaram"
    ],
    bestTime: "November to March"
  },
  {
    id: 5,
    name: "Buddhist Circuit Tour",
    locations: ["Bodhgaya", "Rajgir", "Nalanda", "Varanasi", "Kushinagar", "Lumbini"],
    baseLocation: "Bihar & Uttar Pradesh",
    duration: "9 days",
    difficulty: "Low",
    price: 28000,
    description: "Follow in the footsteps of Buddha through the most significant Buddhist sites.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Meditate under the Bodhi Tree where Buddha attained enlightenment",
      "Visit ancient Nalanda University ruins",
      "Explore Sarnath where Buddha gave his first sermon",
      "Visit Kushinagar where Buddha attained Mahaparinirvana"
    ],
    bestTime: "October to March"
  },
  {
    id: 6,
    name: "Spiritual Gujarat",
    locations: ["Dwarka", "Somnath", "Palitana", "Ahmedabad"],
    baseLocation: "Gujarat",
    duration: "8 days",
    difficulty: "Low to Moderate",
    price: 27000,
    description: "Explore the spiritual heritage of Gujarat including Jain and Hindu pilgrimage sites.",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Visit the ancient Dwarkadhish Temple",
      "Witness the magnificent Somnath Temple by the Arabian Sea",
      "Climb the sacred Shatrunjaya Hill with 863 Jain temples in Palitana",
      "Experience the heritage walk in Ahmedabad"
    ],
    bestTime: "October to March"
  }
];

const IndianPilgrimages = () => {
  return (
    <Layout>
      <section className="py-12 bg-sacred-light">
        <div className="container-page">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sacred-dark mb-4">Indian Pilgrimage Destinations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the sacred sites of India with our specially designed pilgrimage journeys for elderly travelers.
              Each route is crafted with comfort, accessibility, and spiritual significance in mind.
            </p>
          </div>
          
          {/* Filter Section would go here */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-10">
            <h2 className="text-2xl font-semibold mb-4">Filter Pilgrimages</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-lg mb-2">Duration</label>
                <select className="w-full p-3 border rounded-lg text-lg">
                  <option>Any Duration</option>
                  <option>1-7 Days</option>
                  <option>8-14 Days</option>
                  <option>15+ Days</option>
                </select>
              </div>
              <div>
                <label className="block text-lg mb-2">Difficulty</label>
                <select className="w-full p-3 border rounded-lg text-lg">
                  <option>Any Difficulty</option>
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              <div>
                <label className="block text-lg mb-2">Price Range</label>
                <select className="w-full p-3 border rounded-lg text-lg">
                  <option>Any Price</option>
                  <option>Under ₹20,000</option>
                  <option>₹20,000 - ₹30,000</option>
                  <option>₹30,000 - ₹40,000</option>
                  <option>₹40,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-lg mb-2">Region</label>
                <select className="w-full p-3 border rounded-lg text-lg">
                  <option>All India</option>
                  <option>North India</option>
                  <option>South India</option>
                  <option>East India</option>
                  <option>West India</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Pilgrimages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {indianPilgrimages.map(pilgrimage => (
              <Card key={pilgrimage.id} className="overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={pilgrimage.image} 
                    alt={pilgrimage.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{pilgrimage.name}</CardTitle>
                  <CardDescription className="text-lg flex items-center">
                    <MapPin className="h-5 w-5 mr-1 text-sacred-primary" /> {pilgrimage.baseLocation}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-lg">
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="flex items-center">
                        <Calendar className="h-5 w-5 mr-1 text-sacred-primary" /> {pilgrimage.duration}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">Difficulty</p>
                      <p className="flex items-center">
                        {pilgrimage.difficulty.includes("Low") && <ArrowDown className="h-5 w-5 mr-1 text-green-500" />}
                        {pilgrimage.difficulty.includes("Moderate") && <ArrowDown className="h-5 w-5 mr-1 text-yellow-500" />}
                        {pilgrimage.difficulty.includes("High") && <ArrowUp className="h-5 w-5 mr-1 text-red-500" />}
                        {pilgrimage.difficulty}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg mb-4">{pilgrimage.description}</p>
                  <div className="bg-sacred-light p-4 rounded-lg">
                    <p className="font-bold text-xl text-sacred-primary mb-2">₹{pilgrimage.price.toLocaleString()}</p>
                    <p className="text-gray-600">All-inclusive package</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg py-6" asChild>
                    <Link to={`/pilgrimage/${pilgrimage.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndianPilgrimages;
