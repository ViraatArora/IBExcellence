
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Calendar, Award } from "lucide-react";
import { Button } from "./ui/button";

const GroupClasses = () => {
  return (
    <section id="classes" className="section bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Summer Crash Courses</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Intensive, structured small group classes designed to boost your academic performance quickly and effectively.
        </p>
        
        <Card className="glass-card text-white mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Premium Small Group Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                <Users className="h-10 w-10 text-tutor-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Small Groups</h3>
                <p className="text-gray-300">Maximum 3 students per group for personalized attention</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                <Clock className="h-10 w-10 text-tutor-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Fixed Schedule</h3>
                <p className="text-gray-300">Weekly structured lessons with clear progression</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                <Calendar className="h-10 w-10 text-tutor-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Summer 2025</h3>
                <p className="text-gray-300">Intensive sessions during June-August school break</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg">
                <Award className="h-10 w-10 text-tutor-blue mb-4" />
                <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                <p className="text-gray-300">Track record of significant grade improvements</p>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              <ol className="space-y-4 text-left max-w-2xl mx-auto mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-tutor-purple flex items-center justify-center mr-3 text-sm font-bold">1</span>
                  <p>Students are grouped by grade level and subject requirements</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-tutor-purple flex items-center justify-center mr-3 text-sm font-bold">2</span>
                  <p>Customized curriculum based on student needs and IB requirements</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-tutor-purple flex items-center justify-center mr-3 text-sm font-bold">3</span>
                  <p>Regular assessments to track progress and address weaknesses</p>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-tutor-purple flex items-center justify-center mr-3 text-sm font-bold">4</span>
                  <p>Supplementary materials and practice problems provided</p>
                </li>
              </ol>
              <Button 
                className="bg-tutor-purple hover:bg-tutor-darkblue text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Check Batch Availability
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-yellow-500/10 p-6 rounded-lg text-center border border-yellow-500/30">
          <h3 className="text-xl font-semibold mb-2 text-yellow-400">Limited Availability</h3>
          <p className="text-gray-300">Spots fill quickly! Contact now to secure your place in our summer 2025 groups.</p>
        </div>
      </div>
    </section>
  );
};

export default GroupClasses;
