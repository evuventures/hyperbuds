


"use client";
 import React from 'react';
import { motion } from 'framer-motion'; // Import motion
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

const Features = () => {
  return (
    <div className="flex flex-col gap-8 px-6 py-20 md:px-12 lg:px-24 text-white bg-black">
      <motion.div className="flex flex-col md:flex-row justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0.1}>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Key Features</h2>
          <p className="text-sm">
            AI-assisted brainstorming, real-time collaboration, visual feedback tools, smart version tracking,
            and a clean, modern interface designed for creators.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col border border-[#A259FF] rounded-xl p-6">
          <Image className="w-16 h-16 mb-4" src="/images/AI.png" alt="AI Matchmaker" width={64} height={64} />
          <h2 className="text-xl font-semibold mb-1">AI Matchmaker</h2>
          <span className="text-sm mb-2">Smart Collab Engine Powered by AI</span>
          <p className="text-sm">
            The AI Matchmaker intelligently pairs creators using deep analysis of audience overlap, engagement
            patterns, content style, and creator goals. It assigns a "Collab Potential Score" and offers optimized
            co-stream suggestions (scripts, hashtags, timing). It turns guesswork into data-driven synergy — creators don’t just meet, they match.
          </p>
        </div>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row justify-between gap-8"
        initial="hidden"
        whileInView="visible"
    viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0.2}>
        <div className="w-full md:w-1/2 flex flex-col border border-[#A259FF] rounded-xl p-6">
          <Image className="w-16 h-16 mb-4" src="/images/livecollab.png" alt="Live Collab Studio" width={64} height={64} />
          <h2 className="text-xl font-semibold mb-1">Live Collab Studio</h2>
          <span className="text-sm mb-2">Real-Time Collaborative Studio</span>
          <p className="text-sm">
            Creators can livestream or record together in a shared studio environment. Options include
            split-screen, picture-in-picture, and private chats for seamless communication. Features also include
            an AI Smart Prompter for live idea suggestions, and overlays for emojis/text — ideal for duets,
            reactions, interviews, product reviews, and more.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col border border-[#A259FF] rounded-xl p-6">
          <Image className="w-16 h-16 mb-4" src="/images/market.png" alt="Creator Marketplace" width={64} height={64} />
          <h2 className="text-xl font-semibold mb-1">Creator Marketplace</h2>
          <span className="text-sm mb-2">Collab-as-a-Service Platform</span>
          <p className="text-sm">
            A digital marketplace where creators offer and book paid collaboration services like duets,
            shoutouts, interviews, or co-hosted lives. Listings include pricing, delivery times, and reviews. It's
            like Fiverr + Cameo, but for livestream collaboration. Payments and scheduling are handled
            in-platform.
          </p>
        </div>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeUp}
        custom={0.3}>
        <div className="w-full md:w-1/2 flex flex-col border border-[#A259FF] rounded-xl p-6">
          <Image className="w-16 h-16 mb-4" src="/images/rizz.png" alt="Rizz Score" width={64} height={64} />
          <h2 className="text-xl font-semibold mb-1">Rizz Score</h2>
          <span className="text-sm mb-2">Trust + Influence Rating System</span>
          <p className="text-sm">
            A proprietary metric that blends engagement quality, audience loyalty, and content impact. Used by the
            AI to enhance matchmaking accuracy and by brands to evaluate collaboration potential. Think of it as
            your verified “collab value” in one number.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col border border-[#A259FF] rounded-xl p-6">
          <Image className="w-16 h-16 mb-4" src="/images/analytics.png" alt="Real-Time Analytics" width={64} height={64} />
          <h2 className="text-xl font-semibold mb-1">Real-Time Analytics</h2>
          <span className="text-sm mb-2">Growth + Performance Dashboard</span>
          <p className="text-sm">
            An interactive dashboard providing actionable insights like follower growth, engagement trends,
            collab ROI, and audience behavior. Helps creators understand what works, when to go live, and how to
            improve their content strategy based on real-time performance data.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
