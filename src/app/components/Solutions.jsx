"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image"; 

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const Solutions = ({ title, description }) => {
  return (
    <motion.section
      className="px-6 py-20 mt-4 md:px-12 lg:px-24 bg-white"
      initial="hidden"
      whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
      custom={0}
    >
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Column 1: Header + Box 1 */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp} custom={0.1}>
          <div className='h-32 lg:h-50'>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 w-full">{title}</h2>
            <p className="mt-2 text-gray-500 text-sm md:text-sm">{description}</p>
          </div>
          <motion.div className="bg-gray-200 rounded-xl p-6" variants={fadeUp} custom={0.2}>
            <h3 className="text-lg font-semibold mb-2">One Platform for All</h3>
            <p className="text-sm text-gray-800">
              Hyperbuds helps creators, users to brainstorm, plan, create, and publish in one
              collaborative workspace which solves the problem of <strong>Fragmented Creator Landscape</strong> with no centralized hub for meaningful collaboration
            </p>
          </motion.div>
        </motion.div>

        {/* Column 2: Box 2 + Image 1 */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp} custom={0.3}>
          <motion.div className="bg-gray-200 rounded-xl h-48 p-6" variants={fadeUp} custom={0.4}>
            <h3 className="text-lg font-semibold mb-2">AI Powered Workflow</h3>
            <p className="text-sm text-gray-800">
              Creators, users get suggestions, templates, and smart nudges at every step
              which displaces manual collab discovery which is time-consuming and inefficient
            </p>
          </motion.div>
          <motion.div className="rounded-xl overflow-hidden" variants={fadeUp} custom={0.5}>
            <Image 
              src="/images/share.png" 
              alt="Share Icon" 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
          </motion.div>
        </motion.div>

        {/* Column 3: Image 2 + Box 3 */}
        <motion.div className="flex flex-col gap-6" variants={fadeUp} custom={0.6}>
          <motion.div className="rounded-xl overflow-hidden" variants={fadeUp} custom={0.7}>
            <Image 
              src="/images/connect.png" 
              alt="Connect Icon" 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover" 
            />
          </motion.div>
          <motion.div className="bg-gray-200 rounded-xl h-48 p-6" variants={fadeUp} custom={0.8}>
            <h3 className="text-lg font-semibold mb-2">Real-Time Collaboration</h3>
            <p className="text-sm text-gray-800">
              Creators can livestream or record together in a shared studio environment
            </p>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Solutions;
