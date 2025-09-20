import React from 'react';
import { MapPin, Car, Wallet } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 px-6 lg:px-10 flex flex-col md:flex-row justify-around items-center gap-12'>
      <div className='flex flex-col items-center text-center max-w-[280px]'>
        <MapPin size={48} className='text-gray-800' />
        <h3 className='text-xl font-semibold mt-4 mb-2'>Availability</h3>
        <p className='text-gray-600 text-sm'>
          Wide range of vehicles available when and where you need them.
        </p>
      </div>
      <div className='flex flex-col items-center text-center max-w-[280px]'>
        <Car size={48} className='text-gray-800' />
        <h3 className='text-xl font-semibold mt-4 mb-2'>Comfort</h3>
        <p className='text-gray-600 text-sm'>
          Enjoy a comfortable ride with our well-maintained and modern fleet.
        </p>
      </div>
      <div className='flex flex-col items-center text-center max-w-[280px]'>
        <Wallet size={48} className='text-gray-800' />
        <h3 className='text-xl font-semibold mt-4 mb-2'>Savings</h3>
        <p className='text-gray-600 text-sm'>
          Competitive pricing and flexible rental options to fit your budget.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
