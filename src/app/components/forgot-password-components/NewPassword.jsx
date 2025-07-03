'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { useRouter, useSearchParams } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

import { useAuth } from '../../context/AuthContext'; 

const NewPassword = () => {
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [localMessage, setLocalMessage] = useState(null); 
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const userEmail = searchParams.get('email');
  const verificationCode = searchParams.get('code'); 

  const { resetPassword, loading: authLoading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalMessage(null);

    if (!userEmail || !verificationCode) {
      setLocalMessage({ type: 'error', text: 'Missing email or verification code. Please restart the process.' });
      return;
    }

    if (!form.password.trim() || !form.confirmPassword.trim()) {
      setLocalMessage({ type: 'error', text: 'All fields are required.' });
      return;
    }

    if (form.password !== form.confirmPassword) {
      setLocalMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }

    if (form.password.length < 8) { 
      setLocalMessage({ type: 'error', text: 'Password must be at least 8 characters long.' });
      return;
    }

    
    const result = await resetPassword(userEmail, form.password, verificationCode);

    if (result.success) {
      setLocalMessage({ type: 'success', text: result.message || 'Password reset successfully! You can now log in.' });

      router.push('/login');
    } else {
      setLocalMessage({ type: 'error', text: result.error || 'Failed to reset password.' });
    }
  };

  return (
    <section>
      <div className='h-screen flex flex-col items-center justify-center gap-10 m-5'>

        <div className='flex flex-col items-center justify-centers gap-5'>
          <div className='rounded-full p-5 bg-[#EBDBFF] w-[70px] h-[70px] items-center flex justify-center'>
            <Image src="/images/key-icon.svg" alt="key icon" width={32} height={32} />
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
                id="new-password" 
                name="password"
                type={showPassword ? 'text' : 'password'} 
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition placeholder:text-xs"
                required
                disabled={authLoading} 
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className="w-full mb-2">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm md:text-base text-black">Confirm Password</label>
            <div className="relative w-full">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'} 
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full h-12 p-3 pr-10 border border-[#71797E] rounded-lg focus:border-[#A259FF]/50 focus:outline-none transition placeholder:text-xs"
                required
                disabled={authLoading}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {localMessage && ( // Display local message
            <p className={`text-center text-sm font-medium mb-4 ${
              localMessage.type === 'error' ? 'text-red-600' : 'text-green-600'
            }`}>
              {localMessage.text}
            </p>
          )}

          <div>
            <button
              type="submit"
              className="w-full py-3 text-white rounded-lg hover:opacity-90 transition gap-3 mt-2 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium"
              disabled={authLoading} 
            >
              {authLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>

      </div >
    </section >
  )
}

export default NewPassword
