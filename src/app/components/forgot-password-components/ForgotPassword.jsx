import Image from 'next/image'
import React from 'react'




const ForgotPassword = () => {
   return (
      <section className='h-screen flex flex-col items-center justify-center gap-10 m-5'>

         <div className='flex flex-col items-center justify-center md:min-w-xl'>

            <div className='flex flex-col items-center justify-center max-w-[90%] mb-5 gap-5'>
               <div className=' rounded-full p-5 bg-[#EBDBFF] w-[70px] h-[70px] items-center flex  justify-center'>
                  <Image src="/images/key-icon.svg" alt="signup successful" width={12} height={23} />
               </div>
               <h2 className='text-xl md:text-2xl lg:text-3xl font-medium'>
                  Forgot Password?
               </h2>
               <p className='text-sm md:text-lg text-black lg:text-xl font-normal'>
                  Enter your email address to receieve a verification code
               </p>
            </div>

            <div className='items-center justify-center w-full flex flex-col'>

               <div className="w-full mb-4">
                  <label htmlFor="email" className=" mb-2 text-sm md:text-base text-black">Email</label>
                  <div className="relative ">
                     <input
                        id="email"
                        type="email"
                        placeholder="your email@gmail.com"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition placeholder:text-xs"
                        required
                     />
                     <Image
                        src="/images/email-icon.svg"
                        alt="email"
                        width={24}
                        height={24}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                     />
                  </div>
               </div>

               <button className="w-full py-3 text-white rounded-lg hover:opacity-90 transition gap-3 mt-2 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium">
                  Send
               </button>

               <div className='flex items-center justify-center gap-2 h-fit my-6'>
                  <Image src="/images/right-arrow.svg" alt="signup successful"
                     width={20} height={12} className='rotate-180' />
                  <p className='text-black text-base md:text-xl font-normal underline'>
                     Back to login
                  </p>
               </div>

            </div>
         </div >

      </section >
   )
}

export default ForgotPassword
