
import React from "react";
import { Award, Star } from "lucide-react";

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
    <section id="qualifications" className="section bg-tutor-lightgray">
      <div className="container mx-auto">
        <h2 className="section-title">Qualifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Academic Achievements</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">
                  <div className="mr-3">
                    {achievement.icon}
                  </div>
                  <div>
                    <span className="font-medium">{achievement.title}:</span> {achievement.score}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-tutor-darkblue">Dual Degree Program (Current)</h4>
                <p>B.Sc in Economics & Finance - Ashoka University</p>
                <p>B.Sc in Data Science & Programming - IIT Madras</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Why Choose Me?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-tutor-blue mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Proven Results</h4>
              <p className="text-gray-600">Track record of student success in exams and competitions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-tutor-purple mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Customized Approach</h4>
              <p className="text-gray-600">Tailored strategies based on individual learning styles</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-tutor-blue mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">Engaging Sessions</h4>
              <p className="text-gray-600">Interactive methods that make math interesting and accessible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
