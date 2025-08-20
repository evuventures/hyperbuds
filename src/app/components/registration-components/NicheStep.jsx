"use client";

import { useState } from "react";
import Image from 'next/image';


const categories = [
   {
      name: "Creator",
      subNiches: [
         "Audio: Podcasting, ASMR",
         "Writing: Blogging, Copywriting",
         "Social Media: Instagram Influencer, TikTok Creator",
         "Lifestyle: Beauty, Fitness",
         "Education: Online Courses, Tutorials",
      ],
   },
   {
      name: "Artist",
      subNiches: [
         "Music: Songwriting, Vocalist",
         "Graphic Design: Branding, UI/UX Design",
         "Performing Arts: Acting, Dance",
         "Crafts: Knitting/Crochet, Jewelry Making",
      ],
   },
   {
      name: "Developer",
      subNiches: [
         "Web development, Game development",
         "Data Science/AI: Machine Learning, Data Analysis",
         "Blockchain/Web3: Smart Contracts, DeFi, NFTs",
         "Cybersecurity, Devops/clouds",
      ],
   },
   {
      name: "Educator",
      subNiches: [
         "Elementary School, Middle School, High School",
         "Higher Educators: College / University Professors, Teaching Assistants",
         "Instructional Specialist, Support Educators",
         "Lecturers, Mentors, Facilitaters, online tutor",
      ],
   },
   {
      name: "Social Connection",
      subNiches: [
         "General Friendship: Casual hangouts, Gaming buddies",
         "Networking: Professional Networking, Mentorship (seeking/offering)",
         "Shared Hobbies: Book Clubs, Hiking Groups",
      ],
   },
];

export default function NicheStep({ onNext, currentStep }) {
   const [expanded, setExpanded] = useState(categories.map(() => true));
   const [selected, setSelected] = useState({});

   const toggleExpand = (idx) =>
      setExpanded((expanded) => expanded.map((v, i) => (i === idx ? !v : v)));

   const toggleCheckbox = (cat, sub) => {
      setSelected((sel) => ({
         ...sel,
         [cat]: {
            ...sel[cat],
            [sub]: !sel[cat]?.[sub],
         },
      }));
   };

   const handleNext = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      onNext(selected);
   };

   return (
      <div className="flex flex-col items-center py-10 w-full h-full">
         <h1 className="mb-8 text-3xl font-semibold text-center md:text-4xl lg:text-5xl primary-text">
            Choose Your Niche
         </h1>
         <p className="mb-8 max-w-lg text-base md:text-xl px-5 text-center text-[#000000] font-normal">
            Select your primary category and related sub-niches that best describe your field or interest
         </p>
         <div className="px-5 space-y-6 w-full max-w-2xl">
            {categories.map((cat, idx) => (
               <div key={cat.name} className="pb-2 border-b border-gray-200">
                  <button
                     type="button"
                     className="flex justify-between items-center py-2 w-full font-semibold text-left text-[#A259FF] cursor-pointer focus:outline-none"
                     onClick={() => toggleExpand(idx)}
                  >
                     <span>{cat.name}</span>
                     <Image
                        src={expanded[idx] ? "/images/registration/icondown.svg" : "/images/registration/iconup.svg"}
                        alt={expanded[idx] ? "Expand" : "Collapse"}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                     />

                  </button>
                  {expanded[idx] && (
                     <div className="pt-2 pl-2 space-y-2">
                        {cat.subNiches.map((sub) => {
                           const [boldText, normalText] = sub.split(/:(.+)/);
                           return (
                              <label
                                 key={sub}
                                 className={`flex items-center px-3 py-3 mb-4 bg-white rounded-lg border border-gray-300 cursor-pointer ${selected[cat.name]?.[sub] ? 'border-purple-400' : 'border-black'}`}
                              >
                                 <input
                                    type="checkbox"
                                    className="mr-3 w-4 h-4 rounded-none border-red-500 cursor-pointer border-3"
                                    checked={!!selected[cat.name]?.[sub]}
                                    onChange={() => toggleCheckbox(cat.name, sub)}
                                 />
                                 <span className="text-sm font-normal text-black md:text-lg">
                                    {normalText ? (
                                       <>
                                          <strong className="text-sm font-medium text-black md:text-lg">{boldText.trim()}:{" "}
                                          </strong>
                                          {normalText.trim()}
                                       </>
                                    ) : (
                                       sub
                                    )}
                                 </span>
                              </label>
                           );
                        })}
                     </div>
                  )}
               </div>
            ))}
         </div>
         <div className="flex justify-between items-center px-5 mt-8 mb-4 w-full max-w-2xl">
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
