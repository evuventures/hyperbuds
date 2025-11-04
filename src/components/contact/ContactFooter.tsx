"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const socialLinks = [
   { icon: Facebook, href: "#", label: "Facebook" },
   { icon: Linkedin, href: "#", label: "LinkedIn" },
   { icon: Twitter, href: "#", label: "Twitter" },
   { icon: Instagram, href: "#", label: "Instagram" }
];

export function ContactFooter() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });

   return (
      <section ref={ref} className="px-6 py-20 bg-gray-900 dark:bg-black">
         <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 items-center lg:grid-cols-2">
               {/* Left side - Let's talk */}
               <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
               >
                  <motion.h2
                     className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 md:text-5xl"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                  >
                     Let&apos;s talk
                  </motion.h2>

                  <motion.div
                     className="flex space-x-4"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                  >
                     {socialLinks.map((social, index) => (
                        <motion.a
                           key={social.label}
                           href={social.href}
                           className="flex justify-center items-center w-12 h-12 text-gray-400 bg-gray-800 rounded-full transition-all duration-300 dark:bg-gray-700 hover:text-white hover:bg-purple-600 group"
                           initial={{ opacity: 0, scale: 0 }}
                           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                           transition={{
                              duration: 0.6,
                              delay: 0.5 + index * 0.1,
                              ease: [0.25, 0.46, 0.45, 0.94]
                           }}
                           whileHover={{
                              scale: 1.1,
                              rotate: 360,
                              transition: { duration: 0.3 }
                           }}
                           whileTap={{ scale: 0.95 }}
                        >
                           <social.icon className="w-5 h-5" />
                        </motion.a>
                     ))}
                  </motion.div>
               </motion.div>

               {/* Right side - Contact details */}
               <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
               >
                  <motion.div
                     className="space-y-4"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.8, delay: 0.6 }}
                  >
                     <div className="flex items-start space-x-4">
                        <MapPin className="flex-shrink-0 mt-1 w-6 h-6 text-purple-400" />
                        <div>
                           <p className="mb-1 font-medium text-white">Office Address</p>
                           <p className="text-gray-400">
                              4517 Washington Ave. Manchester, Kentucky 39496
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-4">
                        <Mail className="flex-shrink-0 mt-1 w-6 h-6 text-purple-400" />
                        <div>
                           <p className="mb-1 font-medium text-white">Email Address</p>
                           <p className="text-gray-400">
                              support@themix.com
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start space-x-4">
                        <Phone className="flex-shrink-0 mt-1 w-6 h-6 text-purple-400" />
                        <div>
                           <p className="mb-1 font-medium text-white">Phone Number</p>
                           <p className="text-gray-400">
                              +123 456 7891
                           </p>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            </div>

            {/* Bottom section */}
            <motion.div
               className="pt-8 mt-16 border-t border-gray-800 dark:border-gray-700"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.8, delay: 0.8 }}
            >
               <div className="flex flex-col justify-between items-center space-y-4 md:flex-row md:space-y-0">
                  <motion.p
                     className="text-sm text-gray-400"
                     initial={{ opacity: 0, x: -20 }}
                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                     transition={{ duration: 0.8, delay: 0.9 }}
                  >
                     © 2023 All right reserved by Themeix
                  </motion.p>

                  <motion.div
                     className="flex space-x-6"
                     initial={{ opacity: 0, x: 20 }}
                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                     transition={{ duration: 0.8, delay: 1.0 }}
                  >
                     <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                     >
                        Privacy Policy
                     </a>
                     <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                     >
                        Terms & Condition
                     </a>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
