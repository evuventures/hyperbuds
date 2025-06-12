'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa';
import { Eye, EyeOff, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const AuthForm = ({ onSubmit }) => {
   const pathname = usePathname();
   const isSignup = pathname === '/signup';

   // Form state
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [remember, setRemember] = useState(false);

   // Validation state
   const [errors, setErrors] = useState({});
   const [touched, setTouched] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   // Email validation regex
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   // Password strength validation
   const validatePassword = (password) => {
      const minLength = password.length >= 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      return {
         minLength,
         hasUpperCase,
         hasLowerCase,
         hasNumbers,
         hasSpecialChar,
         isValid: minLength && hasUpperCase && hasLowerCase && hasNumbers
      };
   };

   // Real-time validation
   useEffect(() => {
      const newErrors = {};

      // Email validation
      if (touched.email) {
         if (!email.trim()) {
            newErrors.email = 'Email is required';
         } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email address';
         }
      }

      // Password validation
      if (touched.password) {
         if (!password.trim()) {
            newErrors.password = 'Password is required';
         } else if (isSignup) {
            const passwordCheck = validatePassword(password);
            if (!passwordCheck.isValid) {
               newErrors.password = 'Password must be at least 8 characters with uppercase, lowercase, and numbers';
            }
         } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
         }
      }

      // Confirm password validation (signup only)
      if (isSignup && touched.confirmPassword) {
         if (!confirmPassword.trim()) {
            newErrors.confirmPassword = 'Please confirm your password';
         } else if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
         }
      }

      setErrors(newErrors);
   }, [email, password, confirmPassword, touched, isSignup]);

   const handleBlur = (fieldName) => {
      setTouched(prev => ({ ...prev, [fieldName]: true }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Mark all fields as touched for validation
      setTouched({
         email: true,
         password: true,
         confirmPassword: isSignup
      });

      // Check for validation errors
      const hasErrors = Object.keys(errors).length > 0;
      const isEmpty = !email.trim() || !password.trim() || (isSignup && !confirmPassword.trim());

      if (hasErrors || isEmpty) {
         setIsSubmitting(false);
         return;
      }

      try {
         await onSubmit({ email, password, confirmPassword, remember });
      } catch (error) {
         console.error('Form submission error:', error);
      } finally {
         setIsSubmitting(false);
      }
   };

   // Get password strength for signup
   const passwordStrength = isSignup ? validatePassword(password) : null;

   // Dynamically select image based on route
   const imageSrc = isSignup ? '/images/cover1.jpg' : '/images/cover.png';

   return (
      <div className="space-y-4 max-w-md mx-auto md:p-6 p-4 mb-5">
         {/* Dynamic Logo and Image for Signup and Login Pages */}
         <div className='flex flex-col items-start gap-16 mt-3'>
            <h1 className='text-[#A259FF] text-4xl font-semibold'>HyperBuds</h1>
            <Image
               src={imageSrc}
               alt="cover"
               width={500}
               height={100}
               priority
               className='rounded-lg w-full h-[187px] object-cover'
            />
         </div>

         {/* The Form For Signup and Login */}
         <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <h2 className="text-base md:text-2xl font-semibold text-start">
               {isSignup ? 'Sign Up' : 'Sign In'}
            </h2>

            {/* Email Field */}
            <div className="relative">
               <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={`w-full px-4 py-2 border rounded-lg placeholder:text-[#D9D9D9] focus:outline-none focus:ring-2 transition-all duration-200 ${
                     errors.email 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : touched.email && !errors.email 
                           ? 'border-green-500 focus:ring-green-500/50'
                           : 'border-gray-300 focus:ring-[#A259FF]/50'
                  }`}
               />
               {/* Email validation icon */}
               {touched.email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                     {errors.email ? (
                        <XCircle className="h-5 w-5 text-red-500" />
                     ) : (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                     )}
                  </div>
               )}
               {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                     <AlertCircle className="h-4 w-4" />
                     {errors.email}
                  </p>
               )}
            </div>

            {/* Password Field */}
            <div className="relative">
               <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur('password')}
                  className={`w-full px-4 py-2 pr-12 border rounded-lg placeholder:text-[#D9D9D9] focus:outline-none focus:ring-2 transition-all duration-200 ${
                     errors.password 
                        ? 'border-red-500 focus:ring-red-500/50' 
                        : touched.password && !errors.password 
                           ? 'border-green-500 focus:ring-green-500/50'
                           : 'border-gray-300 focus:ring-[#A259FF]/50'
                  }`}
               />
               {/* Password toggle button */}
               <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
               >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
               </button>
               {errors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                     <AlertCircle className="h-4 w-4" />
                     {errors.password}
                  </p>
               )}
               
               {/* Password strength indicator for signup */}
               {isSignup && touched.password && password && !errors.password && (
                  <div className="mt-2 p-2 bg-gray-50 rounded-md">
                     <div className="text-xs text-gray-600 mb-1">Password strength:</div>
                     <div className="flex gap-1 mb-2">
                        {[...Array(4)].map((_, i) => {
                           const strengthLevel = Object.values(passwordStrength).filter(v => v === true).length - 1;
                           return (
                              <div
                                 key={i}
                                 className={`h-1 flex-1 rounded ${
                                    i <= strengthLevel 
                                       ? strengthLevel < 2 ? 'bg-red-400' : strengthLevel < 3 ? 'bg-yellow-400' : 'bg-green-400'
                                       : 'bg-gray-200'
                                 }`}
                              />
                           );
                        })}
                     </div>
                     <div className="text-xs space-y-1">
                        <div className={`flex items-center gap-1 ${passwordStrength?.minLength ? 'text-green-600' : 'text-gray-400'}`}>
                           {passwordStrength?.minLength ? '✓' : '○'} At least 8 characters
                        </div>
                        <div className={`flex items-center gap-1 ${passwordStrength?.hasUpperCase ? 'text-green-600' : 'text-gray-400'}`}>
                           {passwordStrength?.hasUpperCase ? '✓' : '○'} Uppercase letter
                        </div>
                        <div className={`flex items-center gap-1 ${passwordStrength?.hasLowerCase ? 'text-green-600' : 'text-gray-400'}`}>
                           {passwordStrength?.hasLowerCase ? '✓' : '○'} Lowercase letter
                        </div>
                        <div className={`flex items-center gap-1 ${passwordStrength?.hasNumbers ? 'text-green-600' : 'text-gray-400'}`}>
                           {passwordStrength?.hasNumbers ? '✓' : '○'} Number
                        </div>
                     </div>
                  </div>
               )}
            </div>

            {/* Confirm Password Field (Signup only) */}
            {isSignup && (
               <div className="relative">
                  <input
                     type={showConfirmPassword ? 'text' : 'password'}
                     placeholder="Confirm Password"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     onBlur={() => handleBlur('confirmPassword')}
                     className={`w-full px-4 py-2 pr-12 border rounded-lg placeholder:text-[#D9D9D9] focus:outline-none focus:ring-2 transition-all duration-200 ${
                        errors.confirmPassword 
                           ? 'border-red-500 focus:ring-red-500/50' 
                           : touched.confirmPassword && !errors.confirmPassword 
                              ? 'border-green-500 focus:ring-green-500/50'
                              : 'border-gray-300 focus:ring-[#A259FF]/50'
                     }`}
                  />
                  {/* Confirm password toggle button */}
                  <button
                     type="button"
                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                     {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                  {/* Confirm password validation icon */}
                  {touched.confirmPassword && confirmPassword && (
                     <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                        {errors.confirmPassword ? (
                           <XCircle className="h-5 w-5 text-red-500" />
                        ) : (
                           <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                     </div>
                  )}
                  {errors.confirmPassword && (
                     <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.confirmPassword}
                     </p>
                  )}
               </div>
            )}

            <div className='flex justify-between items-start h-fit'>
               <label className="flex items-center text-sm gap-2 mb-4">
                  <input
                     type="checkbox"
                     checked={remember}
                     onChange={(e) => setRemember(e.target.checked)}
                     className="form-checkbox h-4 w-4 cursor-pointer accent-[#A259FF]"
                  />
                  <span className="text-base font-normal cursor-pointer text-black/70">
                     {isSignup ? 'Stay logged in' : 'Remember me'}
                  </span>
               </label>
               {!isSignup && (
                  <span className="text-sm text-[#DC3545] cursor-pointer hover:underline">
                     Forgot Password
                  </span>
               )}
            </div>

            <div className='flex flex-col items-center gap-4'>
               <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`w-full py-2 text-white rounded-lg transition-all duration-200 max-w-[220px] ${
                     isSubmitting || Object.keys(errors).length > 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#A259FF] to-[#0011FF] hover:from-[#8B4AE8] hover:to-[#0000E6] cursor-pointer transform hover:scale-105'
                  }`}
               >
                  {isSubmitting 
                     ? (isSignup ? 'Creating Account...' : 'Signing In...') 
                     : (isSignup ? 'Create Account' : 'Sign In')
                  }
               </button>

               <p className="text-center text-sm font-normal gap-3">
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

         {/* Social Login Links */}
         <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-center mt-5'>
               <div className='border-t border-[#C3C3C3] w-full'></div>
               <p className='text-sm text-center w-full font-normal text-[#00000099] px-4'>
                  {isSignup ? 'Continue with' : 'Or Sign with'}
               </p>
               <div className='border-t border-[#C3C3C3] w-full'></div>
            </div>

            <div className='flex items-center justify-between gap-4'>
               <Link 
                  href='https://www.facebook.com/'
                  className='border border-gray-200 flex-1 h-12 flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg'
               >
                  <FaFacebook className="text-[#1877F2]" />
               </Link>
               <Link 
                  href='https://www.google.com/'
                  className='border border-gray-200 flex-1 h-12 flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg'
               >
                  <FaGoogle className="text-[#1A73E8]" />
               </Link>
               <Link 
                  href='https://www.tiktok.com/'
                  className='border border-gray-200 flex-1 h-12 flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg'
               >
                  <FaTiktok className="text-[#FF0000]" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default AuthForm;