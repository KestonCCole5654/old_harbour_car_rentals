import React from 'react'
import { assets } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const FeaturedSection = () => {

    const navigate = useNavigate()
    const {cars} = useAppContext()

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className='max-w-6xl mx-auto py-16 px-6 lg:px-10 flex flex-col items-start'>

        <div className='w-full flex justify-between items-center mb-10'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-3xl font-semibold text-gray-800'
            >
                Choose the car that suits you
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className='text-indigo-600 font-medium cursor-pointer flex items-center gap-2 whitespace-nowrap'
                onClick={() => navigate('/cars')}
            >
                View All <img src={assets.arrow_icon} alt="arrow" className='w-4 h-4'/>
            </motion.p>
        </div>

        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        {
            cars.slice(0,6).map((car)=> (
                <motion.div key={car._id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut"  }}
                >
                    <CarCard car={car} />
                </motion.div>
            ))
        }
        </motion.div>
      
    </motion.div>
  )
}

export default FeaturedSection
