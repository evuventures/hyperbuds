"use client";

import React, { useState } from 'react'
import Image from 'next/image'

const NewPassword = () => {
   const [form, setForm] = useState({
      password: '',
      confirmPassword: '',
   })

   const handleChange = (e) => {
      const { name, value } = e.target
      setForm((prev) => ({
         ...prev,
         [name]: value,
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log({
         ...form,
      })
      // Add logic to call your backend or authentication service here
   }

   return (
      <section>
         <div className='h-screen flex flex-col items-center justify-center gap-10 m-5'>

            <div className='flex flex-col items-center justify-centers gap-5'>
               <div className=' rounded-full p-5 bg-[#EBDBFF] w-[70px] h-[70px] items-center flex justify-center'>
                  <Image src="/images/key-icon.svg" alt="signup successful" width={12} height={23} />
               </div>
               <h2 className='text-xl md:text-2xl lg:text-3xl font-medium'>
                  Enter your new password
               </h2>
               <p className='text-sm md:text-lg text-black lg:text-xl font-normal md:max-w-[90%] text-center'>
                  Your new password must be different from the previously used password
               </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full md:max-w-2/3 lg:max-w-2/5">
               <div className="w-full mb-2">
                  <label htmlFor="password" className="block mb-2 text-sm md:text-base text-black">New Password</label>
                  <div className="relative w-full">
                     <input
                        id="new password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition  placeholder:text-xs"
                        required
                     />
                     <Image
                        src="/images/password-icon.svg"
                        alt="password"
                        width={24}
                        height={24}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                     />
                  </div>
               </div>

               <div className="w-full mb-2">
                  <label htmlFor="confirmPassword" className="block mb-2 text-sm md:text-base text-black">Confirm Password</label>
                  <div className="relative w-full">
                     <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition placeholder:text-xs"
                        required
                     />
                     <Image
                        src="/images/password-icon.svg"
                        alt="password"
                        width={24}
                        height={24}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                     />
                  </div>
               </div>

               <div>

                  <button
                     onClick={handleSubmit}
                     className="w-full py-3 text-white rounded-lg hover:opacity-90 transition gap-3 mt-2 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium">
                     Save
                  </button>
               </div>
            </form>

         </div>
      </section >
   )
}

export default NewPassword
