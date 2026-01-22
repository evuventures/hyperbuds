"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function ContactHero() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.3 });

   return (
      <section ref={ref} className="overflow-hidden relative px-6 pt-32 pb-20 bg-linear-to-br from-purple-500 to-blue-600 dark:from-purple-600 dark:to-blue-700 h-screen flex items-center">
         {/* Decorative Elements */}
         <div className="absolute inset-0 pointer-events-none">
            {/* Animated wavy lines */}
            <motion.div
               className="absolute top-0 left-0 w-full h-full"
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 1.0, delay: 0.5 }}
            >
               <svg
                  className="w-full h-full"
                  viewBox="0 0 1200 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <motion.path
                     d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z"
                     fill="rgba(255,255,255,0.1)"
                     initial={{ pathLength: 0 }}
                     animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                     transition={{ duration: 2.0, ease: "easeInOut" }}
                  />
                  <motion.path
                     d="M0,150 Q400,100 800,150 T1200,150 L1200,400 L0,400 Z"
                     fill="rgba(255,255,255,0.05)"
                     initial={{ pathLength: 0 }}
                     animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                     transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
                  />
               </svg>
            </motion.div>

            {/* Floating elements */}
            <motion.div
               className="absolute top-20 right-20 w-6 h-6 rounded-lg bg-white/20"
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

            <motion.div
               className="absolute top-10 left-10 w-4 h-4 rounded-full bg-white/20"
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

            <motion.div
               className="absolute bottom-20 left-1/4 w-3 h-3 bg-white/30 rounded-full"
               animate={isInView ? {
                  y: [0, -20, 10, -15, 0],
                  x: [0, 10, -5, 15, 0],
                  scale: [1, 1.5, 0.7, 1.2, 1],
                  opacity: [0.6, 1, 0.4, 0.9, 0.6]
               } : {}}
               transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
               }}
            />

            {/* Additional animated elements */}
            <motion.div
               className="absolute top-1/3 right-1/3 w-5 h-5 bg-white/20 rounded-lg"
               animate={isInView ? {
                  y: [0, -25, 15, -20, 0],
                  x: [0, -15, 8, -12, 0],
                  rotate: [0, 180, 360, 180, 0],
                  scale: [1, 1.3, 0.8, 1.4, 1],
                  opacity: [0.7, 1, 0.5, 0.9, 0.7]
               } : {}}
               transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1]
               }}
            />

            <motion.div
               className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-white/25 rounded-full"
               animate={isInView ? {
                  y: [0, -18, 12, -22, 0],
                  x: [0, 12, -8, 18, 0],
                  scale: [1, 1.6, 0.6, 1.3, 1],
                  opacity: [0.5, 1, 0.3, 0.8, 0.5]
               } : {}}
               transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
               }}
            />

            <motion.div
               className="absolute top-2/3 left-1/3 w-6 h-6 bg-white/15 rounded-xl"
               animate={isInView ? {
                  y: [0, -30, 20, -25, 0],
                  x: [0, 20, -10, 25, 0],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.2, 0.9, 1.5, 1],
                  opacity: [0.4, 0.9, 0.2, 0.7, 0.4]
               } : {}}
               transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: [0.3, 0, 0.7, 1]
               }}
            />

            <motion.div
               className="absolute top-1/4 left-2/3 w-3 h-3 bg-white/35 rounded-full"
               animate={isInView ? {
                  y: [0, -15, 8, -12, 0],
                  x: [0, -8, 5, -10, 0],
                  scale: [1, 1.8, 0.5, 1.4, 1],
                  opacity: [0.6, 1, 0.3, 0.8, 0.6]
               } : {}}
               transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: [0.2, 0, 0.8, 1]
               }}
            />

            <motion.div
               className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-white/20 rounded-lg"
               animate={isInView ? {
                  y: [0, -22, 14, -18, 0],
                  x: [0, 14, -6, 20, 0],
                  rotate: [0, 270, 180, 90, 0],
                  scale: [1, 1.4, 0.7, 1.6, 1],
                  opacity: [0.5, 0.9, 0.2, 0.7, 0.5]
               } : {}}
               transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: [0.35, 0, 0.65, 1]
               }}
            />

            <motion.div
               className="absolute top-3/4 left-1/4 w-2 h-2 bg-white/40 rounded-full"
               animate={isInView ? {
                  y: [0, -12, 6, -10, 0],
                  x: [0, 6, -3, 8, 0],
                  scale: [1, 2, 0.3, 1.7, 1],
                  opacity: [0.7, 1, 0.1, 0.9, 0.7]
               } : {}}
               transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: [0.15, 0, 0.85, 1]
               }}
            />

            <motion.div
               className="absolute top-1/2 right-1/5 w-5 h-5 bg-white/18 rounded-2xl"
               animate={isInView ? {
                  y: [0, -28, 18, -24, 0],
                  x: [0, -18, 10, -22, 0],
                  rotate: [0, 360, 180, 270, 0],
                  scale: [1, 1.1, 0.8, 1.3, 1],
                  opacity: [0.3, 0.8, 0.1, 0.6, 0.3]
               } : {}}
               transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1]
               }}
            />

            {/* Left side animated elements */}
            <motion.div
               className="absolute top-1/6 left-1/6 w-4 h-4 bg-white/25 rounded-lg"
               animate={isInView ? {
                  y: [0, -20, 12, -16, 0],
                  x: [0, 15, -8, 12, 0],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [1, 1.4, 0.7, 1.2, 1],
                  opacity: [0.6, 1, 0.3, 0.8, 0.6]
               } : {}}
               transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94]
               }}
            />

            <motion.div
               className="absolute top-2/5 left-1/5 w-3 h-3 bg-white/30 rounded-full"
               animate={isInView ? {
                  y: [0, -15, 8, -12, 0],
                  x: [0, 10, -5, 8, 0],
                  scale: [1, 1.6, 0.5, 1.3, 1],
                  opacity: [0.7, 1, 0.2, 0.9, 0.7]
               } : {}}
               transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: [0.2, 0, 0.8, 1]
               }}
            />

            <motion.div
               className="absolute bottom-1/6 left-1/4 w-5 h-5 bg-white/20 rounded-xl"
               animate={isInView ? {
                  y: [0, -25, 15, -20, 0],
                  x: [0, 18, -10, 15, 0],
                  rotate: [0, 180, 360, 180, 0],
                  scale: [1, 1.2, 0.8, 1.4, 1],
                  opacity: [0.4, 0.9, 0.1, 0.7, 0.4]
               } : {}}
               transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: [0.3, 0, 0.7, 1]
               }}
            />

            <motion.div
               className="absolute top-3/5 left-1/8 w-2 h-2 bg-white/35 rounded-full"
               animate={isInView ? {
                  y: [0, -12, 6, -10, 0],
                  x: [0, 8, -4, 6, 0],
                  scale: [1, 2.2, 0.3, 1.8, 1],
                  opacity: [0.8, 1, 0.1, 0.9, 0.8]
               } : {}}
               transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: [0.15, 0, 0.85, 1]
               }}
            />

            {/* Center and distributed elements */}
            <motion.div
               className="absolute top-1/5 left-1/2 w-3 h-3 bg-white/28 rounded-lg"
               animate={isInView ? {
                  y: [0, -18, 10, -14, 0],
                  x: [0, -12, 6, -8, 0],
                  rotate: [0, 270, 180, 90, 0],
                  scale: [1, 1.5, 0.6, 1.3, 1],
                  opacity: [0.5, 1, 0.2, 0.8, 0.5]
               } : {}}
               transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: [0.35, 0, 0.65, 1]
               }}
            />

            <motion.div
               className="absolute bottom-1/5 left-1/2 w-4 h-4 bg-white/22 rounded-2xl"
               animate={isInView ? {
                  y: [0, -22, 14, -18, 0],
                  x: [0, 16, -8, 12, 0],
                  rotate: [0, 360, 180, 270, 0],
                  scale: [1, 1.3, 0.7, 1.5, 1],
                  opacity: [0.6, 0.9, 0.3, 0.8, 0.6]
               } : {}}
               transition={{
                  duration: 8.2,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1]
               }}
            />

            <motion.div
               className="absolute top-4/5 right-1/6 w-3 h-3 bg-white/32 rounded-full"
               animate={isInView ? {
                  y: [0, -16, 9, -13, 0],
                  x: [0, -10, 5, -7, 0],
                  scale: [1, 1.7, 0.4, 1.4, 1],
                  opacity: [0.7, 1, 0.2, 0.9, 0.7]
               } : {}}
               transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: [0.25, 0, 0.75, 1]
               }}
            />

            <motion.div
               className="absolute top-1/3 left-3/4 w-4 h-4 bg-white/24 rounded-lg"
               animate={isInView ? {
                  y: [0, -24, 16, -20, 0],
                  x: [0, -14, 7, -11, 0],
                  rotate: [0, 180, 360, 180, 0],
                  scale: [1, 1.1, 0.9, 1.3, 1],
                  opacity: [0.4, 0.8, 0.1, 0.6, 0.4]
               } : {}}
               transition={{
                  duration: 9.5,
                  repeat: Infinity,
                  ease: [0.3, 0, 0.7, 1]
               }}
            />

            <motion.div
               className="absolute bottom-2/5 right-1/8 w-2 h-2 bg-white/38 rounded-full"
               animate={isInView ? {
                  y: [0, -14, 7, -11, 0],
                  x: [0, 9, -4, 7, 0],
                  scale: [1, 2.5, 0.2, 2, 1],
                  opacity: [0.9, 1, 0.1, 1, 0.9]
               } : {}}
               transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: [0.1, 0, 0.9, 1]
               }}
            />
         </div>

         <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                  CONTACT US
               </h1>

               <motion.div
                  className="w-24 h-1 bg-linear-to-r from-yellow-400 to-orange-400 mx-auto mb-8"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 96 } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
               />

               <motion.p
                  className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 1.0, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
               >
                  Ready to start your next project? We&apos;d love to hear from you.
                  Get in touch and let&apos;s create something amazing together.
               </motion.p>
            </motion.div>
         </div>
      </section>
   );
}
