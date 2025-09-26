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
                  We make sure your idea & creation delivered properly
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
                     Pellentesque mollis, metus vel feugiat accumsan, nisi mauris faucibus nulla,
                     ut tincidunt nunc tortor vitae risus. Vivamus a pellentesque dui, non
                     semper ex. Nullam ac urna eu felis dapibus condimentum sit amet a augue.
                  </motion.p>

                  <motion.p
                     className="text-lg text-gray-600 leading-relaxed"
                     initial={{ opacity: 0, x: -15 }}
                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                     transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                        <div className="text-6xl mb-4">💡</div>
                        <p className="text-white font-semibold text-lg">
                           Innovation & Creativity
                        </p>
                     </motion.div>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
