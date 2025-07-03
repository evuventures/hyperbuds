
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const [loading, setLoading] = useState(true); 

  // On login
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    const storedEmail = localStorage.getItem('userEmail');

    if (storedToken && storedEmail) {
      setIsAuthenticated(true);
      setUserEmail(storedEmail);
    }
    setLoading(false); 
  }, []);

 
  //simulate API , replace with fetch/axios

  const simulateApiCall = async (success, delay, successMsg, errorMsg) => {
    await new Promise(resolve => setTimeout(resolve, delay));
    if (success) {
      return { success: true, message: successMsg };
    } else {
      return { success: false, error: errorMsg };
    }
  };

  const login = async (email, password) => {
    setLoading(true);
    const result = await simulateApiCall(
      email === 'test@example.com' && password === 'password',
      1500,
      'Login successful!',
      'Invalid email or password (mocked).'
    );

    if (result.success) {
      // Store actual tokens from API response
      localStorage.setItem('accessToken', 'mock_jwt_token');
      localStorage.setItem('userEmail', email);
      setIsAuthenticated(true);
      setUserEmail(email);
    }
    setLoading(false);
    return result;
  };

  const signup = async (username, email, password) => {
    setLoading(true);
    // validation for signup success
    const success = email.includes('@') && password.length >= 8 && username.trim() !== '';
    const result = await simulateApiCall(
      success,
      2000,
      'Registration successful! Check email for verification.',
      'Mock signup failed: Invalid input or basic validation.'
    );

    if (result.success) {
      // No tokens stored here, as email verification is required first
    }
    setLoading(false);
    return result;
  };

  const logout = async () => {
    setLoading(true);
    await simulateApiCall(true, 500); // Simulate quick logout
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userEmail');
    setIsAuthenticated(false);
    setUserEmail(null);
    setLoading(false);
  };

  
  // These will be replaced with actual API calls to your backend

  const sendPasswordResetEmail = async (email) => {
    setLoading(true);
    // Call backend API to send reset code/link to email
    const result = await simulateApiCall(
      email.includes('@') && email.includes('.'), 
      2000,
      'Password reset code sent to your email (mocked).',
      'Email not found or invalid (mocked).'
    );
    setLoading(false);
    return result;
  };

  const verifyPasswordResetCode = async (email, code) => {
    setLoading(true);
    // Call backend API to verify the code
    const result = await simulateApiCall(
      email.includes('@') && code === '123456', // Mock code for verification
      1500,
      'Code verified successfully (mocked).',
      'Invalid or expired code (mocked).'
    );
    setLoading(false);
    return result;
  };

  const resetPassword = async (email, newPassword, code) => {
    setLoading(true);
    // Call backend API to reset password with newPassword and code
    const result = await simulateApiCall(
      email.includes('@') && newPassword.length >= 8 && code === '123456', // Mock validation
      2000,
      'Password reset successfully! You can now log in (mocked).',
      'Password reset failed (mocked).'
    );
    setLoading(false);
    return result;
  };


  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      userEmail,
      loading,
      login,
      signup,
      logout,
      sendPasswordResetEmail,
      verifyPasswordResetCode,
      resetPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
