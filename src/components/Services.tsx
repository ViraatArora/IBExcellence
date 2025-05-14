
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Book } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "IB Diploma Programme Math AA SL",
      description: "Comprehensive support for 11th grade IB students, covering all AA SL curriculum topics with specialized focus on exam preparation techniques.",
      icon: <GraduationCap className="h-10 w-10 text-tutor-purple" />
    },
    {
      title: "Middle & High School Mathematics",
      description: "Tailored tutoring for students in grades 8 and above, strengthening foundational concepts and advanced problem-solving skills.",
      icon: <Book className="h-10 w-10 text-tutor-purple" />
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Subjects & Grade Levels</h2>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Specialized mathematics tutoring customized to your curriculum needs and learning style.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-2">
                {service.icon}
                <CardTitle className="mt-4 text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-tutor-lightgray rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold text-center mb-4">My Teaching Approach</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Concept-based learning for thorough understanding</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Personalized learning plans for each student</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Regular progress assessments and feedback</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Exam strategies and time management techniques</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
