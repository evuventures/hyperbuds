"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, TrendingUp } from 'lucide-react';

const features = [
   {
      icon: Users,
      title: "Professional Team",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
   },
   {
      icon: Target,
      title: "Target Oriented",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   },
   {
      icon: TrendingUp,
      title: "Success Guarantee",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
   }
];

export function FeaturesSection() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });

   return (
      <section ref={ref} className="py-20 px-6 bg-white dark:bg-gray-800">
         <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
               className="text-center mb-16 relative"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               {/* Decorative Elements */}
               <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                     className="absolute top-0 left-1/4 w-4 h-4 bg-purple-500 dark:bg-purple-400 rounded-full"
                     animate={isInView ? {
                        y: [0, -10, 0],
                        rotate: [0, 180, 360]
                     } : {}}
                     transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                     }}
                  />
                  <motion.div
                     className="absolute top-0 right-1/4 w-6 h-6 bg-blue-500 dark:bg-blue-400 rounded"
                     animate={isInView ? {
                        y: [0, 10, 0],
                        rotate: [0, -180, -360]
                     } : {}}
                     transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                     }}
                  />
               </div>

               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-8">
                  We help business to grow faster and bigger
               </h2>

               <motion.p
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
               </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
               className="grid md:grid-cols-3 gap-8"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               {features.map((feature, index) => (
                  <motion.div
                     key={feature.title}
                     className="text-center group p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600"
                     initial={{ opacity: 0, y: 20, scale: 0.95 }}
                     animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                     transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                     }}
                     whileHover={{
                        y: -5,
                        scale: 1.01,
                        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                     }}
                  >
                     <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        whileHover={{
                           rotate: 360,
                           transition: { duration: 0.6 }
                        }}
                     >
                        <feature.icon className="w-10 h-10 text-white" />
                     </motion.div>

                     <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                        {feature.title}
                     </h3>

                     <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {feature.description}
                     </p>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}
