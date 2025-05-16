
import React from 'react';
import { Code, Github, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Website Development',
      description: 'Tailored websites built from scratch using PHP, Laravel, or other frameworks based on your specific requirements.',
      icon: <Code size={36} className="text-deepblue" />,
      features: [
        'Responsive design for all devices',
        'Custom functionality and features',
        'Database design and integration',
        'User authentication systems',
        'Performance optimization'
      ]
    },
    {
      title: 'WordPress Site Setup',
      description: 'Professional WordPress websites with custom themes, plugins, and functionality to match your brand identity.',
      icon: <Github size={36} className="text-deepblue" />,
      features: [
        'Custom theme development or customization',
        'Plugin installation and configuration',
        'E-commerce integration (WooCommerce)',
        'Content migration and setup',
        'Security hardening'
      ]
    },
    {
      title: 'Figma-based UI Design',
      description: 'Transform your Figma designs into fully functional, responsive websites with pixel-perfect implementation.',
      icon: <FileText size={36} className="text-deepblue" />,
      features: [
        'Pixel-perfect code implementation',
        'Responsive adaptations of designs',
        'Interactive elements and animations',
        'Cross-browser compatibility',
        'Optimized assets and performance'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Services I Offer</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          I provide comprehensive web development services tailored to meet your specific needs and requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-navy">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow mr-2 mt-2"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
