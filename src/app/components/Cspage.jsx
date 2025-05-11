import React from 'react'
import {FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

const Cspage = () => {
  return (
<>
  <Image src="/images/background.png" alt="" className="w-full h-auto object-cover" />
  <div className="content absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
    <div className="text mb-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">We’re Launching Soon!</h2>
      <p className="text-lg md:text-xl max-w-lg mx-auto">Venenatis gravida sit nibh efficitur. Diam faucibus amet, lacus consectetur dolor leo. Ex maximus venenatis non, viverra quam ipsum Nullam viverra.</p>
    </div>

    <div className="signup flex flex-col md:flex-row justify-center items-center mb-6">
      <input 
        type="text" 
        placeholder="Enter your email" 
        className="p-2 mb-4 md:mb-0 md:mr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-80"
      />
      <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Join Waitlist</button>
    </div>

    <div className="flex justify-center space-x-4 mt-4">
      <h2 className="text-xl">Follow us</h2>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-blue-600 hover:text-blue-800 text-2xl" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTimes className="text-white hover:text-blue-500 text-2xl" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
      </a>
    </div>
  </div>
</>

  )
}

export default Cspage