"use client"

import React from 'react';
// import Header from '@/pages/Header';
import Footer from '@/pages/Footer';
import Home from '@/landing-components/Home';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-light">
      {/* <Header /> */}
     <Home/>
      <Footer />
    </div>
  );
};

export default HomePage;