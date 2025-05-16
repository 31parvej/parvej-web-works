
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // This would normally send the form data to a server
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Contact Me</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Feel free to reach out for collaborations, project inquiries, or just to say hello!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <h3 className="section-subtitle">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-skyblue/20 rounded-full">
                  <Phone className="w-5 h-5 text-deepblue" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Phone</h4>
                  <p className="text-gray-600">+91 7001282632</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-skyblue/20 rounded-full">
                  <Mail className="w-5 h-5 text-deepblue" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">Email</h4>
                  <a href="mailto:sshahinparvej@gmail.com" className="text-gray-600 hover:text-deepblue">sshahinparvej@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-skyblue/20 rounded-full">
                  <Linkedin className="w-5 h-5 text-deepblue" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">LinkedIn</h4>
                  <a href="https://linkedin.com/in/shahin-parvej" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-deepblue">linkedin.com/in/shahin-parvej</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-skyblue/20 rounded-full">
                  <Github className="w-5 h-5 text-deepblue" />
                </div>
                <div>
                  <h4 className="font-medium text-navy">GitHub</h4>
                  <a href="https://github.com/31parvej" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-deepblue">github.com/31parvej</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Name</label>
                <Input id="name" type="text" placeholder="Your name" required className="w-full" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email</label>
                <Input id="email" type="email" placeholder="Your email" required className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Message</label>
                <Textarea id="message" placeholder="Your message..." required className="w-full min-h-[150px]" />
              </div>
              
              <Button type="submit" className="bg-deepblue hover:bg-navy text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
