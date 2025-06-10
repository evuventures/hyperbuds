"use client";
import React from 'react'
import AuthForm from '../components/AuthForm'




const LoginPage = () => {


   const handleLogin = (data) => {
      console.log('Login data:', data);
      // The API Call will be here
   }


   return (
      <main className=''>
         <AuthForm type='login' onSubmit={handleLogin} />
      </main>
   )
}

export default LoginPage
