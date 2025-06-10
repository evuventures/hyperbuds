"use client";
import React from 'react'
import AuthForm from '../components/AuthForm'





const SignupPage = () => {

   const handleSignup = (data) => {
      console.log('Signup data:', data);
      // The API Call will be here
   };



   return (
      <main className=''>
         <AuthForm type='signup' onSubmit={handleSignup} />
      </main>
   )
}

export default SignupPage
