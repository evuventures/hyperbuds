"use client"; 
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Image from 'next/image';

// Update the image paths to point to the public folder
const sectorData = [
  { image: '/images/influencers.png', title: 'Influencers' },
  { image: '/images/educators.png', title: 'Educators' },
  { image: '/images/content.png', title: 'Content Creators' },
  { image: '/images/podcast.png', title: 'Podcasts' },
  { image: '/images/artist.png', title: 'Artists' },
  { image: '/images/agency.png', title: 'Creative Agency' },
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

const Sectors = () => {
  return (
    <section className="flex flex-col justify-between px-6 sm:px-10 md:px-20 lg:px-32 py-16 text-black">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who HyperBuds Is For</h2>
      <span className="text-sm md:text-base mb-12 tracking-wide max-w-4xl">
        Whether you're a content creator, educator, designer, or startup team, HyperBuds adapts to your workflow.
        From classrooms to creative agencies, it’s designed to help anyone brainstorm, collaborate, and create with
        ease—powered by smart AI and a sleek, intuitive interface.
      </span>
      <div className="flex flex-col gap-8">
        {/* First row */}
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {sectorData.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center text-center w-full sm:w-1/3 gap-2"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              custom={index * 0.2} // Apply staggered animation with a delay
              viewport={{ once: false, amount: 0.2 }}// Trigger only when in the viewport
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-md"
                width={200} // Add width and height to the Image component
                height={200}
              />
              <p className="text-base font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
        {/* Second row */}
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {sectorData.slice(3).map((item, index) => (
            <motion.div
              key={index + 3}
              className="flex flex-col items-center justify-center text-center w-full sm:w-1/3 gap-2"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              custom={(index + 3) * 0.2} // Apply staggered animation with a delay for the second row
              viewport={{ once: false, amount: 0.2 }} // Trigger only when in the viewport
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-md"
                width={200} // Add width and height to the Image component
                height={200}
              />
              <p className="text-base font-semibold">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sectors;
