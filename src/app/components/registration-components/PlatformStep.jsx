"use client";

import React, { useState } from 'react';
import Image from 'next/image';


const purposes = [
   { name: 'Collaborate with Others', icon: '/images/registration/platform/pi.jpg' },
   { name: 'Learn New Skills with AI Assistance', icon: '/images/registration/platform/pi1.jpg' },
   { name: 'Meet New Friends', icon: '/images/registration/platform/pi2.png' },
   { name: 'Use AI to Brainstorm / Co-create', icon: '/images/registration/platform/pi3.jpg' },
   { name: 'Get Feedback on my Work', icon: '/images/registration/platform/pi4.png' },
   { name: 'Build or Pitch an Idea with Others', icon: '/images/registration/platform/pi5.jpg' },
   { name: 'Monetize my Content or Services', icon: '/images/registration/platform/pi6.jpg' },
   { name: 'Livestream Using AI Tools', icon: '/images/registration/platform/pi7.jpg' },
   { name: 'Other / Unsure', icon: '/images/registration/platform/pi8.jpg' },
];

export default function PlatformStep({ onNext, currentStep }) {
   const [selected, setSelected] = useState({});

   const togglePurpose = (name) => {
      setSelected((prev) => ({ ...prev, [name]: !prev[name] }));
   };
   const handleNext = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNext(selected);
   };

   return (
      <div className="flex flex-col justify-center items-center my-10 w-full">
         <h1 className="px-5 mb-8 text-3xl font-semibold text-center md:text-4xl lg:text-5xl primary-text">
            Purpose of using platform
         </h1>
         <p className="mb-8 max-w-lg text-base md:text-xl px-5 text-center text-[#000000] font-normal">
            Select all that apply
         </p>
         <div className="grid gap-6 p-5 mx-5 mb-8 max-w-3xl rounded-2xl border-2 border-gray-200 shadow-md md:p-10 md:grid-cols-2 lg:grid-cols-3">
            {purposes.map((purpose) => (
               <div className='flex flex-col gap-3 items-center'>
                  <label
                     key={purpose.name}
                     className={`flex flex-col items-center p-5 w-full  bg-white rounded border cursor-pointer ${selected[purpose.name] ? 'border-purple-400' : 'border-black'}`}
                  >
                     <input
                        type="checkbox"
                        className="mb-2 w-4 h-4 mr-50 md:mr-60 lg:mr-40"
                        checked={!!selected[purpose.name]}
                        onChange={() => togglePurpose(purpose.name)}
                        style={{ display: 'flex' }}
                     />
                     <Image
                        src={purpose.icon}
                        alt={purpose.name}
                        width={80} // adjust as needed
                        height={80} // adjust as needed
                        className="object-contain mb-2 w-full h-25"
                     />

                  </label>
                  <span className="mt-2 text-xs font-medium text-center text-black md:text-sm">
                     {purpose.name}
                  </span>
               </div>
            ))}
         </div>
         <div className="flex justify-between items-center px-5 mt-8 mb-4 w-full max-w-3xl lg:px-0">
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
                  Next
               </button>
            </div>
         </div>
      </div>
   );
} 