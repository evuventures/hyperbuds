"use client";

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { AboutHero } from '@/app/components/about/AboutHero';
import { TeamGallery } from '@/app/components/about/TeamGallery';
import { MissionSection } from '@/app/components/about/MissionSection';
import { VideoTestimonial } from '@/app/components/about/VideoTestimonial';
import { FeaturesSection } from '@/app/components/about/FeaturesSection';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
   return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
         {/* Header */}
         <Navbar />
         {/* Hero Section */}
         <AboutHero />

         {/* Team Gallery */}
         <TeamGallery />

         {/* Mission Section */}
         <MissionSection />

         {/* Video Testimonial */}
         <VideoTestimonial />

         {/* Features Section */}
         <FeaturesSection />

         {/* Footer */}
         <Footer />
      </div>
   );
}
