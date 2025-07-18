"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Enhanced Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
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

const glowVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: [0, 1.2, 1], 
    opacity: [0, 0.8, 0.4],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: "🤖",
      title: "AI Matchmaker",
      subtitle: "Smart Collab Engine Powered by AI",
      description: "The AI Matchmaker intelligently pairs creators using deep analysis of audience overlap, engagement patterns, content style, and creator goals. It assigns a 'Collab Potential Score' and offers optimized co-stream suggestions (scripts, hashtags, timing). It turns guesswork into data-driven synergy — creators don't just meet, they match.",
      gradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "shadow-purple-500/30",
    },
    {
      id: 2,
      icon: "🎥",
      title: "Live Collab Studio",
      subtitle: "Real-Time Collaborative Studio",
      description: "Creators can livestream or record together in a shared studio environment. Options include split-screen, picture-in-picture, and private chats for seamless communication. Features also include an AI Smart Prompter for live idea suggestions, and overlays for emojis/text — ideal for duets, reactions, interviews, product reviews, and more.",
      gradient: "from-blue-500/20 to-purple-500/20",
      glowColor: "shadow-blue-500/30",
    },
    {
      id: 3,
      icon: "🛒",
      title: "Creator Marketplace",
      subtitle: "Collab-as-a-Service Platform",
      description: "A digital marketplace where creators offer and book paid collaboration services like duets, shoutouts, interviews, or co-hosted lives. Listings include pricing, delivery times, and reviews. It's like Fiverr + Cameo, but for livestream collaboration. Payments and scheduling are handled in-platform.",
      gradient: "from-green-500/20 to-blue-500/20",
      glowColor: "shadow-green-500/30",
    },
    {
      id: 4,
      icon: "⚡",
      title: "Rizz Score",
      subtitle: "Trust + Influence Rating System",
      description: "A proprietary metric that blends engagement quality, audience loyalty, and content impact. Used by the AI to enhance matchmaking accuracy and by brands to evaluate collaboration potential. Think of it as your verified 'collab value' in one number.",
      gradient: "from-yellow-500/20 to-orange-500/20",
      glowColor: "shadow-yellow-500/30",
    },
    {
      id: 5,
      icon: "📊",
      title: "Real-Time Analytics",
      subtitle: "Growth + Performance Dashboard",
      description: "An interactive dashboard providing actionable insights like follower growth, engagement trends, collab ROI, and audience behavior. Helps creators understand what works, when to go live, and how to improve their content strategy based on real-time performance data.",
      gradient: "from-red-500/20 to-pink-500/20",
      glowColor: "shadow-red-500/30",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A259FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A259FF]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#A259FF]/3 to-transparent rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#A259FF]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col gap-16 px-6 py-20 md:px-12 lg:px-24 text-white">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#A259FF] to-white bg-clip-text text-transparent">
              Key Features
            </h2>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-[#A259FF]/20 to-transparent rounded-lg blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            AI-assisted brainstorming, real-time collaboration, visual feedback tools, smart version tracking,
            and a clean, modern interface designed for creators.
          </motion.p>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredCard(feature.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r from-[#A259FF]/50 to-transparent rounded-2xl blur-xl ${feature.glowColor}`}
                animate={{
                  opacity: hoveredCard === feature.id ? 0.6 : 0.2,
                  scale: hoveredCard === feature.id ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Main Card */}
              <div className={`relative h-full backdrop-blur-xl bg-gradient-to-br ${feature.gradient} border border-[#A259FF]/30 rounded-2xl p-8 transition-all duration-300 hover:border-[#A259FF]/60`}>
                {/* Icon with Animation */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-6xl mb-4 relative">
                    {feature.icon}
                    <motion.div
                      className="absolute inset-0 bg-[#A259FF]/20 rounded-full blur-xl"
                      animate={{
                        scale: hoveredCard === feature.id ? [1, 1.2, 1] : 1,
                        opacity: hoveredCard === feature.id ? [0.3, 0.6, 0.3] : 0.1,
                      }}
                      transition={{ duration: 1, repeat: hoveredCard === feature.id ? Infinity : 0 }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#A259FF] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-[#A259FF] text-sm font-medium mb-4 uppercase tracking-wide">
                    {feature.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Interactive Elements */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <div className="w-3 h-3 bg-[#A259FF] rounded-full animate-pulse"></div>
                </motion.div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A259FF] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.button
            className="relative px-12 py-4 bg-gradient-to-r from-[#A259FF] to-[#A259FF]/70 text-white font-bold text-lg rounded-full overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Explore All Features</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;