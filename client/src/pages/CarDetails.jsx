import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'
import CarCard from '../components/CarCard'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'
import { Gauge, Fuel, Car, Users, AirVent, Ruler } from 'lucide-react'

const CarDetails = () => {

  const {id} = useParams()

  const {cars, axios} = useAppContext()

  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [otherCarsData, setOtherCarsData] = useState([])
  const currency = import.meta.env.VITE_CURRENCY

  const fetchCarDetails = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(`/api/user/car/${id}`)
      if (data.success) {
        setCar(data.car)
      } else {
        toast.error(data.message)
        navigate('/cars') // Redirect if car not found
      }
    } catch (error) {
      toast.error(error.message)
      navigate('/cars') // Redirect on API error
    } finally {
      setLoading(false)
    }
  }

  const fetchOtherCars = async () => {
    try {
      const { data } = await axios.get('/api/user/cars') // Fetch all cars
      if (data.success) {
        const filtered = data.cars.filter(item => item._id !== id).slice(0, 3) // Exclude current car and limit to 3
        setOtherCarsData(filtered)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if (!pickupDate || !returnDate) {
        toast.error('Please select both pickup and return dates.')
        return
    }
    navigate(`/payment/${id}/${pickupDate}/${returnDate}`)
  }

  useEffect(()=>{
    fetchCarDetails()
    fetchOtherCars()
  },[id])

  return loading ? <Loader /> : car ? (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-16'>

       <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
          {/* Left: Car Image & Details */}
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}

          className='lg:col-span-1'>
              <h1 className='text-3xl font-bold mb-1'>{car.brand}</h1>
              <p className='text-indigo-600 text-3xl font-bold mb-4'>{currency}{car.pricePerDay} <span className='text-gray-500 text-sm font-normal'>/ day</span></p>
              <motion.img 
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}

              src={car.image} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md bg-gray-100'/>
              <div className='flex gap-4'>
                  <img src={car.image} alt="" className='w-24 h-16 object-cover rounded-lg cursor-pointer'/>
                  <img src={car.image} alt="" className='w-24 h-16 object-cover rounded-lg cursor-pointer opacity-50'/>
                  <img src={car.image} alt="" className='w-24 h-16 object-cover rounded-lg cursor-pointer opacity-50'/>
                </div>

          </motion.div>

          {/* Right: Booking Form, Technical Specification, Car Equipment */}
          <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='lg:col-span-1 flex flex-col gap-8'>
            <form onSubmit={handleSubmit} className='shadow-lg rounded-xl p-6 space-y-6 text-gray-500 bg-white'>
                <h2 className="text-2xl font-bold text-gray-800">Book this car</h2>
                <div className="mb-4">
                    <label htmlFor="pickup-date" className="block text-gray-700 text-sm font-medium mb-2">Pickup Date</label>
                    <input
                        type="date"
                        id="pickup-date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="return-date" className="block text-gray-700 text-sm font-medium mb-2">Return Date</label>
                    <input
                        type="date"
                        id="return-date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        min={pickupDate || new Date().toISOString().split('T')[0]}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Book Now
                </button>
            </form>

            {car.reservedDates && car.reservedDates.length > 0 && (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg" role="alert">
                <p className="font-bold">This car is reserved:</p>
                {car.reservedDates.map((reservation, index) => (
                  <p key={index} className="text-sm">
                    From {new Date(reservation.pickupDate).toLocaleDateString()} to {new Date(reservation.returnDate).toLocaleDateString()}
                  </p>
                ))}
                <p className="text-sm mt-2">Please choose alternative dates.</p>
              </div>
            )}
            
            <h2 className='text-xl font-bold text-gray-800 mb-4'>Technical Specification</h2>
            <div className='grid grid-cols-3 gap-4 mb-8'>
                <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center'>
                    <Gauge size={24} className='text-gray-600 mb-2' />
                    <p className='text-sm text-gray-500'>Gear Box</p>
                    <p className='font-medium'>{car.transmission}</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center'>
                    <Fuel size={24} className='text-gray-600 mb-2' />
                    <p className='text-sm text-gray-500'>Fuel</p>
                    <p className='font-medium'>{car.fuel_type}</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center'>
                    <Car size={24} className='text-gray-600 mb-2' />
                    <p className='text-sm text-gray-500'>Doors</p>
                    <p className='font-medium'>4</p> {/* Dummy data for doors */}
                </div>
                <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center'>
                    <AirVent size={24} className='text-gray-600 mb-2' />
                    <p className='text-sm text-gray-500'>Air Conditioner</p>
                    <p className='font-medium'>Yes</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center'>
                    <Users size={24} className='text-gray-600 mb-2' />
                    <p className='text-sm text-gray-500'>Seats</p>
                    <p className='font-medium'>{car.seating_capacity}</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center'>
                    <Ruler size={24} className='text-gray-600 mb-2' />
                    <p className='text-sm text-gray-500'>Distance</p>
                    <p className='font-medium'>500</p> {/* Dummy data for distance */}
                </div>
            </div>

            </motion.div>
            </div>

       {/* Other Cars Section */}
       <div className='mt-20'>
        <div className='w-full flex justify-between items-center mb-10'>
                <h2 className='text-3xl font-semibold text-gray-800'>Other cars</h2>
                <p
                    className='text-indigo-600 font-medium cursor-pointer flex items-center gap-2'
                    onClick={() => navigate('/cars')}
                >
                    View All <img src={assets.arrow_icon} alt="arrow" className='w-4 h-4'/>
                </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
            {otherCarsData.map((car)=> (
                    <CarCard key={car._id} car={car}/>
            ))}
        </div>
       </div>

    </div>
  ) : <Loader />
}

export default CarDetails
