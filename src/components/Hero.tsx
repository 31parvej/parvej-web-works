import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const Hero: React.FC = () => {
  return <section className="relative overflow-hidden py-24 lg:py-32 bg-cream">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber/20 rounded-full filter blur-[100px] -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-olive/10 rounded-full filter blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-copper/10 rounded-full filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6 max-w-2xl">
              <Badge variant="outline" className="bg-darkGreen/5 text-darkGreen border-darkGreen/10 py-1.5 px-4 text-sm font-medium rounded-full animate-fade-in">
                Available for freelance work
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-darkGreen leading-tight animate-fade-in">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-copper">Shahin Parvej</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-olive/90 animate-fade-in" style={{
              animationDelay: '150ms'
            }}>
                Web Developer | PHP, Laravel & WordPress Specialist
              </p>
              <p className="text-lg text-darkGreen/80 animate-fade-in" style={{
              animationDelay: '300ms'
            }}>
                I'm a recent B.Tech graduate passionate about building modern websites and managing IT infrastructure. I specialize in custom PHP, Laravel, and WordPress projects.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{
              animationDelay: '450ms'
            }}>
                <Button asChild size="lg" className="bg-olive hover:bg-olive/90 text-cream transition-all shadow-lg hover:shadow-xl">
                  <Link to="/portfolio" className="flex items-center gap-2">
                    View Portfolio <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-copper text-copper hover:bg-copper/10 transition-all">
                  <Link to="/contact">
                    Hire Me
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-6 animate-fade-in" style={{
              animationDelay: '600ms'
            }}>
                <span className="text-sm font-medium text-darkGreen/70">Find me on:</span>
                <div className="flex gap-5">
                  <a href="https://linkedin.com/in/shahin-parvej" target="_blank" rel="noreferrer" className="text-olive hover:text-darkGreen transition-colors" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="https://github.com/31parvej" target="_blank" rel="noreferrer" className="text-olive hover:text-darkGreen transition-colors" aria-label="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a href="mailto:sshahinparvej@gmail.com" className="text-olive hover:text-darkGreen transition-colors" aria-label="Email">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="relative animate-fade-in" style={{
            animationDelay: '300ms'
          }}>
              {/* Profile image with effects */}
              <div className="aspect-square relative max-w-md mx-auto lg:ml-auto">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber via-copper to-amber/70 rounded-full blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-olive rounded-full blur-lg opacity-60"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-darkGreen rounded-full blur-lg opacity-50"></div>
                
                {/* Profile image container */}
                <div className="relative z-10 w-full h-full rounded-full border-4 border-cream shadow-[0_0_25px_rgba(0,0,0,0.1)] overflow-hidden">
                  <img src="/placeholder.svg" alt="Shahin Parvej" className="w-full h-full object-cover transition-all duration-700 hover:scale-110" />
                </div>
                
                {/* Floating skill tags */}
                <div className="absolute -left-6 bottom-1/4 py-2 shadow-lg animate-bounce border border-amber/20 transition-transform hover:-translate-y-1 rounded bg-lime-700 px-[16px] my-0">
                  <span className="font-medium text-darkGreen whitespace-nowrap">WordPress</span>
                </div>
                <div className="absolute -right-4 top-12 bg-cream py-2 px-4 rounded-full shadow-lg animate-bounce border border-amber/20" style={{
                animationDelay: '0.6s'
              }}>
                  <span className="font-medium text-darkGreen whitespace-nowrap">PHP</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;