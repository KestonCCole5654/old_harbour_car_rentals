import React from 'react';
import { Briefcase, Key, Gauge } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className='max-w-6xl mx-auto py-12 px-6 lg:px-10 flex flex-col md:flex-row justify-around items-center relative'>
      <div className='flex flex-col items-center text-center max-w-[240px]'>
        <div className='bg-accent/10 p-3 rounded-xl mb-3'>
          <Briefcase size={32} className='text-accent' />
        </div>
        <h3 className='text-base font-semibold mb-1.5'>Business Solutions</h3>
        <p className='text-gray-600 text-xs leading-relaxed'>
          Tailored rental programs and corporate rates for your business needs.
        </p>
      </div>
      {/* Connector lines */}
      <div className="flex flex-col items-center my-5 md:my-0 md:flex-row">
        <div className="w-[1px] h-10 bg-gray-200 md:hidden"></div>
        <div className="hidden md:block w-10 h-[1px] bg-gray-200 mx-4"></div>
      </div>
      <div className='flex flex-col items-center text-center max-w-[240px]'>
        <div className='bg-accent/10 p-3 rounded-xl mb-3'>
          <Key size={32} className='text-accent' />
        </div>
        <h3 className='text-base font-semibold mb-1.5'>Seamless Experience</h3>
        <p className='text-gray-600 text-xs leading-relaxed'>
          Effortless booking and pickup with 24/7 customer support.
        </p>
      </div>
      {/* Connector lines */}
      <div className="flex flex-col items-center my-5 md:my-0 md:flex-row">
        <div className="w-[1px] h-10 bg-gray-200 md:hidden"></div>
        <div className="hidden md:block w-10 h-[1px] bg-gray-200 mx-4"></div>
      </div>
      <div className='flex flex-col items-center text-center max-w-[240px]'>
        <div className='bg-accent/10 p-3 rounded-xl mb-3'>
          <Gauge size={32} className='text-accent' />
        </div>
        <h3 className='text-base font-semibold mb-1.5'>Optimal Performance</h3>
        <p className='text-gray-600 text-xs leading-relaxed'>
          Reliable vehicles maintained to the highest standards for your peace of mind.
        </p>
      </div>
    </div>
  );
};

export default FeaturesSection;
