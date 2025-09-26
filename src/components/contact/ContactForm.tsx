"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export function ContactForm() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', formData);
   };

   return (
      <section ref={ref} className="py-20 px-6 bg-white pb-32">
         <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
               {/* Contact Form */}
               <motion.div
                  className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
               >
                  <motion.h3
                     className="text-2xl font-bold text-gray-800 mb-8"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                  >
                     Send us a Message
                  </motion.h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     {/* Name Field */}
                     <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                     >
                        <div className="relative">
                           <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                           <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="What's your Name?"
                              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500"
                              required
                           />
                        </div>
                     </motion.div>

                     {/* Email Field */}
                     <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                     >
                        <div className="relative">
                           <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                           <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Your email"
                              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500"
                              required
                           />
                        </div>
                     </motion.div>

                     {/* Message Field */}
                     <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                     >
                        <div className="relative">
                           <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                           <textarea
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Message"
                              rows={6}
                              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                              required
                           />
                        </div>
                     </motion.div>

                     {/* Submit Button */}
                     <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                     >
                        <span>Send Message</span>
                        <motion.div
                           className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                           <Send className="w-5 h-5" />
                        </motion.div>
                     </motion.button>
                  </form>
               </motion.div>

               {/* Contact Query Section */}
               <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
               >
                  <div className="space-y-6">
                     <motion.h2
                        className="text-4xl md:text-5xl font-bold text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                     >
                        Have any query?
                     </motion.h2>

                     <motion.h3
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                     >
                        CONTACT US
                     </motion.h3>

                     <motion.p
                        className="text-lg text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                     >
                        We&apos;re here to help! Whether you have questions about our services,
                        need technical support, or want to discuss a potential project,
                        our team is ready to assist you. Reach out to us and let&apos;s start
                        a conversation about how we can work together.
                     </motion.p>

                     {/* Additional Info Cards */}
                     <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                     >
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                           <h4 className="font-semibold text-gray-800 mb-2">
                              Response Time
                           </h4>
                           <p className="text-gray-600 text-sm">
                              We typically respond within 24 hours during business days.
                           </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                           <h4 className="font-semibold text-gray-800 mb-2">
                              Free Consultation
                           </h4>
                           <p className="text-gray-600 text-sm">
                              Get a free 30-minute consultation to discuss your project needs.
                           </p>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
