import { motion } from 'framer-motion';
import Image from 'next/image';

const SlideThree = () => (
   <motion.div className="flex flex-col items-center px-4 text-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
   >
      <Image
         src='/images/icons-onboarding/Group51.png'
         alt="Live"
         width={250}
         height={250}
         priority
         blurDataURL='/images/icons-onboarding/Group51.png'
         className="object-contain my-5 bg-white"
         placeholder="blur"
      />
      <h1 className="my-5 text-2xl font-semibold md:text-4xl lg:text-5xl">
         Go Live & Create Magic
      </h1>
      <p className="my-5 text-base text-gray-500 lg:max-w-xl md:max-w-xl md:text-xl lg:text-2xl">
         Jump into our basic Duet Studio to co-stream, record, and produce amazing content with your new partners.
      </p>
   </motion.div>
);

export default SlideThree;
