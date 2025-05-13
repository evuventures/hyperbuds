
"use client";
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Solutions from './Solutions'
import Features from './Features'
import Steps from './Steps'
import Sectors from './Sectors'
import Testimonial from './Testimonial'
import Blogs from './Blog'
import Faq from './Faq'
import Prefooter from './Prefooter'
import Footer from './Footer'



const Main = () => {
  return (
    <div>
     <Navbar/>
     
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
           
           <Footer/>
       {/*    
     */}
    </div>

  )
}

export default Main
