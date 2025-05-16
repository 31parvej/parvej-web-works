
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Index;
