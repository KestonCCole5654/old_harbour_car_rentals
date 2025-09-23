import React from 'react';
import { assets } from '../assets/assets';
import { Phone } from 'lucide-react';

const ContactInfoSection = () => {
  return (
    <div className='max-w-6xl mx-auto py-8 px-6 lg:px-10 flex flex-row flex-wrap justify-center md:justify-around items-center bg-white shadow-lg rounded-t-0  rounded-b-3xl -mt-10 relative z-10 gap-y-6'>

      <div className='flex items-center gap-3 w-full sm:w-1/2 md:w-auto p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300'>
        <div className='bg-[#2B2F92] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
          <img src={assets.location_icon} alt="Address" className='w-5 h-5 brightness-0 invert'/>
        </div>
        <div className='text-left'>
          <p className='text-gray-600 text-sm'>Address</p>
          <p className='font-semibold text-[#1E216A]'>23 Congreve Park, Portmore, St. Catherine, Jamaica</p>
        </div>
      </div>

      <div className='flex items-center gap-3 w-full sm:w-1/2 md:w-auto p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300'>
        <div className='bg-[#2B2F92] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
          <img src={assets.gmail_logo} alt="Email" className='w-5 h-5 brightness-0 invert'/>
        </div>
        <div className='text-left'>
          <p className='text-gray-600 text-sm'>Email</p>
          <p className='font-semibold text-[#1E216A]'>Sheldonmurray584@yahoo.com</p>
        </div>
      </div>

      <div className='flex items-center gap-3 w-full sm:w-1/2 md:w-auto p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300'>
        <div className='bg-[#2B2F92] rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
          <Phone size={20} className='text-white' />
        </div>
        <div className='text-left'>
          <p className='text-gray-600 text-sm'>Phone</p>
          <p className='font-semibold text-[#1E216A]'>+1 (876) 393-1140</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
