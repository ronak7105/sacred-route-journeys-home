
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Bell, Calendar, Heart } from 'lucide-react';

const FamilyDashboard = () => {
  return (
    <Layout>
      <section className="bg-sacred-light py-12">
        <div className="container-page">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sacred-dark mb-4">Family Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep track of your loved one's pilgrimage journey in real-time and stay connected.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content area - takes 2/3 of the width on large screens */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active pilgrim card */}
              <Card className="border-l-4 border-sacred-primary">
                <CardHeader className="bg-sacred-primary/10">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-2xl text-sacred-dark">
                      Currently Tracking: Martha Johnson
                    </CardTitle>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      Active Journey
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1581579438747-e1118d1046f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                      alt="Martha Johnson"
                      className="h-20 w-20 rounded-full object-cover mr-4 border-2 border-sacred-primary"
                    />
                    <div>
                      <h3 className="text-xl font-medium">Martha Johnson, 78</h3>
                      <p className="text-gray-600">Day 6 of 14 - Camino de Santiago</p>
                      <div className="mt-2 flex space-x-3">
                        <Button size="sm" variant="outline">
                          <Phone className="h-4 w-4 mr-2" /> Call
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-2" /> Message
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-sacred-light p-4 rounded-lg mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="h-6 w-6 text-sacred-primary mr-2" />
                        <div>
                          <h4 className="font-medium">Current Location</h4>
                          <p>León, Spain - Updated 1 hour ago</p>
                        </div>
                      </div>
                      <Button size="sm">
                        View Map
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-xl font-medium mb-4">Journey Progress</h3>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-sacred-secondary text-sacred-dark">
                            Progress
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-sacred-primary">
                            43%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-sacred-secondary/30">
                        <div style={{ width: "43%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sacred-primary"></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Saint-Jean-Pied-de-Port</span>
                        <span>León (Current)</span>
                        <span>Santiago de Compostela</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tabs for different information */}
              <Tabs defaultValue="updates">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="updates" className="text-lg py-2">Updates</TabsTrigger>
                  <TabsTrigger value="health" className="text-lg py-2">Health</TabsTrigger>
                  <TabsTrigger value="photos" className="text-lg py-2">Photos</TabsTrigger>
                  <TabsTrigger value="schedule" className="text-lg py-2">Schedule</TabsTrigger>
                </TabsList>
                
                <TabsContent value="updates" className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Daily Check-In</h4>
                        <p className="text-gray-600">Today at 8:32 AM</p>
                      </div>
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">Feeling Good</div>
                    </div>
                    <p className="mt-3">
                      "Had a wonderful breakfast at the hostel. Weather is beautiful and my feet are holding up well. Looking forward to today's walk to Astorga."
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Guide Update</h4>
                        <p className="text-gray-600">Yesterday at 7:15 PM</p>
                      </div>
                      <div className="bg-sacred-light text-sacred-primary px-2 py-1 rounded-full text-sm">From Guide</div>
                    </div>
                    <p className="mt-3">
                      "Martha had a great day walking with the group. She's connecting well with other pilgrims and enjoying the journey. We'll be taking a shorter route tomorrow to accommodate the rainy forecast."
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Milestone Reached</h4>
                        <p className="text-gray-600">2 days ago</p>
                      </div>
                      <div className="bg-sacred-secondary/20 text-sacred-dark px-2 py-1 rounded-full text-sm">Milestone</div>
                    </div>
                    <p className="mt-3">
                      "Martha has completed 100km of walking! We celebrated with a special dinner at a local restaurant."
                    </p>
                    <div className="mt-3">
                      <img 
                        src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                        alt="Group celebration dinner" 
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="health" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Daily Step Count</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-sacred-primary">8,254</div>
                        <p className="text-sm text-muted-foreground">Average: 7,845 steps</p>
                        <div className="h-32 mt-2 bg-gray-100 rounded flex items-end">
                          {/* Simple bar chart placeholder */}
                          <div className="w-1/7 h-[60%] bg-sacred-secondary mx-1"></div>
                          <div className="w-1/7 h-[80%] bg-sacred-secondary mx-1"></div>
                          <div className="w-1/7 h-[40%] bg-sacred-secondary mx-1"></div>
                          <div className="w-1/7 h-[90%] bg-sacred-secondary mx-1"></div>
                          <div className="w-1/7 h-[75%] bg-sacred-secondary mx-1"></div>
                          <div className="w-1/7 h-[65%] bg-sacred-secondary mx-1"></div>
                          <div className="w-1/7 h-[70%] bg-sacred-primary mx-1"></div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Rest Quality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold text-sacred-primary">Good</div>
                        <p className="text-sm text-muted-foreground">7.5 hours last night</p>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span>Sleep Duration</span>
                            <span>7.5hrs</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded">
                            <div className="h-2 rounded bg-sacred-primary" style={{ width: '85%' }}></div>
                          </div>
                          
                          <div className="flex justify-between">
                            <span>Sleep Quality</span>
                            <span>Good</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded">
                            <div className="h-2 rounded bg-sacred-primary" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Health Notes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-red-100 text-red-700 p-2 rounded-full">
                          <Bell className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Medication Reminder</h4>
                          <p className="text-gray-600">Blood pressure medication taken at 8:00 AM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-700 p-2 rounded-full">
                          <Heart className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Vitals Check</h4>
                          <p className="text-gray-600">Blood Pressure: 128/82 - Heart Rate: 72 BPM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="bg-sacred-secondary/20 text-sacred-dark p-2 rounded-full">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">Medical Appointment</h4>
                          <p className="text-gray-600">Check-in with trip doctor scheduled for tomorrow</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="photos">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1558697216-043361c570a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Pilgrim journey" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Cathedral" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1464038008305-ee8def24e05a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Group meal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Pilgrim path" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1656564482930-7b7400382324?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Camino marker" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                        alt="Sunrise on the journey" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="schedule">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Itinerary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex border-l-4 border-sacred-primary pl-4 py-2">
                        <div className="mr-4 text-center">
                          <div className="text-xl font-bold">Day 7</div>
                          <div className="text-sm text-gray-500">Tomorrow</div>
                        </div>
                        <div>
                          <h4 className="font-medium">León to Astorga</h4>
                          <p className="text-gray-600">Distance: 18 km (modified route)</p>
                          <p className="text-gray-600">Accommodation: Hotel Astur Plaza</p>
                          <div className="mt-2 text-sm text-sacred-primary">Weather: Partly Cloudy, 68°F</div>
                        </div>
                      </div>
                      
                      <div className="flex border-l-4 border-gray-200 pl-4 py-2">
                        <div className="mr-4 text-center">
                          <div className="text-xl font-bold">Day 8</div>
                          <div className="text-sm text-gray-500">May 23</div>
                        </div>
                        <div>
                          <h4 className="font-medium">Astorga to Rabanal del Camino</h4>
                          <p className="text-gray-600">Distance: 15 km</p>
                          <p className="text-gray-600">Accommodation: La Posada de Gaspar</p>
                          <div className="mt-2 text-sm text-sacred-primary">Weather: Sunny, 72°F</div>
                        </div>
                      </div>
                      
                      <div className="flex border-l-4 border-gray-200 pl-4 py-2">
                        <div className="mr-4 text-center">
                          <div className="text-xl font-bold">Day 9</div>
                          <div className="text-sm text-gray-500">May 24</div>
                        </div>
                        <div>
                          <h4 className="font-medium">Rabanal to Ponferrada</h4>
                          <p className="text-gray-600">Distance: 20 km</p>
                          <p className="text-gray-600">Accommodation: Hotel Los Templarios</p>
                          <div className="mt-2 text-sm text-sacred-primary">Weather: Partly Cloudy, 70°F</div>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        View Full Itinerary
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - takes 1/3 of the width on large screens */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Travel Group</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Guide */}
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                      alt="Guide" 
                      className="h-12 w-12 rounded-full object-cover mr-3 border-2 border-sacred-primary"
                    />
                    <div>
                      <h4 className="font-medium">Miguel Santos</h4>
                      <p className="text-sm text-sacred-primary">Lead Guide</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Contact
                    </Button>
                  </div>
                  
                  {/* Medical Staff */}
                  <div className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
                      alt="Medical Staff" 
                      className="h-12 w-12 rounded-full object-cover mr-3 border-2 border-sacred-primary"
                    />
                    <div>
                      <h4 className="font-medium">Dr. Sarah Johnson</h4>
                      <p className="text-sm text-sacred-primary">Medical Staff</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Contact
                    </Button>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-medium mb-2">Fellow Pilgrims (8)</h4>
                    <div className="flex -space-x-2 overflow-hidden">
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Pilgrim" />
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Pilgrim" />
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Pilgrim" />
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Pilgrim" />
                      <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="Pilgrim" />
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sacred-secondary text-white ring-2 ring-white">+3</div>
                    </div>
                    <Button variant="link" className="mt-2 p-0 h-auto">View All Group Members</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 mb-2">
                      <Phone className="mr-2 h-5 w-5" /> Emergency Assistance
                    </Button>
                    <p className="text-sm text-center">24/7 support line for urgent situations</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center mb-3">
                      <Phone className="h-5 w-5 text-sacred-primary mr-2" />
                      <span className="font-medium">Trip Guide:</span>
                      <span className="ml-2">+34 612 345 678</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <Phone className="h-5 w-5 text-sacred-primary mr-2" />
                      <span className="font-medium">Medical Support:</span>
                      <span className="ml-2">+34 612 345 679</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-sacred-primary mr-2" />
                      <span className="font-medium">Sacred Routes Office:</span>
                      <span className="ml-2">+1 800 555 1234</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Weather Forecast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium">León, Spain</h4>
                      <p className="text-sm text-gray-500">Current Location</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">68°F</div>
                      <p className="text-sm">Partly Cloudy</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-center border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-sm font-medium">Today</p>
                      <p className="text-xl">68°F</p>
                      <p className="text-xs">Cloudy</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Thu</p>
                      <p className="text-xl">72°F</p>
                      <p className="text-xs">Sunny</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Fri</p>
                      <p className="text-xl">70°F</p>
                      <p className="text-xs">Cloudy</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sat</p>
                      <p className="text-xl">74°F</p>
                      <p className="text-xs">Sunny</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button variant="outline" className="w-full">
                <Bell className="mr-2 h-5 w-5" /> Manage Notifications
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FamilyDashboard;
