"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function MissionSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
      <section ref={ref} className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
             <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
             >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
                   Our Mission: AI-Driven Collaboration to Redefine Creator Growth
                </h2>
             </motion.div>

             <motion.div
                className="grid md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
             >
                <div className="space-y-6">
                   <motion.p
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                   >
                      HyperBuds is built to solve the fragmentation of the creator landscape by offering a centralized hub for meaningful collaboration. Using our proprietary AI algorithm, we intelligently match streamers, influencers, and podcasters based on synergy, audience overlap, and engagement potential.
                   </motion.p>

                   <motion.p
                      className="text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, x: -15 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                   >
                      We transform content creation from a solo grind into a collaborative ecosystem. Beyond matchmaking, we provide the Live Collab Studio  and the Creator Marketplace  so our users can connect, monetize paid services, and track success to ensure their ultimate growth.
                   </motion.p>
                </div>

                <motion.div
                   className="relative"
                   initial={{ opacity: 0, x: 15 }}
                   animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                   transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                   <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-8 h-80 flex items-center justify-center">
                      <motion.div
                          className="text-center"
                          animate={isInView ? {
                              scale: [1, 1.05, 1],
                          } : {}}
                          transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                          }}
                      >
                         <div className="text-6xl mb-4">🤝</div> {/* Changed to a collaboration emoji */}
                         <p className="text-white font-semibold text-xl md:text-2xl">
                            Matchmaking & Monetization
                         </p>
                      </motion.div>
                   </div>
                </motion.div>
             </motion.div>
          </div>
      </section>
    );
}