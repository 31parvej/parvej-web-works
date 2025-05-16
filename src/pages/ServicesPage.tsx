
import React from 'react';
import Layout from '@/components/Layout';
import Services from '@/components/Services';

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover how I can help you with your web development needs</p>
        </div>
      </div>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
