import Image from 'next/image'
import React from 'react'




const exploreIcons = [
   { src: "/images/icons-dashboard/Matches.svg", name: "Matches" },
   { src: "/images/icons-dashboard/Collaborations.svg", name: "Collaborations" },
   { src: "/images/icons-dashboard/Audience.svg", name: "Audience" },
   { src: "/images/icons-dashboard/Marketplace.svg", name: "Marketplace" },
]

const friendsImages = Array.from({ length: 10 }, (_, i) => ({
   src:
      i % 3 === 0
         ? "/images/icons-dashboard/user1.jpg"
         : i % 2 === 0
            ? "/images/icons-dashboard/user2.jpg"
            : "/images/icons-dashboard/i-user.jpg",
   name: i % 2 === 0 ? "Tom Cruise" : "Laarry Shae",
   status: i % 2 === 0 ? "online" : "offline",
}));



const Sidebar = () => {
   return (
      <section className='px-5'>

         <div className='flex gap-3 items-center my-5'>
            <Image
               src="/images/icons-dashboard/i-user.jpg"
               width={60}
               height={60}
               alt="user"
               className="rounded-full border-2 border-[#A259FF]"
            />
            <h2 className='text-xl font-medium text-black'>
               Welcome Sam_12!
            </h2>
         </div>

         {/* Explore */}
         <h2 className='text-xl font-medium text-black'>Explore</h2>
         <div className='grid grid-cols-2 mb-3 lg:grid-cols-1'>
            {exploreIcons.map((icon, idx) => (
               <div
                  key={idx}
                  className='flex gap-3 items-center my-5'>
                  <Image
                     src={icon.src}
                     width={24}
                     height={24}
                     alt={icon.name}
                  />
                  <h2 className='text-base font-normal text-black'>
                     {icon.name}
                  </h2>
               </div>
            ))}
         </div>

         {/* Friends */}
         <div className='hidden mb-5 md:block'>
            <h2 className='text-xl font-medium text-black'>Friends</h2>
            {friendsImages.map((icon, idx) => (
               <div
                  key={idx}
                  className='flex gap-3 justify-between items-center my-5 lg:w-50 xl:w-60'
               >
                  <div className='flex gap-3 items-center'>
                     <Image
                        src={icon.src}
                        width={50}
                        height={50}
                        alt={icon.name}
                        className="rounded-full !w-[50px] !h-[50px] border border-[#A259FF]"
                     />
                     <h2 className='text-base font-normal text-black'>
                        {icon.name}
                     </h2>
                  </div>

                  {icon.status === "online" ? (
                     <Image
                        src="/images/icons-dashboard/greendot.svg"
                        width={10}
                        height={10}
                        alt="Online"
                     />
                  ) : (
                     <p className='text-base text-[#A3A2A2] font-medium'>4 min</p>
                  )}
               </div>
            ))}
         </div>

      </section>
   )
}

export default Sidebar
