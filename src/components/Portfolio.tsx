
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A complete student management solution with user registration, login functionality, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
      features: [
        'User authentication and role-based access',
        'Student profile management',
        'Course registration and tracking',
        'Admin dashboard with analytics'
      ]
    },
    {
      title: 'E-commerce Shopping Website',
      description: 'A full-featured online shop with product browsing, cart system, user authentication, and admin panel.',
      image: '/placeholder.svg',
      technologies: ['Laravel', 'MySQL', 'AJAX', 'Bootstrap', 'jQuery'],
      features: [
        'Product catalog with categories and filtering',
        'Shopping cart and checkout system',
        'User accounts and order history',
        'Admin panel for inventory management'
      ]
    },
    {
      title: 'Movie Website',
      description: 'A blog-style movie website with post listings, category filtering, and search functionality.',
      image: '/placeholder.svg',
      technologies: ['WordPress', 'Elementor', 'PHP', 'MySQL'],
      features: [
        'Movie reviews and ratings',
        'Category-based browsing',
        'Advanced search functionality',
        'Responsive design for all devices'
      ]
    },
    {
      title: 'Tours & Travel Website',
      description: 'An informative website showcasing travel packages and destinations with booking inquiries.',
      image: '/placeholder.svg',
      technologies: ['WordPress', 'PHP', 'CSS', 'jQuery'],
      features: [
        'Tour package showcase',
        'Destination information pages',
        'Booking inquiry forms',
        'Image galleries and testimonials'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">My Portfolio</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of the projects I've worked on that showcase my skills and expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-navy">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-skyblue/20 text-navy hover:bg-skyblue/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="space-y-1 text-sm text-gray-700">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow mr-2 mt-2"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-deepblue text-deepblue hover:bg-deepblue/10">
                  View Project <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
