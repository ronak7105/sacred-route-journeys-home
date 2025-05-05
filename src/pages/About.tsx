
import React from 'react';
import Layout from '@/components/layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <section className="py-16 bg-sacred-light min-h-screen">
        <div className="container-page">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-sacred-dark mb-4">About Sacred Routes</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to helping elderly travelers experience the spiritual journeys they've always dreamed of, with safety and community at the heart of everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-sacred-dark mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                Sacred Routes was founded with a simple yet powerful mission: to make the spiritual pilgrimages of India accessible to elderly travelers who might otherwise miss these transformative experiences.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We believe that age should never be a barrier to spiritual growth and adventure. Our carefully designed journeys prioritize safety, comfort, and authentic experiences while fostering a sense of community among like-minded pilgrims.
              </p>
              <p className="text-lg text-gray-600">
                Through our guided pilgrimages, we help connect our travelers not only to sacred sites but also to themselves and to each other, creating memories and spiritual connections that last a lifetime.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1594627882604-a9475cce2eb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Elderly pilgrims at a sacred site in India" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-sacred-dark mb-4">Safety First</h3>
              <p className="text-lg text-gray-600">
                Every aspect of our pilgrimages is designed with the safety of our elderly travelers in mind. From accessible accommodations to medical support on standby, we've thought of everything so you don't have to worry.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-sacred-dark mb-4">Community Travel</h3>
              <p className="text-lg text-gray-600">
                Travel with like-minded individuals who share your spiritual interests. Our small groups foster meaningful connections and provide mutual support throughout the journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-sacred-dark mb-4">Authentic Experiences</h3>
              <p className="text-lg text-gray-600">
                We go beyond tourist attractions to provide genuine spiritual experiences, led by knowledgeable guides who understand both the sacred significance and the needs of elderly travelers.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-sacred-dark mb-6 text-center">How We Work</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ol className="space-y-6">
                <li className="flex">
                  <span className="bg-sacred-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">1</span>
                  <div>
                    <h3 className="text-xl font-bold text-sacred-dark mb-2">Careful Selection of Sacred Sites</h3>
                    <p className="text-lg text-gray-600">
                      We research and select sites that offer profound spiritual experiences while being accessible to elderly travelers. Each pilgrimage is tested for safety, comfort, and meaningful engagement before being offered to our community.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-sacred-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">2</span>
                  <div>
                    <h3 className="text-xl font-bold text-sacred-dark mb-2">Specialized Guides and Support Staff</h3>
                    <p className="text-lg text-gray-600">
                      Our guides are not only knowledgeable about the spiritual significance of each site but are also trained to support elderly travelers. Medical professionals accompany each journey to ensure immediate care if needed.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-sacred-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">3</span>
                  <div>
                    <h3 className="text-xl font-bold text-sacred-dark mb-2">Family Involvement and Transparency</h3>
                    <p className="text-lg text-gray-600">
                      We believe in keeping families connected. Our tracking systems allow family members to follow the journey, while our communication platforms ensure everyone stays connected throughout the pilgrimage.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-sacred-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0">4</span>
                  <div>
                    <h3 className="text-xl font-bold text-sacred-dark mb-2">Community Input and Evolution</h3>
                    <p className="text-lg text-gray-600">
                      We constantly evolve based on feedback from our travelers. Our voting system for new destinations ensures that we're always offering pilgrimages that our community is eager to experience.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-sacred-dark mb-6">Join Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Whether you're a pilgrim seeking spiritual growth, a family member helping a loved one fulfill their travel dreams, or a spiritual guide interested in working with us, we welcome you to the Sacred Routes community.
            </p>
            <Button>
              Register Now
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
