"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Features', 'How it works', 'Blogs', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-sm shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-700/5" />
      
      <div className="relative py-4 px-6 md:px-16 lg:px-32 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/images/HyperBuds (3).png"
            alt="Logo"
            width={192}
            height={48}
            className="w-32 lg:w-48 h-auto"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-8 list-none m-0 p-0">
            {menuItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <a
                  href="#"
                  className="relative text-gray-700 text-base font-medium hover:text-purple-600 transition-all duration-300 group"
                >
                  {item}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:w-full" />
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-700/0 group-hover:from-purple-500/10 group-hover:to-blue-700/10 rounded-lg -z-10 transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Enhanced Get Started Button */}
          <Link href='./Comingsoon.jsx'>
            <motion.button
              className="group relative px-8 py-3 text-white rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-800" />
              
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              
              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </div>

        {/* Enhanced Hamburger Icon */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 bg-gradient-to-br from-purple-500/10 to-blue-700/10 rounded-lg hover:from-purple-500/20 hover:to-blue-700/20 transition-all duration-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 flex flex-col justify-center items-center"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.span
                className="w-6 h-0.5 bg-purple-600 rounded-full"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-purple-600 rounded-full mt-1"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-purple-600 rounded-full mt-1"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200/50 md:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-700/5" />
            
            <div className="relative py-6 px-6">
              <div className="flex flex-col items-center gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="relative text-gray-700 text-lg font-medium hover:text-purple-600 transition-all duration-300 group py-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}
                
                {/* Mobile Get Started Button */}
                <motion.button
                  className="group relative px-8 py-3 text-white rounded-full font-semibold overflow-hidden shadow-lg mt-4 min-w-[200px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-800" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Get Started</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-700"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.nav>
  );
}

export default Navbar;