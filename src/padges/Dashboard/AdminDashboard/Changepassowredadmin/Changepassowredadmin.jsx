import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Changepassowredadmin() {
    const navigate = useNavigate();

  return (
    <div>
    <div className='flex gap-6 md:m-10 max-md:m-3 items-center'>
      <button  onClick={() => navigate("/admin-dashboard/profiledoctoer")} className='flex gap-2 items-center  text-[#161B39]'>
      <i className="fa-solid fa-arrow-left-long" />
     <h1>BACK</h1>
      </button>
<h1 className='text-[#71717A] '>PROFILE </h1>
<i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
<h1 className='text-[#71717A] '>CHANGE PASSWORD </h1>

</div>
<div className='mx-[5%]'>
<div className="mb-5 md:w-[55%] ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> old password</label>
<input type="password" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="***********************" required />
</div>
<div className="mb-5 md:w-[55%]  ">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 "> new password</label>
<input type="password" id="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 " placeholder="***********************" required />
</div>
<div className="mb-5 w-[55%] m-auto mt-14 ">
<button className='bg-[#161B39] text-white  w-[191px] h-[49px] rounded-[12px]'>save password</button>
</div>




</div>



</div>
  )
}
