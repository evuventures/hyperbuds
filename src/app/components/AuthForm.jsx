'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa';


const AuthForm = ({ onSubmit }) => {
   const pathname = usePathname();
   const isSignup = pathname === '/signup';

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [remember, setRemember] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (isSignup && password !== confirmPassword) {
         setPasswordError('Passwords do not match');
         return;
      }

      setPasswordError('');
      onSubmit({ email, password, confirmPassword, remember });
   };

   // Dynamically select image based on route
   const imageSrc = isSignup ? '/images/cover1.jpg' : '/images/cover.png';

   return (
      <div className="space-y-4 max-w-md mx-auto md:p-6 p-4 mb-5">

         {/* Dynamic Logo and Image for Signup and Login Pages */}
         <div className='flex  flex-col items-start gap-16 mt-3'>
            <h1 className='text-[#A259FF] text-4xl font-semibold'>HyperBuds</h1>
            <Image
               src={imageSrc}
               alt="cover"
               cover
               width={500}
               height={100}
               priority
               className='rounded-lg w-full h-[187px]'
            />
         </div>

         {/* The Form For Signup and Login */}
         <form onSubmit={handleSubmit} className=" space-y-4 max-w-md mx-auto">
            <h2 className="text-base md:text-2xl font-semibold text-start">
               {isSignup ? 'Sign Up' : 'Sign In'}
            </h2>

            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-[#A259FF]/50"
            />

            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-[#A259FF]/50"
            />

            {isSignup && (
               <>
                  <input
                     type="password"
                     placeholder="Confirm Password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     required
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder:text-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-[#A259FF]/50"
                  />
                  {passwordError && (
                     <p className="text-red-500 font-semibold text-sm ">{passwordError}</p>
                  )}
               </>
            )}


            <div className='flex justify-between items-start h-fit'>
               <label className="flex items-center text-sm gap-2 mb-4">
                  <input
                     type="checkbox"
                     checked={remember}
                     onChange={(e) => setRemember(e.target.checked)}
                     className="form-checkbox h-4 w-4 cursor-pointer"
                  />

                  <span className="text-base font-normal cursor-pointer text-black/70">
                     {isSignup ? 'Stay logged in' : 'Remember me'}
                  </span>
               </label>
               {isSignup && (
                  <span className="text-sm text-[#DC3545] cursor-pointer hover:underline">
                     Forgot Password
                  </span>
               )}
            </div>


            <div className='flex flex-col items-center gap-4'>
               <button
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition gap-3 max-w-[220px] bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer"
               >
                  {isSignup ? 'Create Account' : 'Sign In'}
               </button>

               <p className="text-center text-sm font-normal gap-3 ">
                  {isSignup ? (
                     <>
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-600 hover:underline cursor-pointer">
                           Sign in
                        </Link>
                     </>
                  ) : (
                     <>
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="text-blue-600 hover:underline cursor-pointer">
                           Sign up
                        </Link>
                     </>
                  )}
               </p>
            </div>
         </form>

         {/* links  */}
         <div className='flex flex-col gap-5'>

            <div className='flex items-center justify-center mt-5'>
               <div className=' border-t border-[#C3C3C3] w-full'></div>
               <p className='text-sm text-center w-full font-normal text-[#00000099]'>
                  {isSignup ? 'Continue with' : 'Or Sign with'}
               </p>
               <div className=' border-t border-[#C3C3C3] w-full'></div>
            </div>

            <div className='flex items-center justify-between'>
               <div className='border border-gray-200 w-25 h-15 items-center flex justify-center text-3xl cursor-pointer'>
                  <Link href='https://www.facebook.com/'>
                     <FaFacebook />
                  </Link>
               </div>
               <div className='border border-gray-200 w-25 h-15 items-center flex justify-center text-3xl text-[#1A73E8] cursor-pointer'>
                  <Link href='https://www.google.com/'>
                     <FaGoogle className='' />
                  </Link>
               </div>
               <div className='border border-gray-200 w-25 h-15 items-center flex justify-center text-3xl text-[#FF0000] cursor-pointer'>
                  <Link href='https://www.tiktok.com/'>
                     < FaTiktok />
                  </Link>
               </div>
               <div>
               </div>
            </div>

         </div>

      </div>

   );
};

export default AuthForm;
