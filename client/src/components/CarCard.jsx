import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCard = ({car}) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

  return (
    <div className='bg-white p-6 rounded-lg border border-gray-100 flex flex-col overflow-hidden'>
      <div className='w-full h-48 flex items-center justify-center mb-4 bg-white rounded-lg'>
        <img src={car.image} alt={car.model} className='h-full object-contain'/>
      </div>
      <h3 className='text-xl font-bold mb-1 text-gray-800'>{car.brand}</h3>
      <p className='text-gray-500 text-sm mb-4'>{car.category} • {car.year} • {car.location}</p>

      <div className='flex justify-between items-center w-full mb-4'>
          <span className='text-3xl font-bold text-indigo-600'>${car.pricePerDay}</span>
          <span className='text-gray-500 text-sm'>per day</span>
      </div>
      <div className='grid grid-cols-2 gap-y-2 w-full text-gray-600 text-sm mb-6'>
          <div className='flex items-center gap-1'>
              <img src={assets.car_icon} alt="transmission" className='w-5 h-5'/> 
              <span>{car.transmission}</span>
          </div>
          <div className='flex items-center gap-1'>
              <img src={assets.fuel_icon} alt="fuel" className='w-5 h-5'/> 
              <span>{car.fuel_type}</span>
          </div>
          <div className='flex items-center gap-1'>
              <img src={assets.check_icon} alt="air conditioning" className='w-5 h-5'/> 
              <span>A/C</span>
          </div>
          <div className='flex items-center gap-1'>
              <img src={assets.users_icon} alt="seating capacity" className='w-5 h-5'/> 
              <span>{car.seating_capacity} Seats</span>
          </div>
      </div>
      <button onClick={()=> navigate(`/car-details/${car._id}`)} className='bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors w-full'>
          View Details
      </button>
    </div>
  )
}

export default CarCard
