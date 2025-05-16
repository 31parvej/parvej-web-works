
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-skyblue/20 via-white to-yellow/10 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Hi, I'm <span className="text-deepblue">Shahin Parvej</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6">
              Web Developer | PHP, Laravel & WordPress Specialist
            </p>
            <p className="text-gray-600 mb-8 max-w-lg">
              I'm a recent B.Tech graduate passionate about building modern websites and managing IT infrastructure. I specialize in custom PHP, Laravel, and WordPress projects.
            </p>
            <div className="space-x-4">
              <Button asChild className="bg-deepblue hover:bg-navy text-white px-6 py-2 rounded-md">
                <Link to="/portfolio">
                  View Portfolio <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-deepblue text-deepblue hover:bg-deepblue/10">
                <Link to="/contact">
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-2/5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow to-orange rounded-full blur-md opacity-70"></div>
              <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="/placeholder.svg" 
                  alt="Shahin Parvej"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
