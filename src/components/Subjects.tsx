
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book, Atom } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Subjects = () => {
  const subjects = [
    {
      title: "IB Mathematics",
      description: "Comprehensive support for MYP and DP students.",
      icon: <GraduationCap className="h-10 w-10 text-tutor-purple" />,
      levels: [
        "MYP 2 to MYP 5",
        "DP1 & DP2 Mathematics AA SL",
        "DP1 & DP2 Mathematics AI SL"
      ]
    },
    {
      title: "IB Sciences",
      description: "Expert tutoring for MYP science subjects.",
      icon: <Atom className="h-10 w-10 text-tutor-purple" />,
      levels: [
        "MYP 2 to MYP 5",
        "Integrated Sciences",
        "Biology, Chemistry, Physics foundations"
      ]
    }
  ];

  return (
    <section id="subjects" className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Subjects & Grade Levels</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Specialized IB tutoring customized to your curriculum requirements and learning goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="glass-card text-white">
              <CardHeader className="flex flex-col items-center pb-2">
                {subject.icon}
                <CardTitle className="mt-4 text-xl text-center">{subject.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <CardDescription className="text-center text-gray-300 mb-4">{subject.description}</CardDescription>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Levels Offered:</h4>
                  <ul className="space-y-2">
                    {subject.levels.map((level, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                          <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </div>
                        <span>{level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <WhatsAppButton className="px-6 py-3 text-lg" />
        </div>
      </div>
    </section>
  );
};

export default Subjects;
