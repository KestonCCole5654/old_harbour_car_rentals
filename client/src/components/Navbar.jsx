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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate()

    const changeRole = async () => {
        try {
            const { data } = await axios.post('/api/owner/change-role')
            if (data.success) {
                setIsOwner(true)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const isAdmin = user && user.email === import.meta.env.VITE_ADMIN_EMAIL

    const handleAuthAction = () => {
        if (user) {
            logout()
        } else {
            setShowLogin(true)
        }
        setMobileMenuOpen(false) // Close mobile menu after action
    }

    const handleAdminAction = () => {
        if (isOwner) {
            navigate('/owner')
        } else {
            changeRole()
        }
        setMobileMenuOpen(false) // Close mobile menu after action
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <div>
            {/* Top Contact Bar - Desktop Only 

              <div className="bg-indigo-700 py-3 px-6 md:px-16 lg:px-24 xl:px-32 text-white hidden md:flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src={assets.gmail_logo || "/placeholder.svg"} alt="Email" className="w-4 h-4 brightness-0 invert" />
                        <span className="truncate">Lacars2021@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.facebook_logo} alt="Facebook" className="w-4 h-4 brightness-0 invert"/>
                        <img src={assets.instagram_logo} alt="Instagram" className="w-4 h-4 brightness-0 invert"/>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Phone size={16} className="text-white flex-shrink-0" />
                        <span>+1 876 457-6184</span>
                    </div>
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
            
            */}
          

            {/* Main Navbar */}
            <motion.nav
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5}}
                className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative ${location.pathname === "/" ? "bg-transparent" : "bg-white"}`}
            >
                {/* Logo */}
                <Link to='/' onClick={closeMobileMenu}>
                    <motion.img 
                        whileHover={{scale: 1.05}} 
                        src={assets.logo} 
                        alt="logo" 
                        className="h-16"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className='hidden md:flex items-center gap-8'>
                    {menuLinks.map((link, index) => (
                        <Link 
                            key={index} 
                            to={link.path} 
                            className='hover:text-indigo-600 transition-colors'
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className='hidden md:flex items-center gap-4'>
                    <div className='flex items-center gap-3'>
                        <div className='bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center'>
                            <Phone size={20} className='text-white' />
                        </div>
                        <div>
                            <p className='text-gray-500 text-sm'>Need help?</p>
                            <p className='font-medium'>+1 876-227-2810</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleAuthAction}
                        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg"
                    >
                        {user ? 'Logout' : 'Login'}
                    </button>
                    {isAdmin && (
                        <button 
                            onClick={handleAdminAction}
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg"
                        >
                            {isOwner ? 'Dashboard' : 'List Cars'}
                        </button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden p-2'
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <img 
                        src={mobileMenuOpen ? assets.close_icon : assets.menu_icon} 
                        alt="menu" 
                        className="w-6 h-6"
                    />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu */}
            <div className={`
                fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
                ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="p-6">
                    {/* Mobile Menu Header */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                        <button 
                            onClick={closeMobileMenu}
                            className="p-2"
                            aria-label="Close menu"
                        >
                            <img src={assets.close_icon} alt="close" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Menu Links */}
                    <div className="flex flex-col gap-4 mb-8">
                        {menuLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                to={link.path}
                                onClick={closeMobileMenu}
                                className='py-3 px-4 hover:bg-gray-50 hover:text-indigo-600 transition-colors rounded-lg'
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Contact Info */}
                    <div className='flex items-center gap-3 mb-6 p-4 bg-gray-50 rounded-lg'>
                        <div className='bg-indigo-600 rounded-full w-10 h-10 flex items-center justify-center'>
                            <Phone size={20} className='text-white' />
                        </div>
                        <div>
                            <p className='text-gray-500 text-sm'>Need help?</p>
                            <p className='font-medium'>+1 876-227-2810</p>
                        </div>
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <button 
                            onClick={handleAuthAction}
                            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg font-medium"
                        >
                            {user ? 'Logout' : 'Login'}
                        </button>
                        {isAdmin && (
                            <button 
                                onClick={handleAdminAction}
                                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors text-white rounded-lg font-medium"
                            >
                                {isOwner ? 'Dashboard' : 'List Cars'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar