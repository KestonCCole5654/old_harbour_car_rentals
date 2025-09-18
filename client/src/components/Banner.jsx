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
      className='flex flex-col md:flex-row md:items-center items-start justify-between px-6 lg:px-10 py-16 bg-[#6366F1] max-w-6xl mx-auto rounded-3xl overflow-hidden relative bg-[url("./assets/tire_track.png")] bg-no-repeat bg-cover bg-center'
    >
      <div className="text-white max-w-lg relative z-10">
        <h2 className="text-4xl font-semibold leading-tight">Enjoy every mile with adorable companionship.</h2>
        <p className="mt-4 text-sm">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt
          tincidunt erat
        </p>
        <div className="flex items-center mt-6 w-full bg-white rounded-full p-1 max-w-[340px]">
          <input
            type="text"
            placeholder="City"
            className="p-2 rounded-l-full flex-grow text-gray-800 outline-none px-4"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleSearch}
          >
            <img src={assets.search_icon} alt="Search" className='w-5 h-5 brightness-0 invert'/>
          </motion.button>
        </div>
      </div>

      <motion.img
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={assets.banner_image} alt="car" className='absolute right-0 w-auto h-4/5 object-contain opacity-20 md:opacity-100 hidden md:block'/>
    </motion.div>
  )
}

export default Banner
