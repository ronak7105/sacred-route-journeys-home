
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart } from 'lucide-react';

const RegisterForm = () => {
  const [userType, setUserType] = useState('pilgrim');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Registration form submitted');
  };

  return (
    <Card className="w-full max-w-2xl shadow-lg">
      <CardHeader className="bg-sacred-primary text-white rounded-t-lg text-center py-8">
        <div className="flex justify-center mb-3">
          <Heart className="h-14 w-14" />
        </div>
        <CardTitle className="text-3xl font-bold">Join Sacred Routes</CardTitle>
        <CardDescription className="text-xl text-white/90 mt-2">
          Begin your spiritual journey with our community
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="pilgrim" onValueChange={setUserType} className="w-full">
        <div className="px-6 pt-6">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="pilgrim" className="text-lg py-3">Pilgrim</TabsTrigger>
            <TabsTrigger value="family" className="text-lg py-3">Family Member</TabsTrigger>
            <TabsTrigger value="guide" className="text-lg py-3">Guide</TabsTrigger>
          </TabsList>
        </div>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Common fields for all user types */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-lg">First Name</Label>
                <Input id="firstName" placeholder="Your first name" className="text-lg p-6" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-lg">Last Name</Label>
                <Input id="lastName" placeholder="Your last name" className="text-lg p-6" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" className="text-lg p-6" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">Password</Label>
              <Input id="password" type="password" placeholder="Create a secure password" className="text-lg p-6" />
              <p className="text-sm text-muted-foreground">Password must be at least 8 characters long</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="For emergency contact" className="text-lg p-6" />
            </div>
            
            {/* Pilgrim-specific fields */}
            <TabsContent value="pilgrim" className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="age" className="text-lg">Age</Label>
                <Input id="age" type="number" placeholder="Your age" className="text-lg p-6" />
              </div>
              
              <div className="space-y-3">
                <Label className="text-lg">Mobility Assistance Needed?</Label>
                <RadioGroup defaultValue="none">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="mobility-none" />
                    <Label htmlFor="mobility-none" className="text-lg">None</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="minimal" id="mobility-minimal" />
                    <Label htmlFor="mobility-minimal" className="text-lg">Minimal (cane)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="moderate" id="mobility-moderate" />
                    <Label htmlFor="mobility-moderate" className="text-lg">Moderate (walker)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="significant" id="mobility-significant" />
                    <Label htmlFor="mobility-significant" className="text-lg">Significant (wheelchair)</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests" className="text-lg">Spiritual Interests</Label>
                <Select>
                  <SelectTrigger className="text-lg p-6">
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="christian">Christian Pilgrimages</SelectItem>
                    <SelectItem value="buddhist">Buddhist Journeys</SelectItem>
                    <SelectItem value="hindu">Hindu Sacred Sites</SelectItem>
                    <SelectItem value="islamic">Islamic Holy Places</SelectItem>
                    <SelectItem value="interfaith">Interfaith Experiences</SelectItem>
                    <SelectItem value="meditation">Meditation Retreats</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TabsContent>
            
            {/* Family Member specific fields */}
            <TabsContent value="family" className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="relationship" className="text-lg">Relationship to Pilgrim</Label>
                <Select>
                  <SelectTrigger className="text-lg p-6">
                    <SelectValue placeholder="Select relationship" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="child">Child</SelectItem>
                    <SelectItem value="spouse">Spouse</SelectItem>
                    <SelectItem value="sibling">Sibling</SelectItem>
                    <SelectItem value="friend">Friend</SelectItem>
                    <SelectItem value="caregiver">Caregiver</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="pilgrimEmail" className="text-lg">Pilgrim's Email</Label>
                <Input id="pilgrimEmail" type="email" placeholder="To connect with your pilgrim" className="text-lg p-6" />
                <p className="text-sm text-muted-foreground">We'll send them an invitation to connect</p>
              </div>
            </TabsContent>
            
            {/* Guide specific fields */}
            <TabsContent value="guide" className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-lg">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="Years as a guide" className="text-lg p-6" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialties" className="text-lg">Guide Specialties</Label>
                <Select>
                  <SelectTrigger className="text-lg p-6">
                    <SelectValue placeholder="Select primary specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="spiritualHistory">Spiritual History</SelectItem>
                    <SelectItem value="elderCare">Elder Care</SelectItem>
                    <SelectItem value="accessibleTravel">Accessible Travel</SelectItem>
                    <SelectItem value="religiousStudies">Religious Studies</SelectItem>
                    <SelectItem value="medicalTraining">Medical Training</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="languages" className="text-lg">Languages Spoken</Label>
                <Input id="languages" placeholder="e.g., English, Spanish, French" className="text-lg p-6" />
              </div>
            </TabsContent>
            
            {/* Terms and conditions */}
            <div className="flex items-start space-x-3 pt-3">
              <input 
                type="checkbox" 
                id="terms" 
                className="h-6 w-6 rounded border-gray-300 focus:ring-sacred-primary"
                checked={agreeToTerms}
                onChange={() => setAgreeToTerms(!agreeToTerms)}
              />
              <Label htmlFor="terms" className="text-lg">
                I agree to Sacred Routes' <a href="/terms" className="text-sacred-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-sacred-primary hover:underline">Privacy Policy</a>
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-sacred-primary hover:bg-sacred-primary/90 text-xl py-6"
              disabled={!agreeToTerms}
            >
              Create Account
            </Button>
            
            <div className="text-center pt-2">
              <p className="text-lg">
                Already have an account? <a href="/login" className="text-sacred-primary hover:underline font-medium">Sign in</a>
              </p>
            </div>
          </form>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default RegisterForm;
