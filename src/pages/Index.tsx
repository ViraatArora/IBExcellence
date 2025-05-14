
import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Qualifications from "@/components/Qualifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  React.useEffect(() => {
    document.title = "Math Ace Tutoring | Expert Math Tutoring Services";
  }, []);

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="font-serif font-bold text-xl text-tutor-darkblue">
              Math Ace Tutoring
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-tutor-blue font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-tutor-blue font-medium">Services</a>
              <a href="#qualifications" className="text-gray-700 hover:text-tutor-blue font-medium">Qualifications</a>
              <a href="#contact" className="text-gray-700 hover:text-tutor-blue font-medium">Contact</a>
            </nav>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-tutor-blue">
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
        <Services />
        <Qualifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
