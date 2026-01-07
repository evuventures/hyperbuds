"use client";

import React from 'react';

import { AboutHero } from '@/components/about/AboutHero';
import { TeamGallery } from '@/components/about/TeamGallery';
import { MissionSection } from '@/components/about/MissionSection';

import { FeaturesSection } from '@/components/about/FeaturesSection';


export default function AboutPage() {
   return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
         {/* Header */}
         
         {/* Hero Section */}
         <AboutHero />

         {/* Team Gallery */}
         <TeamGallery />

         {/* Mission Section */}
         <MissionSection />

        
         {/* Features Section */}
         <FeaturesSection />

         {/* Footer */}
      
      </div>
   );
}
