
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-tutor-darkblue">
            Expert Math Tutoring for Academic Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Personalized instruction for middle and high school students,
            specializing in IB Mathematics and advanced topics.
            Transform your mathematical understanding and achieve your academic goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-tutor-blue hover:bg-tutor-darkblue text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book a Session
            </Button>
            <Button 
              variant="outline" 
              className="border-tutor-blue text-tutor-blue hover:bg-tutor-blue hover:text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
