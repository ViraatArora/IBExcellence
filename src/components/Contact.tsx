
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, you'd send this data to an API endpoint
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Contact Me</h2>
        <p className="text-lg text-center text-gray-700 max-w-2xl mx-auto mb-12">
          Have questions or ready to start improving your math skills? Get in touch and let's discuss how I can help you achieve your goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="What would you like to discuss?"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-tutor-purple hover:bg-tutor-darkblue">
                Send Message
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-md">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-tutor-blue mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-gray-600">contact@mathtutor.com</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Email response within 24 hours
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-tutor-blue mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Available Mon-Fri, 9am-6pm
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md bg-tutor-lightgray border-none">
              <h3 className="text-lg font-medium mb-3">Tutoring Sessions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Online via Zoom or Google Meet</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Custom packages available</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
