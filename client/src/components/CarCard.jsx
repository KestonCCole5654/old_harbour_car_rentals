import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCard = ({car}) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

    return (
        <div className='bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden'>
            {/* Image Section */}
            <div className='w-full h-48 bg-gray-50 flex items-center justify-center p-4'>
                <img 
                    src={car.image} 
                    alt={car.model} 
                    className='h-full object-contain'
                />
            </div>

            {/* Content Section */}
            <div className='p-6'>
                {/* Header */}
                <div className='mb-4'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-1'>
                        {car.brand}
                    </h3>
                    <p className='text-gray-600 text-sm'>
                        {car.category} • {car.year} • {car.location}
                    </p>
                </div>

                {/* Features */}
                <div className='grid grid-cols-3 gap-6 mb-6 text-sm text-gray-600'>
                    <div className='flex items-center gap-2 '>
                        <img src={assets.car_icon} alt="transmission" className='w-4 h-4'/> 
                        <span>{car.transmission}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.fuel_icon} alt="fuel" className='w-4 h-4'/> 
                        <span>{car.fuel_type}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img src={assets.users_icon} alt="seating capacity" className='w-4 h-4'/> 
                        <span>{car.seating_capacity} Seats</span>
                    </div>
                </div>

                {/* Pricing */}
                <div className='bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 mb-6'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='flex items-baseline gap-1 mb-1'>
                                <span className='text-2xl font-bold text-primary'>
                                    {currency}
                                    {Number(car.pricePerDay).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                </span>
                                <span className='text-gray-600 text-sm'>/ day</span>
                            </div>
                            <p className='text-xs text-gray-600'>Best price guaranteed</p>
                        </div>
                        
                    </div>
                </div>

                {/* Action Button */}
                <button 
                    onClick={() => navigate(`/car-details/${car._id}`)}
                    className='w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-hover transition-colors font-medium'
                >
                    View Details
                </button>
            </div>
        </div>
    )
}

export default CarCard