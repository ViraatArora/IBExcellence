
import React from "react";
import { Card } from "@/components/ui/card";
import { Brain, LightbulbIcon, ArrowRight } from "lucide-react";

const TeachingPhilosophy = () => {
  return (
    <section className="section bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Teaching Philosophy</h2>
        
        <Card className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-tutor-blue to-tutor-purple flex items-center justify-center flex-shrink-0">
              <Brain className="h-12 w-12 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">Developing Thinking Skills Over Rote Learning</h3>
              <p className="text-gray-300 mb-4">
                My teaching approach focuses on building fundamental understanding and critical thinking abilities rather than memorization. 
                I believe in equipping students with the analytical tools to tackle any problem they encounter.
              </p>
              <blockquote className="border-l-4 border-tutor-purple pl-4 italic text-lg text-gray-300">
                "The content may change, but the habit of thinking stays for life."
              </blockquote>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <LightbulbIcon className="h-5 w-5 text-tutor-purple mr-2" />
                <h4 className="font-medium text-white">Concept Mastery</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Building strong conceptual foundations that allow students to solve even unfamiliar problems.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <LightbulbIcon className="h-5 w-5 text-tutor-purple mr-2" />
                <h4 className="font-medium text-white">Application Focus</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Emphasizing real-world applications to make abstract concepts concrete and memorable.
              </p>
            </div>
            
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <LightbulbIcon className="h-5 w-5 text-tutor-purple mr-2" />
                <h4 className="font-medium text-white">Exam Strategy</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Teaching proven techniques for approaching IB assessments effectively and confidently.
              </p>
            </div>
          </div>
          
        </Card>
      </div>
    </section>
  );
};

export default TeachingPhilosophy;
