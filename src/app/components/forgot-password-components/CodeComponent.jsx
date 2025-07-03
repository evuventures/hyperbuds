'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation' 

import OtpPassword from './OtpPassword'
import { useAuth } from '../../context/AuthContext'; 

const EnterYourCode = () => {
  const [otpCode, setOtpCode] = useState('');
  const [localMessage, setLocalMessage] = useState(null); 

  const router = useRouter();
  const searchParams = useSearchParams(); 
  const userEmail = searchParams.get('email'); 

  const { verifyPasswordResetCode, loading: authLoading } = useAuth(); 

  
  const handleVerifyCode = async (code) => {
    setOtpCode(code); 
    setLocalMessage(null); 
    if (!userEmail) {
      setLocalMessage({ type: 'error', text: 'Email not found. Please restart the password reset process.' });
      return;
    }
    if (code.length !== 6) { 
      setLocalMessage({ type: 'error', text: 'Please enter the 6-digit code sent.' });
      return;
    }

    
    const result = await verifyPasswordResetCode(userEmail, code);

    if (result.success) {
      setLocalMessage({ type: 'success', text: result.message || 'Code verified successfully!' });
      
      router.push(`/forgot-password/reset-password?email=${userEmail}&code=${code}`);
    } else {
      setLocalMessage({ type: 'error', text: result.error || 'Invalid or expired code.' });
    }
  };

  return (
    <section>
      <div className='h-screen  flex flex-col items-center justify-center gap-10 mx-5'>

        <div className='flex flex-col items-center justify-centers gap-5'>
          <div className=' rounded-full p-5 bg-[#EBDBFF] w-[70px] h-[70px] items-center flex justify-center'>
            <Image src="/images/key-icon.svg" alt="key icon" width={32} height={32} />
          </div>
          <h2 className='text-xl md:text-2xl lg:text-3xl font-medium'>
            Enter your Code
          </h2>
          <p className='text-sm md:text-lg text-black lg:text-xl font-normal'>
            We sent a mail to <span className="font-semibold">{userEmail || 'your email'}</span>
          </p>
        </div>

        <div>
          {/* Pass the loading state and a callback function to OtpPassword */}
          <OtpPassword onComplete={handleVerifyCode} isLoading={authLoading} />
        </div>

        {localMessage && ( 
          <p className={`text-center text-sm font-medium mt-4 ${
            localMessage.type === 'error' ? 'text-red-600' : 'text-green-600'
          }`}>
            {localMessage.text}
          </p>
        )}



        <Link href="/login" className='flex items-center justify-center gap-2 h-fit my-6'>
          <Image src="/images/right-arrow.svg" alt="back to login"
            width={20} height={12} className='rotate-180' />
          <p className='text-black text-base md:text-xl font-normal underline'>
            Back to login
          </p>
        </Link>

      </div>
    </section>
  )
}

export default EnterYourCode
