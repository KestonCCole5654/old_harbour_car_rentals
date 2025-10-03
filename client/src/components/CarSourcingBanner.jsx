import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const CarSourcingBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative max-w-6xl mx-auto px-6 lg:px-10 py-12 mb-12 bg-[#6366F1] text-white rounded-xl shadow-lg text-center overflow-hidden bg-[url('./assets/tire_track.png')] bg-no-repeat bg-cover bg-center flex flex-col md:flex-row items-center justify-between"
    >
      <div className="md:w-1/2 md:text-left z-10">
        <h2 className="text-3xl font-bold mb-4">Can't Find Your Dream Car?</h2>
        <p className="text-lg mb-6">LA Car Rentals also offers a specialized car sourcing service!</p>
        <p className="text-md max-w-2xl mx-auto md:mx-0">
          Let us know your specific requirements, and our team will work diligently to find the perfect vehicle
          for you, even if it's not currently in our direct inventory. Your ideal ride is just a request away!
        </p>
        <button
          className="mt-8 px-8 py-3 bg-accent text-white rounded-full hover:bg-accent-hover transition-colors font-semibold"
          onClick={() => window.open('https://wa.me/18764576184', '_blank')}
        >
          Request a Car
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center z-10">
        <img src={assets.car_image1} alt="Car Sourcing" className="w-full max-w-lg h-auto object-contain hidden md:block" />
      </div>
    </motion.div>
  )
}

export default CarSourcingBanner
