
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <h3 className="section-subtitle">Personal Bio</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a recent B.Tech graduate specializing in web development with a focus on PHP, Laravel, and WordPress. 
              My education in Electronics & Communication Engineering has provided me with a solid foundation in technical concepts,
              which I apply to create modern, functional websites and manage IT infrastructure projects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I'm passionate about building efficient, user-friendly web solutions that solve real problems for individuals and businesses.
              When I'm not coding, I enjoy exploring new technologies, participating in community events, and contributing to open-source projects.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="section-subtitle">Education</h3>
            <div className="space-y-6">
              <div className="card">
                <h4 className="font-semibold text-navy">B.Tech in Electronics & Communication Engineering</h4>
                <p className="text-deepblue">Meghnad Saha Institute of Technology</p>
                <p className="text-gray-500">2019 - 2023</p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-navy">Higher Secondary</h4>
                <p className="text-deepblue">Jotekamal High School</p>
                <p className="text-gray-500">71.80%</p>
              </div>
              
              <div className="card">
                <h4 className="font-semibold text-navy">Secondary</h4>
                <p className="text-deepblue">Jotekamal High School</p>
                <p className="text-gray-500">84.57%</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="section-subtitle">Career Objective</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I seek an Infrastructure Intern position to leverage my technical and analytical skills in supporting and managing IT infrastructure projects.
            </p>
            
            <div className="mt-6">
              <h4 className="font-semibold text-navy mb-3">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                <span className="bg-skyblue/20 text-navy px-4 py-1 rounded-full">Leadership</span>
                <span className="bg-skyblue/20 text-navy px-4 py-1 rounded-full">Event Management</span>
                <span className="bg-skyblue/20 text-navy px-4 py-1 rounded-full">Time Management</span>
                <span className="bg-skyblue/20 text-navy px-4 py-1 rounded-full">Research</span>
                <span className="bg-skyblue/20 text-navy px-4 py-1 rounded-full">Writing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
