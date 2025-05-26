import React from 'react'
import courses from '../../../../assets/Group 1000011649.png'
import student from '../../../../assets/Group 1000011649 (1).png'
import doctoer from '../../../../assets/ddddoctorr.png'
import teachers from '../../../../assets/teachersssss.png'
export default function AdminDashboard() {
  return (<div>
    <div>
           <div className='m-10  max-sm:m-5 '>
           <h1 className='text-[#71717A] text-2xl'>Home </h1>
     
           </div>
     
          
     
     <div className='lg:flex  gap-32 m-16 max-sm:m-1'>
      
     <div className='flex gap-2 max-lg:m-8 '>
           <div>
             <img src={doctoer} alt="" />
           </div>
     
           <div>
             <p>Doctors </p>
             <p>2 </p>
     
           </div>
          </div>

          <div className=' flex gap-2 max-lg:m-8'>
           <div>
             <img src={teachers} alt="" />
           </div>
     
           <div>
             <p>Teachers </p>
             <p>2 </p>
     
           </div>
          </div>



          <div className='flex gap-2 max-lg:m-8'>
           <div>
             <img src={student} alt="" />
           </div>
     
           <div>
             <p>students </p>
             <p>80 </p>
     
           </div>
          </div>


     <div className='flex gap-2 max-lg:m-8'>
           <div>
             <img src={courses} alt="" />
           </div>
     
           <div>
             <p>courses </p>
             <p>2 </p>
     
           </div>
          </div>




     </div>
          
          
     
          
         </div>
  </div>
  
  )
}
