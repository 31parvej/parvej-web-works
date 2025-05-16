
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'PHP', level: 85 },
    { name: 'Laravel', level: 80 },
    { name: 'WordPress', level: 90 },
    { name: 'MySQL', level: 75 },
    { name: 'AJAX', level: 70 },
    { name: 'jQuery', level: 75 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
  ];

  const toolsAndPlatforms = [
    { name: 'GitHub', level: 80 },
    { name: 'MS Office', level: 85 },
    { name: 'Canva', level: 75 },
    { name: 'Google Workspace', level: 90 },
    { name: 'Windows', level: 85 },
    { name: 'Mac', level: 70 },
    { name: 'Linux', level: 65 },
    { name: 'Networking', level: 60 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="animate-fade-in">
            <h3 className="section-subtitle mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-navy">{skill.name}</span>
                    <span className="text-sm text-deepblue">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className={cn("h-2", "bg-secondary")}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="section-subtitle mb-6">Tools & Platforms</h3>
            <div className="space-y-5">
              {toolsAndPlatforms.map((tool, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-navy">{tool.name}</span>
                    <span className="text-sm text-deepblue">{tool.level}%</span>
                  </div>
                  <Progress 
                    value={tool.level} 
                    className={cn("h-2", "bg-secondary")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I continuously work on expanding my skill set and staying updated with the latest technologies
            and best practices in web development and infrastructure management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
