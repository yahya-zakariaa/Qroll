import React from 'react'
import icon1 from '../../../../assets/Chevron right.png'
import qrcode from '../../../../assets/qr-code-svgrepo-com.png'
import vectorright from '../../../../assets/Vector (8).png'
import studentvector from '../../../../assets/students-on-lecture-svgrepo-com (1).png'
import filliter from '../../../../assets/filter-svgrepo-com 1.png'
import sectionte from '../../../../assets/section-svgrepo-com.png'
import denger from '../../../../assets/danger-svgrepo-com.png'
import {  Link, Navigate, Outlet } from 'react-router-dom'


export default function Coursestecher() {
  return (
    <div className=''>
 <div className='flex gap-2 items-center m-6 max-sm:m-5'>
           
      <h1 className='text-[#71717A] '>COURCES </h1>
      <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
      <h1 className='text-[#71717A] '> CS </h1>
      <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />

      </div>
     <div className='md:relative '>
     <div className=' md:w-[63%] max-md:w-[95%] md:left-[17%] md:absolute top-40'>
        <ul className=''>
        <li >
          <Link to="/teacher-dashboard/coursestecher/qrcodeteacher" className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 ">
          <span className='ml-0' > <img src={qrcode} alt="" /> </span>
              <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap"> generate QR code for section</span>
              <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                <img src={vectorright} alt="" />
              </span>
          </Link>
           <div className='h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1'></div>
        </li>
            <li>
              <Link to="/teacher-dashboard/coursestecher/allstudentteacher" className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 ">
             
           <span className='ml-0' > <img src={studentvector} alt="" /> </span>
              <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap"> View all students</span>
              <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                <img src={vectorright} alt="" />
              </span>
         
              </Link>
           
           <div className='h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1'></div>

            </li>

            <li>
              <Link to="/teacher-dashboard/coursestecher/filterbysection" className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 ">
           <span className='ml-0' > <img src={filliter} alt="" /> </span>
              <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">filter by section </span>
              <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                <img src={vectorright} alt="" />
              </span>
        
              </Link>
           
           <div className='h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1'></div>
            </li>
            <li>
              <Link to="/teacher-dashboard/coursestecher/Sectionfinalreport" className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
            
           <span className='ml-0' > <img src={sectionte} alt="" /> </span>
              <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap"> final sections report</span>
              <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                <img src={vectorright} alt="" />
              </span>
           
              </Link>
           
           <div className='h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1'></div>
            </li>

            <li>
              <Link to="/teacher-dashboard/coursestecher/excessiveabsencestudents" className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 ">
           <span className='ml-0' > <img src={denger} alt="" /> </span>
              <span className="flex-1 text-[#161C39] ms-3 whitespace-nowrap"> view excessive absence students</span>
              <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                <img src={vectorright} alt="" />
              </span>
              </Link>
         
           
            </li>

        </ul>
      </div>
     </div>
    </div>
  )
}
