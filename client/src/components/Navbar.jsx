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
      // This function's purpose needs to be re-evaluated.
      // If it's meant for a user to *request* to become an owner, that's a different flow.
      // For now, if a non-owner sees 'List cars' and clicks it, they should be redirected to home.
      navigate('/'); // Redirect to home if a non-owner somehow clicks this.
      toast.error("Only owners can list cars. Please login as an owner or create an owner account.");
    }

    const isAdmin = user && user.email === import.meta.env.VITE_ADMIN_EMAIL

    const handleAuthAction = () => {
        if (user) {
            logout()
        } else {
            setShowLogin(true)
        }
        setOpen(false) // Close mobile menu after action
    }

    const handleAdminAction = () => {
        if (isOwner) {
            navigate('/owner')
        } else {
            changeRole()
        }
        setOpen(false) // Close mobile menu after action
    }

    const closeMobileMenu = () => {
        setOpen(false)
    }

  return (
    <motion.div 
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.5}}
    className={`flex items-center justify-between px-6  md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === "/" && "bg-white"}`}>

        <Link to='/'>
            <motion.img whileHover={{scale: 1.05}} src={assets.logo} alt="logo"  className="h-20"/>
        </Link>

        <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === "/" ? "bg-white" : "bg-white"} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}>
            {menuLinks.map((link, index)=> (
                <Link key={index} to={link.path}>
                    {link.name}
                </Link>
            ))}

            <div className='flex items-center gap-3'>
                <div className='bg-accent rounded-full w-10 h-10 flex items-center justify-center'>
                    <Phone size={20} className='text-white' />
                </div>
                <div>
                    <p className='text-gray-500 text-sm'>Need help?</p>
                    <p className='font-medium'>+1 (876) 204-7831</p>
                </div>
            </div>

            <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
                {isOwner && (
                    <button onClick={()=> navigate('/owner')} className="cursor-pointer px-8 py-2 bg-accent hover:bg-accent-hover transition-all text-white rounded-lg">Dashboard</button>
                )}

                <button onClick={()=> {user ? logout() : setShowLogin(true)}} className="cursor-pointer px-8 py-2 bg-accent hover:bg-accent-hover transition-all text-white rounded-lg">{user ? 'Logout' : 'Login'}</button>
            </div>
        </div>

        <button className='sm:hidden cursor-pointer' aria-label="Menu" onClick={()=> setOpen(!open)}>
            <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" />
        </button>
      
    </motion.div>
  )
}

export default Navbar