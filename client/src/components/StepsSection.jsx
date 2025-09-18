import React from 'react';
import stepImage from '../assets/stepimage.jpg'

const StepsSection = () => {
  return (
    <div className='max-w-6xl  rounded-2xl mx-auto py-16 px-6 lg:px-10 flex flex-col lg:flex-row lg:items-stretch items-center gap-12'>
      <div className='w-full lg:w-1/2 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center'>
        <img src={stepImage} alt="Car Reservation Process" className="w-full h-full object-cover"/>
      </div>
      <div className='w-full lg:w-1/2 flex flex-col gap-8'>
        <h2 className='text-3xl font-semibold text-gray-800 mb-6'>Car Reservation Process</h2>
        <div className='flex items-start gap-4'>
          <div className='flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold flex-shrink-0'>1</div>
          <div>
            <h3 className='text-lg font-semibold'>Search & Select Your Car</h3>
            <p className='text-gray-600 text-sm mt-1'>
              Enter pick-up/drop-off locations, dates & times. Browse available cars, view details, and click Reserve on your chosen vehicle.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold flex-shrink-0'>2</div>
          <div>
            <h3 className='text-lg font-semibold'>Verify Requirements & Qualitifcations</h3>
            <p className='text-gray-600 text-sm mt-1'>
              Ensure you meet booking requirements (e.g., <strong>valid driver's license for 2+ years</strong>, <strong>23+ years old</strong>, <strong>Work ID</strong>, <strong>Passport</strong>, <strong>Proof of address (utility bill)</strong>).<br />
              <strong>Optionally upload documents now or bring them at pickup</strong>.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold flex-shrink-0'>3</div>
          <div>
            <h3 className='text-lg font-semibold'>Enter Details & Select Payment</h3>
            <p className='text-gray-600 text-sm mt-1'>
              Provide your full name, email, phone number, and address. Choose your payment method (<strong>Credit/Debit card</strong>, <strong>PayPal</strong>, or <strong>Pay at pickup</strong>) and accept our <strong>Terms & Conditions</strong>.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-4'>
          <div className='flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-semibold flex-shrink-0'>4</div>
          <div>
            <h3 className='text-lg font-semibold'>Review & Confirm Reservation</h3>
            <p className='text-gray-600 text-sm mt-1'>
              Review your <strong>booking summary</strong>, including <strong>car details, dates, locations, price breakdown, and total due</strong>. Confirm details to finalize your reservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
