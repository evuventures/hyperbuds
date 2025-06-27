'use client';
import { ChevronLeft } from 'lucide-react';

const GoLiveScreen = ({ onNext, onBack }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center pt-8 lg:pt-12">
      
      {/* Back Button */}
      <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
        <button onClick={onBack} className="p-2">
          <ChevronLeft className="w-6 h-6 text-gray-600 lg:w-8 lg:h-8" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-7xl mx-auto">
        
        {/* Icon */}
        <div className="mb-6 sm:mb-12">
          <div className="w-[clamp(12rem,20vw,20rem)] mx-auto">
            <img
              src="/images/onboarding/mike.png"
              alt="Mike Icon"
              className="w-full h-auto object-contain mike-gradient transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Title */}
        <h1
          className="font-bold text-gray-900 leading-tight text-center transition-all duration-300 text-3xl sm:text-5xl lg:whitespace-nowrap mb-4 sm:mb-10"
        >
          Go Live & Create Magic
        </h1>

        {/* Description */}
        <p
          className="text-black-500 leading-snug text-center transition-all duration-300 text-base sm:text-xl mb-6 sm:mb-12 max-w-prose lg:whitespace-nowrap"
        >
          Jump into our basic Duet Studio to co-stream, record, and produce amazing content with your new partners.
        </p>

        {/* Progress Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-12 mb-4 sm:mb-10">
          <div className="bg-gray-300 rounded-full w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300"></div>
          <div className="bg-gray-300 rounded-full w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300"></div>
          <div className="bg-purple-500 rounded-full w-2 h-2 sm:w-3 sm:h-3 transition-all duration-300"></div>
        </div>

        {/* Button */}
        <div className="w-full space-y-4 max-w-xl">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation py-3 sm:py-5 px-4 sm:px-6 text-lg sm:text-xl"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .min-h-screen {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          h1 {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
            white-space: normal !important;
          }
          p {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
            white-space: normal !important;
          }
          button {
            width: 100% !important;
            padding: 0.75rem 1rem !important;
          }
          .space-y-4 {
            width: 90% !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
};

export default GoLiveScreen;
