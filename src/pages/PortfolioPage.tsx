
import React from 'react';
import Layout from '@/components/Layout';
import Portfolio from '@/components/Portfolio';

const PortfolioPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Portfolio</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">A showcase of my recent web development projects</p>
        </div>
      </div>
      <Portfolio />
    </Layout>
  );
};

export default PortfolioPage;
