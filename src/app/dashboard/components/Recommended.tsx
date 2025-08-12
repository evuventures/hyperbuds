'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';

interface Card {
   id: number;
   name: string;
   role: string;
   followers: string;
   overlap: string;
   synergy: string;
   img: string;
}

const Recommended: React.FC = () => {
   const cards: Card[] = [
      {
         id: 1,
         name: 'Angela Brooks',
         role: 'Gaming Streamer',
         followers: '12K Followers',
         overlap: '78%',
         synergy: '92%',
         img: '/images/icons-dashboard/slide-image.jpg',
      },
      {
         id: 2,
         name: 'Tayo Omotayo',
         role: 'Podcaster',
         followers: '12K Followers',
         overlap: '78%',
         synergy: '—',
         img: '/images/icons-dashboard/user2.jpg',
      },
      {
         id: 3,
         name: 'Mia Chen',
         role: 'Content Creator',
         followers: '8K Followers',
         overlap: '65%',
         synergy: '88%',
         img: '/images/icons-dashboard/user3.jpg',
      },
      {
         id: 4,
         name: 'James Carter',
         role: 'Music Producer',
         followers: '20K Followers',
         overlap: '82%',
         synergy: '95%',
         img: '/images/icons-dashboard/user1.jpg',
      },
   ];

   return (
      <section>
         <div className="flex justify-between items-center mb-6 md:mx-16">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
               Recommended for You</h2>
            <button className="font-semibold text-purple-600 cursor-pointer hover:text-purple-700">
               View
            </button>
         </div>

         <Swiper
            modules={[Pagination, Mousewheel]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            mousewheel={{ releaseOnEdges: true }}
            speed={1000}
            breakpoints={{
               768: {
                  slidesPerView: 2,
               },
            }}
            className="max-w-3xl md:mx-16"
         >
            {cards.map((card) => (
               <SwiperSlide key={card.id} className="h-auto">
                  <div
                     className="flex flex-col justify-between p-5 mb-20 bg-white shadow-lg rounded-2xl 
               h-[600px] lg:h-[550px] w-full"
                  >
                     <Image
                        src={card.img}
                        alt={card.name}
                        width={400}
                        height={200}
                        className="object-cover w-full h-80 rounded-2xl"
                     />
                     <div className="space-y-3">
                        <h3 className="text-xl font-medium text-black">{card.name}</h3>
                        <p className="text-base text-gray-500">
                           {card.role} | <span className="text-base font-medium text-black">{card.followers}</span>
                        </p>
                        <p className="text-sm font-medium text-black">
                           Audience Overlap: {card.overlap}
                           {card.synergy !== '—' && <> | Synergy Score™: {card.synergy}</>}
                        </p>
                        <div className="flex gap-2 mt-4">
                           <button className="flex-1 bg-gradient-to-r from-[#A259FF] to-[#0011FF] text-white py-2 rounded-2xl cursor-pointer text-sm md:text-lg font-medium">
                              View Profile
                           </button>
                           <button className="flex-1 py-2 text-sm font-medium text-white bg-black rounded-2xl cursor-pointer md:text-lg">
                              Suggest Collab
                           </button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </section>
   );
};

export default Recommended;
