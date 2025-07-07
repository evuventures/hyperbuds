"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const types = [
   { name: 'Live Duet', icon: '/images/registration/types-icons/ti.png' },
   { name: 'Podcast', icon: '/images/registration/types-icons/ti1.png' },
   { name: 'Interview', icon: '/images/registration/types-icons/ti2.png' },
];

export default function TypesStep({ onNext, currentStep }) {
   const [selected, setSelected] = useState({});

   const toggleType = (name) => {
      setSelected((prev) => ({ ...prev, [name]: !prev[name] }));
   };

   const handleNext = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNext(selected);
   };


   return (
      <div className="flex flex-col justify-center items-center my-15">
         <h1 className="px-5 mb-8 text-3xl font-semibold text-center md:text-4xl lg:text-5xl primary-text">
            Preferred Collab Types
         </h1>
         <p className="mb-8 max-w-lg text-base md:text-xl px-5 text-center text-[#000000] font-normal">Select all that apply</p>
         <div className="grid gap-5 p-7 mb-10 rounded-2xl border-2 border-gray-200 shadow-md md:p-10 lg:grid-cols-3 md:grid-cols-2">
            {types.map((type) => (
               <div key={type.name} className="flex flex-col items-center">
                  <label
                     className={`flex flex-col items-center p-6 bg-white rounded border cursor-pointer ${selected[type.name] ? 'border-purple-400' : 'border-gray-300'}`}
                  >
                     <input
                        type="checkbox"
                        className="mb-2 w-5 h-5 mr-45"
                        checked={!!selected[type.name]}
                        onChange={() => toggleType(type.name)}
                        style={{ display: 'block' }}
                     />
                     <Image src={type.icon} alt={type.name} width={64} height={64} className="object-contain mb-2 w-40 h-full" />
                  </label>
                  <span className="mt-2 text-sm font-medium text-center text-black">
                     {type.name}
                  </span>
               </div>
            ))}
         </div>
         <div className="flex justify-between items-center px-5 mt-8 mb-4 w-full lg:max-w-4xl md:max-w-xl">
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
