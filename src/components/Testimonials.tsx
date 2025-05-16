
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My son has been learning from Viraat for the past year and all I can say is — he is an amazing teacher. From making notes to preparing for exams and being super patient, he is excellent at what he does. A very dedicated teacher, which is hard to find nowadays.",
      author: "Ms. Vidushi",
      subject: "Parent of student"
    },
    {
      quote: "Viraat Sir is a great tutor who helped me in math and science. Unlike other classes, he makes learning fun, interesting, and entertaining. His dedication really helps students score better marks.",
      author: "Amay",
      subject: "MYP 2 Math and Sciences"
    },
    {
      quote: "The critical thinking approach has completely changed how I tackle math problems. I'm not just memorizing formulas anymore but actually understanding why they work.",
      author: "Reshaan",
      subject: "MYP 5 Math and Sciences"
    }
  ];

  return (
    <section className="section bg-gray-900">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Student Success Stories</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-card relative">
              <Quote className="absolute top-4 left-4 h-6 w-6 text-tutor-purple opacity-30" />
              <CardContent className="pt-12 pb-6">
                <p className="text-gray-300 italic mb-6">{testimonial.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-white font-medium">{testimonial.author}</p>
                  <p className="text-sm text-tutor-blue">{testimonial.subject}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
