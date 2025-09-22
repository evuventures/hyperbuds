"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AboutHero() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.3 });

   return (
      <section ref={ref} className="overflow-hidden relative px-6 pt-68 pb-32 bg-gradient-to-br from-purple-500 to-blue-600 dark:from-purple-600 dark:to-blue-700 min-h-[80vh] flex items-center">
         {/* Decorative Elements */}
         <div className="absolute inset-0 pointer-events-none">
            {/* Moving square - top right */}
            <motion.div
               className="absolute top-20 right-20 w-6 h-6 rounded-lg bg-white/20 dark:bg-white/30"
               animate={isInView ? {
                  y: [0, -15, 5, -10, 0],
                  x: [0, 5, -3, 8, 0],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.2, 0.8, 1.3, 1],
                  opacity: [0.8, 1, 0.6, 1, 0.8]
               } : {}}
               transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1]
               }}
            />

            {/* Circle - top left */}
            <motion.div
               className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/20 dark:bg-white/30"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.7, 1, 0.8],
                  scale: [0, 1, 1.3, 0.9, 1.1],
                  y: [0, -12, 3, -8, 0],
                  x: [0, 3, -2, 5, 0],
                  rotate: [0, 180, 360, 180, 0]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 0.8,
                  delay: 0.2,
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" }
               }}
            />

            {/* Small square - bottom left */}
            <motion.div
               className="absolute bottom-20 left-1/4 w-3 h-3 rounded bg-white/20 dark:bg-white/30"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.6, 1, 0.8],
                  scale: [0, 1, 1.5, 0.7, 1.2],
                  y: [0, -5, 8, -3, 0],
                  x: [0, -4, 6, -2, 0],
                  rotate: [0, 45, 90, 135, 180]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 0.7,
                  delay: 0.4,
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" }
               }}
            />

            {/* Medium square - right middle */}
            <motion.div
               className="absolute right-10 top-1/2 w-5 h-5 rounded bg-white/20 dark:bg-white/30"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.7, 1, 0.9],
                  scale: [0, 1, 1.4, 0.8, 1.1],
                  x: [0, 12, -6, 8, 0],
                  y: [0, -8, 4, -5, 0],
                  rotate: [0, 90, 180, 270, 360]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 0.8,
                  delay: 0.6,
                  opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 7, repeat: Infinity, ease: "linear" }
               }}
            />

            {/* Large circle - top center */}
            <motion.div
               className="absolute top-16 left-1/2 w-8 h-8 rounded-full transform -translate-x-1/2 bg-white/15 dark:bg-white/25"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.6, 1, 0.8],
                  scale: [0, 1, 1.3, 0.9, 1.2],
                  rotate: [0, 180, 360, 180, 0],
                  y: [0, -10, 5, -8, 0],
                  x: [0, 3, -2, 4, 0]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 1.0,
                  delay: 0.8,
                  opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
               }}
            />

            {/* Small square - left middle */}
            <motion.div
               className="absolute left-16 top-1/3 w-4 h-4 rounded bg-white/25 dark:bg-white/35"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.5, 1, 0.7],
                  scale: [0, 1, 1.6, 0.6, 1.3],
                  x: [0, -10, 4, -6, 0],
                  y: [0, 6, -3, 4, 0],
                  rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 0.9,
                  delay: 1.0,
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" }
               }}
            />

            {/* Medium circle - bottom right */}
            <motion.div
               className="absolute right-32 bottom-32 w-6 h-6 rounded-full bg-white/20 dark:bg-white/30"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.4, 1, 0.6],
                  scale: [0, 1, 1.6, 0.8, 1.4],
                  x: [0, 8, -3, 5, 0],
                  y: [0, -6, 4, -2, 0],
                  rotate: [0, 120, 240, 360]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 1.1,
                  delay: 1.2,
                  opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 9, repeat: Infinity, ease: "linear" }
               }}
            />

            {/* Small circle - center left */}
            <motion.div
               className="absolute left-8 top-1/2 w-3 h-3 rounded-full bg-white/30 dark:bg-white/40"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.3, 1, 0.8],
                  scale: [0, 1, 1.8, 0.5, 1.2],
                  y: [0, -15, 3, -10, 0],
                  x: [0, 4, -2, 3, 0],
                  rotate: [0, 90, 180, 270, 360]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 0.6,
                  delay: 1.4,
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" }
               }}
            />

            {/* Large square - bottom center */}
            <motion.div
               className="absolute bottom-16 left-1/2 w-7 h-7 rounded-lg transform -translate-x-1/2 bg-white/15 dark:bg-white/25"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.5, 1, 0.7],
                  scale: [0, 1, 1.4, 0.7, 1.1],
                  rotate: [0, -90, -180, -270, -360],
                  y: [0, -8, 4, -6, 0],
                  x: [0, 2, -1, 3, 0]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 1.2,
                  delay: 1.6,
                  opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
               }}
            />

            {/* Tiny square - top right corner */}
            <motion.div
               className="absolute top-6 right-6 w-2 h-2 rounded bg-white/35 dark:bg-white/45"
               initial={{ opacity: 0, scale: 0 }}
               animate={isInView ? {
                  opacity: [0, 1, 0.2, 1, 0.6],
                  scale: [0, 1, 2, 0.5, 1.5],
                  x: [0, 6, -2, 3, 0],
                  y: [0, -6, 2, -3, 0],
                  rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360]
               } : { opacity: 0, scale: 0 }}
               transition={{
                  duration: 0.5,
                  delay: 1.8,
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4, repeat: Infinity, ease: "linear" }
               }}
            />
         </div>

         <div className="relative mx-auto max-w-6xl text-center">
            <motion.h1
               className="mb-6 text-6xl font-bold text-white md:text-7xl lg:text-8xl"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               About us
            </motion.h1>

            <motion.h2
               className="mb-8 text-2xl font-semibold text-white/80 md:text-3xl lg:text-4xl"
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               Empowering Creative Collaboration Through AI
            </motion.h2>

            <motion.p
               className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-white/90 md:text-2xl"
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
               transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               We&apos;re revolutionizing how creators, influencers, and businesses collaborate.
               Our AI-powered platform connects the right people at the right time,
               fostering meaningful partnerships that drive growth and innovation.
            </motion.p>

            <motion.div
               className="flex flex-col gap-4 justify-center items-center sm:flex-row"
               initial={{ opacity: 0, y: 15 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
               transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">15K+</div>
                  <div className="text-white/80">Active Creators</div>
               </div>
               <div className="hidden w-px h-12 sm:block bg-white/30"></div>
               <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">10K+</div>
                  <div className="text-white/80">Successful Collabs</div>
               </div>
               <div className="hidden w-px h-12 sm:block bg-white/30"></div>
               <div className="text-center">
                  <div className="mb-1 text-3xl font-bold text-white">95%</div>
                  <div className="text-white/80">Success Rate</div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
