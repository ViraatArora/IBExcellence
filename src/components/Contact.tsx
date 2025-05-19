
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WhatsAppButton from "./WhatsAppButton";


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data for the submission
      const formSubmission = new FormData();
      formSubmission.append("name", formData.name);
      formSubmission.append("email", formData.email);
      formSubmission.append("message", formData.message);
      formSubmission.append("_subject", "New Inquiry from IB Excellence Website");
      formSubmission.append("_template", "table");
      formSubmission.append("_captcha", "false");
      
      // Send to FormSubmit which will forward to the specified email
      await fetch("https://formsubmit.co/ibexcellence03@gmail.com", {
        method: "POST",
        body: formSubmission,
      });
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you shortly.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-800">
      <div className="container mx-auto">
        <h2 className="section-title text-white">Reserve Your Slot</h2>
        <p className="text-lg text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Reach out now to check availability for summer 2025 crash courses.
        </p>
        
        <div className="flex justify-center mb-8">
          <WhatsAppButton className="px-6 py-3 text-lg" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-200">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-200">
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
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Interested in which subject and grade level?"
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-tutor-purple hover:bg-tutor-darkblue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
          
          <div className="space-y-6">
            <Card className="glass-card p-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-tutor-blue mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1 text-white">Email</h3>
                  <p className="text-gray-300">ibexcellence03@gmail.com</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Email response within 24 hours
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-tutor-blue mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-1 text-white">WhatsApp</h3>
                  <p className="text-gray-300">+91 7982070662</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Available Mon-Fri, 10am-6pm
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="glass-card p-6 border-t-4 border-yellow-500 bg-yellow-500/5">
              <h3 className="text-lg font-medium mb-3 text-white">Summer 2025 Registration</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span>Early registration opens last week of May 2025</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span>Priority given to returning students</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-tutor-purple rounded-full p-1">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                  </div>
                  <span className="font-medium text-yellow-400">Contact now to check availability</span>
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
