
import React from 'react';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';

const SkillsPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">My Skills</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive look at my technical skills and expertise</p>
        </div>
      </div>
      <Skills />
    </Layout>
  );
};

export default SkillsPage;
