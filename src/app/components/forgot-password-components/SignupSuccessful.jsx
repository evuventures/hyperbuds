import Image from 'next/image'
import React from 'react'




const SignupSuccessful = () => {
   return (
      <section className='h-screen flex flex-col items-center justify-center gap-10 m-5'>
         <div>
            <Image src="/images/success-icon.svg" alt="signup successful"
               width={100} height={100} className='md:w-[150px] md:h-[150px]' />
         </div>
         <div className='flex flex-col gap-5 text-center'>
            <p className='lg:text-3xl font-normal md:text-2xl text-xl text-black '>
               Sign up successful
            </p>
            <div className='flex items-center justify-center gap-1'>
               <Image src="/images/left-arrow.svg" alt="signup successful"
                  width={20} height={15} />
               <span className='text-[#A259FF] text-base md:text-xl font-normal'>
                  Back to login
               </span>
            </div>
            <div className='flex items-center justify-center gap-2 h-fit'>
               <p className='text-black text-base md:text-xl font-normal underline'>
                  Register to enjoy exciting features
               </p>
               <Image src="/images/right-arrow.svg" alt="signup successful"
                  width={20} height={12} />
            </div>
         </div>
      </section>
   )
}

export default SignupSuccessful
