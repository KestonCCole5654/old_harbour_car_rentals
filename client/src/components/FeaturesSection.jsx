import React from 'react';
import { Briefcase, Key, Gauge } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className='max-w-6xl mx-auto py-16 px-6 lg:px-10 flex flex-col md:flex-row justify-around items-center relative'>
      <div className='flex flex-col items-center text-center max-w-[280px]'>
        <Briefcase size={48} className='text-[#2B2F92]' />
        <h3 className='text-xl font-semibold mt-4 mb-2'>Business Solutions</h3>
        <p className='text-gray-600 text-sm'>
          Tailored rental programs and corporate rates for your business needs.
        </p>
      </div>
      {/* Connector lines */}
      <div className="flex flex-col items-center my-6 md:my-0 md:flex-row">
        <div className="w-[2px] h-12 bg-gray-300 md:hidden"></div>
        <div className="hidden md:block w-12 h-[2px] bg-gray-300 mx-6"></div>
      </div>
      <div className='flex flex-col items-center text-center max-w-[280px]'>
        <Key size={48} className='text-[#2B2F92]' />
        <h3 className='text-xl font-semibold mt-4 mb-2'>Seamless Experience</h3>
        <p className='text-gray-600 text-sm'>
          Effortless booking and pickup with 24/7 customer support.
        </p>
      </div>
      {/* Connector lines */}
      <div className="flex flex-col items-center my-6 md:my-0 md:flex-row">
        <div className="w-[2px] h-12 bg-gray-300 md:hidden"></div>
        <div className="hidden md:block w-12 h-[2px] bg-gray-300 mx-6"></div>
      </div>
      <div className='flex flex-col items-center text-center max-w-[280px]'>
        <Gauge size={48} className='text-[#2B2F92]' />
        <h3 className='text-xl font-semibold mt-4 mb-2'>Optimal Performance</h3>
        <p className='text-gray-600 text-sm'>
          Reliable vehicles maintained to the highest standards for your peace of mind.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
