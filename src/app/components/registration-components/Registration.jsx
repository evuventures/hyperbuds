'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import registrationData from './registrationData.jsx';
import ProfileStep from './ProfileStep.jsx';
import NicheStep from './NicheStep.jsx';
import PlatformStep from './PlatformStep.jsx';
import TypesStep from './TypesStep.jsx';
import SocialStep from './SocialStep.jsx';

export default function Registration() {
   const [step, setStep] = useState(0);

   const nextStep = () => setStep((prev) => (prev + 1 < registrationData.length ? prev + 1 : prev));

   const variants = {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -30 },
   };

   const getStepComponent = () => {
      switch (registrationData[step].type) {
         case 'profile':
            return <ProfileStep onNext={nextStep} currentStep={step} />;
         case 'niche':
            return <NicheStep onNext={nextStep} currentStep={step} />;
         case 'platform':
            return <PlatformStep onNext={nextStep} currentStep={step} />;
         case 'types':
            return <TypesStep onNext={nextStep} currentStep={step} />;
         case 'social':
            return <SocialStep onNext={nextStep} currentStep={step} />;
         default:
            return null;
      }
   };

   return (
      <div className="flex justify-center items-center">
         <AnimatePresence mode="wait">
            <motion.div
               key={step}
               initial="initial"
               animate="animate"
               exit="exit"
               variants={variants}
               transition={{ duration: 0.25, ease: 'easeInOut' }}
               className="w-full"
            >
               {getStepComponent()}
            </motion.div>
         </AnimatePresence>
      </div>
   );
}
