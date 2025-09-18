import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import {motion} from 'framer-motion'
import { Phone } from 'lucide-react'

const Navbar = () => {

    const {setShowLogin, user, logout, isOwner, axios, setIsOwner} = useAppContext()

    const location = useLocation()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const changeRole = async ()=>{
        try {
            const { data } = await axios.post('/api/owner/change-role')
            if (data.success) {
                setIsOwner(true)
                toast.success(data.message)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const isAdmin = user && user.email === import.meta.env.VITE_ADMIN_EMAIL;

  return (
    <motion.div>
    <motion.div
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.5}}
    className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" && "bg-transparent"}`}>

        <Link to='/'>
            <motion.img whileHover={{scale: 1.05}} src={assets.logo} alt="logo" className="h-16"/>
        </Link>

        {/* Desktop Navigation - visible on sm and up, hidden on mobile */}
        <div className='hidden sm:flex flex-grow items-center justify-center gap-8'>
            {menuLinks.map((link, index)=> (
                <Link key={index} to={link.path} className='hover:text-indigo-600 transition-colors'>
                    {link.name}
                </Link>
            ))}
        </div>

       

        {/* Mobile Navigation - visible on max-sm, hidden on sm and up */}
        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col items-start gap-4 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-gray-50" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} sm:hidden`}>
            {menuLinks.map((link, index)=> (
                <Link key={index} to={link.path} className='hover:text-indigo-600 transition-colors w-full py-2'>
                    {link.name}
                </Link>
            ))}
            {/* Mobile Help and Login/Logout Button */}
            <div className='flex flex-col items-start gap-6 w-full'>
                <button onClick={()=> {user ? logout() : setShowLogin(true)}} className="cursor-pointer px-8 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-lg w-full text-left">{user ? 'Logout' : 'Login'}</button>
                {isAdmin && (
                  <button onClick={()=> isOwner ? navigate('/owner') : changeRole()} className="cursor-pointer px-8 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-lg w-full text-left">{isOwner ? 'Dashboard' : 'List cars'}</button>
                )}
                <div className='flex items-center gap-3 w-full py-2'>
                    <div className='bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
                        <Phone size={20} className='text-white' />
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>Need help?</p>
                        <p className='font-medium'>+1 876-555-1234</p>
                    </div>
                </div>
            </div>
        </div>

         {/* Desktop Login/Logout Button - visible on sm and up, hidden on mobile */}
         <div className='hidden sm:flex items-center gap-6'>
         <div className='flex items-center gap-3'>
                <div className='bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0'>
                    <Phone size={20} className='text-white' />
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>Need help?</p>
                    <p className='font-medium'>+1 876-227-2810</p>
                </div>
            </div>
            <button onClick={()=> {user ? logout() : setShowLogin(true)}} className="cursor-pointer px-8 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-lg">{user ? 'Logout' : 'Login'}</button>
            {isAdmin && (
              <button onClick={()=> isOwner ? navigate('/owner') : changeRole()} className="cursor-pointer px-8 py-2 bg-indigo-600 hover:bg-indigo-700 transition-all text-white rounded-lg">{isOwner ? 'Dashboard' : 'List cars'}</button>
            )}
            
        </div>

        <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={()=> setOpen(!open)}>
            <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
        </button>
      
    </motion.div>
      <div className="bg-indigo-700 py-3 px-6 md:px-16 lg:px-24 xl:px-32 text-white hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-6">
          {/* Email Section */}
          <div className="flex items-center gap-2">
            <img src={assets.gmail_logo || "/placeholder.svg"} alt="Email" className="w-4 h-4 brightness-0 invert" />
            <span className="truncate">"Lacars2021@gmail.com"</span>
          </div>

          {/* Social Media Section */}
          <div className="flex items-center gap-2">
            <img src={assets.facebook_logo} alt="Facebook" className="w-4 h-4 brightness-0 invert"/>
            <img src={assets.instagram_logo} alt="Instagram" className="w-4 h-4 brightness-0 invert"/>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Phone Section */}
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-white flex-shrink-0" />
            <span>+1 876 457-6184</span>
          </div>

          {/* Location Section */}
          <div className="flex items-center gap-2">
            <img
              src={assets.location_icon_colored || "/placeholder.svg"}
              alt="Location"
              className="w-4 h-4 brightness-0 invert flex-shrink-0"
            />
            <span className="text-xs lg:text-sm">392 Waterford Parkway, Waterford, Portmore</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
