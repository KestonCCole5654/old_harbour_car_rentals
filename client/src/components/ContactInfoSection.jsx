import React from 'react';
import { assets } from '../assets/assets';
import { Phone } from 'lucide-react';

const ContactInfoSection = () => {
  return (
    <div className='max-w-6xl mx-auto py-8 px-6 lg:px-10 flex flex-row flex-wrap justify-center md:justify-around items-center bg-white shadow-md rounded-t-0  rounded-b-2xl -mt-10 relative z-10 gap-y-6'>

      <div className='flex items-center gap-3 w-full sm:w-1/2 md:w-auto'>
        <div className='bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
          <img src={assets.location_icon} alt="Address" className='w-5 h-5 brightness-0 invert'/>
        </div>
        <div className='text-left'>
          <p className='text-gray-500 text-sm'>Address</p>
          <p className='font-medium'>P.O, 392 Waterford Parkway, Waterford, Portmore</p>
        </div>
      </div>

      <div className='flex items-center gap-3 w-full sm:w-1/2 md:w-auto'>
        <div className='bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
          <img src={assets.gmail_logo} alt="Email" className='w-5 h-5 brightness-0 invert'/>
        </div>
        <div className='text-left'>
          <p className='text-gray-500 text-sm'>Email</p>
          <p className='font-medium'>Lacars2021@gmail.com</p>
        </div>
      </div>

      <div className='flex items-center gap-3 w-full sm:w-1/2 md:w-auto'>
        <div className='bg-orange-500 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
          <Phone size={20} className='text-white' />
        </div>
        <div className='text-left'>
          <p className='text-gray-500 text-sm'>Phone</p>
          <p className='font-medium'>(876) 457-6184</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
