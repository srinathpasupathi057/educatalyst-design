
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AuthForm } from '@/components/auth/AuthForm';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <AuthForm />
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
