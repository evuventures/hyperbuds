"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import RegistrationSuccess from './RegistrationSuccess.jsx';

const platforms = [
   { name: 'Instagram', icon: '/images/registration/socials/instagramicon.png' },
   { name: 'TikTok', icon: '/images/registration/socials/tiktokicon.png' },
   { name: 'YouTube', icon: '/images/registration/socials/youtubeicon.png' },
   { name: 'Twitter', icon: '/images/registration/socials/twittericon.png' },
   { name: 'Snapchat', icon: '/images/registration/socials/snapshaticon.png' },
   { name: 'Facebook', icon: '/images/registration/socials/facebookicon.png' },
];

export default function SocialStep({ onNext, currentStep }) {
   const [selected, setSelected] = useState({});
   const [showSuccess, setShowSuccess] = useState(false);

   const handleConnect = (name) => {
      setSelected((prev) => ({ ...prev, [name]: !prev[name] }));
   };

   const handleNext = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setShowSuccess(true);
   };

   if (showSuccess) {
      return <RegistrationSuccess />;
   }

   return (
      <div className="flex flex-col justify-center items-center my-20">
         <h1 className="px-5 text-3xl font-semibold text-center mb-15 md:text-4xl lg:text-5xl primary-text">
            Connect your Socials
         </h1>
         <div className="grid grid-cols-2 gap-8 mb-8 w-4/5 md:w-2xl md:grid-cols-3">
            {platforms.map((platform) => (
               <div key={platform.name} className="flex flex-col items-center p-6 rounded border border-gray-200 shadow-sm">
                  <Image
                     src={platform.icon}
                     alt={platform.name}
                     width={64}
                     height={64}
                     className="object-contain mb-2 rounded-full"
                  />
                  <span className="mb-1 font-semibold text-black">{platform.name}</span>
                  <button
                     className="text-xs text-purple-500 cursor-pointer hover:underline focus:outline-none"
                     onClick={() => handleConnect(platform.name)}
                  >
                     {selected[platform.name] ? 'Connected' : 'Connect'}
                  </button>
               </div>
            ))}
         </div>
         <div className="flex justify-between items-center px-5 mt-8 mb-4 w-full lg:max-w-2xl md:max-w-2xl md:px-0">
            <div className='block'>
               {[...Array(5)].map((_, i) => (
                  <span
                     key={i}
                     className={`inline-block mx-1 w-3 h-3 rounded-full ${currentStep === i ? 'bg-purple-500' : 'bg-gray-300'}`}
                  />
               ))}
            </div>
            <div>
               <button
                  className="px-12 py-2 mt-4 font-semibold text-white bg-gradient-to-r from-[#A259FF] to-[#0011FF] rounded cursor-pointer text-lg"
                  onClick={handleNext}
               >
                  Submit
               </button>
            </div>
         </div>
      </div>
   );
}
