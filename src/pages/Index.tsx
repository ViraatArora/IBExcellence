
import React from "react";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";
import GroupClasses from "@/components/GroupClasses";
import Qualifications from "@/components/Qualifications";
import TeachingPhilosophy from "@/components/TeachingPhilosophy";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  React.useEffect(() => {
    document.title = "IB Excellence | Premium Math & Science Tutoring";
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="backdrop-blur-md bg-black/50 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="font-serif font-bold text-xl text-tutor-blue">
              IB Excellence
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" onClick={scrollToSection('hero')} className="text-gray-300 hover:text-tutor-blue font-medium">Home</a>
              <a href="#subjects" onClick={scrollToSection('subjects')} className="text-gray-300 hover:text-tutor-blue font-medium">Subjects</a>
              <a href="#classes" onClick={scrollToSection('classes')} className="text-gray-300 hover:text-tutor-blue font-medium">Classes</a>
              <a href="#qualifications" onClick={scrollToSection('qualifications')} className="text-gray-300 hover:text-tutor-blue font-medium">About</a>
              <a href="#contact" onClick={scrollToSection('contact')} className="text-gray-300 hover:text-tutor-blue font-medium">Contact</a>
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
        <div id="hero"><Hero /></div>
        <div id="subjects"><Subjects /></div>
        <div id="classes"><GroupClasses /></div>
        <div id="qualifications"><Qualifications /></div>
        <div id="teaching-philosophy"><TeachingPhilosophy /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
