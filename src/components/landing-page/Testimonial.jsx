"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: 'Babatunde Kosoko',
    role: 'Content Creator',
    text: 'HyperBuds transformed my collaboration game! The AI matchmaking found me perfect partners I never would have discovered. My engagement has increased by 300% since joining.',
    image: '👨🏿‍💼',
    rating: 5,
    followers: '2.3M',
    category: 'Gaming',
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Teresa Diroll',
    role: 'Lifestyle Influencer',
    text: 'The live collab studio is incredible! Real-time streaming with other creators has never been this smooth. The platform handles everything seamlessly.',
    image: '👩🏼‍💻',
    rating: 5,
    followers: '1.8M',
    category: 'Lifestyle',
    color: 'from-pink-400 to-purple-500'
  },
  {
    name: 'Park Jin Hoo',
    role: 'Tech Reviewer',
    text: 'The analytics dashboard gives me insights I never had before. Understanding my audience and collaboration ROI has helped me make better content decisions.',
    image: '👨🏻‍🔬',
    rating: 5,
    followers: '4.1M',
    category: 'Technology',
    color: 'from-blue-400 to-cyan-500'
  }
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 10,
      duration: 0.6,
    },
  },
};

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
        >
          ⭐
        </motion.span>
      ))}
    </div>
  );

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 px-6 py-20 md:px-20 lg:px-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-[#A259FF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Quote Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#A259FF]/10 text-6xl font-bold"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            "
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Left Section */}
        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left w-full lg:w-2/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#A259FF] to-gray-900 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            What Our Creators Say
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join thousands of creators who've transformed their collaboration experience and grown their audience with HyperBuds' powerful AI-driven platform.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 my-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#A259FF]">10K+</div>
              <div className="text-sm text-gray-600">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#A259FF]">50M+</div>
              <div className="text-sm text-gray-600">Collaborations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#A259FF]">4.9★</div>
              <div className="text-sm text-gray-600">Rating</div>
            </div>
          </motion.div>

          <motion.button
            className="relative px-8 py-4 bg-gradient-to-r from-[#A259FF] to-purple-600 text-white font-semibold rounded-full shadow-lg overflow-hidden group self-center lg:self-start"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 30px rgba(162, 89, 255, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">Join Our Community</span>
          </motion.button>
        </motion.div>

        {/* Right Section - Testimonials */}
        <motion.div
          className="w-full lg:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="space-y-6">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`group relative cursor-pointer transition-all duration-300 ${
                  activeIndex === index ? 'scale-105' : 'hover:scale-102'
                }`}
                variants={cardVariants}
                onClick={() => setActiveIndex(index)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ x: 8 }}
              >
                {/* Card Background */}
                <div className={`relative backdrop-blur-sm bg-white/80 rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
                  activeIndex === index 
                    ? 'border-[#A259FF]/50 shadow-xl shadow-[#A259FF]/10' 
                    : 'border-gray-200/50 hover:border-[#A259FF]/30'
                }`}>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ${
                      activeIndex === index ? 'opacity-100' : 'group-hover:opacity-50'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.color.split(' ')[1]}/5, ${testimonial.color.split(' ')[3]}/5)`,
                      boxShadow: `0 0 30px ${testimonial.color.split(' ')[1]}/10`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex gap-4">
                    {/* Avatar */}
                    <motion.div
                      className="relative flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-2xl shadow-lg`}>
                        {testimonial.image}
                      </div>
                      {activeIndex === index && (
                        <motion.div
                          className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#A259FF]/30 to-transparent"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                        <span className="text-sm text-[#A259FF] font-medium">{testimonial.followers}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-gray-600">{testimonial.role}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {testimonial.category}
                        </span>
                      </div>

                      <StarRating rating={testimonial.rating} />
                      
                      <motion.p
                        className="text-gray-700 leading-relaxed mt-3"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
                        transition={{ duration: 0.3 }}
                      >
                        "{testimonial.text}"
                      </motion.p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A259FF] to-purple-600 rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#A259FF]' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;