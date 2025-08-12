"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaCarousel } from './EmblaCarousel'

const Recommended = () => {
   // Embla state for dots
   const [emblaApi, setEmblaApi] = useState(null);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [scrollSnaps, setScrollSnaps] = useState([]);

   // Update selected index on scroll
   const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
   }, [emblaApi]);

   // Set up listeners
   useEffect(() => {
      if (!emblaApi) return;
      setScrollSnaps(emblaApi.scrollSnapList());
      emblaApi.on('select', onSelect);
      onSelect();
      return () => {
         emblaApi.off('select', onSelect);
      };
   }, [emblaApi, onSelect]);

   // Dot button click handler
   const scrollTo = useCallback(
      (idx) => emblaApi && emblaApi.scrollTo(idx),
      [emblaApi]
   );

   return (
      <section className='m-5 md:my-10 lg:max-w-full'>
         <div className='flex justify-between my-5 md:ml-5'>
            <h2 className='text-xl font-medium text-black'>
               Recommended for You
            </h2>
            <p className='text-xl font-medium primary-color'>View</p>
         </div>
         {/* Pass setEmblaApi to EmblaCarousel so it can provide the API */}
         <EmblaCarousel emblaRefCallback={setEmblaApi} />
         {/* Pagination Dots */}
         <div className="flex gap-2 justify-center items-center mt-10">
            {scrollSnaps.map((_, idx) => (
               <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${selectedIndex === idx ? 'bg-gradient-to-r from-[#A259FF] to-[#0011FF]' : 'bg-gray-300'}`}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
               />
            ))}
         </div>
      </section>
   )
}

export default Recommended
