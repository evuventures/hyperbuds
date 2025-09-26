"use client";

import React from 'react';
import { ContactHero } from './ContactHero';
import { ContactInfoCards } from './ContactInfoCards';
import { ContactForm } from './ContactForm';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
    </div>
  )
}

export default Contact