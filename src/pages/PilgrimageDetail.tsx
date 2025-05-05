
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, ArrowDown, ArrowUp, Bus } from 'lucide-react';

// Mock data for a single pilgrimage destination
const pilgrimageData = {
  id: 1,
  name: "Char Dham Yatra",
  locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  baseLocation: "Uttarakhand",
  duration: "14 days",
  difficulty: "Moderate to High",
  price: 45000,
  description: "The Char Dham Yatra is a pilgrimage to four holy sites in the Indian Himalayas: Yamunotri, Gangotri, Kedarnath and Badrinath. These four ancient temples also mark the spiritual source of four sacred rivers: Yamuna, Ganges, Mandakini, and Alaknanda respectively. This journey has been undertaken by Hindu devotees, saints and sages for centuries, seeking spiritual purification and salvation.",
  longDescription: "The Char Dham Yatra holds profound spiritual significance in Hinduism. It's believed that undertaking this pilgrimage enables pilgrims to wash away their sins and attain 'moksha' (liberation from the cycle of rebirth). Each temple has its own unique significance: Yamunotri is dedicated to Goddess Yamuna; Gangotri to Goddess Ganga; Kedarnath houses one of the 12 Jyotirlingas of Lord Shiva; and Badrinath is dedicated to Lord Vishnu.\n\nOur carefully planned itinerary allows elderly travelers to experience this sacred journey with comfort and care. The route has been optimized to allow for gradual acclimatization to the higher altitudes, with rest days built into the schedule. Our experienced guides are well-versed in both the spiritual significance and the practical aspects of this pilgrimage.",
  image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ],
  highlights: [
    "Visit all four abodes of the Char Dham",
    "Special pujas and rituals arranged at each temple",
    "Comfortable accommodations suitable for elderly",
    "Medical support throughout the journey",
    "Experienced guides knowledgeable about the local culture and traditions",
    "All meals prepared with consideration for dietary restrictions"
  ],
  inclusions: [
    "13 nights' accommodation in 3-star hotels and best available guesthouses",
    "All meals (vegetarian breakfast, lunch, and dinner)",
    "AC luxury vehicle for transfers and sightseeing as per itinerary",
    "English-speaking spiritual guide throughout the journey",
    "Entrance fees for temples and monuments mentioned in the itinerary",
    "Special puja arrangements at all major temples",
    "Bottled water during sightseeing and transfers",
    "All applicable taxes"
  ],
  exclusions: [
    "Additional charges for still/video camera at monuments",
    "Personal expenses such as laundry, telephone calls, tips, etc.",
    "Any helicopter services for Kedarnath (can be arranged at additional cost)",
    "Any meals not mentioned in the inclusions",
    "Travel insurance",
    "Any additional expenses due to unforeseen circumstances like natural calamities, road blockages, etc."
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Haridwar",
      description: "Arrive at Haridwar and transfer to hotel. Evening attend the famous Ganga Aarti at Har Ki Pauri. Overnight stay in Haridwar."
    },
    {
      day: 2,
      title: "Haridwar to Barkot",
      description: "After breakfast, drive to Barkot (200 km/7 hrs). On the way, visit Kempty Falls. Overnight stay in Barkot."
    },
    {
      day: 3,
      title: "Barkot to Yamunotri and back to Barkot",
      description: "Early morning drive to Janki Chatti. Trek or take pony/palki to Yamunotri Temple (6 km). After darshan and puja, return to Barkot for overnight stay."
    },
    // More days would be included
  ],
  accessibility: {
    mobilityRating: "Challenging - some locations require walking and climbing steps",
    accommodationAccess: "Most hotels have elevator access, but some don't",
    transportAccess: "Specially adapted vehicles with extra comfort for elderly travelers",
    medicalSupport: "Oxygen cylinders available, medical staff accompanies each group",
  },
  bestTime: "May to June and September to October",
  upcomingDepartures: [
    { date: "June 15, 2025", availableSeats: 12 },
    { date: "September 10, 2025", availableSeats: 20 },
    { date: "October 5, 2025", availableSeats: 8 },
  ],
  priceBreakdown: [
    { item: "Accommodation", amount: 18000 },
    { item: "Transportation", amount: 12000 },
    { item: "Meals", amount: 8000 },
    { item: "Guide Services", amount: 4000 },
    { item: "Temple Offerings & Pujas", amount: 2000 },
    { item: "Miscellaneous", amount: 1000 },
  ]
};

