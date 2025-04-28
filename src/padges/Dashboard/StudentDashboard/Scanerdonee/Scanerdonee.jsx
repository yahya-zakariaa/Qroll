import React from 'react'
import icon1 from '../../../../assets/Chevron right.png'
import back from '../../../../assets/Frame 129.png'
import susses from '../../../../assets/success-filled-svgrepo-com 1.png'
import { useNavigate } from 'react-router-dom';

export default function Scanerdonee() {
    const navigate = useNavigate();

  return (
    <div>
       <div className='flex gap-6 md:m-10 max-md:m-3 items-center'>
                             <button onClick={() => navigate("/student-dashboard/coursesstudent/scanqrcodestudent")} className='flex gap-2 items-center  text-[#161B39]'>
                             <i className="fa-solid fa-arrow-left-long" />
                             <h1>BACK</h1>
                                        </button>
                       <h1 className='text-[#71717A] '>COURCES </h1>
                       <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                       <h1 className='text-[#71717A] text-xl'> CS </h1>
                       <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                       <h1 className='text-[#71717A] '>  scan QR code </h1>
            
                       </div>

                       <div className='relativew-full ' >
                        <div className=' lg:w-[18%] absolute top-[25%] md:left-[46%] max-md:w-[70%] max-md:left-[22%] '>
                            <p className='text-2xl max-lg:mr-32 text-center max-md:mr-5'>Qr code for lecture 2 Have
                                 been scanned successfully </p>
                            <img className='h-[211.67px] w-[211.67px]' src={susses} alt="" />
                            <button onClick={() => navigate("/student-dashboard/coursesstudent")} className='bg-[#161B39] w-56 h-10 my-5 rounded-[9px] text-white flex justify-center items-center gap-2'>

<span className='text-white' >back to course</span>

</button>
                        </div>
                       </div>
    </div>
  )
}
