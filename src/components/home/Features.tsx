
import React from 'react';
import { Shield, HeartHandshake, Map, UserRound } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-sacred-light">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Sacred Routes</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We've designed our pilgrimages with elderly travelers in mind, focusing on safety, community, and meaningful experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Feature 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-sacred-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sacred-dark mb-3">Safety First Approach</h3>
              <p className="text-lg text-gray-700">
                24/7 emergency support, carefully vetted accommodations, and medical personnel available on every journey. Our emergency response system ensures help is always at your fingertips.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">24/7 emergency support line</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Vetted accommodations with accessibility features</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Medical personnel on every journey</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-sacred-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <HeartHandshake className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sacred-dark mb-3">Community Connection</h3>
              <p className="text-lg text-gray-700">
                Travel with like-minded pilgrims in small, intimate groups. Our community-building activities foster meaningful connections before, during, and after your journey.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Small groups of 8-12 people</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Pre-journey virtual meetups</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Post-pilgrimage community events</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-sacred-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <Map className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sacred-dark mb-3">Family Dashboard</h3>
              <p className="text-lg text-gray-700">
                Keep loved ones informed with our real-time tracking and communication tools. Family members can follow your journey and stay connected throughout your pilgrimage.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Real-time location updates</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Daily check-ins and photo sharing</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Direct messaging with pilgrims and guides</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-sacred-primary rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <UserRound className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-sacred-dark mb-3">Experienced Guides</h3>
              <p className="text-lg text-gray-700">
                Our guides are specialists in both spiritual traditions and elder care. They ensure your pilgrimage is both meaningful and comfortable, adapting to your needs.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Trained in first aid and elder care</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Deep knowledge of spiritual traditions</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-sacred-primary mr-2"></span>
                  <span className="text-lg">Multilingual and culturally sensitive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
