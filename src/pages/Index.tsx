
import React from "react";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import GroupClasses from "@/components/GroupClasses";
import Qualifications from "@/components/Qualifications";
import TeachingPhilosophy from "@/components/TeachingPhilosophy";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  React.useEffect(() => {
    document.title = "IB Excellence | Premium Math & Science Tutoring";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="backdrop-blur-md bg-black/50 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="font-serif font-bold text-xl text-tutor-blue">
              IB Excellence
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-tutor-blue font-medium">Home</a>
              <a href="#subjects" className="text-gray-300 hover:text-tutor-blue font-medium">Subjects</a>
              <a href="#classes" className="text-gray-300 hover:text-tutor-blue font-medium">Classes</a>
              <a href="#qualifications" className="text-gray-300 hover:text-tutor-blue font-medium">About</a>
              <a href="#contact" className="text-gray-300 hover:text-tutor-blue font-medium">Contact</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-tutor-blue">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Subjects />
        <GroupClasses />
        <Qualifications />
        <TeachingPhilosophy />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
