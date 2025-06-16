import React from 'react'
import SignInForm from '../../components/SignInForm'
import SignupSuccessful from '../../components/forgot-password-components/SignupSuccessful'
import ForgotPassword from '../../components/forgot-password-components/ForgotPassword'
import CodeComponent from '../../components/forgot-password-components/CodeComponent'
import NewPassword from '../../components/forgot-password-components/NewPassword'

const SignIn = () => {
   return (
      <main>
         <SignInForm />
         {/* just for development */}
         <SignupSuccessful />
         {/* just for development */}
         <ForgotPassword />
         {/* just for development */}
         <CodeComponent />
         {/* just for development */}
         <NewPassword />
      </main>
   )
}

export default SignIn