
import React from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Heart, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container-page">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-sacred-dark">About Sacred Routes</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating meaningful pilgrimage experiences for elderly travelers since 2010
            </p>
          </div>
          
          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="bg-sacred-light p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-4 text-sacred-dark">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To create accessible, meaningful pilgrimage experiences that cater specifically to the needs and pace of elderly travelers, allowing them to connect deeply with their faith while ensuring safety and comfort.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-sacred-primary h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700">Specialized guides trained in elder care</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-sacred-primary h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700">24/7 medical support on all journeys</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-sacred-primary h-6 w-6 rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700">Accessible accommodations and transportation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-sacred-dark p-8 rounded-xl shadow-md text-white">
              <h2 className="text-3xl font-bold mb-4 text-sacred-secondary">Our Vision</h2>
              <p className="text-lg mb-6">
                We envision a world where age is never a barrier to spiritual journeys. Sacred Routes aims to become the global leader in accessible pilgrimage experiences, known for our commitment to dignity, safety, and meaningful connections.
              </p>
              <div className="bg-sacred-primary/20 p-4 rounded-lg border border-sacred-primary/30">
                <h3 className="text-xl font-medium mb-2 text-sacred-secondary">Our Impact</h3>
                <p>
                  Since our founding, we've helped over 15,000 elderly pilgrims from across India connect with their faith through safe, accessible journeys to sacred sites.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Story */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-sacred-dark text-center">Our Story</h2>
            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-sacred-primary h-full flex items-center justify-center p-8">
                  <Heart className="text-white h-40 w-40" />
                </div>
                <div className="md:col-span-3 p-8">
                  <p className="text-lg text-gray-700 mb-6">
                    Sacred Routes was founded in 2010 by Priya Sharma after witnessing her elderly parents' struggles to complete a pilgrimage to Varanasi. Despite their deep desire to visit this sacred place, the journey proved physically challenging and logistically complex.
                  </p>
                  <p className="text-lg text-gray-700 mb-6">
                    Recognizing that many elders share this desire but face similar barriers, Priya assembled a team of travel experts, healthcare professionals, and spiritual guides to create pilgrimage experiences specifically designed for elderly travelers.
                  </p>
                  <p className="text-lg text-gray-700">
                    Today, Sacred Routes offers carefully curated journeys to India's most significant pilgrimage sites, with every detail tailored to ensure comfort, safety, and spiritual fulfillment for our elderly pilgrims.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-sacred-dark text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-xl p-8 text-center">
                <div className="bg-sacred-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-sacred-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sacred-dark">Compassion</h3>
                <p className="text-gray-700">
                  We approach every aspect of our work with genuine care for our pilgrims' physical, emotional, and spiritual wellbeing.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-xl p-8 text-center">
                <div className="bg-sacred-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-sacred-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sacred-dark">Dignity</h3>
                <p className="text-gray-700">
                  We honor the wisdom and experience of our elderly pilgrims, ensuring they are treated with the utmost respect throughout their journey.
                </p>
              </div>
              
              <div className="bg-white shadow-md rounded-xl p-8 text-center">
                <div className="bg-sacred-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-sacred-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-sacred-dark">Safety</h3>
                <p className="text-gray-700">
                  We prioritize the wellbeing of our pilgrims with comprehensive safety measures, medical support, and carefully planned accommodations.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-sacred-dark text-center">Contact Us</h2>
            <div className="bg-sacred-light rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-sacred-dark">Get In Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-sacred-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Our Office</h4>
                        <p className="text-gray-700">123 Pilgrimage Way, New Delhi, 110001, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-sacred-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Phone</h4>
                        <p className="text-gray-700">+91 (11) 1234 5678</p>
                        <p className="text-gray-500 text-sm mt-1">Available 7 days a week, 8am-8pm IST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-sacred-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">Email</h4>
                        <p className="text-gray-700">info@sacredroutes.com</p>
                        <p className="text-gray-500 text-sm mt-1">We usually respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-sacred-dark p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-sacred-secondary">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-lg mb-2">Your Name</label>
                      <input type="text" className="w-full p-3 rounded-lg bg-sacred-dark border border-gray-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-lg mb-2">Your Email</label>
                      <input type="email" className="w-full p-3 rounded-lg bg-sacred-dark border border-gray-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-lg mb-2">Your Message</label>
                      <textarea rows={4} className="w-full p-3 rounded-lg bg-sacred-dark border border-gray-600 text-white"></textarea>
                    </div>
                    <Button className="bg-sacred-primary hover:bg-sacred-primary/90 text-white py-6 text-lg w-full">
                      Send Message
                    </Button>
                    <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-700 py-6 text-lg w-full">
                      Request a Call Back
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
