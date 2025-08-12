import { motion } from 'framer-motion';
import Image from 'next/image';

const SlideTwo = () => (
   <motion.div className="flex flex-col items-center px-4 text-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
   >
      <Image
         src="/images/icons-onboarding/Group50.png"
         alt="Collab"
         width={250}
         height={250}
         priority
         placeholder="blur"
         blurDataURL="/images/icons-onboarding/Group50.png"
         className="object-contain bg-white rounded-xl"
      />
      <h1 className="my-5 text-2xl font-semibold md:text-4xl lg:text-5xl">
         Find your Perfect Collab Partner
      </h1>
      <p className="my-5 text-base text-gray-500 md:max-w-xl lg:max-w-3xl md:text-xl lg:text-2xl">
         Our AI Matchmaker intelligently suggests ideal collaborators based on your niche, audience, and goals.
      </p>
   </motion.div>
);

export default SlideTwo;
