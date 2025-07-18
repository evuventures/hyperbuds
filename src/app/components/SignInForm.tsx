'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa'

const SignInForm = () => {
   const pathname = usePathname()
   const router = useRouter()
   const isSignup = pathname === '/signup'

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [stayLoggedIn, setStayLoggedIn] = useState(false)
   const [error, setError] = useState<string | null>(null)
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setLoading(true)
      setError(null)

      try {
         const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, stayLoggedIn }),
         })

         const data = await res.json()

         if (!res.ok) {
            setError(data.message || 'Login failed')
         } else {
            console.log('✅ Logged in:', data)
            router.push('/dashboard')
         }
      } catch (err) {
         console.error('Login error:', err)
         setError('Something went wrong.')
      } finally {
         setLoading(false)
      }
   }

   return (
      <main className='flex items-center justify-center gap-5 m-10 lg:mr-10 lg:mt-10 md:mt-10 lg:m-0'>

         <div className='hidden lg:block'>
            <Image src={'/images/signin.png'} alt="Logo" width={600} height={100}
               className='!h-[650px] lg:w-[500px]' />
         </div>

         <div className='flex flex-col items-center justify-center min-w-2xs h-fit'>

            <div className='flex flex-col gap-3 mb-5'>
               <p className="text-black text-base md:text-lg lg:text-xl">
                  Connect, Collaborate, Grow
               </p>
               <h2 className='text-3xl md:text-4xl lg:text-5xl text-black'>
                  {isSignup ? 'Create an account on' : 'Sign in to'}{' '}
                  <span className='text-[#A259FF]'>Hyperbuds</span>
               </h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-2 w-full">

               <div className="w-full mb-4">
                  <label htmlFor="email" className="block mb-2 text-sm md:text-base text-black">Email</label>
                  <div className="relative w-full">
                     <input
                        id="email"
                        type="email"
                        placeholder="your email@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

               <div className="w-full mb-4">
                  <label htmlFor="password" className="block mb-2 text-sm md:text-base text-black">Password</label>
                  <div className="relative w-full">
                     <input
                        id="password"
                        type="password"
                        placeholder=".............................."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

               <div className="flex items-center justify-between mb-5">
                  <label className="flex items-center text-base md:text-xl text-gray-600 cursor-pointer">
                     <input
                        type="checkbox"
                        checked={stayLoggedIn}
                        onChange={() => setStayLoggedIn(!stayLoggedIn)}
                        className="mr-2 h-4 w-4 scale-110 accent-[#A259FF] cursor-pointer"
                     />
                     Stay logged in
                  </label>
                  <Link href="#" className="text-red-600 text-base md:text-lg">
                     Forgot password?
                  </Link>
               </div>

               {error && (
                  <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
               )}

               <div className='flex flex-col items-center gap-4'>
                  <button
                     type="submit"
                     disabled={loading}
                     className="w-full py-3 text-white rounded-lg hover:opacity-90 transition gap-3 max-w-[320px] mt-8 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium"
                  >
                     {loading ? 'Signing in...' : isSignup ? 'Create Account' : 'Sign In'}
                  </button>

                  <p className="text-center text-sm font-normal">
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
                           <Link href="/auth/signup" className="text-blue-600 hover:underline cursor-pointer">
                              Sign up
                           </Link>
                        </>
                     )}
                  </p>
               </div>
            </form>

            <div className='flex flex-col gap-5'>
               <div className='flex items-center justify-center mt-5'>
                  <div className=' border-t border-[#C3C3C3] w-full'></div>
                  <p className='text-sm text-center w-full font-normal text-[#00000099]'>
                     {isSignup ? 'Continue with' : 'Or Sign with'}
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
                        <FaTiktok />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </main>
   )
}

export default SignInForm
