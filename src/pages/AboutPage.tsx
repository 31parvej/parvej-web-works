
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">About Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn more about my background, education, and career objectives</p>
        </div>
      </div>
      <About />
    </Layout>
  );
};

export default AboutPage;
