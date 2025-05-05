
import React from 'react';
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <section className="py-16 bg-sacred-light min-h-screen flex items-center justify-center">
        <div className="container-page">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-sacred-dark mb-4">Welcome Back</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sign in to access your pilgrimage journey, track current trips, and vote on future sacred destinations.
            </p>
          </div>
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
