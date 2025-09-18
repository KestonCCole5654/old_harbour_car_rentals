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
            question: "How does it works?",
            answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
        },
        {
            question: "Can I rent a car without a credit card?",
            answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
        },
        {
            question: "What are the requirements for renting a car?",
            answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
        },
        {
            question: "Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?",
            answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
        },
        {
            question: "Does Car Rental offer coverage products for purchase with my rental?",
            answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla"
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
          <Link to='/' className='hover:text-indigo-600'>Home</Link> / About Us
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
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Variety Brands</h3>
              <p className='text-gray-600 text-sm'>
                Plateo non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Awesome Suport</h3>
              <p className='text-gray-600 text-sm'>
                Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Etiam quam gravida ultricies velit
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Maximum Freedom</h3>
              <p className='text-gray-600 text-sm'>
                Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>Flexibility On The Go</h3>
              <p className='text-gray-600 text-sm'>
                Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis faucibus rhoncus. Iaculis dignissim aenean pellentesque nisi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonial />

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

      <CallToActionBanner />

    </motion.div>
  )
}

export default AboutUs
