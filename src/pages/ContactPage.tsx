
import React from 'react';
import Layout from '@/components/Layout';
import Contact from '@/components/Contact';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Contact Me</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Get in touch for project inquiries or just to say hello</p>
        </div>
      </div>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
