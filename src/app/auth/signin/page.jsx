// src/app/(auth)/signin/page.jsx

import React, { Suspense } from 'react'; // NEW: Import Suspense
import SignInForm from '../../components/SignInForm'; // Adjust path if needed

const SignIn = () => {
  return (
    <main>
      {/* Wrap each client component with Suspense */}
      <Suspense fallback={<div>Loading Sign In Form...</div>}>
        <SignInForm />
      </Suspense>
    </main>
  );
}

export default SignIn;