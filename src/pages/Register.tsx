
import React from 'react';
import Layout from '@/components/layout/Layout';
import RegisterForm from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <Layout>
      <section className="py-16 bg-sacred-light min-h-screen flex items-center justify-center">
        <div className="container-page">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-sacred-dark mb-4">Join Our Sacred Community</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create an account to begin your pilgrimage journey with safety, 
              community support, and family peace of mind.
            </p>
          </div>
          
          <div className="flex justify-center">
            <RegisterForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
