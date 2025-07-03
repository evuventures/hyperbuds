'use client';
import { ChevronLeft } from 'lucide-react';

const CollabPartnerScreen = ({ onNext, onSkip, onBack }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-start p-4 sm:p-6">
        <button 
          onClick={onBack} 
          className="p-2 absolute top-4 left-4 sm:top-6 sm:left-6 hover:scale-110 active:scale-95 transition-all duration-200 rounded-lg"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center pt-8 lg:pt-12">
        {/* Icon */}
        <div className="mb-6 sm:mb-12">
          <div className="w-16 h-16 sm:w-28 sm:h-28">
            <img 
              src="/images/onboarding/handshake.png" 
              alt="Collab Partner Icon" 
              className="w-full h-full object-contain transition-all duration-300 ease-in-out hover:scale-105" 
            />
          </div>
        </div>

        {/* Title */}
     <h1 className="font-bold text-gray-900 leading-tight text-center transition-all duration-300 text-3xl sm:text-5xl lg:whitespace-nowrap mb-4 md:min-w-2xl sm:mb-10">
  Find Your Perfect Collab Partner
</h1>

        {/* Description */}
        <p className="text-gray-900 leading-snug text-center transition-all duration-300 text-base sm:text-xl mb-6 sm:mb-12 md:min-w-xl lg:min-w-3xl">
          Our AI Matchmaker intelligently suggests ideal collaborators based on your niche, audience, and goals.
        </p>

        {/* Progress dots */}
        <div className="flex justify-center items-center transition-all duration-300 gap-2 sm:gap-3 mt-6 sm:mt-12 mb-4 sm:mb-10">
          <div className="bg-gray-300 rounded-full transition-all duration-300 w-2 h-2 sm:w-3 sm:h-3"></div>
          <div className="bg-purple-500 rounded-full transition-all duration-300 w-2 h-2 sm:w-3 sm:h-3"></div>
          <div className="bg-gray-300 rounded-full transition-all duration-300 w-2 h-2 sm:w-3 sm:h-3"></div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4 max-w-xl">
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl touch-manipulation py-3 sm:py-5 px-4 sm:px-6 text-lg sm:text-xl"
          >
            Next
          </button>
          <button
            onClick={onSkip}
            className="w-full text-purple-500 font-medium hover:text-purple-600 hover:scale-105 active:scale-95 transition-all duration-200 rounded-lg touch-manipulation py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Media Query for Mobile with Tailwind */}
      <style jsx>{`
        @media (max-width: 640px) {
          .min-h-screen {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          h1 {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
            line-height: 1.2 !important;
          }
          p {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
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

export default CollabPartnerScreen;