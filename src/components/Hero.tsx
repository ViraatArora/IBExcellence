
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tutor-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-tutor-blue/20 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-1">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Premium IB Math & Science Summer Crash Courses by <span className="text-transparent bg-clip-text bg-gradient-to-r from-tutor-blue to-tutor-purple">Subject Topper</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Small group courses (max 3 students) designed for MYP and DP students.
            Elevate your academic performance with structured, focused instruction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="bg-tutor-blue hover:bg-tutor-darkblue text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Reserve Your Slot
            </Button>
            <Button 
              variant="outline" 
              className="border-tutor-blue text-tutor-blue hover:bg-tutor-blue hover:text-white px-8 py-6 text-lg"
              onClick={() => document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Subjects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
