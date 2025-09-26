"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const teamImages = [
   {
      id: 1,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=faces",
      alt: "Team collaboration"
   },
   {
      id: 1,
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop&crop=faces",
      alt: "Team collaboration"
   },
   {
      id: 3,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
      alt: "Team members discussing"
   },
   {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      alt: "Professional man presenting"
   }
];

export function TeamGallery() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });

   return (
      <section ref={ref} className="px-6 pt-32 pb-20 bg-white">
         <div className="mx-auto max-w-7xl">
            <motion.div
               className="grid relative z-10 grid-cols-2 gap-4 -mt-16 md:grid-cols-4 md:gap-6"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
               {teamImages.map((image, index) => (
                  <motion.div
                     key={`${image.id}-${index}`}
                     className="relative cursor-pointer group"
                     initial={{ opacity: 0, y: 15 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                     transition={{
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94]
                     }}
                  >
                     <div className="overflow-hidden rounded-2xl shadow-lg aspect-square">
                        <Image
                           src={image.src}
                           alt={image.alt}
                           width={400}
                           height={400}
                           className="object-cover w-full h-full transition-transform duration-150 group-hover:scale-105"
                           priority={index < 2}
                        />
                     </div>

                     {/* Simple overlay on hover */}
                     <div className="absolute inset-0 bg-gradient-to-t to-transparent rounded-2xl opacity-0 transition-opacity duration-150 from-purple-600/20 group-hover:opacity-100" />

                     {/* Name overlay - Visible on mobile, hover on desktop */}
                     <div className="absolute right-0 bottom-0 left-0 p-3">
                        <div className="px-3 py-2 rounded-lg border shadow-lg opacity-100 backdrop-blur-md transition-all duration-300 ease-out transform translate-y-2 bg-white/10 border-white/30 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                           <p className="text-sm font-medium text-center text-white drop-shadow-lg">{image.alt}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
}
