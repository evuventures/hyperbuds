import React from 'react'
import Image from 'next/image'
import OtpPassword from './OtpPassword'



const EnterYourCode = () => {
   return (
      <section>

         <div className='h-screen flex flex-col items-center justify-center gap-10 m-5'>

            <div className='flex flex-col items-center justify-centers gap-5'>
               <div className=' rounded-full p-5 bg-[#EBDBFF] w-[70px] h-[70px] items-center flex justify-center'>
                  <Image src="/images/key-icon.svg" alt="signup successful" width={12} height={23} />
               </div>
               <h2 className='text-xl md:text-2xl lg:text-3xl font-medium'>
                  Enter your Code
               </h2>
               <p className='text-sm md:text-lg text-black lg:text-xl font-normal'>
                  We sent a mail to youremail@gmail.com
               </p>
            </div>

            <div>
               <OtpPassword />
            </div>
         </div>

      </section>
   )
}

export default EnterYourCode
