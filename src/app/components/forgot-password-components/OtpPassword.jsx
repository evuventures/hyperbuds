"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OtpPassword() {
   const [otp, setOtp] = useState("");

   const handleChange = (value) => {
      setOtp(value);
   };

   const handleSubmit = () => {
      console.log("OTP entered:", otp);
      // Here you'd verify the OTP with your backend
   };

   return (
      <div className="flex flex-col items-center gap-5 ">

         <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            isInputNum
            shouldAutoFocus
            inputStyle={{
               width: "4.5rem",
               height: "4.5rem",
               border: "1px solid #A259FF",
               borderRadius: "16px",
               fontSize: "1.5rem",
               textAlign: "center",
               marginRight: "0.5rem",
            }}
         />
         <div className="w-full flex items-center justify-center">
            <p className="text-black font-normal text-xl">
               Didn't receive any email?{" "}
               <span className="text-[#1877F2] underline cursor-pointer">
                  Resend
               </span>
            </p>
         </div>
         <button
            onClick={handleSubmit}
            className="w-full py-3 text-white rounded-lg hover:opacity-90 transition gap-3 mt-2 bg-gradient-to-r from-[#A259FF] to-[#0011FF] cursor-pointer text-xl font-medium">
            Verify
         </button>
      </div>
   );
}