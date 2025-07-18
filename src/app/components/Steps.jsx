"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const stepsData = [
  { 
    icon: '👤', 
    text: 'Set Your Creator Profile',
    description: 'Showcase your content style, audience, and collaboration goals',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
    step: '01'
  },
  { 
    icon: '🎯', 
    text: 'AI suggests matches based on your niche',
    description: 'Smart algorithm finds perfect collaboration partners',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    step: '02'
  },
  { 
    icon: '🚀', 
    text: 'Start live collabs or book services',
    description: 'Connect, create, and grow your audience together',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
    step: '03'
  },
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      duration: 0.6,
    },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const Steps = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="relative px-6 sm:px-10 md:px-20 lg:px-32 py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#A259FF]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={titleVariants}
      >
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#A259FF] to-gray-900 bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          How it works
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Create a workspace, invite your team, and start building ideas together. HyperBuds uses AI to speed up creative tasks, offer smart suggestions, and keep everyone in sync.
        </motion.p>
      </motion.div>

      {/* Steps Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Connection Path - Desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
          <svg width="100%" height="4" viewBox="0 0 800 4" className="absolute">
            <motion.path
              d="M 50 2 Q 400 2 750 2"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              variants={pathVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A259FF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#A259FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A259FF" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {stepsData.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={stepVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setActiveStep(index)}
              onHoverEnd={() => setActiveStep(null)}
            >
              {/* Step Card */}
              <div className={`relative ${step.bgColor} backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 transition-all duration-300 hover:shadow-2xl hover:border-[#A259FF]/30`}>
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#A259FF] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.step}
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${step.color.split(' ')[1]}/10, ${step.color.split(' ')[3]}/10)`,
                    boxShadow: `0 0 30px ${step.color.split(' ')[1]}/20`,
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg relative overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        scale: activeStep === index ? [1, 1.2, 1] : 1,
                        opacity: activeStep === index ? [0.2, 0.4, 0.2] : 0.2,
                      }}
                      transition={{ duration: 1, repeat: activeStep === index ? Infinity : 0 }}
                    />
                    <span className="relative z-10 filter drop-shadow-sm">
                      {step.icon}
                    </span>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#A259FF] transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {step.text}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 text-sm md:text-base leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Interactive Element */}
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-[#A259FF] to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </div>

              {/* Connection Arrow - Mobile */}
              {index < stepsData.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <motion.div
                    className="w-1 h-12 bg-gradient-to-b from-[#A259FF] to-transparent rounded-full"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            className="relative px-10 py-4 bg-gradient-to-r from-[#A259FF] to-purple-600 text-white font-semibold text-lg rounded-full shadow-lg overflow-hidden group"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(162, 89, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Get Started Today</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#A259FF]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Steps;