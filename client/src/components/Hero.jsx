import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import {motion} from 'framer-motion'

const Hero = () => {

    const [carType, setCarType] = useState('')

    const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

    const handleSearch = (e)=>{
        e.preventDefault()
        navigate('/cars?pickupDate=' + pickupDate + '&returnDate=' + returnDate)
    }

  return (
    <div className='relative max-w-6xl mx-auto mb-32'>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='h-auto min-h-[500px] mt-15 flex flex-col lg:flex-row relative lg:justify-center lg:gap-12 items-center lg:items-center p-6 lg:p-10 pb-32 lg:pb-20 bg-[#2B2F92] text-center lg:text-left bg-[url("./assets/tire_track.png")] bg-no-repeat bg-cover bg-center rounded-3xl'>

          <div className='flex flex-col items-center lg:items-start max-w-full lg:max-w-[450px] lg:flex-1'>
              <motion.h1 initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl md:text-5xl font-semibold text-white max-w-full leading-tight'>Experience the road like never before</motion.h1>
            
              <motion.p initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className='text-white mt-4 max-w-full text-sm'>
                  Your journey begins here. Discover the perfect car for your next adventure with our seamless booking experience.
              </motion.p>

            
              
              <motion.button
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className='mt-8 mb-12 px-8 py-3 bg-[#1E216A] text-white rounded-full hover:text-lg transition-colors'
                  onClick={()=> navigate('/cars')}
                  >
                  View all cars
              </motion.button>
              
              
              
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex justify-center lg:justify-start items-center lg:flex-1 mt-6 lg:mt-0'
          >
            <img
              src={assets.main_car}
              alt="Main Car"
              className='max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px] object-contain'
            />
          </motion.div>

      </motion.div>

      {/* Intersecting Form positioned at bottom */}
      <motion.form
        initial={{ scale: 0.95, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        onSubmit={handleSearch} 
        className='absolute left-1/2 -translate-x-1/2 -bottom-16 flex flex-col p-8 rounded-xl w-full max-w-4xl bg-white shadow-2xl mx-auto z-10'
      >
        <h2 className='text-xl font-semibold mb-2 text-left'>Book your car</h2>
        <p className='text-sm text-gray-600 mb-4 text-left'>Find the perfect car for your journey. Enter your details below to get started.</p>
        

        <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <div className='flex flex-col items-start gap-2 w-full lg:w-auto lg:flex-1'>
                <select className='w-full p-3 border border-gray-300 rounded-lg' required value={carType} onChange={(e)=>setCarType(e.target.value)}>
                    <option value="">Car type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                </select>
            </div>
            
            <div className='flex items-center justify-between w-full lg:flex-1 p-3 border border-gray-300 rounded-lg'>
                <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500 w-full outline-none' required/>
            </div>
            
            <div className='flex items-center justify-between w-full lg:flex-1 p-3 border border-gray-300 rounded-lg'>
                <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id="return-date" className='text-sm text-gray-500 w-full outline-none' required/>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center justify-center px-9 py-3 bg-[#2B2F92] hover:bg-[#1E216A] text-white rounded-full cursor-pointer w-full lg:w-auto whitespace-nowrap'
            >
                Book now
            </motion.button>
        </div>
      </motion.form>
    </div>
  )
}

export default Hero