import icon1 from '../../../../assets/Chevron right.png'
// import React from 'react'
import back from '../../../../assets/Frame 129.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import left from '../../../../assets/Chevron left.png'
import right from '../../../../assets/Chevron right.png'
const items = [
    { id: 1, date: "2025-04-09", status: "Present" },
    { id: 2,  date: "2025-04-09", status: "Absent" },
    { id: 3,  date: "2025-04-09", status: "Present" },
    { id: 4,  date: "2025-04-09", status: "Present" },
    { id: 5, date: "2025-04-09", status: "Absent" },
    { id: 6,  date: "2025-04-09", status: "Present" },
    { id: 7,  date: "2025-04-09", status: "Absent" },
    { id: 8, date: "2025-04-09", status: "Present" },
    { id: 9, date: "2025-04-09", status: "Absent" },
    { id: 10,  date: "2025-04-09", status: "Present" },
    { id: 11,  date: "2025-04-09", status: "Present" },
    { id: 12,  date: "2025-04-09", status: "Absent" },
    { id: 13,  date: "2025-04-09", status: "Present" },
    { id: 14,  date: "2025-04-09", status: "Present" },
    { id: 15,  date: "2025-04-09", status: "Absent" },
    { id: 16,  date: "2025-04-09", status: "Present" },
    { id: 17,  date: "2025-04-09", status: "Absent" },
    { id: 18,  date: "2025-04-09", status: "Present" },
    { id: 19,  date: "2025-04-09", status: "Absent" },
    { id: 20,  date: "2025-04-09", status: "Present" },
  ];
export default function Sectionattendstudent() {
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
      <div className='flex gap-6 md:m-10 max-md:m-3 items-center'>
                             <button onClick={() => navigate("/student-dashboard/coursesstudent")} className='flex gap-2 items-center  text-[#161B39]'>
                             <i className="fa-solid fa-arrow-left-long" />
                             <h1>BACK</h1>
                                        </button>
                       <h1 className='text-[#71717A] '>COURCES </h1>
                       <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                       <h1 className='text-[#71717A] '> CS </h1>
                       <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
                       <h1 className='text-[#71717A] '>  SECTION ATTENDENCE REPORT  </h1>
            
                       </div>
                       <div>
        <div className="p-4 lg:w-[70%] my-16">
                            <table className="w-full text-sm text-left ">
                              <thead className="">
                                <tr >
                                  <th className="p-2 text-[#A1A1AA] ">section number</th>
                                  <th className="p-2 text-[#A1A1AA] "> Date</th>
                                  <th className="p-2 text-[#A1A1AA] ">status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {currentItems.map((item, index) => (
                                  <tr key={item.id} className="border-t">
                                    <td className="p-2 ">{(currentPage - 1) * pageSize + index + 1}</td>
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
                        
                      
                            <div className="flex items-center justify-center mt-12 ">
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