const PilgrimageDetail = () => {
  const { id } = useParams();
  const [selectedDeparture, setSelectedDeparture] = useState<string | null>(null);
  
  // In a real app, we'd fetch the data based on the id parameter
  const pilgrimage = pilgrimageData;

  const totalPrice = pilgrimage.priceBreakdown.reduce((total, item) => total + item.amount, 0);

  return (
    <Layout>
      <section className="py-12 bg-sacred-light">
        <div className="container-page">
          {/* Header Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="h-80 relative">
              <img 
                src={pilgrimage.image} 
                alt={pilgrimage.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-8 text-white">
                  <h1 className="text-4xl font-bold mb-2">{pilgrimage.name}</h1>
                  <div className="flex items-center text-xl">
                    <MapPin className="h-5 w-5 mr-2" /> {pilgrimage.baseLocation}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 mr-3 text-sacred-primary" />
                  <div>
                    <p className="font-semibold">Duration</p>
                    <p>{pilgrimage.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {pilgrimage.difficulty.includes("Low") && <ArrowDown className="h-8 w-8 mr-3 text-green-500" />}
                  {pilgrimage.difficulty.includes("Moderate") && <ArrowDown className="h-8 w-8 mr-3 text-yellow-500" />}
                  {pilgrimage.difficulty.includes("High") && <ArrowUp className="h-8 w-8 mr-3 text-red-500" />}
                  <div>
                    <p className="font-semibold">Difficulty</p>
                    <p>{pilgrimage.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bus className="h-8 w-8 mr-3 text-sacred-primary" />
                  <div>
                    <p className="font-semibold">Best Time to Visit</p>
                    <p>{pilgrimage.bestTime}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="mb-10">
                <TabsList className="grid grid-cols-4 w-full mb-6">
                  <TabsTrigger value="overview" className="text-lg py-3">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary" className="text-lg py-3">Itinerary</TabsTrigger>
                  <TabsTrigger value="inclusions" className="text-lg py-3">Inclusions</TabsTrigger>
                  <TabsTrigger value="accessibility" className="text-lg py-3">Accessibility</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="text-lg">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">About This Pilgrimage</h2>
                      <p className="mb-6">{pilgrimage.description}</p>
                      <p className="mb-6">{pilgrimage.longDescription}</p>
                      
                      <h3 className="text-xl font-bold mb-3">Highlights</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        {pilgrimage.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-bold mb-3">Gallery</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {pilgrimage.gallery.map((image, index) => (
                          <img 
                            key={index}
                            src={image} 
                            alt={`${pilgrimage.name} - Image ${index+1}`} 
                            className="rounded-lg h-40 w-full object-cover"
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="itinerary" className="text-lg">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Day-by-Day Itinerary</h2>
                      <div className="space-y-6">
                        {pilgrimage.itinerary.map((day) => (
                          <div key={day.day} className="border-l-4 border-sacred-primary pl-4">
                            <h3 className="text-xl font-bold">Day {day.day}: {day.title}</h3>
                            <p>{day.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="inclusions" className="text-lg">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                      <ul className="list-disc pl-6 mb-8 space-y-2">
                        {pilgrimage.inclusions.map((inclusion, index) => (
                          <li key={index} className="text-green-700">{inclusion}</li>
                        ))}
                      </ul>
                      
                      <h2 className="text-2xl font-bold mb-4">What's Not Included</h2>
                      <ul className="list-disc pl-6 space-y-2">
                        {pilgrimage.exclusions.map((exclusion, index) => (
                          <li key={index} className="text-red-700">{exclusion}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="accessibility" className="text-lg">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Accessibility Information</h2>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Mobility Considerations</h3>
                          <p>{pilgrimage.accessibility.mobilityRating}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Accommodation Accessibility</h3>
                          <p>{pilgrimage.accessibility.accommodationAccess}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                          <p>{pilgrimage.accessibility.transportAccess}</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">Medical Support</h3>
                          <p>{pilgrimage.accessibility.medicalSupport}</p>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-6">
                        <h4 className="text-xl font-semibold mb-2">Important Note for Elderly Travelers</h4>
                        <p>
                          This pilgrimage includes visits to sites at higher altitudes and may require some walking on uneven terrain.
                          We've designed the itinerary with plenty of rest days for acclimatization, but please consult with your
                          doctor before booking if you have any health concerns.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg sticky top-6">
                <CardHeader className="bg-sacred-primary text-white">
                  <CardTitle className="text-2xl font-bold">₹{pilgrimage.price.toLocaleString()}</CardTitle>
                  <CardDescription className="text-white/90 text-lg">per person</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Price Breakdown</h3>
                    <div className="space-y-2">
                      {pilgrimage.priceBreakdown.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span>{item.item}</span>
                          <span>₹{item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                      <div className="border-t pt-2 mt-2 font-bold flex justify-between">
                        <span>Total</span>
                        <span>₹{totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Select Departure Date</h3>
                    <div className="space-y-2">
                      {pilgrimage.upcomingDepartures.map((departure, index) => (
                        <div 
                          key={index} 
                          className={`border p-4 rounded-lg cursor-pointer ${selectedDeparture === departure.date ? 'border-sacred-primary bg-sacred-light' : ''}`}
                          onClick={() => setSelectedDeparture(departure.date)}
                        >
                          <div className="flex justify-between">
                            <span className="font-medium">{departure.date}</span>
                            <span className="text-green-600">{departure.availableSeats} seats left</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full text-xl py-7" 
                    disabled={!selectedDeparture}
                  >
                    Book Now
                  </Button>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-500">
                    <Users className="h-5 w-5" />
                    <span>16 travelers have booked this trip</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PilgrimageDetail;
