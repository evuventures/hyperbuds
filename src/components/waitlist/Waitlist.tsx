"use client";

import React, { useState } from 'react';
import { FaTiktok, FaInstagram, FaMicrochip, FaAddressCard, FaEnvelope, FaCheckCircle, FaTimes, FaSpinner, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { waitlistApi } from '@/lib/api/waitlist.api';
import Link from 'next/link';
const Cspage = () => {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Using the centralized Axios library
      await waitlistApi.joinWaitlist(email);

      // Success logic
      setSubmittedEmail(email);
      setEmail('');
      setShowSuccessModal(true);
    } catch (err: any) {
      // Handling Axios error structure
      const message = err.response?.data?.message || 'Failed to join waitlist. Please try again.';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-30 px-6 md:px-8 lg:px-12 bg-white max-w-6xl mx-auto min-h-screen">
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
            >
              <motion.div
                className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5" />
                </button>

                {/* Success Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <div className="w-20 h-20 bg-linear-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <FaCheckCircle className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                {/* Success Message */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Check Your Email!
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    A confirmation email has been sent to <span className="font-semibold text-purple-600">{submittedEmail}</span>.
                    Please check your inbox and follow the instructions to complete your waitlist signup.
                  </p>
                </motion.div>

                {/* Close Button */}
                <motion.button
                  onClick={() => setShowSuccessModal(false)}
                  className="mt-6 w-full bg-linear-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-blue-600 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Got it!
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className=" flex flex-col items-center">

        {/* Main Text Section */}
        <div className="max-w-3xl mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold  text-black mb-4 ">
            We&apos;re Launching Soon!
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto  opacity-90 ">
            The future of creator collaboration is here. Be the first to connect, monetize, and grow with our AI-powered ecosystem.
          </p>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center w-full max-w-xl mt-2 mb-12">
          <div className="w-full md:w-3/5 mb-4 md:mb-0 md:mr-4">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(''); // Clear error when user types
              }}
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 transition-all duration-300"
              required
              disabled={isLoading}
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 text-left"
              >
                {error}
              </motion.p>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-4 bg-linear-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none cursor-pointer w-full md:w-2/5 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <FaSpinner className="w-5 h-5 animate-spin" />
                <span>Joining...</span>
              </>
            ) : (
              'Join Waitlist'
            )}
          </button>
        </form>

        {/* HyperBuds Features Section with Cards */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-stretch gap-6 my-8">

          {/* AI-Powered Matchmaking Card */}
          <div className="bg-white border border-purple-300 rounded-lg p-6 text-black shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaMicrochip className="text-5xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">AI Matchmaking</h3>
            <p className="text-sm text-center">Discover perfect collaboration partners with our proprietary algorithm.</p>
          </div>

          {/* Live Collab Studio Card */}
          <div className="bg-white border rounded-lg  border-purple-300 p-6 text-black shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaAddressCard className="text-5xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Creator Sign-up and Profile Setup</h3>
            <p className="text-sm text-center">Quickly create your profile with niche, links, and follower stats to get started.</p>
          </div>

          {/* Creator Marketplace Card */}
          <div className="bg-white border rounded-lg  border-purple-300 p-6 text-black shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-5xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Messaging Features</h3>
            <p className="text-sm text-center">Directly message potential partners to plan collaborations and discuss ideas</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 opacity-80">Follow us on social media</h3>
          <div className="flex justify-center space-x-6">

            <Link href="http://tiktok.com/@hyperbud" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
              <FaTiktok className="text-black hover:text-purple-500 transition-colors duration-300 text-3xl transform hover:scale-110" />
            </Link>
            <Link href="https://www.instagram.com/hyper_buds?igsh=MTJ1cTE4NjE5eGdhMQ==" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
              <FaInstagram className="text-pink-400 hover:text-purple-500 transition-colors duration-300 text-3xl transform hover:scale-110" />
            </Link>
            <Link href="https://www.linkedin.com/company/hyperbuds" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-3xl transform hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cspage;