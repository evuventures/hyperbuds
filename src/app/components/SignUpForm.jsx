'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2'

const SignUpForm = () => {
   const pathname = usePathname()
   const isSignup = pathname === '/signup'

   const [form, setForm] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      remindMe: false,
   })

   const handleChange = (e) => {
      const { name, value, type, checked } = e.target
      setForm((prev) => ({
         ...prev,
         [name]: type === 'checkbox' ? checked : value,
      }))
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log({
         ...form,
         mode: 'signup'
      })
      // Add logic to call your backend or authentication service here
   }

   return (
      <main className='flex items-center justify-center gap-10 p-3 lg:mx-5 lg:my-10'>

         <div className='flex flex-col items-center md:w-[60%] lg:max-w-[40%]'>

            <div className='flex flex-col mb-10 items-start w-full px-5'>
               <h2 className='text-3xl md:text-4xl font-medium lg:text-5xl text-black'>
                  Sign up
               </h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-white px-5 w-full">

               <div className="w-full mb-2">
                  <label htmlFor="firstName" className="block mb-2 text-sm md:text-base text-black">First Name</label>
                  <input
                     id="firstName"
                     name="firstName"
                     placeholder="First Name"
                     value={form.firstName}
                     onChange={handleChange}
                     className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition placeholder:text-xs"
                     required
                  />
               </div>

               <div className="w-full mb-2">
                  <label htmlFor="lastName" className="block mb-2 text-sm md:text-base text-black">Last Name</label>
                  <input
                     id="lastName"
                     name="lastName"
                     placeholder="Last Name"
                     value={form.lastName}
                     onChange={handleChange}
                     className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg placeholder:text-xs focus:border-[#A259FF]/50 focus:outline-none transition"
                     required
                  />
               </div>

               <div className="w-full mb-2">
                  <label htmlFor="username" className="block mb-2 text-sm md:text-base text-black">Username</label>
                  <input
                     id="username"
                     name="username"
                     placeholder="Username"
                     value={form.username}
                     onChange={handleChange}
                     className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition placeholder:text-xs"
                     required
                  />
               </div>

               <div className="w-full mb-2">
                  <label htmlFor="email" className="block mb-2 text-sm md:text-base text-black">Email</label>
                  <div className="relative w-full">
                     <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your email@gmail.com"
                        value={form.email}
                        onChange={handleChange}
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

               <div className="w-full mb-2">
                  <label htmlFor="phone" className="block mb-2 text-sm md:text-base text-black">Phone Number</label>
                  <PhoneInput
                     country={'us'}
                     value={form.phone}
                     onChange={(phone) => handleChange({ target: { name: 'phone', value: phone } })}
                     inputProps={{
                        name: 'phone',
                        required: true,
                        id: 'phone',
                     }}
                     containerClass="w-full border border-[#71797E] rounded-lg focus-within:border-[#A259FF] transition-colors bg-white placeholder:text-xs"
                     inputClass="!w-full !h-12 !bg-white !outline-none !border-none !rounded-lg"
                     buttonClass="custom-phone-button"
                  />
               </div>



               <div className="w-full mb-2">
                  <label htmlFor="password" className="block mb-2 text-sm md:text-base text-black">Password</label>
                  <div className="relative w-full">
                     <input
                        id="password"
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
                        alt="confirm password"
                        width={24}
                        height={24}
                        className="absolute right-3 top-1/2 -translate-y-1/2"
                     />
                  </div>
               </div>



               <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center text-sm md:text-base text-gray-600 cursor-pointer">
                     <input
                        type="checkbox"
                        name="remindMe"
                        checked={form.remindMe}
                        onChange={handleChange}
                        className="mr-2 h-4 w-4 scale-110 accent-[#A259FF] cursor-pointer"
                     />
                     Remind me
                  </label>
                  <Link href="#" className="text-red-600 text-base">
                     Forgot password?
                  </Link>
               </div>

               <div className='flex flex-col items-center gap-4'>
                  <button
                     type="submit"
                     className="w-full py-3 text-white rounded-lg hover:opacity-90 transition gap-3 max-w-[320px] mt-4 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium"
                  >
                     Create Account
                  </button>

                  <p className="text-center text-sm font-normal">
                     Already have an account?{' '}
                     <Link href="/auth/signin" className="text-blue-600 hover:underline cursor-pointer">
                        Sign in
                     </Link>
                  </p>
               </div>
            </form>

            <div className='flex flex-col gap-5'>

               <div className='flex items-center justify-center mt-3'>
                  <div className=' border-t border-[#C3C3C3] w-full'></div>
                  <p className='text-sm text-center w-full font-normal text-[#00000099]'>
                     Continue with
                  </p>
                  <div className=' border-t border-[#C3C3C3] w-full'></div>
               </div>

               <div className='grid grid-cols-3 gap-5 justify-items-center mx-5'>
                  <div className='border border-gray-200 w-25 h-15 items-center flex justify-center text-3xl cursor-pointer'>
                     <Link href='https://www.facebook.com/'>
                        <FaFacebook />
                     </Link>
                  </div>
                  <div className='border border-gray-200 w-25 h-15 items-center flex justify-center text-3xl text-[#1A73E8] cursor-pointer'>
                     <Link href='https://www.google.com/'>
                        <FaGoogle />
                     </Link>
                  </div>
                  <div className='border border-gray-200 w-25 h-15 items-center flex justify-center text-3xl text-[#FF0000] cursor-pointer'>
                     <Link href='https://www.tiktok.com/'>
                        < FaTiktok />
                     </Link>
                  </div>
               </div>
            </div>
         </div>


         <div className="hidden lg:block relative w-[660px] h-[800px]">
            <Image
               src="/images/signup.jpg"
               alt="Signup"
               width={660}
               height={1024}
               className="absolute top-0 left-0 w-full h-full object-cover"
            />
         </div>


      </main>
   )
}

export default SignUpForm;
