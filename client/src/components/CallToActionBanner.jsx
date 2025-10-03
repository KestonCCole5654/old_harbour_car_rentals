"use client"

import { useState } from "react"
import { assets } from "../assets/assets"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

const CallToActionBanner = () => {
  const [city, setCity] = useState("")
  const navigate = useNavigate()
  const { scrollTo } = useAppContext()

  const handleSearch = () => {
    if (city) {
      navigate(`/cars?city=${city}`)
      scrollTo(0, 0)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex flex-col md:flex-row md:items-center items-start justify-between px-6 lg:px-8 py-12 bg-gradient-to-br from-primary via-primary to-hover max-w-6xl mx-auto rounded-2xl overflow-hidden relative bg-[url("./assets/tire_track.png")] bg-no-repeat bg-cover bg-center'
    >
      <div className="text-white max-w-lg relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Looking for a car for your next <span className="text-accent">adventure?</span></h2>
        <p className="mt-3 text-xs md:text-sm leading-relaxed">
          Search our extensive collection of vehicles and find the perfect ride for your journey. Fast, easy, and reliable.
        </p>
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='mt-6 px-6 py-2.5 bg-accent text-white text-sm rounded-full hover:bg-accent-hover transition-all duration-300 shadow-md hover:shadow-lg'
            onClick={()=> navigate('/cars')}
        >
            Book now
        </motion.button>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_image} alt="car" className='absolute right-0 w-auto h-4/5 object-contain opacity-20 md:opacity-100 hidden md:block'/>
    </motion.div>
  )
}

export default CallToActionBanner
