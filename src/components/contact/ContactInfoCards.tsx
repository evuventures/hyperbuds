"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Headphones } from 'lucide-react';

const contactInfo = [
   {
      icon: MapPin,
      title: "Office Location",
      details: "Evu, LLC 120 W.55th Street New York, NY 10019",
      color: "from-purple-500 to-purple-600"
   },
   {
      icon: Clock,
      title: "Working Hours",
      details: " Sun to Fri 10am to 05pm EST",
      color: "from-blue-500 to-blue-600"
   },
   {
      icon: Headphones,
      title: "Communication",
      details: "+123 456 7891",
      details2: "hyperbuds1@gmail.com",
      color: "from-green-500 to-green-600"
   }
];

export function ContactInfoCards() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });

   return (
      <section ref={ref} className="px-6 py-20 bg-white">
         <div className="mx-auto max-w-7xl">
            {/* Section Header */}
            <motion.div
               className="mb-16 text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               <motion.p
                  className="mb-4 text-lg font-medium text-purple-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  
               </motion.p>
               <motion.h2
                  className="text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
               >
                  GET IN TOUCH
               </motion.h2>
            </motion.div>

            {/* Contact info cards - Full width horizontal */}
            <motion.div
               className="grid grid-cols-1 gap-8 w-full md:grid-cols-3"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               {contactInfo.map((info, index) => (
                  <motion.div
                     key={info.title}
                     className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 min-h-[200px] flex flex-col justify-between"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{
                        duration: 0.8,
                        delay: 0.5 + index * 0.2,
                        ease: [0.25, 0.46, 0.45, 0.94]
                     }}
                     whileHover={{
                        y: -8,
                        scale: 1.05,
                        transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                     }}
                  >
                     {/* Icon */}
                     <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}
                        whileHover={{
                           rotate: 360,
                           scale: 1.15,
                           boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                        }}
                        transition={{
                           duration: 0.6,
                           ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                     >
                        <motion.div
                           whileHover={{ scale: 1.1 }}
                           transition={{ duration: 0.3 }}
                        >
                           <info.icon className="w-8 h-8 text-white" />
                        </motion.div>
                     </motion.div>

                     {/* Content */}
                     <motion.div
                        className="flex-1"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                     >
                        <motion.h3
                           className="mb-3 text-xl font-semibold text-gray-800"
                           whileHover={{ color: "#7c3aed" }}
                           transition={{ duration: 0.3 }}
                        >
                           {info.title}
                        </motion.h3>

                        <motion.div
                           className="mb-6 space-y-2"
                           whileHover={{ x: 3 }}
                           transition={{ duration: 0.3 }}
                        >
                           <motion.p
                              className="text-base leading-relaxed text-gray-600"
                              whileHover={{ color: "#4b5563" }}
                              transition={{ duration: 0.3 }}
                           >
                              {info.details}
                           </motion.p>
                           {info.details2 && (
                              <motion.p
                                 className="text-base leading-relaxed text-gray-600"
                                 whileHover={{ color: "#4b5563" }}
                                 transition={{ duration: 0.3 }}
                              >
                                 {info.details2}
                              </motion.p>
                           )}
                        </motion.div>
                     </motion.div>

                     {/* Action link */}
                     <motion.a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-purple-600 transition-all duration-300 hover:text-purple-700 group/link"
                        whileHover={{
                           x: 8,
                           scale: 1.05
                        }}
                        transition={{
                           duration: 0.3,
                           ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                     >
                       
                        
                     </motion.a>

                     {/* Hover effect overlay */}
                     <motion.div
                        className="absolute inset-0 bg-gradient-to-r rounded-2xl from-purple-500/10 to-blue-500/10"
                        initial={{ opacity: 0 }}
                        whileHover={{
                           opacity: 1,
                           scale: 1.02
                        }}
                        transition={{
                           duration: 0.4,
                           ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                     />

                     {/* Animated border effect */}
                     <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-transparent"
                        whileHover={{
                           borderColor: "rgba(139, 92, 246, 0.3)",
                           boxShadow: "0 0 0 1px rgba(139, 92, 246, 0.1)"
                        }}
                        transition={{ duration: 0.3 }}
                     />
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}
