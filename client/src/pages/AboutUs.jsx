import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Testimonial from '../components/Testimonial'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import CallToActionBanner from '../components/CallToActionBanner'

const AboutUs = () => {

    const [openFaq, setOpenFaq] = useState(null)

    const faqs = [
        {
            question: "How does it work?",
            answer: "After meeting the rental requirements, you’ll come in to inspect the vehicle and sign the contract. Drop-off is available at an additional expense depending on the location."
        },
        {
            question: "Can I rent a car without a credit card?",
            answer: "Yes, you can rent a car without a credit card. Payment can be made on the spot, or by direct bank transfer with given details"
        },
        {
            question: "What are the requirements for renting a car?",
            answer: "Ensure you meet booking requirements (e.g., valid driver's license for 2+ years, 23+ years old, Work ID, Passport, Proof of address (utility bill)). Optionally upload documents now or bring them at pickup. Please note that not all applications will be accepted upon vetting"
        },
        {
            question: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
            answer: "No, towing or attaching a hitch to the rental vehicle is not allowed."
        },
        {
            question: "Does Car Rental offer coverage products for purchase with my rental?",
            answer: "No, rentals are only covered under proper coverage products which is the car, any additional coverage is not offered."
        },
    ]

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
    >
      {/* Breadcrumbs */}
      <div className='bg-gray-50 py-10 text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-2'>About Us</h1>
        <p className='text-gray-600'>
          <Link to='/' className='hover:text-accent'>Home</Link> / About Us
        </p>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto py-16 px-6 lg:px-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Section */}
          <div>
            <h2 className='text-4xl font-bold text-gray-800 leading-tight mb-8'>Where every drive feels extraordinary</h2>
          </div>

          {/* Right Section - Features */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Wide Selection of Vehicles</h3>
              <p className='text-gray-600 text-sm'>
                Old Harbour Car Rentals offers a diverse fleet of vehicles, from compact cars to luxury SUVs, ensuring you find the perfect ride for any occasion or need.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Exceptional Customer Support</h3>
              <p className='text-gray-600 text-sm'>
                Our friendly and knowledgeable team is dedicated to providing outstanding service, answering your questions, and making your rental experience smooth from start to finish.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Maximum Freedom</h3>
              <p className='text-gray-600 text-sm'>
                Enjoy the freedom to explore Jamaica at your own pace. With flexible rental terms and convenient pick-up and drop-off options, you're always in control of your journey.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Flexible & Convenient</h3>
              <p className='text-gray-600 text-sm'>
                We make car rental easy and hassle-free, offering flexible payment options and the ability to reserve online or in person. Old Harbour Car Rentals adapts to your schedule and needs.
              </p>
            </div>
          </div>
        </div>
      </div>

    

      {/* Testimonials Section */}
      <Testimonial />

        {/* Location Map */}
        <div className='max-w-6xl mx-auto py-16 px-6 lg:px-10 text-center'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8'>Our Location</h2>
        <div className='aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.615264521804!2d-76.99283892584377!3d17.99662808497078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb1325633b2323%3A0xf6d927a01b120ec8!2sOld.harbour.car.rental.limited(O.H.C.R.S)!5e0!3m2!1sen!2sjm!4v1759502684113!5m2!1sen!2sjm" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className='max-w-6xl mx-auto py-16 px-6 lg:px-10'>
        <h2 className='text-3xl font-bold text-gray-800 text-center mb-12'>Top Car Rental Questions</h2>

        <div className='space-y-4'>
            {faqs.map((faq, index)=>(
                <div key={index} className='bg-white rounded-lg shadow-md p-6'>
                    <button onClick={()=> setOpenFaq(openFaq === index ? null : index)} className='flex justify-between items-center w-full focus:outline-none'>
                        <h3 className='text-lg font-semibold text-gray-800'>{faq.question}</h3>
                        <ChevronUp className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-0' : 'rotate-180'}`}/>
                    </button>
                    <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: openFaq === index ? 1 : 0, height: openFaq === index ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'>
                        {openFaq === index && <p className='mt-4 text-gray-600 text-sm'>{faq.answer}</p>}
                    </motion.div>
                </div>
            ))}
        </div>

      </div>

      


    </motion.div>
  )
}

export default AboutUs
