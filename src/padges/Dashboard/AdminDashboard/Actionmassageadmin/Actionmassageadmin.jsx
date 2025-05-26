import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
export default function Actionmassageadmin() {
     const location = useLocation();
        const navigate = useNavigate();
    
        const content = location.state?.content || 'No content available';
  return (
    <div>
    <div className="p-6">
   <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#161B39] mb-4">
     {/* <img src={back} alt="Back" /> */}
    
     <i className="fa-solid fa-arrow-left-long" />
     <h1>BACK</h1>
     <h1 className='text-[#71717A] '>inbox  </h1>

     <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
<h1 className='text-[#71717A] '>message  </h1>
     
   </button>
     
     <div>
     <h1 className="  text-[#161B39] mb-4">student name:  <span className='ml-20'> mohamed ahmed ali </span> </h1>
   <h1 className="  text-[#161B39] mb-4"> student academic ID: <span className='ml-20'> 800016578   </span> </h1>
   <p className="leading-7 text-gray-700">{content}</p>
      
     </div>
   
 </div>
 </div>
  )
}
