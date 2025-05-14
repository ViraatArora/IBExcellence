
import React from "react";
import { Award, Star, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const Qualifications = () => {
  const achievements = [
    {
      title: "SAT Math",
      score: "800/800",
      icon: <Star className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "IB Math AA HL",
      score: "7/7",
      icon: <Star className="h-5 w-5 text-yellow-500" />
    },
    {
      title: "IB Math AA HL",
      score: "Subject Topper",
      icon: <Award className="h-5 w-5 text-yellow-500" />
    }
  ];

  return (
    <section id="qualifications" className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Qualifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Academic Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="mr-3">
                    {achievement.icon}
                  </div>
                  <div>
                    <span className="font-medium text-white">{achievement.title}:</span> {achievement.score}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-medium text-tutor-blue">Dual Degree Program (Current)</h4>
                <p>B.Sc in Economics & Finance - Ashoka University</p>
                <p>B.Sc in Data Science & Programming - IIT Madras</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Teaching Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/50 text-tutor-blue mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h4 className="font-medium mb-2 text-white">3+ Years</h4>
              <p className="text-gray-300">Experience teaching IB students with proven results</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/50 text-tutor-purple mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-medium mb-2 text-white">Customized Approach</h4>
              <p className="text-gray-300">Tailored strategies based on individual learning styles</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900/50 text-tutor-blue mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2 text-white">Results-Driven</h4>
              <p className="text-gray-300">90% of students show 1-2 grade level improvement</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Qualifications;
