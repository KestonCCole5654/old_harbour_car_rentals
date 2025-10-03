import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'
import Loader from '../components/Loader'
import { motion } from 'framer-motion'
import { CreditCard, Landmark } from 'lucide-react'

const PaymentPage = () => {
  const { carId, pickupDate, returnDate } = useParams()
  const navigate = useNavigate()
  const { axios, currency, user } = useAppContext()

  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)
  const [isBooking, setIsBooking] = useState(false)
  const [publicBankDetails, setPublicBankDetails] = useState(null)

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const { data } = await axios.get(`/api/user/car/${carId}`)
        if (data.success) {
          setCar(data.car)
        } else {
          toast.error(data.message)
          navigate(-1)
        }
      } catch (error) {
        toast.error('Error fetching car details.')
        navigate(-1)
      } finally {
        setLoading(false)
      }
    }
    fetchCarDetails()
  }, [carId])

  useEffect(() => {
    const fetchPublicBankDetails = async () => {
      try {
        const { data } = await axios.get('/api/owner/public-bank-details')
        if (data.success) {
          setPublicBankDetails(data.bankDetails)
        } else {
          toast.error(data.message) // Show specific error from backend
          setPublicBankDetails(null) // Ensure it's null if fetch fails
        }
      } catch (error) {
        toast.error('Error fetching public bank details.') // Generic network error
        console.log('Error fetching public bank details:', error)
        setPublicBankDetails(null) // Ensure it's null on network error
      }
    }
    fetchPublicBankDetails()
  }, [])

  const handleConfirmBooking = async () => {
    if (!selectedPaymentMethod) {
      toast.error('Please select a payment method.')
      return
    }
    if (selectedPaymentMethod === 'cash_deposit'){
      // Removed bank details check as per edit hint
    }

    if (!user) {
      toast.error('Please login to confirm booking.')
      navigate('/login') // Assuming you have a login route
      return
    }

    setIsBooking(true)
    try {
      const { data } = await axios.post('/api/bookings/create', {
        car: carId,
        pickupDate,
        returnDate,
        paymentMethod: selectedPaymentMethod,
        // Removed bank details from payload as per edit hint
      })
      if (data.success) {
        toast.success(data.message)
        navigate('/my-bookings')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Error during booking process.')
    } finally {
      setIsBooking(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  if (!car) {
    return <div className="text-center py-10 text-gray-600">Car not found or an error occurred.</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 text-left mb-4">Confirm Your Booking</h2>
      <p className="text-gray-600 text-left mb-8">Please review your selected car and rental dates before proceeding.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Car Details and Requirements */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Car Details</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden flex-shrink-0">
                <img src={car.image} alt={car.model} className="w-full h-auto object-cover" />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-2xl font-bold text-gray-800 mb-1">{car.brand} {car.model}</p>
                <p className="text-gray-500 text-sm mb-4">{car.category} • {car.year} • {car.location}</p>
                <p className="text-3xl font-bold text-accent">{currency}{car.pricePerDay} <span className="text-gray-500 text-sm font-normal">per day</span></p>
              </div>
            </div>
            <div className="mt-6 text-gray-600">
              <p><strong>Pickup Date:</strong> {new Date(pickupDate).toLocaleDateString()}</p>
              <p><strong>Return Date:</strong> {new Date(returnDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* Deposit Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md text-center"
          >
            <p className="text-xl font-bold text-red-600">A deposit of 15k is required for vehicle reservations.</p>
          </motion.div>

        </div>

        {/* Right Column: Payment Method */}
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-xl ">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div
                  className={`border rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all h-full ${selectedPaymentMethod === 'upfront' ? 'border-accent shadow-lg' : 'border-gray-300 hover:border-accent'}`}
                  onClick={() => setSelectedPaymentMethod('upfront')}
                >
                  <CreditCard size={48} className={`mb-4 ${selectedPaymentMethod === 'upfront' ? 'text-accent' : 'text-gray-500'}`} />
                  <p className={`text-lg font-medium ${selectedPaymentMethod === 'upfront' ? 'text-accent' : 'text-gray-800'}`}>Pay Upfront</p>
                  <p className="text-gray-500 text-sm text-center">Secure payment via credit/debit card.</p>
                </div>
              </div>
              <div>
                <div
                  className={`border rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all h-full ${selectedPaymentMethod === 'cash_deposit' ? 'border-accent shadow-lg' : 'border-gray-300 hover:border-accent'}`}
                  onClick={() => setSelectedPaymentMethod('cash_deposit')}
                >
                  <Landmark size={48} className={`mb-4 ${selectedPaymentMethod === 'cash_deposit' ? 'text-accent' : 'text-gray-500'}`} />
                  <p className={`text-lg font-medium ${selectedPaymentMethod === 'cash_deposit' ? 'text-accent' : 'text-gray-800'}`}>Direct Cash Deposit</p>
                  <p className="text-gray-500 text-sm text-center">Pay a deposit in cash upon pickup.</p>
                </div>
              </div>
            </div>
            {selectedPaymentMethod === 'upfront' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-6 bg-gray-50 rounded-lg"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-4">Pay Upfront Details</h4>
                <div className="space-y-3 text-gray-700">
                  <p>When choosing 'Pay Upfront', the full rental amount will be charged immediately using your selected credit/debit card. This ensures a swift and confirmed booking process.</p>
                  <p className="font-medium">Key Benefits:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Instant booking confirmation</li>
                    <li>No further payment steps at pickup (deposit may still apply)</li>
                    <li>Secure online transaction</li>
                  </ul>
                  <p className="text-sm text-blue-500 mt-4">Please ensure your card details are accurate and sufficient funds are available.</p>
                </div>
              </motion.div>
            )}
            {selectedPaymentMethod === 'cash_deposit' && publicBankDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-6 bg-gray-50 rounded-lg"
              >
                <h4 className="text-lg font-bold text-gray-800 mb-4">Please transfer the amount to the following bank details:</h4>
                <div className="space-y-3 text-gray-700">
                  {publicBankDetails.accountHolderName && (
                    <div>
                      <p className="font-medium">Account Holder Name:</p>
                      <p>{publicBankDetails.accountHolderName}</p>
                    </div>
                  )}
                  {publicBankDetails.bankName && (
                    <div>
                      <p className="font-medium">Bank Name:</p>
                      <p>{publicBankDetails.bankName}</p>
                    </div>
                  )}
                  {publicBankDetails.branch && (
                    <div>
                      <p className="font-medium">Branch:</p>
                      <p>{publicBankDetails.branch}</p>
                    </div>
                  )}
                  {publicBankDetails.accountNumber && (
                    <div>
                      <p className="font-medium">Account Number:</p>
                      <p>{publicBankDetails.accountNumber}</p>
                    </div>
                  )}
                  {publicBankDetails.accountType && (
                    <div>
                      <p className="font-medium">Account Type:</p>
                      <p>{publicBankDetails.accountType}</p>
                    </div>
                  )}
                  <p className="text-sm text-red-500 mt-4">Please note: Your booking will be confirmed upon successful verification of the cash deposit.</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleConfirmBooking}
        disabled={!selectedPaymentMethod || isBooking || (selectedPaymentMethod === 'cash_deposit' && !publicBankDetails)}
        className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent-hover transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed mt-8"
      >
        {isBooking ? 'Confirming...' : 'Confirm Booking'}
      </button>
    </motion.div>
  )
}

export default PaymentPage
