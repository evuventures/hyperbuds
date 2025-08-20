"use client";

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ProfileStep({ onNext, currentStep }) {
   const [bio, setBio] = useState('');
   const [image, setImage] = useState(null);
   const [error, setError] = useState('');
   const fileInputRef = useRef();
   const maxChars = 500;

   const handleImageClick = () => fileInputRef.current.click();

   const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onload = (ev) => setImage(ev.target.result);
         reader.readAsDataURL(file);
      }
   };

   const handleNext = () => {
      if (!bio.trim()) {
         setError('Please tell us about yourself before proceeding.')
         return;
      }

      setError('');
      window.scrollTo({ top: 0, behavior: "smooth" });
      onNext({ bio, image });
   };

   return (
      <section className="flex flex-col justify-center items-center h-screen">
         <h1 className="mb-10 text-3xl font-semibold text-center md:text-4xl lg:text-5xl primary-text">
            Build Your Profile
         </h1>

         <div className="relative mb-2">
            <div
               className="flex justify-center items-center w-40 h-40 rounded-full cursor-pointer"
               onClick={handleImageClick}
            >
               {image ? (
                  <Image
                     src={image}
                     alt="Profile"
                     width={160}
                     height={160}
                     className="object-cover rounded-full !w-[160px] !h-[160px]"
                     unoptimized
                  />
               ) : (
                  <Image
                     src="/images/registration/camera.png"
                     alt="Camera"
                     width={160}
                     height={160}
                     className="rounded-full"
                  />
               )}
               <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleImageChange}
               />
            </div>

            <div
               className="absolute right-2 bottom-2 p-1 bg-black rounded-full cursor-pointer"
               onClick={handleImageClick}
            >
               <Image
                  src="/images/registration/pin.png"
                  alt="Pin"
                  width={32}
                  height={32}
                  className="rounded-full"
               />
            </div>
         </div>

         <span className="mb-10 text-xl text-black">Tap to upload a photo</span>

         <div className="px-5 w-full max-w-md">
            <label className="block mb-2 text-xl text-black">Tell us about yourself</label>
            <textarea
               className="p-3 w-full h-40 text-black rounded-lg border border-[#B6B6B6] resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
               maxLength={maxChars}
               value={bio}
               required
               onChange={e => setBio(e.target.value)}
            />
            {error && (
               <h3 className='mt-2 text-base font-normal text-red-500'>
                  {error}
               </h3>
            )}
            <div className="mt-1 text-base text-right text-[#5D7285]">
               {bio.length}/{maxChars} characters
            </div>
         </div>

         <div className="flex justify-between items-center px-5 mt-8 mb-4 w-full max-w-md">
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
      </section>
   );
}
