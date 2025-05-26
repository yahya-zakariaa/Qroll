import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import left from '../../../../assets/Chevron left.png'
import right from '../../../../assets/Chevron right.png'
const items = [
    { id: 1, name: "John Doe", studentId: "12345" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 2, name: "Jane Smith", studentId: "12346" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 3, name: "Michael Johnson", studentId: "12347" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 4, name: "Emily Davis", studentId: "12348" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 5, name: "David Wilson", studentId: "12349" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 6, name: "Sophia Lee", studentId: "12350", numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 7, name: "James Brown", studentId: "12351" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 8, name: "Olivia White", studentId: "12352", numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 9, name: "William Harris", studentId: "12353" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 10, name: "Isabella Clark", studentId: "12354" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 11, name: "John Doe", studentId: "12345", numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 12, name: "Jane Smith", studentId: "12346" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 13, name: "Michael Johnson", studentId: "12347" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 14, name: "Emily Davis", studentId: "12348" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 15, name: "David Wilson", studentId: "12349" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 16, name: "Sophia Lee", studentId: "12350" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 17, name: "James Brown", studentId: "12351" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 18, name: "Olivia White", studentId: "12352", numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%" },
    { id: 19, name: "William Harris", studentId: "12353" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"},
    { id: 20, name: "Isabella Clark", studentId: "12354" , numberabsence:"5" , sectionsnumbers:"1,2,3,4" , absencepercentage:"50%"  },
  ];
export default function Excessiveabsencestudent() {
     const navigate = useNavigate();
                const [currentPage, setCurrentPage] = useState(1);
                  const [filteredItems, setFilteredItems] = useState(items);
                                 const [searchTerm, setSearchTerm] = useState("");
                const pageSize = 9;
              
                const totalPages = Math.ceil(filteredItems.length / pageSize);
                const currentItems = filteredItems.slice(
                  (currentPage - 1) * pageSize,
                  currentPage * pageSize
                );
                
              
                const handlePageChange = (page) => {
                  setCurrentPage(page);
                };

                const handleSearch = () => {
                  const filtered = items.filter((item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.studentId.includes(searchTerm)
                  );
                  setFilteredItems(filtered);
                  setCurrentPage(1); // نبدأ من أول صفحة بعد البحث
                };
                const handleKeyDown = (e) => {
                  if (e.key === "Enter") {
                    e.preventDefault(); // يمنع الريلود
                    handleSearch();
                  }
                };
  return (
     <div>
           <div className='flex gap-2 items-center m-6 max-sm:m-5'>
                                <button onClick={() => navigate("/teacher-dashboard/coursestecher")} className='flex gap-2 items-center  text-[#161B39]'>
                                <i className="fa-solid fa-arrow-left-long" />
                                <h1>BACK</h1>
                                           </button>
                          <h1 className='text-[#71717A] '>COURCES </h1>
                          <i className="fa-solid fa-chevron-right " style={{ color: "#71717a" }} />
                          <h1 className='text-[#71717A] '> CS </h1>
                          <i className="fa-solid fa-chevron-right " style={{ color: "#71717a" }} />
                          <h1 className='text-[#71717A] '>   Excessive Absence </h1>
         
                         
               
                          </div>
       <div className=' w-full mx-auto'>
       <div className="  w-[90%] my-4 mt-12" >
       <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
       <div className="relative ">
           <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
               <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
               </svg>
           </div>
           <input  onChange={(e) => setSearchTerm(e.target.value)}  onKeyDown={handleKeyDown}  type="search" id="default-search" className="block w-full p-4 text-sm text-gray-900 border max-md:w-[100%] border-gray-300 rounded-lg ps-10 bg-gray-50 " placeholder="Search Mockups, Logos..." required />
           <button onClick={handleSearch}  className="text-white absolute end-[2px] bottom-[2px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 ">Search</button>
       </div>
           </div>
       
           <div className="p-6 w-[90%]">
         <div className="overflow-x-auto  rounded-lg">
           <table className="min-w-full ">
             <thead className="">
               <tr>
                 <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">ID</th>
                 <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">Name</th>
                 <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">Academic ID</th>
                 <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]"> number of absence </th>
                 <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]"> sections numbers</th>
                 <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]"> absence percentage</th>
   
               </tr>
             </thead>
             <tbody>
               {currentItems.map((item) => (
                 <tr key={item.id} className="border-t">
                   <td className="px-4 py-2 text-sm text-gray-600">{item.id}</td>
                   <td className="px-4 py-2 text-sm text-gray-600">{item.name}</td>
                   <td className="px-4 py-2 text-sm text-gray-600">{item.studentId}</td>
                   <td className="px-4 py-2 text-sm text-gray-600">{item.numberabsence}</td>
                   <td className="px-4 py-2 text-sm text-gray-600">{item.sectionsnumbers}</td>
                   <td className="px-4 py-2 text-sm text-gray-600">{item.absencepercentage}</td>
   
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
   
         <div className="flex justify-center items-center mt-10  ">
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
