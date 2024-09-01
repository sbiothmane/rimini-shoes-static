'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } },
};

const imageVariant = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

const backgroundVariant = {
  hidden: { backgroundColor: '#ffffff' },
  visible: { backgroundColor: '#f0f0f0', transition: { delay: 0.3, duration: 1 } },
};

const FeaturedShoe = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={backgroundVariant}
      className="flex flex-col md:flex-row items-center py-8 px-6 transition-all duration-1000"
    >
      <motion.div variants={imageVariant} className="w-full md:w-1/2">
        <Image
          src="/images/hero-shoe.jpg"
          alt="Chaussure en vedette"
          width={500}
          height={500}
          className="object-cover rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div variants={textVariant} className="md:ml-8 mt-4 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">Chaussure Traditionnelle Marocaine</h2>
        <p className="text-gray-600 mt-2">Découvrez l&apos;élégance et le confort de notre dernière collection de chaussures marocaines.</p>
      </motion.div>
    </motion.section>
  );
};

export default FeaturedShoe;
