"use client";
import WelcomeScreen from '../components/welcome/WelcomeScreen';
import CollabPartnerScreen from '../components/welcome/CollabPartnerScreen';
import GoLiveScreen from '../components/welcome/GoLiveScreen';
import React, { useState } from 'react';
const onboarding = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    WelcomeScreen,
    CollabPartnerScreen,
    GoLiveScreen
  ];

  const handleNext = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      // Handle completion
      alert('Onboarding completed!');
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleSkip = () => {
    // Handle skip - could jump to end or specific screen
    alert('Skipped onboarding!');
  };

  const CurrentScreenComponent = screens[currentScreen];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <CurrentScreenComponent
        onNext={handleNext}
        onBack={handleBack}
        onSkip={handleSkip}
      />
    </div>
  );
};

export default onboarding;