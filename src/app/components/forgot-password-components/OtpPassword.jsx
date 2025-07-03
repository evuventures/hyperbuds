'use client';

import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";

const OtpPassword = ({ onComplete, isLoading }) => {
  const [otp, setOtp] = useState("");

  const handleChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = () => {
    onComplete(otp);
  };

  useEffect(() => {
    if (otp.length === 6 && !isLoading) {
      handleSubmit(); 
    }
  }, [otp, isLoading]);

  return (
    <div className="flex flex-col items-center gap-5 mx-4 md:mx-auto ">

      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        renderInput={(props) => (
          <input
            {...props}
            disabled={isLoading}
          />
        )}
        isInputNum
        shouldAutoFocus
        containerStyle=" flex justify-center items-center mx-auto space-x-1 md:gap-4"
        inputStyle={{
          width: "3.0rem",
          height: "3.5rem",
          border: "1px solid #A259FF",
          borderRadius: "10px",
          fontSize: "1.25rem",
          textAlign: "center",
          backgroundColor: isLoading ? "#f0f0f0" : "white",
          color: "#333",
          transition: "border-color 0.2s ease",
        }}
        focusStyle={{
          borderColor: "#A259FF",
          boxShadow: "0 0 0 2px rgba(162, 89, 255, 0.2)",
          outline: "none",
        }}
      />
      <button
        onClick={handleSubmit}
        className="w-48 md:w-full py-3 text-white mx-auto rounded-lg hover:opacity-90 transition gap-3 mt-2 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium"
        disabled={isLoading}
      >
        {isLoading ? 'Verifying...' : 'Verify'}
      </button>
    </div>
  );
}


export default OtpPassword;
