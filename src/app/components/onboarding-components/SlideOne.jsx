import { motion } from 'framer-motion';
import Image from 'next/image';

const SlideOne = () => (
   <motion.div className="flex flex-col items-center px-4 text-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
   >
      <Image
         src="/images/icons-onboarding/Group49.svg"
         alt="Welcome"
         width={250}
         height={250}
         priority
         placeholder="blur"
         blurDataURL='/images/icons-onboarding/Group49.svg'
         className="object-contain bg-white"
      />
      <h1 className="my-5 text-2xl font-semibold md:text-4xl lg:text-5xl">Welcome to HyperBuds!</h1>
      <p className="my-5 text-base text-gray-500 md:max-w-xl lg:max-w-3xl md:text-xl lg:text-2xl">
         Discover, connect, and collaborate with creators like never before, powered by intelligent AI matching.
      </p>
   </motion.div>
);

export default SlideOne;
