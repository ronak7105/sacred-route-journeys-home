
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MapPin, User, Calendar, Bus, PhoneCall, List, X, Pen, Text } from 'lucide-react';
import EmergencyModal from '@/components/ui/emergency-modal';
import ItineraryModal from '@/components/ui/itinerary-modal';
import EditProfileModal from '@/components/ui/edit-profile-modal';
import ReviewModal from '@/components/ui/review-modal';
import { toast } from '@/hooks/use-toast';

const Dashboard = () => {
  // States for modals
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isItineraryModalOpen, setIsItineraryModalOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedTripForReview, setSelectedTripForReview] = useState<string | null>(null);

  // Sample data - would be fetched from API in real app
  const userData = {
    name: "Rajesh Sharma",
    age: 68,
    email: "rajesh.sharma@example.com",
    joinDate: "15 Jan 2025",
  };
  
  const upcomingTrips = [
    {
      id: 1,
      destination: "Varanasi",
      startDate: "15 Jun 2025",
      endDate: "22 Jun 2025",
      status: "Confirmed",
      guide: {
        name: "Anita Singh",
        phone: "+91 98765 43210"
      },
      bus: {
        driver: "Mahesh Singh",
        number: "UP 70 AB 1234",
        type: "Luxury AC Sleeper",
        phone: "+91 77777 88888"
      }
    }
  ];

  const currentTrip = {
    id: 2,
    destination: "Rishikesh",
    currentLocation: "Haridwar",
    guide: {
      name: "Mohan Patel",
      phone: "+91 87654 32109"
    },
    bus: {
      driver: "Ramesh Kumar",
      number: "UK 07 CD 5678",
      type: "Premium AC",
      phone: "+91 66666 77777"
    },
    latitude: 29.9457,
    longitude: 78.1642
  };

  const pastTrips = [
    {
      id: 3,
      destination: "Tirupati",
      startDate: "10 Feb 2025",
      endDate: "15 Feb 2025",
      rating: 4.8,
    }
  ];

  const sampleItinerary = [
    {
      day: 1,
      title: "Arrival in Varanasi",
      activities: [
        "Welcome ceremony at hotel",
        "Evening Ganga Aarti at Dashashwamedh Ghat", 
        "Welcome dinner with fellow pilgrims"
      ],
      meals: ["Dinner"],
      accommodation: "Hotel Ganges View, Varanasi"
    },
    {
      day: 2, 
      title: "Sacred Temples Tour",
      activities: [
        "Early morning boat ride on the Ganges",
        "Visit to Kashi Vishwanath Temple",
        "Lunch at local vegetarian restaurant",
        "Afternoon visit to Sankat Mochan Hanuman Temple"
      ],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "Hotel Ganges View, Varanasi"
    },
    {
      day: 3,
      title: "Sarnath Excursion",
      activities: [
        "Visit to Sarnath, where Buddha gave his first sermon",
        "Tour of Archaeological Museum",
        "Meditation session at the Mulagandha Kuti Vihar"
      ],
      meals: ["Breakfast", "Lunch", "Dinner"],
      accommodation: "Hotel Ganges View, Varanasi"
    }
  ];

  const handleCancelBooking = (tripId: number) => {
    toast({
      title: "Booking Cancelled",
      description: "Your booking has been successfully cancelled. A refund will be processed within 7 business days.",
      duration: 5000,
    });
  };

  const handleViewItinerary = () => {
    setIsItineraryModalOpen(true);
  };

  const handleEditProfile = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleProfileSave = (updatedData: any) => {
    // Would update user data in a real app
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
      duration: 3000,
    });
  };

  const handleLeaveReview = (destination: string) => {
    setSelectedTripForReview(destination);
    setIsReviewModalOpen(true);
  };

  return (
    <Layout>
      <section className="py-12 bg-sacred-light min-h-screen">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* User Profile Card */}
            <Card className="shadow-lg">
              <CardHeader className="bg-sacred-primary text-white">
                <CardTitle className="text-2xl font-bold">My Profile</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-sacred-secondary/30 h-24 w-24 rounded-full flex items-center justify-center mb-4">
                    <User className="h-12 w-12 text-sacred-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-sacred-dark">{userData.name}</h3>
                  <p className="text-lg text-gray-600">{userData.age} years</p>
                </div>
                
                <div className="space-y-4 text-lg">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Email:</span>
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Member Since:</span>
                    <span>{userData.joinDate}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full text-lg py-6" onClick={handleEditProfile}>
                    <Pen className="mr-2 h-5 w-5" /> Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Trips Section */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="current" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="current" className="text-lg py-3">Current Trip</TabsTrigger>
                  <TabsTrigger value="upcoming" className="text-lg py-3">Upcoming</TabsTrigger>
                  <TabsTrigger value="past" className="text-lg py-3">Past Trips</TabsTrigger>
                </TabsList>
                
                {/* Current Trip Tab */}
                <TabsContent value="current" className="mt-0">
                  {currentTrip ? (
                    <Card className="shadow-lg">
                      <CardHeader className="bg-sacred-primary text-white">
                        <CardTitle className="text-2xl font-bold">Currently On: {currentTrip.destination}</CardTitle>
                        <CardDescription className="text-white/90 text-lg">
                          Currently at: {currentTrip.currentLocation}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <div className="bg-sacred-light p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-4">Live Location</h4>
                            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <MapPin className="h-10 w-10 text-sacred-primary mx-auto mb-2" />
                                <p>Map showing current location at coordinates:</p>
                                <p className="font-semibold">Lat: {currentTrip.latitude}, Long: {currentTrip.longitude}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-sacred-secondary/20 p-6 rounded-lg">
                              <h4 className="text-xl font-semibold mb-4">Your Guide</h4>
                              <div className="space-y-3 text-lg">
                                <div className="flex justify-between">
                                  <span className="font-medium">Name:</span>
                                  <span>{currentTrip.guide.name}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-medium">Contact:</span>
                                  <span>{currentTrip.guide.phone}</span>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button 
                                  variant="outline" 
                                  className="w-full text-lg"
                                  onClick={() => setIsEmergencyModalOpen(true)}
                                >
                                  <PhoneCall className="mr-2 h-5 w-5" />
                                  Call Guide
                                </Button>
                              </div>
                            </div>
                            
                            <div className="bg-sacred-secondary/20 p-6 rounded-lg">
                              <h4 className="text-xl font-semibold mb-4">Your Bus</h4>
                              <div className="space-y-3 text-lg">
                                <div className="flex justify-between">
                                  <span className="font-medium">Bus Number:</span>
                                  <span>{currentTrip.bus.number}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-medium">Bus Type:</span>
                                  <span>{currentTrip.bus.type}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="font-medium">Driver:</span>
                                  <span>{currentTrip.bus.driver}</span>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button 
                                  variant="outline" 
                                  className="w-full text-lg"
                                  onClick={() => setIsEmergencyModalOpen(true)}
                                >
                                  <PhoneCall className="mr-2 h-5 w-5" />
                                  Call Bus Driver
                                </Button>
                              </div>
                            </div>
                          </div>
                          
                          <Button 
                            size="lg" 
                            className="w-full text-lg py-6"
                            onClick={() => setIsEmergencyModalOpen(true)}
                          >
                            <PhoneCall className="mr-2 h-6 w-6" />
                            Contact Emergency Support
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="shadow-lg">
                      <CardContent className="p-12 text-center">
                        <Calendar className="h-16 w-16 text-sacred-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-sacred-dark mb-2">No Active Trip</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          You're not currently on a pilgrimage journey.
                        </p>
                        <Button size="lg" className="text-lg py-6" asChild>
                          <a href="/pilgrimages">Browse Pilgrimages</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                
                {/* Upcoming Trips Tab */}
                <TabsContent value="upcoming" className="mt-0">
                  {upcomingTrips.length > 0 ? (
                    <div className="space-y-6">
                      {upcomingTrips.map(trip => (
                        <Card key={trip.id} className="shadow-lg">
                          <CardHeader>
                            <CardTitle className="text-2xl font-bold">{trip.destination}</CardTitle>
                            <CardDescription className="text-lg">
                              {trip.startDate} - {trip.endDate}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                              <div className="bg-sacred-light p-4 rounded-lg">
                                <h4 className="text-xl font-medium mb-3">Guide Information</h4>
                                <p className="text-lg"><span className="font-medium">Name:</span> {trip.guide.name}</p>
                                <p className="text-lg"><span className="font-medium">Contact:</span> {trip.guide.phone}</p>
                              </div>
                              <div className="bg-sacred-light p-4 rounded-lg">
                                <h4 className="text-xl font-medium mb-3">Transportation</h4>
                                <p className="text-lg"><span className="font-medium">Bus Number:</span> {trip.bus.number}</p>
                                <p className="text-lg"><span className="font-medium">Bus Type:</span> {trip.bus.type}</p>
                                <p className="text-lg"><span className="font-medium">Driver:</span> {trip.bus.driver}</p>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <Button 
                                variant="outline" 
                                size="lg" 
                                className="text-lg"
                                onClick={handleViewItinerary}
                              >
                                <List className="mr-2 h-5 w-5" />
                                View Itinerary
                              </Button>
                              <Button 
                                variant="destructive" 
                                size="lg" 
                                className="text-lg"
                                onClick={() => handleCancelBooking(trip.id)}
                              >
                                <X className="mr-2 h-5 w-5" />
                                Cancel Booking
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="shadow-lg">
                      <CardContent className="p-12 text-center">
                        <Calendar className="h-16 w-16 text-sacred-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-sacred-dark mb-2">No Upcoming Trips</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          You don't have any pilgrimages scheduled yet.
                        </p>
                        <Button size="lg" className="text-lg py-6" asChild>
                          <a href="/pilgrimages">Browse Pilgrimages</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                
                {/* Past Trips Tab */}
                <TabsContent value="past" className="mt-0">
                  {pastTrips.length > 0 ? (
                    <div className="space-y-6">
                      {pastTrips.map(trip => (
                        <Card key={trip.id} className="shadow-lg">
                          <CardHeader>
                            <div className="flex justify-between">
                              <div>
                                <CardTitle className="text-2xl font-bold">{trip.destination}</CardTitle>
                                <CardDescription className="text-lg">
                                  {trip.startDate} - {trip.endDate}
                                </CardDescription>
                              </div>
                              <div className="bg-sacred-primary text-white px-4 py-2 rounded-lg flex items-center">
                                <span className="font-bold text-lg">{trip.rating}</span>
                                <span className="ml-1">★</span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex space-x-4">
                              <Button 
                                variant="outline" 
                                size="lg" 
                                className="text-lg"
                                onClick={handleViewItinerary}
                              >
                                <List className="mr-2 h-5 w-5" />
                                View Details
                              </Button>
                              <Button 
                                size="lg" 
                                className="text-lg"
                                onClick={() => handleLeaveReview(trip.destination)}
                              >
                                <Text className="mr-2 h-5 w-5" />
                                Leave Review
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card className="shadow-lg">
                      <CardContent className="p-12 text-center">
                        <Calendar className="h-16 w-16 text-sacred-primary mx-auto mb-4" />
                        <h3 className="text-2xl font-semibold text-sacred-dark mb-2">No Past Trips</h3>
                        <p className="text-lg text-gray-600 mb-6">
                          You haven't completed any pilgrimages yet.
                        </p>
                        <Button size="lg" className="text-lg py-6" asChild>
                          <a href="/pilgrimages">Browse Pilgrimages</a>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modals */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        guide={currentTrip?.guide}
        bus={currentTrip?.bus}
      />
      
      <ItineraryModal 
        isOpen={isItineraryModalOpen}
        onClose={() => setIsItineraryModalOpen(false)}
        pilgrimageName="Varanasi Spiritual Journey"
        duration="7 Days"
        itinerary={sampleItinerary}
      />
      
      <EditProfileModal 
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        userData={userData}
        onSave={handleProfileSave}
      />
      
      <ReviewModal 
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        pilgrimageName={selectedTripForReview || ""}
      />
    </Layout>
  );
};

export default Dashboard;
