import back from "../../../../assets/Frame 129.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import left from "../../../../assets/Chevron left.png";
import right from "../../../../assets/Chevron right.png";
import useStudentStore from "../../../../store/useStudentStore";

export default function Indexstudent() {
  const navigate = useNavigate();
  const { getInbox } = useStudentStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchInbox = async () => {
    try {
      const res = await getInbox();
      setItems(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInbox();
  }, []);

  return (
    <div>
      <div className="flex gap-2 m-3 max-sm:m-5">
        <button
          onClick={() => navigate("/student-dashboard/coursesstudent")}
          className="flex gap-2 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A] ">Inbox </h1>
      </div>

      <div className="p-4 w-[95%] my-6">
        <table className="w-full text-sm text-left ">
          <thead className="">
            <tr>
              <th className="p-2 text-[#A1A1AA] text-start w-[10%]">ID</th>
              <th className="p-2 text-[#A1A1AA] text-start w-[35%]"> Date</th>
              <th className="p-2 text-[#A1A1AA] text-start  w-[55%]">
                content
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item?.id}
                className="border-t cursor-pointer hover:bg-[#5BD1D93D]"
                onClick={() =>
                  navigate("/student-dashboard/indexstudent/contentStudent", {
                    state: item?.message,
                  })
                }
              >
                <td className="p-2 text-start">
                  {(currentPage - 1) * pageSize + index + 1}
                </td>
                <td className="p-2 text-start ">
                  {new Date(item?.created_at).toLocaleString()}
                </td>
                <td className="p-2 ">
                  {" "}
                  {item?.message?.split(" ").slice(0, 9).join(" ") +
                    (item?.message?.split(" ").length > 9 ? "..." : "")}
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
                className={`px-4 py-2 border-[1px]  border-[#A1A1A1] text-sm rounded ${
                  currentPage === page + 1
                    ? "bg-[#161B39] text-[#A1A1A1]"
                    : "bg-gray-100"
                }`}
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
  );
}
