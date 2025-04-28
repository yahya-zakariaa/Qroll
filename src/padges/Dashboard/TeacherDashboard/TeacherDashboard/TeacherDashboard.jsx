import React from 'react'
import courses from '../../../../assets/Group 1000011649.png'
import student from '../../../../assets/Group 1000011649 (1).png'

export default function TeacherDashboard() {
  return (
    <div>
      <div className='m-10  max-sm:m-5 '>
      <h1 className='text-[#71717A] text-2xl'>Home </h1>

      </div>

     

<div className='flex gap-32 m-16 max-sm:m-1'>
<div className='flex gap-3'>
      <div>
        <img src={courses} alt="" />
      </div>

      <div>
        <p>courses </p>
        <p>2 </p>

      </div>
     </div>
     <div className='flex gap-3'>
      <div>
        <img src={student} alt="" />
      </div>

      <div>
        <p>students </p>
        <p>80 </p>

      </div>
     </div>
</div>
     
     

     
    </div>
  )
}
