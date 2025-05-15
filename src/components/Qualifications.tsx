
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
                <h4 className="font-medium text-tutor-blue">Ashoka University</h4>
                <p>B.Sc in Economics & Finance with a minor in Mathematics</p>
              </div>
              <div>
                <h4 className="font-medium text-tutor-blue">IIT Madras</h4>
                <p>B.Sc in Data Science & Programming</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="glass-card p-6">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Teaching Experience</h3>
          <p className="text-center text-gray-300 mb-6">
            Have taught students from MYP 1 to DP 2, and being a recent student myself, I'm up to date with how IB works.
          </p>
          <div className="flex justify-center">
            <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg text-center max-w-lg">
              <p className="text-yellow-400 font-bold text-lg mb-2">Book a trial class to help you decide!</p>
              <p className="text-gray-300">Experience the teaching style and approach before committing to a full course.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Qualifications;
