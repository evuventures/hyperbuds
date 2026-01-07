
"use client";
import React from 'react'

import Hero from './landing-page/Hero'
import Solutions from './landing-page/Solutions'
import Features from './landing-page/Features'
import Steps from './landing-page/Steps'
import Sectors from './landing-page/Sectors'
import Testimonial from './landing-page/Testimonial'
import Blogs from './landing-page/Blog'
import Faq from './landing-page/Faq'
import Prefooter from './landing-page/Prefooter'


const Main = () => {
  return (
    <div>
    
     
     <Hero
              heading="Unleash Creative Collaboration, Powered by AI"
        subheading="AI-powered collabs.live.instant.Global"
        ratings={[
          { value: '15K+', label: 'AI Matchmaker' },
          { value: '10K+', label: 'Collaboration' },
          { value: '8K+', label: 'Growth' }
        ]}/>
        
      <Solutions
               title='Your Creative Workspace, Reimagined'
       description='HyperBuds unites ideation, feedback,and execution in one AI-Powered hub'/>
      
           <Features/>
           
           <Steps/>
           
           <Sectors/>
           
           <Testimonial/>
           
           <Blogs/>
          
           <Faq/>
      
               <Prefooter/>
           
          
       {/*    
     */}
    </div>

  )
}

export default Main
