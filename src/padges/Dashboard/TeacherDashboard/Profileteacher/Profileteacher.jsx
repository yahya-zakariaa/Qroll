import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Profileteacher() {
        const navigate = useNavigate();
    
  return (
    <div>
        <div className='m-5'>
      <h1 className='text-[#71717A] text-2xl'>PROFILE </h1>

      </div>
      <div className='mx-[5%]'>
      <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> Name</label>
    <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> Email</label>
    <input type="email" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> phone number</label>
    <input type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> National ID</label>
    <input type="tel" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> date of birth</label>
    <input type="date" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> education  </label>
    <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> home address  </label>
    <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 w-[95%] ">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> home address  </label>
    <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5 md:w-[95%] md:flex items-center">
    <div className='md:w-[77%] max-md:w-[95%]'>
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">  password  </label>
    <input type="text" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="name@flowbite.com" required />
    </div>
    <div className='mx-[3%] w-[5%] mt-5'>
        <button onClick={() => navigate("/teacher-dashboard/profileteacher/changepasswred")} className='mt-[15%] border-2 border-[#161B39] w-44 h-14 text-[15px] text-[#161B39] rounded-[15px]' > change passowed</button>
    </div>
   
  </div>


      </div>
    </div>
  )
}
