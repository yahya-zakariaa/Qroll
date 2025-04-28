import React, { useEffect, useState } from 'react'
import imge1 from '../../../assets/465541941_1115304710376060_7367626225223365144_n 1.png'
import img2 from '../../../assets/logo.png'
import img3 from '../../../assets/Group 252.png'
import img8 from '../../../assets/Vector.png' 
import { useNavigate } from 'react-router-dom'

const validUsers = {
    admin: "admin@gmail.com",
    doctor: "doctor@gmail.com",
    student: "student@gmail.com",
    teacher: "teacher@gmail.com",
  };
  const validPassword = "123456";


export default function Login() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");



  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (!userType) {
      setError("No user type selected. Please go back and select a user type.");
    }
  }, []);

  const handleLogin = () => {
    const userType = localStorage.getItem("userType");
  
    if (!userType) {
      setError("No user type selected. Please go back and select a user type.");
      return;
    }
  
    if (email !== validUsers[userType]) {
      setError("Invalid email for the selected user type.");
      return;
    }
  
    if (password !== validPassword) {
      setError("Incorrect password.");
      return;
    }
  
   
    localStorage.setItem("token", "your-auth-token"); 
    navigate(`/${userType}-dashboard`); 
  };


  
  return (
    <div>
   <div className='flex w-full '>
           <div className='w-1/2 '>
               <img className='m-5 h-[690px]  max-md:hidden'  src={imge1} width={"90%"}  alt="" />
   
           </div>
   
   
   
   
           <div className='md:w-1/2 m-5  '>
               <div className='flex md:justify-around max-md:justify-center max-md:mr-24 max-md:mt-2 ' >
                   <img className='h-10 max-md:h-10 ' src={img2} alt="" />
                   <img className='h-5   max-[800px]:hidden' src={img3} width={"20%"}  alt="" />
               </div>
               <div className='md:mt-48 max-md:mt-10 text-center '>
                   <p className='text-xl text-center max-md:mr-16'>login to your account</p>
                  
                   <div className='m-5 '>
                    <div className="mx-auto md:w-[700px] max-md:w-[400px] ">
  <div className="md:mb-5 max-md:mr-10 ">
    <label htmlFor="email" className="block mb-2 text-xl text-gray-900 font- text-start"> email</label>
    <input type="email"  value={email}
        onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full  p-2.5 max-md:w-[95%] max-md:mr-6    focus:ring-1 focus:outline-none h-12" placeholder="name@flowbite.com" required />
  </div>
  <div className="md:mb-5  max-md:mr-10">
    <label htmlFor="password" className="block mb-2 text-xl text-gray-900 text-start"> password</label>
    <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-400 block md:w-full p-2.5 max-md:w-[95%] max-md:mr-6   focus:ring-1 focus:outline-none  h-12"  placeholder="******************" required />
  </div>
  {error && <p className="text-red-500">{error}</p>}
  <div className='flex justify-center m-16'>
                       <div className='max-md:mr-14'>
                       <button onClick={handleLogin} className='flex justify-center align-content-center bg-[#161B39] md:w-[700px] md:p-[13px] max-md:p-[6px] max-md:w-[350px] rounded-[12px] ' >
                           <span className='mr-5 text-white'>Login</span>  
                            <img src={img8}   alt="" /> 
                       </button>
                      
                       </div>
                    </div>
                    </div>
      
                   </div>
                  
               </div>
               
   
           </div>
       </div>
    </div>
  )
}
