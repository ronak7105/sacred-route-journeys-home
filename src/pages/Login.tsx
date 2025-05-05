
import React from 'react';
import Layout from '@/components/layout/Layout';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <Layout>
      <section className="py-16 bg-sacred-light min-h-screen flex items-center justify-center">
        <div className="container-page">
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
