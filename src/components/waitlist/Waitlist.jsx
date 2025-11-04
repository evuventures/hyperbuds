import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMicrochip, FaAddressCard, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Cspage = () => {
  return (
    <div className="relative min-h-screen bg-white w-full">
      
     

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 py-16 min-h-screen">
        
        {/* Main Text Section */}
        <div className="max-w-3xl mb-12 mt-24">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black mb-4 ">
            We're Launching Soon!
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed opacity-90 ">
            The future of creator collaboration is here. Be the first to connect, monetize, and grow with our AI-powered ecosystem.
          </p>
        </div>
     {/* Signup Form */}
        <form className="flex flex-col md:flex-row justify-center items-center w-full max-w-xl mt-2 mb-12">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-4 mb-4 md:mb-0 md:mr-4 rounded-lg border-1 border-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-200 w-full md:w-3/5 text-gray-800 transition-all duration-300 "
          />
          <button 
            type="submit" 
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md w-full md:w-2/5"
          >
            Join Waitlist
          </button>
        </form>
        {/* HyperBuds Features Section with Cards */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-6">
          
          {/* AI-Powered Matchmaking Card */}
          <div className="bg-white border-1 border-purple-300 rounded-lg p-6 text-black shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaMicrochip className="text-5xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Matchmaking</h3>
            <p className="text-sm">Discover perfect collaboration partners with our proprietary algorithm.</p>
          </div>
          
          {/* Live Collab Studio Card */}
          <div className="bg-white border-1 rounded-lg  border-purple-300 p-6 text-black shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaAddressCard className="text-5xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Creator Sign-up and Profile Setup</h3>
            <p className="text-sm">Quickly create your profile with niche, links, and follower stats to get started.</p>
          </div>
          
          {/* Creator Marketplace Card */}
          <div className="bg-white border-1 rounded-lg  border-purple-300 p-6 text-black shadow-xl transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-5xl text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Messaging Features</h3>
            <p className="text-sm">Directly message potential partners to plan collaborations and discuss ideas</p>
          </div>
        </div>

       

        {/* Social Media Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 opacity-80">Follow us on social media</h3>
          <div className="flex justify-center space-x-6">
            
            <a href="https://vt.tiktok.com/ZSU6rB1jm/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
              <FaTwitter className="text-black hover:text-purple-500 transition-colors duration-300 text-3xl transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/hyper_buds?igsh=MTJ1cTE4NjE5eGdhMQ==" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
              <FaInstagram className="text-pink-400 hover:text-purple-500 transition-colors duration-300 text-3xl transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cspage;