import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Register & Profile Setup',
    description: 'Create your profile and share your health needs, interests, and spiritual goals. We use this information to recommend suitable pilgrimages.',
    image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '02',
    title: 'Choose Your Pilgrimage',
    description: 'Browse our curated journeys with detailed accessibility information. Filter by difficulty, duration, and spiritual tradition to find your perfect match.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '03',
    title: 'Pre-Journey Preparation',
    description: 'Join virtual meetups with fellow pilgrims and guides. We\'ll help you prepare physically and spiritually, and connect your family to the tracking dashboard.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    number: '04',
    title: 'Experience Your Pilgrimage',
    description: 'Embark on your journey with our experienced guides and fellow pilgrims. Enjoy a pace that suits elderly travelers while deeply connecting with sacred sites.',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-sacred-dark text-white">
      <div className="container-page">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How Sacred Routes Works</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Our simple process makes planning and experiencing pilgrimages accessible for elderly travelers.
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}: ${step.title}`} 
                    className="rounded-xl shadow-2xl w-full object-cover h-[300px] md:h-[400px]"
                    loading="lazy"
                  />
                  <div className="absolute -top-8 -left-8 bg-sacred-primary text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-3xl font-semibold mb-4 text-sacred-secondary">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  {step.description}
                </p>
                
                {step.number === '01' && (
                  <div className="bg-sacred-primary/20 p-6 rounded-lg border border-sacred-primary/30">
                    <h4 className="text-xl font-medium mb-2 text-sacred-secondary">Did you know?</h4>
                    <p className="text-gray-300">
                      Over 60% of our pilgrims are first-time travelers over the age of 65. 
                      Our registration process is designed to be simple and accessible, 
                      with phone support if you need assistance.
                    </p>
                  </div>
                )}
                
                {step.number === '02' && (
                  <ul className="space-y-3 text-lg text-gray-300">
                    <li className="flex items-start">
                      <span className="bg-sacred-secondary h-6 w-6 rounded-full flex items-center justify-center text-sacred-dark font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                      <span>Detailed accessibility information for each site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-sacred-secondary h-6 w-6 rounded-full flex items-center justify-center text-sacred-dark font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                      <span>Filter options for mobility needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-sacred-secondary h-6 w-6 rounded-full flex items-center justify-center text-sacred-dark font-bold mr-3 mt-1 flex-shrink-0">✓</span>
                      <span>Virtual tour previews of accommodations</span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
