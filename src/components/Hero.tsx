
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#FEFAE0]">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#DDA15E]/20 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#606C38]/10 rounded-full filter blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-[#BC6C25]/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 max-w-xl">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="bg-[#283618]/10 text-[#283618] border-[#283618]/20 py-1.5 px-3">
                Available for freelance work
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#283618]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#606C38] to-[#BC6C25]">Shahin Parvej</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-[#606C38]">
                Web Developer | PHP, Laravel & WordPress Specialist
              </p>
              <p className="text-[#283618]/80 text-lg">
                I'm a recent B.Tech graduate passionate about building modern websites and managing IT infrastructure. I specialize in custom PHP, Laravel, and WordPress projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="bg-[#606C38] hover:bg-[#606C38]/90 transition-opacity">
                  <Link to="/portfolio">
                    View Portfolio <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25]/10">
                  <Link to="/contact">
                    Hire Me
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <span className="text-sm text-[#283618]/70">Find me on:</span>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/shahin-parvej" target="_blank" rel="noreferrer" className="text-[#606C38] hover:text-[#283618] transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://github.com/31parvej" target="_blank" rel="noreferrer" className="text-[#606C38] hover:text-[#283618] transition-colors" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a href="mailto:sshahinparvej@gmail.com" className="text-[#606C38] hover:text-[#283618] transition-colors" aria-label="Email">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="aspect-square relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#DDA15E] to-[#BC6C25] rounded-full blur-lg opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-[#606C38] rounded-full blur-md"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#283618] rounded-full blur-md"></div>
              
              {/* Profile image container */}
              <div className="relative z-10 w-full h-full rounded-full border-4 border-[#FEFAE0] shadow-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Shahin Parvej"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute bottom-4 -left-8 bg-[#FEFAE0] py-2 px-3 rounded-lg shadow-lg animate-bounce border border-[#DDA15E]/20">
                <span className="text-sm font-medium text-[#283618]">WordPress</span>
              </div>
              <div className="absolute top-4 -right-4 bg-[#FEFAE0] py-2 px-3 rounded-lg shadow-lg animate-bounce border border-[#DDA15E]/20" style={{ animationDelay: '0.5s' }}>
                <span className="text-sm font-medium text-[#283618]">PHP</span>
              </div>
              <div className="absolute top-1/2 -left-10 bg-[#FEFAE0] py-2 px-3 rounded-lg shadow-lg animate-bounce border border-[#DDA15E]/20" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium text-[#283618]">Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
