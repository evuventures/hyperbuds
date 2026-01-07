"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: 'easeOut' },
  }),
};

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: 'easeOut' },
  }),
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
};

const Hero = ({ heading, subheading, ratings }) => {
 
  
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.8),transparent_50%)]" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-600/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 mt-16 lg:mt-24 px-6 py-20 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center gap-16">
        {/* Left Section */}
        <motion.div
          className="w-full lg:w-[55%] space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={slideIn}
          custom={0}
        >
          {/* Hero Images with Enhanced Layout */}
          <motion.div
            className="relative"
            variants={scaleUp}
            custom={0.1}
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-700/20 rounded-2xl blur-lg transform -rotate-2" />
                <Image 
                  src='/images/rec1.png' 
                  alt="hero img" 
                  width={300} 
                  height={200} 
                  className="relative w-full h-[180px] object-cover rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>
              
              <motion.div
                className="relative group mt-8"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-700/20 rounded-2xl blur-lg transform rotate-2" />
                <Image 
                  src='/images/rec2.png' 
                  alt="hero img" 
                  width={300} 
                  height={200} 
                  className="relative w-full h-[180px] object-cover rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Headings & Text */}
          <motion.div className="space-y-6" variants={fadeUp} custom={0.2}>
            <div className="relative">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold font-lato bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                {heading}
              </h1>
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-full blur-2xl" />
            </div>
            
            <p className="text-lg lg:text-xl text-gray-600 font-inter leading-relaxed max-w-2xl">
              {subheading}
            </p>
          </motion.div>

          {/* Enhanced Users Section */}
          <motion.div
            className="flex items-center"
            variants={fadeUp}
            custom={0.3}
          >
            <div className="flex items-center">
              {["/images/user5.png", "/images/user1.png", "/images/user2.png", "/images/user3.png", "/images/user4.png"].map(
                (userPath, index) => (
                  <motion.div
                    key={index}
                    className={`relative ${index !== 0 ? "-ml-3" : ""}`}
                    whileHover={{ scale: 1.1, zIndex: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-700/30 rounded-full blur-md" />
                    <Image
                      src={userPath}
                      alt={`user-${index}`}
                      width={56}
                      height={56}
                      className="relative w-14 h-14 rounded-full object-cover border-3 border-white shadow-lg"
                    />
                  </motion.div>
                )
              )}
            </div>
            <div className="ml-4 text-sm text-gray-500">
              <span className="font-semibold text-gray-700">2000+</span> happy users
            </div>
          </motion.div>

          {/* Enhanced Button */}
          <motion.button
            className="group relative px-8 py-4 text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl"
            variants={fadeUp}
            custom={0.4}
          
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-800" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/0 to-black/0 group-hover:from-black/10 group-hover:to-black/10 transition-all duration-300" />
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
            <Link href="/waitlist" className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <motion.span
                className="inline-block"
               
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}

              >
                →
              </motion.span>
            </Link>
          </motion.button>

          {/* Enhanced Divider */}
          <motion.div
            className="relative w-full max-w-md"
            variants={fadeUp}
            custom={0.5}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-700 rounded-full" />
          </motion.div>

          {/* Enhanced Ratings */}
          <motion.div
            className="flex flex-row items-center gap-8"
            variants={fadeUp}
            custom={0.6}
          >
            {ratings &&
              ratings.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text text-transparent">
                      {item.value}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base mt-1 group-hover:text-gray-700 transition-colors">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Right Image */}
        <motion.div
          className="w-full lg:w-[45%] relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleUp}
          custom={0.3}
        >
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-700/30 rounded-3xl blur-2xl transform -rotate-1 scale-110" />
            
            {/* Main Image */}
            <div className="relative">
              <Image 
                src="/images/rec3.png" 
                alt="hero right img" 
                width={600} 
                height={400} 
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 rounded-3xl" />
              
              {/* Floating Elements on Image */}
              <motion.div
                className="absolute top-8 right-8 w-4 h-4 bg-white/80 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-12 left-8 w-3 h-3 bg-purple-400/80 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.3, 1],
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
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;