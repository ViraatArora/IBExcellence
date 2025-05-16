
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My son was struggling with Math AA SL and was on a 3. After just one summer course, he achieved a 6 in his next assessment. The way complex concepts were broken down made all the difference.",
      author: "Parent of DP1 Student",
      subject: "Math AA SL"
    },
    {
      quote: "The small group format was perfect. I received personal attention while also learning from my peers' questions. My MYP science grade improved from a 4 to a 6.",
      author: "MYP 4 Student",
      subject: "Science"
    },
    {
      quote: "The critical thinking approach has completely changed how I tackle math problems. I'm not just memorizing formulas anymore but actually understanding why they work.",
      author: "DP2 Student",
      subject: "Math AI SL"
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
