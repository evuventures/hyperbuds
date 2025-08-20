import Image from 'next/image'
import React from 'react'




const RegistrationSuccess = () => {
   return (
      <section className='flex flex-col gap-10 justify-center items-center m-5 h-screen'>
         <div>
            <Image src="/images/success-icon.svg" alt="signup successful"
               width={100} height={100} className='md:w-[150px] md:h-[150px]' />
         </div>
         <div className='flex flex-col gap-5 text-center'>
            <p className='text-xl font-normal text-black lg:text-3xl md:text-2xl'>
               Registration Successful
            </p>
            <div className='flex gap-5 justify-center items-center'>
               <Image src="/images/registration/spin-icon.svg" alt="signup successful"
                  width={25} height={25} />
               <span className='text-base font-normal primary-text md:text-xl'>
                  Redirecting to dashboard
               </span>
            </div>
         </div>
      </section>
   )
}

export default RegistrationSuccess
