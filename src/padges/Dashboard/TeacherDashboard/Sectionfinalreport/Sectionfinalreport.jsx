import icon1 from '../../../../assets/Chevron right.png'
import back from '../../../../assets/Frame 129.png'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import left from '../../../../assets/Chevron left.png'
import right from '../../../../assets/Chevron right.png'
const items = [
    { id: 1, name: "John Doe", studentId: "12345" , numberabsence:"1" , percentage:"50%"},
    { id: 2, name: "Jane Smith", studentId: "12346" , numberabsence:"1", percentage:"50%"},
    { id: 3, name: "Michael Johnson", studentId: "12347" , numberabsence:"1" , percentage:"50%"},
    { id: 4, name: "Emily Davis", studentId: "12348" , numberabsence:"1", percentage:"50%"},
    { id: 5, name: "David Wilson", studentId: "12349", numberabsence:"1" , percentage:"50%"},
    { id: 6, name: "Sophia Lee", studentId: "12350" , numberabsence:"1", percentage:"50%"},
    { id: 7, name: "James Brown", studentId: "12351" , numberabsence:"1" , percentage:"50%"},
    { id: 8, name: "Olivia White", studentId: "12352", numberabsence:"1" , percentage:"50%"},
    { id: 9, name: "William Harris", studentId: "12353" , numberabsence:"1", percentage:"50%"},
    { id: 10, name: "Isabella Clark", studentId: "12354", numberabsence:"1" , percentage:"50%"},
    { id: 11, name: "John Doe", studentId: "12345", numberabsence:"1" , percentage:"50%"},
    { id: 12, name: "Jane Smith", studentId: "12346", numberabsence:"1" , percentage:"50%"},
    { id: 13, name: "Michael Johnson", studentId: "12347", numberabsence:"1" , percentage:"50%"},
    { id: 14, name: "Emily Davis", studentId: "12348" , numberabsence:"1", percentage:"50%"},
    { id: 15, name: "David Wilson", studentId: "12349", numberabsence:"1" , percentage:"50%"},
    { id: 16, name: "Sophia Lee", studentId: "12350", numberabsence:"1" , percentage:"50%"},
    { id: 17, name: "James Brown", studentId: "12351" , numberabsence:"6" , percentage:"50%"},
    { id: 18, name: "Olivia White", studentId: "12352" , numberabsence:"1" , percentage:"50%"},
    { id: 19, name: "William Harris", studentId: "12353" , numberabsence:"1" , percentage:"50%"},
    { id: 20, name: "Isabella Clark", studentId: "12354" , numberabsence:"1" , percentage:"50%"},
  ];
import addd from '../../../../assets/danger-svgrepo-com (1).png'
export default function Sectionfinalreport() {
                const navigate = useNavigate();
                 const [currentPage, setCurrentPage] = useState(1);
                        const pageSize = 9;
                      
                        const totalPages = Math.ceil(items.length / pageSize);
                        const currentItems = items.slice(
                          (currentPage - 1) * pageSize,
                          currentPage * pageSize
                        );
                      
                        const handlePageChange = (page) => {
                          setCurrentPage(page);
                        };
    
  return (
    <div>
       <div className='lg:flex lg:justify-between items-center '>
                    <div className='flex  gap-2 md:m-3 lg:m-3 justify-self-center max-md:mb-4'>
                                   <button onClick={() => navigate("/teacher-dashboard/coursestecher")} className=' max-md:text-[12px] flex gap-2 items-center  text-[#161B39]'>
                                   <i className="fa-solid fa-arrow-left-long" />
                                   <h1>BACK</h1>                                              </button>
                             <h1 className='text-[#71717A] max-md:text-[12px] '>COURCES </h1>
                             <i className="fa-solid fa-chevron-right md:mt-1" style={{ color: "#71717a" }} />
                             <h1 className='text-[#71717A] max-md:text-[12px]'> CS </h1>
                             <i className="fa-solid fa-chevron-right md:mt-1" style={{ color: "#71717a" }} />
                             <h1 className='text-[#71717A] max-md:text-[12px] '>  LECTURE ATTENDENCE REPORT   </h1>
            
                            
                  
                             </div>
                             <div className='flex '>
         <button className=' justify-center items-center flex self-center bg-[#161B39] text-[white] m-2 w-52  rounded-[8px] h-11'>
                         
                             <img className='h-5' src={addd} alt="" /> 
                             <p className='p-2'  onClick={() => navigate("/teacher-dashboard/coursestecher/addnewstudentteacher")}>view excessive absence   </p>
                          </button>                       
            
                             </div>
                            
                </div>
 <div className='w-full '>
    <div className='flex items-center justify-between'>
        <h2>number of sections : 4</h2>
        <button className=' justify-center items-center flex self-center bg-[#161B39] text-[white] m-2 w-32  rounded-[8px] h-11'>
                         
                        
                         <p className='p-2'  onClick={() => navigate("/teacher-dashboard/coursestecher/addnewstudentteacher")}>sort by   </p>
                         <i className="fa-solid fa-caret-down" style={{ color: "#ffffff" }} />
                      </button>
    </div>
        <div className="  w-[90%] " >
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
    <div className="relative ">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border max-md:w-[100%] border-gray-300 rounded-lg ps-10 bg-gray-50 " placeholder="Search Mockups, Logos..." required />
        <button  className="text-white absolute end-[2px] bottom-[2px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 ">Search</button>
    </div>
        </div>
    
        <div className="p-6 w-[90%]">
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full ">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">academic ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]"> number of absence </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">  absence percentage  </th>

            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2 text-sm text-gray-600">{item.id}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.studentId} </td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.numberabsence} </td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.percentage} </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex md:justify-end max-md:justify-center mt-1 '>
                          <button className='border border-[#161B39] text-[#161B39] m-2 w-48  rounded-[8px] h-11'>import from excel sheet</button>
                       
      
                       </div>

      <div className="flex items-center justify-center ">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white border-[1px] rounded-s-lg border-[#A1A1A1] rounded "
        >
          <img src={left} alt="" />
        </button>
        <div className="flex text-[#A1A1A1]  border-[1px]  border-[#A1A1A1] ">
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page + 1)}
              className={`px-4 py-2 border-[1px]  border-[#A1A1A1] text-sm rounded ${currentPage === page + 1 ? 'bg-[#161B39] text-[#A1A1A1]' : 'bg-gray-100'}`}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-white border-[1px] rounded-r-lg border-[#A1A1A1] "
        >
          <img src={right} alt="" />
        </button>
      </div>
    </div>
    </div>
    </div>
  )
}
