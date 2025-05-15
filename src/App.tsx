
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Subjects from './components/Subjects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import TeachingPhilosophy from './components/TeachingPhilosophy';
import Qualifications from './components/Qualifications';
import GroupClasses from './components/GroupClasses';
import Services from './components/Services';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

import './index.css';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main>
        <Hero />
        <Subjects />
        <GroupClasses />
        <Services />
        <TeachingPhilosophy />
        <Qualifications />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <Toaster />
    </div>
  );
};

export default App;
