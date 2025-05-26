
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import left from '../../../../assets/Chevron left.png'
import right from '../../../../assets/Chevron right.png'
import addd from '../../../../assets/danger-svgrepo-com (1).png'
const items = [
    { id: 1, name: "John Doe", studentId: "12345", date: "2025-04-09", status: "Present" },
    { id: 2, name: "Jane Smith", studentId: "12346", date: "2025-04-09", status: "Absent" },
    { id: 3, name: "Michael Johnson", studentId: "12347", date: "2025-04-09", status: "Present" },
    { id: 4, name: "Emily Davis", studentId: "12348", date: "2025-04-09", status: "Present" },
    { id: 5, name: "David Wilson", studentId: "12349", date: "2025-04-09", status: "Absent" },
    { id: 6, name: "Sophia Lee", studentId: "12350", date: "2025-04-09", status: "Present" },
    { id: 7, name: "James Brown", studentId: "12351", date: "2025-04-09", status: "Absent" },
    { id: 8, name: "Olivia White", studentId: "12352", date: "2025-04-09", status: "Present" },
    { id: 9, name: "William Harris", studentId: "12353", date: "2025-04-09", status: "Absent" },
    { id: 10, name: "Isabella Clark", studentId: "12354", date: "2025-04-09", status: "Present" },
    { id: 11, name: "John Doe", studentId: "12345", date: "2025-04-09", status: "Present" },
    { id: 12, name: "Jane Smith", studentId: "12346", date: "2025-04-09", status: "Absent" },
    { id: 13, name: "Michael Johnson", studentId: "12347", date: "2025-04-09", status: "Present" },
    { id: 14, name: "Emily Davis", studentId: "12348", date: "2025-04-09", status: "Present" },
    { id: 15, name: "David Wilson", studentId: "12349", date: "2025-04-09", status: "Absent" },
    { id: 16, name: "Sophia Lee", studentId: "12350", date: "2025-04-09", status: "Present" },
    { id: 17, name: "James Brown", studentId: "12351", date: "2025-04-09", status: "Absent" },
    { id: 18, name: "Olivia White", studentId: "12352", date: "2025-04-09", status: "Present" },
    { id: 19, name: "William Harris", studentId: "12353", date: "2025-04-09", status: "Absent" },
    { id: 20, name: "Isabella Clark", studentId: "12354", date: "2025-04-09", status: "Present" },
  ];

export default function Fillterletureadmin() {
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
                            const exportToExcel = () => {
                                                                              const exportData = filteredItems.map(({ id, name, studentId  ,date , status  }) => ({
                                                                                ID: id,
                                                                                Name: name,
                                                                                StudentID: studentId,
                                                                                date:date,
                                                                               status:status
                                                    
                                                                              }));
                                                                            
                                                                              const worksheet = XLSX.utils.json_to_sheet(exportData);
                                                                              const workbook = XLSX.utils.book_new();
                                                                              XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
                                                                            
                                                                              const excelBuffer = XLSX.write(workbook, {
                                                                                bookType: "xlsx",
                                                                                type: "array",
                                                                              });
                                                                            
                                                                              const dataBlob = new Blob([excelBuffer], {
                                                                                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
                                                                              });
                                                                            
                                                                              saveAs(dataBlob, "students.xlsx");
                                                                            };
  return (
      <div>
           <div className='items-center lg:flex lg:justify-between'>
                  <div className='flex gap-2 m-3 max-sm:m-5'>
                                 <button onClick={() => navigate(-1)} className='max-md:text-[12px] flex gap-2 items-center  text-[#161B39]'>
                                 <i className="fa-solid fa-arrow-left-long" />
                                 <h1>BACK</h1> 
                                            </button>
                           <h1 className='text-[#71717A] max-md:text-[11px]'>COURCES </h1>
                           <i className="fa-solid fa-chevron-right md:mt-1" style={{ color: "#71717a" }} />
                           <h1 className='text-[#71717A] max-md:text-[11px]'> CS </h1>
                           <i className="fa-solid fa-chevron-right md:mt-1" style={{ color: "#71717a" }} />
                           <h1 className='text-[#71717A] max-md:text-[11px]'>  section ATTENDENCE REPORT   </h1>
          
                          
                
                           </div>
                           <div className='flex '>
       <button className=' justify-center items-center flex self-center bg-[#161B39] text-[white] m-2 w-52  rounded-[8px] h-11'>
                       
                           <img className='h-5' src={addd} alt="" /> 
                           <p className='p-2'  onClick={() => navigate("/teacher-dashboard/coursestecher/addnewstudentteacher")}>view excessive absence   </p>
                        </button>                       
          
                           </div>
                          
              </div>
              <div>
                <h2 className='md:text-2xl'>lecture 3 attendance </h2>
                <div>
                     <div className='w-full mx-auto '>
                            <div className="  w-[90%] my-6" >
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                        <div className="relative ">
                            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input onChange={(e) => setSearchTerm(e.target.value)}  onKeyDown={handleKeyDown} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border max-md:w-[100%] border-gray-300 rounded-lg bg-gray-50   " placeholder="Search Mockups, Logos..." required />
                            <button onClick={handleSearch} className="text-white absolute end-[2px] bottom-[2px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 ">Search</button>
                        </div>
                            </div>
                        
                            <div className="p-4 w-[90%]">
          <table className="w-full text-sm text-left ">
            <thead className="">
              <tr >
                <th className="p-2 text-[#A1A1AA] ">ID</th>
                <th className="p-2 text-[#A1A1AA] ">Name</th>
                <th className="p-2 text-[#A1A1AA] ">academic ID</th>
                <th className="p-2 text-[#A1A1AA] ">section date</th>
                <th className="p-2 text-[#A1A1AA] ">status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2 ">{(currentPage - 1) * pageSize + index + 1}</td>
                  <td className="p-2 ">{item.name}</td>
                  <td className="p-2 ">{item.studentId}</td>
                  <td className="p-2 ">{item.date}</td>
                  <td className="p-2 ">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === "Present"
                          ? "bg-green-100 text-green-700"
                          : "bg-pink-100 text-red-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='flex justify-end mt-1 max-md:justify-center'>
                              <button onClick={exportToExcel} className='border border-[#161B39] text-[#161B39] m-2 w-48  rounded-[8px] h-11'>import from excel sheet</button>
                           
          
                           </div>
    
          {/* Pagination */}
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
              </div>
        </div>
  )
}
