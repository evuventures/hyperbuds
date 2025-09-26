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

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Features', href: '/features' },
    // { name: 'How it works', href: '/how-it-works' },
    // { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'border-b shadow-lg backdrop-blur-md bg-white/95 border-white/20'
        : 'shadow-md backdrop-blur-sm bg-white/80'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r via-transparent from-purple-500/5 to-blue-700/5" />

      <div className="flex relative justify-between items-center px-6 py-4 md:px-16 lg:px-32">
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
            className="w-32 h-auto lg:w-48"
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden gap-12 items-center md:flex">
          <ul className="flex gap-8 p-0 m-0 list-none">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  className="relative text-base font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 group"
                >
                  {item.name}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  {/* Hover glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r rounded-lg transition-all duration-300 from-purple-500/0 to-blue-700/0 group-hover:from-purple-500/10 group-hover:to-blue-700/10 -z-10" />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Enhanced Get Started Button */}
          <Link href='./waitlist'>
            <motion.button
              className="overflow-hidden relative px-8 py-3 font-semibold text-white rounded-full shadow-lg transition-all duration-300 group hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-800" />

              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 -translate-x-full -skew-x-12 via-white/20 group-hover:translate-x-full" />

              {/* Button text */}
              <span className="flex relative z-10 gap-2 justify-center items-center">
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
            className="relative w-10 h-10 bg-gradient-to-br rounded-lg transition-all duration-300 from-purple-500/10 to-blue-700/10 hover:from-purple-500/20 hover:to-blue-700/20 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="flex absolute inset-0 flex-col justify-center items-center"
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
            className="overflow-hidden absolute left-0 top-full w-full border-t shadow-2xl backdrop-blur-md bg-white/95 border-gray-200/50 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-700/5" />

            <div className="relative px-6 py-6">
              <div className="flex flex-col gap-6 items-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className="relative py-2 text-lg font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 group"
                    >
                      {item.name}
                      <span className="absolute -bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-700 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.div>
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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 -translate-x-full -skew-x-12 via-white/20 group-hover:translate-x-full" />
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
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.nav>
  );
}

export default Navbar;