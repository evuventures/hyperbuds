'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SlideOne from '../components/onboarding-components/SlideOne';
import SlideTwo from '../components/onboarding-components/SlideTwo';
import SlideThree from '../components/onboarding-components/SlideThree';
import { useRouter } from 'next/navigation';

const slides = [<SlideOne key="1" />, <SlideTwo key="2" />, <SlideThree key="3" />];

const Onboarding = () => {
   const [index, setIndex] = useState(0);
   const router = useRouter();

   const nextSlide = () => {
      if (index < slides.length - 1) {
         setIndex(index + 1);
      } else {
         router.push('/dashboard'); // final route
      }
   };

   const skipOnboarding = () => router.push('/dashboard');

   return (
      <main className="flex overflow-hidden relative flex-col justify-center items-center min-h-screen bg-white">
         <AnimatePresence mode="wait">
            {slides[index]}
         </AnimatePresence>

         {/* Dots */}
         <motion.div
            className="flex gap-2 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
         >
            {slides.map((_, i) => (
               <motion.div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === index ? 'bg-purple-600' : 'bg-gray-300'}`}
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                     scale: i === index ? 1.2 : 1,
                     opacity: i === index ? 1 : 0.5
                  }}
                  transition={{
                     duration: 0.3,
                     delay: i * 0.1
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
               />
            ))}
         </motion.div>

         {/* Controls */}
         <motion.div
            className="flex flex-col gap-4 items-center mt-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
         >
            <motion.button
               onClick={nextSlide}
               className="py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg cursor-pointer px-25 lg:px-45"
               whileHover={{
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(147, 51, 234, 0.3)"
               }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.2 }}
            >
               Get Started
            </motion.button>
            <motion.button
               onClick={skipOnboarding}
               className="text-xl font-semibold text-purple-600 cursor-pointer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               transition={{ duration: 0.2 }}
            >
               Skip
            </motion.button>

         </motion.div>
      </main>
   );
};

export default Onboarding;
