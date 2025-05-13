"use client";
import React from 'react';
import { FaUser, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-black text-white px-4 sm:px-8 lg:px-[124px] py-[64px] lg:py-[124px]"
    >
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-6"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold sm:mb-2 max-w-lg">
          Join our newsletter to keep up to date with us!
        </h2>

        <form className="w-full max-w-xl">
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <FaUser />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-10 pr-4 py-3 rounded-full w-full border border-gray-300 text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-700 text-white font-medium py-3 px-10 sm:px-6 rounded-full transition w-full sm:w-auto"
            >
              Subscribe
            </motion.button>
          </div>
        </form>
      </motion.div>

      <hr className="my-10 lg:my-20 border-gray-700" />

      {/* Footer Info Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Main description */}
        <div className="flex-1">
          <div className="mb-4 w-48 relative h-12">
            <Image
              src="/images/HyperBuds (3).png" // make sure this image is in the /public/images folder
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-gray-300 text-sm">
            HyperBuds is an AI-powered collaboration platform designed to help
            teams and creatives brainstorm, organize, and build ideas
            faster—together, in one intelligent space.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Menu</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Features</li>
              <li>How it works</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI Matchmaker</li>
              <li>Plans & Pricing</li>
              <li>Personal Manager</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Blogs</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@hyperbuds.com</li>
              <li>+23456749302</li>
              <li>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-blue-600 hover:text-blue-800 text-xl" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTimes className="text-white text-xl" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-pink-500 hover:text-pink-700 text-xl" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-14 border-gray-700" />

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm"
      >
        <p>@ 2025 Hyperbuds Ltd. All rights reserved</p>
        <ul className="flex gap-6 mt-4 sm:mt-0">
          <li>About</li>
          <li>Contact</li>
          <li>Terms</li>
        </ul>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
