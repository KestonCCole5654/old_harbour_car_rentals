import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddCar from './pages/owner/AddCar'
import ManageCars from './pages/owner/ManageCars'
import ManageBookings from './pages/owner/ManageBookings'
import BankDetails from './pages/owner/BankDetails'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import AboutUs from './pages/AboutUs'
import PaymentPage from './pages/PaymentPage'

const App = () => {

  const {showLogin} = useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
     <Toaster />
      {showLogin && <Login/>}

      {!isOwnerPath && <Navbar/>}

    <div className="px-4 md:px-8 lg:px-16">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/car-details/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/payment/:carId/:pickupDate/:returnDate' element={<PaymentPage/>}/>
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path="add-car" element={<AddCar />}/>
          <Route path="add-car/:id" element={<AddCar />}/>
          <Route path="manage-cars" element={<ManageCars />}/>
          <Route path="manage-bookings" element={<ManageBookings />}/>
          <Route path="bank-details" element={<BankDetails />}/>
        </Route>
      </Routes>
    </div>

    {!isOwnerPath && <Footer />}
    
    </>
  )
}

export default App
