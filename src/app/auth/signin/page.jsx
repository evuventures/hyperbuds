// src/app/(auth)/signin/page.jsx

import React, { Suspense } from 'react'; // NEW: Import Suspense
import SignInForm from '../../components/SignInForm'; // Adjust path if needed
import SignupSuccessful from '../../components/forgot-password-components/SignupSuccessful'; // Adjust path if needed
import ForgotPassword from '../../components/forgot-password-components/ForgotPassword'; // Adjust path if needed
import CodeComponent from '../../components/forgot-password-components/CodeComponent'; // Adjust path if needed
import NewPassword from '../../components/forgot-password-components/NewPassword'; // Adjust path if needed

const SignIn = () => {
  return (
    <main>
      {/* Wrap each client component with Suspense */}
      <Suspense fallback={<div>Loading Sign In Form...</div>}>
        <SignInForm />
      </Suspense>
      {/* just for development */}
      <Suspense fallback={<div>Loading Signup Successful...</div>}>
        <SignupSuccessful />
      </Suspense>
      {/* just for development */}
      <Suspense fallback={<div>Loading Forgot Password...</div>}>
        <ForgotPassword />
      </Suspense>
      {/* just for development */}
      <Suspense fallback={<div>Loading Code Component...</div>}>
        <CodeComponent />
      </Suspense>
      {/* just for development */}
      <Suspense fallback={<div>Loading New Password...</div>}>
        <NewPassword />
      </Suspense>
    </main>
  );
}

export default SignIn;