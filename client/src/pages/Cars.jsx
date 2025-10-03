import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'
import { useSearchParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const Cars = () => {

  // getting search params from url
  const [searchParams] = useSearchParams()
  const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')

  const {cars, axios} = useAppContext()

  const [input, setInput] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All vehicles')

  const isSearchData = pickupLocation && pickupDate && returnDate
  const [filteredCars, setFilteredCars] = useState([])

  const applyFilter = async ()=>{
     
    const carsToFilter = isSearchData ? filteredCars : cars

    let newFiltered = carsToFilter.slice().filter((car)=>{
      const matchesCategory = selectedCategory === 'All vehicles' || car.category === selectedCategory
      const matchesSearch = car.brand.toLowerCase().includes(input.toLowerCase())
      || car.model.toLowerCase().includes(input.toLowerCase())  
      || car.category.toLowerCase().includes(input.toLowerCase())  
      || car.transmission.toLowerCase().includes(input.toLowerCase())
      return matchesCategory && matchesSearch
    })
    setFilteredCars(newFiltered)
  }

  const searchCarAvailablity = async () =>{
    const {data} = await axios.post('/api/bookings/check-availability', {location: pickupLocation, pickupDate, returnDate})
    if (data.success) {
      setFilteredCars(data.availableCars)
      if(data.availableCars.length === 0){
        toast('No cars available')
      }
      return null
    }
  }

  useEffect(()=>{
    isSearchData && searchCarAvailablity()
  },[])

  useEffect(()=>{
    cars.length > 0 && applyFilter()
  },[input, cars, selectedCategory])

  const categories = ['All vehicles', 'Sedan', 'Cabriolet', 'Pickup', 'SUV', 'Minivan']

  return (
    <div className='py-16 px-6 lg:px-10 max-w-7xl mx-auto'>

      <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>Select a vehicle group</h2>

      {/* Deposit Message */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg max-w-xl mx-auto mb-12" role="alert">
        <p className="font-bold text-xl text-red-600 text-center">A deposit of 15k is required for vehicle reservations.</p>
      </div>

      <div className='flex items-center bg-gray-100 px-4 max-w-xl mx-auto w-full h-12 rounded-full mb-12'>
        <img src={assets.search_icon} alt="Search" className='w-4.5 h-4.5 mr-2'/>
        <input
          type="text"
          placeholder='Search by make, model, or features'
          className='w-full h-full outline-none bg-transparent text-gray-500'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      
      <div className='flex justify-center flex-wrap gap-3 mb-12'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category ? 'bg-accent text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}

      className='mt-10'>
        <p className='text-gray-500'>Showing {filteredCars.length} Cars</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4'>
          {filteredCars.map((car, index)=> (
            <motion.div key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <CarCard car={car}/>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default Cars
