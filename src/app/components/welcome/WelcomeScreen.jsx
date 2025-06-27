"use client";

const WelcomeScreen = ({ onNext, onSkip }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center pt-8 lg:pt-12">
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-[64rem]">
        {/* Icon */}
        <div className="mb-6 sm:mb-12">
          <div className="w-16 h-16 sm:w-28 sm:h-28">
            <img
              src="/images/onboarding/Group 49.png"
              alt="Welcome Icon"
              className="w-full h-full object-contain transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-bold text-black-5000 leading-tight text-center transition-all duration-300 whitespace-nowrap text-3xl sm:text-5xl mb-4 sm:mb-10">
          Welcome to HyperBuds
        </h1>

        {/* Description */}
       <p className="text-gray-900 leading-snug text-center transition-all duration-300 text-base sm:text-xl mb-6 sm:mb-12 max-w-prose">
          Discover, connect, and collaborate with creators like never before, powered by intelligent AI matching.
        </p>

        {/* Progress dots */}
        <div className="flex justify-center items-center transition-all duration-300 gap-2 sm:gap-3 mt-6 sm:mt-12 mb-4 sm:mb-10">
          <div className="bg-purple-500 rounded-full transition-all duration-300 w-2 h-2 sm:w-3 sm:h-3"></div>
          <div className="bg-gray-300 rounded-full transition-all duration-300 w-2 h-2 sm:w-3 sm:h-3"></div>
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
            font-size: 1.8rem !important ;
            margin-bottom: 1rem !important;
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

export default WelcomeScreen;