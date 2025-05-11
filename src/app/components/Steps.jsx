"use client"; 
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Image from "next/image";

// Update the image paths to point to the public folder
const stepsData = [
  { image: '/images/profile.png', text: 'Set Your Creator Profile' },
  { image: '/images/match.png', text: 'AI suggests matches based on your niche' },
  { image: '/images/collab.png', text: 'Start live collabs or book services' },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const Steps = () => {
  return (
    <section className="flex flex-col items-left justify-between px-6 sm:px-10 md:px-20 lg:px-32 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-left mb-4 text-black">How it works</h2>
      <span className="text-sm md:text-base text-black mb-12 max-w-4xl">
        Create a workspace, invite your team, and start building ideas together. HyperBuds uses AI to speed up creative tasks, offer smart suggestions, and keep everyone in sync.
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10 w-full">
        {stepsData.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-3 w-full sm:w-1/3 text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            custom={index * 0.2} // Apply staggered animation with a delay
            viewport={{ once: false, amount: 0.2 }} // Trigger only when in the viewport
          >
            <Image src={step.image} alt={step.text} className="w-[120px] h-[120px] md:w-[150px] md:h-[150px]" width={150} height={150} />
            <span className="text-sm md:text-base text-black">{step.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
