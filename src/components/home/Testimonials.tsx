
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Sacred Routes made it possible for me to fulfill my lifelong dream of walking the Camino. At 78, I never thought I could do it, but their support was incredible!",
    name: "Martha Johnson",
    age: 78,
    pilgrimage: "Camino de Santiago",
    image: "https://images.unsplash.com/photo-1581579438747-e1118d1046f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    content: "The family dashboard gave my children peace of mind while I was on pilgrimage in Israel. They could see I was safe, and I could focus on my spiritual journey.",
    name: "Robert Chen",
    age: 72,
    pilgrimage: "Holy Land Tour",
    image: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    content: "Meeting other pilgrims my age was the highlight of my journey. We've become a tight-knit community and even plan to take another pilgrimage together next year!",
    name: "Elaine Wilson",
    age: 69,
    pilgrimage: "Buddhist Circuit",
    image: "https://images.unsplash.com/photo-1593740103099-8206ceaa6cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="section-title">Pilgrim Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from elderly travelers who have experienced the Sacred Routes difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-to-br from-white to-sacred-light border-sacred-primary/20 shadow-lg">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-sacred-primary/30 mb-4" />
                <p className="text-lg text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover mr-4 border-2 border-sacred-primary"
                  />
                  <div>
                    <p className="font-semibold text-sacred-dark">{testimonial.name}, {testimonial.age}</p>
                    <p className="text-sacred-primary">{testimonial.pilgrimage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-sacred-light">
          <div className="bg-sacred-secondary/10 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold text-sacred-dark mb-2">Ready to start your pilgrimage journey?</h3>
                <p className="text-lg text-gray-700">
                  Join our community of elderly pilgrims and experience sacred sites with comfort and peace of mind.
                </p>
              </div>
              <div className="flex space-x-4">
                <button className="bg-sacred-primary hover:bg-sacred-primary/90 text-white rounded-lg py-3 px-6 text-lg font-medium transition-colors">
                  Register Now
                </button>
                <button className="bg-white border border-sacred-primary text-sacred-primary hover:bg-sacred-light rounded-lg py-3 px-6 text-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
