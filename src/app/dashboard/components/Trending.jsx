import Image from 'next/image'
import React from 'react'

const Trending = () => {
   return (
      <section className='flex flex-col lg:max-w-full'>

         <div className="flex justify-between items-center mb-6 md:mx-16">
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Trending</h2>
            <button className="font-semibold text-purple-600 cursor-pointer hover:text-purple-700">View</button>
         </div>

         <div className='flex flex-col gap-5 justify-center items-start md:flex-row'>

            <Image src={'/images/icons-dashboard/left-image.jpg'} width={350} height={275} alt='left-image'
               className='rounded-2xl  !lg:h-[275px]' />
            <div>

               <div className='flex flex-col gap-5 max-w-90'>
                  <h2 className='text-2xl font-medium text-black'>
                     Tom & Sam Podcast: The AI Edge in Creator Growth
                  </h2>
                  <p className='text-base text-[#9C9A9A] font-normal'>
                     elementum elementum ex porta dui viverra Lorem felis, placerat In amet, nisl. non, ex. Nam Nam est.
                  </p>
               </div>

               <div className='flex relative justify-between items-center my-5 max-w-52'>
                  <div className='flex'>
                     <Image src={'/images/icons-dashboard/i-user.jpg'} width={40} height={40} alt='user' className='rounded-full border-2 border-[#A259FF]' />
                     <Image src={'/images/icons-dashboard/user2.jpg'} width={40} height={40} alt='user' className='rounded-full border-2 border-[#A259FF] !h-[40px] absolute left-7'
                     />
                  </div>
                  <div className='flex flex-col'>
                     <p className='text-base font-medium text-black'>Tom & Sam</p>
                     <p className='text-[#424141] text-base font-medium'>Podcast | Podcast</p>
                  </div>
               </div>

               <div className='flex justify-between items-center'>

                  <div className="flex overflow-hidden items-center text-white bg-black rounded-full w-33">
                     <div className="flex justify-center items-center w-10 h-10 text-sm font-medium text-white bg-[#0011FF] rounded-full">
                        12K
                     </div>
                     <span className="mr-4 ml-3 text-base font-medium">Viewers</span>
                  </div>

                  <div className='flex gap-3'>
                     <div className='flex gap-2 items-center'>
                        <Image src={'/images/icons-dashboard/viewers.svg'} width={20} height={20} alt='viewers' />
                        <p className='text-base font-medium text-black'>5k</p>
                     </div>
                     <div className='flex gap-2 items-center'>
                        <Image src={'/images/icons-dashboard/share.svg'} width={20} height={20} alt='viewers' />
                        <p className='text-base font-medium text-black'>5k</p>
                     </div>
                  </div>

               </div>


            </div>

         </div>

         {/* Pagination Dots */}
         <div className="flex gap-2 justify-center items-center mt-10">
            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#A259FF] to-[#0011FF] inline-block"></span>
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-gray-300 rounded-full"></span>
         </div>

      </section >
   )
}

export default Trending
