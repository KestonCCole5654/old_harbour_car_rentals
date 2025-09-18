import React, { useEffect, useState } from 'react'
import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const BankDetails = () => {

  const { axios, user, fetchUser } = useAppContext()

  const [bankDetails, setBankDetails] = useState({
    bankName: '',
    accountHolderName: '',
    branch: '',
    accountNumber: '',
    accountType: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user && user.bankName) {
      setBankDetails({
        bankName: user.bankName || '',
        accountHolderName: user.accountHolderName || '',
        branch: user.branch || '',
        accountNumber: user.accountNumber || '',
        accountType: user.accountType || '',
      })
    }
  }, [user])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if (isLoading) return null

    setIsLoading(true)
    try {
      const { data } = await axios.put('/api/owner/bank-details', bankDetails)
      if (data.success) {
        toast.success(data.message)
        fetchUser() // Refresh user data after successful update
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Bank Details" subTitle="Manage your bank account information for direct cash transfers from bookings."/>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
        <div className='flex flex-col w-full'>
          <label>Bank Name</label>
          <input type="text" placeholder="e.g. First National Bank" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={bankDetails.bankName} onChange={e => setBankDetails({ ...bankDetails, bankName: e.target.value })}/>
        </div>

        <div className='flex flex-col w-full'>
          <label>Account Holder Name</label>
          <input type="text" placeholder="e.g. John Doe" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={bankDetails.accountHolderName} onChange={e => setBankDetails({ ...bankDetails, accountHolderName: e.target.value })}/>
        </div>

        <div className='flex flex-col w-full'>
          <label>Branch</label>
          <input type="text" placeholder="e.g. Main Street Branch" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={bankDetails.branch} onChange={e => setBankDetails({ ...bankDetails, branch: e.target.value })}/>
        </div>

        <div className='flex flex-col w-full'>
          <label>Account Number</label>
          <input type="text" placeholder="e.g. 1234567890" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={bankDetails.accountNumber} onChange={e => setBankDetails({ ...bankDetails, accountNumber: e.target.value })}/>
        </div>

        <div className='flex flex-col w-full'>
          <label>Account Type</label>
          <select required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={bankDetails.accountType} onChange={e => setBankDetails({ ...bankDetails, accountType: e.target.value })}>
            <option value="">Select Account Type</option>
            <option value="Savings">Savings</option>
            <option value="Chequing">Chequing</option>
          </select>
        </div>

        <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
          {isLoading ? 'Saving...' : 'Save Details'}
        </button>
      </form>
    </div>
  )
}

export default BankDetails
