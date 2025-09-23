"use client"

import { useState } from "react"
import { assets } from "../assets/assets"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

const Banner = () => {
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
      className='flex flex-col items-center px-6 lg:px-10 py-16 bg-[#2B2F92] max-w-6xl mx-auto rounded-3xl overflow-hidden relative bg-[url("./assets/tire_track.png")] bg-no-repeat bg-cover bg-center'
    >
      <div className="text-white max-w-2xl relative z-10 text-center">
        <h2 className="text-4xl font-semibold leading-tight">Enjoy every mile with adorable companionship.</h2>
        <p className="mt-4 text-sm">
        Your journey begins here. Discover the perfect car for your next adventure with our seamless booking experience.
        </p>
        <div className="flex items-center mt-6 w-full h-full  rounded-full p-1 max-w-[340px] mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#1E216A] hover:bg-[#2B2F92] text-white rounded-full flex items-center justify-center cursor-pointer font-semibold w-full"
            onClick={() => {
              navigate('/cars');
              scrollTo(0, 0);
            }}
          >
            Book Now
          </motion.button>
        </div>
      </div>

    </motion.div>
  )
}

export default Banner
