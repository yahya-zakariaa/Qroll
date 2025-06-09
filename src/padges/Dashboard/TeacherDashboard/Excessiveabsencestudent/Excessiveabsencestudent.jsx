import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import left from "../../../../assets/Chevron left.png";
import right from "../../../../assets/Chevron right.png";
import useTeacherStore from "../../../../store/useTeacherStore";

export default function Excessiveabsencestudent() {
  const { id } = useParams();
  const { finalSectionsReport } = useTeacherStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredstudents, setFilteredstudents] = useState();
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 9;
  const totalPages = Math.ceil(filteredstudents?.length / pageSize);
  const currentstudents = filteredstudents?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = () => {
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.studentId.includes(searchTerm)
    );
    setFilteredstudents(filtered);
    setCurrentPage(1);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await finalSectionsReport(id);
      setStudents(res);
      setFilteredstudents(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  return (
    <div>
      <div className="  w-[90%] max-md:w-[100%]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 max-md:w-[100%] rounded-lg ps-10 bg-gray-50 "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            onClick={handleSearch}
            className="text-white absolute end-[2px] bottom-[2px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4 "
          >
            Search
          </button>
        </div>
      </div>

      <div className="p-3 w-[90%]">
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full max-md:w-[100%] ">
            <thead className="">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                  academic ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                  {" "}
                  number of absence{" "}
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                  {" "}
                  Sections numbers{" "}
                </th>

                <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                  {" "}
                  absence percentage{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {currentstudents?.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {student.id}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {student.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {student.academic_id}{" "}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {student.number_of_absence}{" "}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {student.lecture_numbers}{" "}
                  </td>

                  <td className="px-4 py-2 text-sm text-gray-600">
                    {student.absence_percentage}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
            {[...Array(totalPages || 1).keys()].map((page) => (
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
