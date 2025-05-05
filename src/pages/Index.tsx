
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedPilgrimages from '@/components/home/FeaturedPilgrimages';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedPilgrimages />
      <Features />
      <HowItWorks />
      <Testimonials />
    </Layout>
  );
};

export default Index;
