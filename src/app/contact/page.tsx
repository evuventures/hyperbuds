"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Navbar />

      {/* Contact Content */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ContactPage