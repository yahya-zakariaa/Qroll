import React, { useState } from 'react'
import imge1 from '../../assets/465541941_1115304710376060_7367626225223365144_n 1.png'
import img2 from '../../assets/logo.png'
import img3 from '../../assets/Group 253.png'
import img4 from '../../assets/Group 247.png'
import img5 from '../../assets/Group 245.png'
import img6 from '../../assets/Group 241.png'
import img7  from '../../assets/Group 243.png'
import img8 from '../../assets/Vector.png' 
import { useNavigate } from 'react-router-dom'
import admin from '../../assets/Group 1000011676.png'
import techer from '../../assets/Group 1000011686.png'
import docter from '../../assets/Group 1000011681.png'
import student from '../../assets/Group 1000011691.png'


export default function Home() {
    const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");



  const handleSelectUser = (type) => {
    setUserType(type);
    localStorage.setItem("userType", type);
    setError(""); // إزالة الخطأ عند الاختيار
  };

  const handleNext = () => {
    if (!userType) {
      setError("Please select a user type before proceeding."); // إظهار خطأ
      return;
    }
    navigate("/login"); // التوجيه لصفحة تسجيل الدخول إذا تم الاختيار
  };
  
  return (
    <>
    <div className='flex w-full '>
        <div className='w-1/2 '>
            <img className='m-5 h-[690px]  max-md:hidden max-lg:h-[450px] max-lg:mt-36'  src={imge1} width={"90%"}  alt="" />

        </div>




        <div className='md:w-1/2 m-5   '>
            <div className='flex md:justify-around max-md:justify-center max-md:mr-32 max-md:mt-2   ' >
                <img className='h-10 max-md:h-10 ' src={img2} alt="" />
                
                <img className='h-5 max-md:hidden  ' src={img3} width={"20%"}  alt="" />
            </div>
            <div className='md:mt-10 text-center max-md:mt-5'>
                <p className='max-md:hidden'>login to your account</p>
                <h1 className='text-4xl max-md:hidden'>select user type</h1>
               
                <div className='flex justify-center gap-10 max-md:gap-5 max-md:mr-36 '>
                    <div>
                        <div className='w-36 m-4 cursor-pointer ' onClick={() => handleSelectUser("admin")}> <img src={userType === "admin" ? admin : img4} alt="admin" />  </div>

                        
                        <div className='w-36 m-4 cursor-pointer' onClick={() => handleSelectUser("teacher")}> <img src={userType === "teacher" ? techer : img6} alt="techer" /></div>


                    </div>
                    <div>
                       <div className='w-36 m-4 cursor-pointer '  onClick={() => handleSelectUser("doctor")}> <img src={userType === "doctor" ? docter : img5} alt="doctor" /></div>    

                       <div className='w-36 m-4 cursor-pointer ' onClick={() => handleSelectUser("student")}>  <img src={userType === "student" ? student : img7} alt="" /></div>

                    </div>
                </div>
                {error && <p className="mt-4 text-red-500">{error}</p>} {/* عرض الخطأ إذا لم يختر المستخدم */}
                 <div className='flex justify-center md:m-5  '>
                    <div className=' max-md:-ml-36'>
                    <button className=' flex justify-center items-center gap-2 bg-[#161B39] w-[277px] p-[13px] rounded-[12px] ' onClick={handleNext}>
                        <span className=' text-white'>next </span>  
                        <i className="fa-solid fa-arrow-right-long mt-1" style={{ color: "#ffffff" }} />
                    </button>

                   
                   
                    </div>
                    
                 </div>
                 
            </div>
            

        </div>
    </div>
    <div className='  flex justify-center '>
    <img className='h-5 w-40 md:hidden  max-md:mt-7  ' src={img3} width={"20%"}  alt="" />
    </div>
      
    </>
  )
}
