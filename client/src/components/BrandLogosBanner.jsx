import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const BrandLogosBanner = () => {
  const brandLogos = [
    { name: 'Toyota', src: assets.toyota_logo },
    { name: 'Ford', src: assets.ford_logo },
    { name: 'Mercedes', src: assets.mercedes_logo },
    { name: 'Jeep', src: assets.jeep_logo },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='max-w-6xl mx-auto py-12 px-6 lg:px-10 bg-white shadow-md rounded-lg flex flex-wrap justify-around items-center gap-8 -mt-10 relative z-10'>
      {brandLogos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.name} className='h-8 object-contain' />
      ))}
    </motion.div>
  );
};

export default BrandLogosBanner;
