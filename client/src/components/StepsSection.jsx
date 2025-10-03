import React from 'react';
import stepImage from '../assets/stepimage.jpg'

const StepsSection = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-stretch items-center justify-between px-6 lg:px-8 py-12 bg-primary max-w-6xl mx-auto rounded-2xl overflow-hidden relative bg-[url("./assets/tire_track.png")] bg-no-repeat bg-cover bg-center'>
      <div className='w-full lg:w-full flex flex-col gap-5 text-white relative z-10'>
        <h2 className='text-xl md:text-2xl font-semibold leading-tight mb-3'>Car Reservation Process</h2>
        <div className='flex items-start gap-3 p-4 border border-white/20 rounded-xl backdrop-blur-sm bg-white/10'>
          <div className='flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-sm font-semibold flex-shrink-0'>1</div>
          <div>
            <h3 className='text-sm font-semibold mb-1'>Search & Select Your Car</h3>
            <p className='text-xs leading-relaxed'>
              Enter pick-up/drop-off locations, dates & times. Browse available cars, view details, and click Reserve on your chosen vehicle.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-3 p-4 border border-white/20 rounded-xl backdrop-blur-sm bg-white/10'>
          <div className='flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-sm font-semibold flex-shrink-0'>2</div>
          <div>
            <h3 className='text-sm font-semibold mb-1'>Verify Requirements & Qualifications
            </h3>
            <p className='text-xs leading-relaxed'>
              Ensure you meet booking requirements (e.g., <strong>valid driver's license for 2+ years</strong>, <strong>23+ years old</strong>, <strong>Work ID</strong>, <strong>Passport</strong>, <strong>Proof of address (utility bill)</strong>).<br />
              <strong>Optionally upload documents now or bring them at pickup</strong>.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-3 p-4 border border-white/20 rounded-xl backdrop-blur-sm bg-white/10'>
          <div className='flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-sm font-semibold flex-shrink-0'>3</div>
          <div>
            <h3 className='text-sm font-semibold mb-1'>Enter Details & Select Payment</h3>
            <p className='text-xs leading-relaxed'>
              Provide your full name, email, phone number, and address. Choose your payment method (<strong>Credit/Debit card</strong>, <strong>PayPal</strong>, or <strong>Pay at pickup</strong>) and accept our <strong>Terms & Conditions</strong>.
            </p>
          </div>
        </div>
        <div className='flex items-start gap-3 p-4 border border-white/20 rounded-xl backdrop-blur-sm bg-white/10'>
          <div className='flex items-center justify-center w-7 h-7 rounded-full bg-accent text-white text-sm font-semibold flex-shrink-0'>4</div>
          <div>
            <h3 className='text-sm font-semibold mb-1'>Review & Confirm Reservation</h3>
            <p className='text-xs leading-relaxed'>
              Review your <strong>booking summary</strong>, including <strong>car details, dates, locations, price breakdown, and total due</strong>. Confirm details to finalize your reservation. <strong> Please note that not all applications will be accepted upon vetting </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
