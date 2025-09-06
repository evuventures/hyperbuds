"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";

// Enhanced Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

const Solutions = ({ title, description }) => {
  return (
    <section className="relative px-6 py-20 mt-4 md:px-12 lg:px-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.06),transparent_50%)]" />
      
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-blue-600/10 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-2xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0}
      >
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Header + Box 1 */}
          <motion.div className="flex flex-col gap-8" variants={slideIn} custom={0.1}>
            {/* Enhanced Header */}
            <motion.div className="space-y-4" variants={fadeUp} custom={0.15}>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                  {title}
                </h2>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-full blur-xl" />
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {description}
              </p>
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full" />
            </motion.div>

            {/* Enhanced Box 1 */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              variants={scaleUp} 
              custom={0.2}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-700/20 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-700 rounded-md" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                One Platform for All
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hyperbuds helps creators, users to brainstorm, plan, create, and publish in one
                collaborative workspace which solves the problem of <span className="font-semibold text-purple-700">Fragmented Creator Landscape</span> with no centralized hub for meaningful collaboration
              </p>
              
              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-500 to-blue-700 rounded-full opacity-50" />
            </motion.div>
          </motion.div>

          {/* Column 2: Box 2 + Image 1 */}
          <motion.div className="flex flex-col gap-8" variants={slideIn} custom={0.3}>
            {/* Enhanced Box 2 */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              variants={scaleUp} 
              custom={0.4}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-700/20 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-700 rounded-md" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                AI Powered Workflow
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Creators, users get suggestions, templates, and smart nudges at every step
                which displaces manual collab discovery which is time-consuming and inefficient
              </p>
              
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full opacity-50" />
            </motion.div>

            {/* Enhanced Image 1 */}
            <motion.div 
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={scaleUp} 
              custom={0.5}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-700/20 rounded-2xl blur-lg transform rotate-1 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <Image
                  src="/images/share.png"
                  alt="Share Icon"
                  width={300}
                  height={200}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white/80 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3: Image 2 + Box 3 */}
          <motion.div className="flex flex-col gap-8" variants={slideIn} custom={0.6}>
            {/* Enhanced Image 2 */}
            <motion.div 
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              variants={scaleUp} 
              custom={0.7}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-700/20 rounded-2xl blur-lg transform -rotate-1 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <Image
                  src="/images/connect.png"
                  alt="Connect Icon"
                  width={300}
                  height={200}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                
                <motion.div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-purple-400/80 rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>

            {/* Enhanced Box 3 */}
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
              variants={scaleUp} 
              custom={0.8}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-700/20 rounded-xl flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-700 rounded-md" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                Real-Time Collaboration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Creators can livestream or record together in a shared studio environment
              </p>
              
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-purple-500 to-blue-700 rounded-full opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Solutions;