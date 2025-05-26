
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import left from '../../../../assets/Chevron left.png'
import right from '../../../../assets/Chevron right.png'
const items = [
    { id: 1, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 2, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 3, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 4, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "PrePresent Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Presentsent" },
    { id: 5, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 6, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 7, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 8, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 9, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 10, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 11, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 12, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 13, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "PresPresent Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Presentent" },
    { id: 14, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 15, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "AbsPresent Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Presentent" },
    { id: 16, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 17, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 18, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "PrPresent Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Presentesent" },
    { id: 19, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present" },
    { id: 20, name:"mohamed ali ", idcode:"778723" , date: "2025-04-09", content: "PrPresent Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Present Presentesent" },
  ];

export default function Inboxadmin() {
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
          <div className='flex gap-2 m-3 max-sm:m-5'>
                         <button onClick={() => navigate("")} className='flex gap-2 items-center  text-[#161B39]'>
                         <i className="fa-solid fa-arrow-left-long" />
                         <h1>BACK</h1>
                        </button>
                     <h1 className='text-[#71717A] '>inbox </h1>
                   
                        
              </div>
   
           <div className="p-4 w-[95%] my-6">
                                           <table className="w-full text-sm text-left ">
                                             <thead className="">
                                               <tr >
                                                 <th className="p-2 text-[#A1A1AA] ">ID </th>
                                                 <th className="p-2 text-[#A1A1AA] ">student name </th>
                                                 <th className="p-2 text-[#A1A1AA] ">student academic ID </th>
                                                 <th className="p-2 text-[#A1A1AA] "> Date</th>
                                                 <th className="p-2 text-[#A1A1AA] ">content</th>
                                               </tr>
                                             </thead>
                                             <tbody>
                                               {currentItems.map((item, index) => (
                                                 <tr key={item.id} className="border-t cursor-pointer hover:bg-[#5BD1D93D]"   onClick={() => navigate('/admin-dashboard/inboxadmin/actionmassageadmin', { state: { content: item.content } })}>
                                                   <td className="p-2 ">{(currentPage - 1) * pageSize + index + 1}</td>
                                                   <td className="p-2 ">{item.name}</td>
                                                   <td className="p-2 ">{item.idcode}</td>
                                                   <td className="p-2 ">{item.date}</td>
                                                   <td className="p-2 ">  {
       item.content?.split(' ').slice(0, 9).join(' ') +
       (item.content?.split(' ').length > 9 ? '...' : '')
     }</td>
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
  )
}
