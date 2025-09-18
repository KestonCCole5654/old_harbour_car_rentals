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
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className='h-auto min-h-[500px] mt-15 flex flex-col lg:flex-row relative lg:justify-start items-center lg:items-center p-6 lg:p-10 bg-[#6366F1] text-center lg:text-left bg-[url("./assets/tire_track.png")] bg-no-repeat bg-cover bg-center rounded-3xl max-w-6xl mx-auto'>

        <div className='flex flex-col items-center lg:items-start max-w-full lg:max-w-[450px]'>
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
                className='mt-8 px-8 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors'
                onClick={()=> navigate('/cars')}
                >
                View all cars
            </motion.button>
        </div>

      <motion.form
      initial={{ scale: 0.95, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}

       onSubmit={handleSearch} className='relative lg:absolute lg:right-10 top-auto lg:top-1/2 lg:-translate-y-1/2 flex flex-col p-8 rounded-xl w-full max-w-[340px] bg-white shadow-lg mt-8 lg:mt-0 mx-auto'>
        <h2 className='text-xl font-semibold mb-4'>Book your car</h2>

        <div className='flex flex-col gap-5'>
            <div className='flex flex-col items-start gap-2'>
                <select className='w-full p-2 border border-gray-300 rounded' required value={carType} onChange={(e)=>setCarType(e.target.value)}>
                    <option value="">Car type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                </select>
            </div>
            
            <div className='flex items-center justify-between w-full p-2 border border-gray-300 rounded'>
                <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500 w-full outline-none' required/>
               
            </div>
            <div className='flex items-center justify-between w-full p-2 border border-gray-300 rounded'>
                <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id="return-date" className='text-sm text-gray-500 w-full outline-none' required/>
              
            </div>
        </div>
            <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center mt-5 px-9 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full cursor-pointer'>
                Book now
            </motion.button>
      </motion.form>

    </motion.div>
  )
}

export default Hero
