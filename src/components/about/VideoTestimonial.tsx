"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import Image from 'next/image';

export function VideoTestimonial() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });

    return (
      <section ref={ref} className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Video Section */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                       <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=faces"
                          alt="Testimonial video thumbnail: Sarah Chen from The Daily Grind"
                          width={600}
                          height={400}
                          className="w-full h-80 object-cover"
                          priority
                       />

                       {/* Play Button Overlay */}
                       <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30"
                          whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                          transition={{ duration: 0.3 }}
                       >
                          <motion.button
                             className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg"
                             whileHover={{ scale: 1.1 }}
                             whileTap={{ scale: 0.95 }}
                             animate={isInView ? {
                                 scale: [1, 1.05, 1],
                             } : {}}
                             transition={{
                                 duration: 2,
                                 repeat: Infinity,
                                 ease: "easeInOut"
                             }}
                          >
                             <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                          </motion.button>
                       </motion.div>
                    </div>

                    {/* Quote Card */}
                    <motion.div
                       className="mt-6 bg-gray-50 rounded-2xl p-6 shadow-lg"
                       initial={{ opacity: 0, y: 15 }}
                       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                       transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                       <blockquote className="text-lg font-medium text-gray-800 mb-2">
                           &ldquo;They didn't just give us tools—they gave us confidence. Our busiest season ever!&rdquo;
                       </blockquote>
                       <cite className="text-sm text-gray-600">
                           Sarah Chen, Owner of 'The Daily Grind' Coffee Shop
                       </cite>
                    </motion.div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                       We Empower Small Businesses to Master Their Digital Presence
                    </h2>

                    <div className="space-y-6">
                       <motion.p
                           className="text-lg text-gray-600 leading-relaxed"
                           initial={{ opacity: 0, y: 15 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                           transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                       >
                           For years, keeping up with digital marketing felt like a full-time job. We were overwhelmed by platform changes and felt invisible online. We knew we had a great service, but connecting with our local community was a constant struggle.
                       </motion.p>

                       <motion.div
                           className="relative pl-6 border-l-4 border-purple-500"
                           initial={{ opacity: 0, x: 15 }}
                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 15 }}
                           transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                       >
                           <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
                               &ldquo;The difference wasn't just in the numbers, though the growth has been incredible. It's in the *time* we've gotten back. We're focused on baking, not battling algorithms. It truly changed how we operate.&rdquo;
                           </p>
                       </motion.div>
                    </div>
                </motion.div>
             </div>
          </div>
      </section>
    );
}