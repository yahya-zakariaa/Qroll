import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import left from "../../../../assets/Chevron left.png";
import right from "../../../../assets/Chevron right.png";
import addd from "../../../../assets/danger-svgrepo-com (1).png";
import useAdminStore from "../../../../store/useAdminStore";

export default function Filltersectionadmin() {
  const { cid, sid } = useParams();
  const { getSectionAttendace } = useAdminStore();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const pageSize = 9;
  const totalPages = Math.ceil(filteredItems.length / pageSize);
  const currentItems = filteredItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    const fetchSectionAttendance = async () => {
      try {
        const res = await getSectionAttendace(cid, sid);
        setStudents(res);
        setFilteredItems(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSectionAttendance();
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleSearch = () => {
    const filtered = students.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.academic_id.includes(searchTerm)
    );
    setFilteredItems(filtered);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const exportToExcel = () => {
    const exportData = filteredItems.map(
      ({ id, name, studentId, date, status }) => ({
        ID: id,
        Name: name,
        StudentID: studentId,
        Date: date,
        Status: status,
      })
    );

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
      <div className="lg:flex lg:justify-between items-center">
        <div className="flex gap-2 m-3 max-sm:m-5">
          <button
            onClick={() =>
              navigate(
                "/doctor-dashboard/coursessdoctoer/filterletureeorsectiondoctoer"
              )
            }
            className="max-md:text-[12px] flex gap-2 items-center text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>
          </button>
          <h1 className="text-[#71717A] max-md:text-[11px]">COURSES</h1>
          <i
            className="fa-solid fa-chevron-right md:mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] max-md:text-[11px]">CS</h1>
          <i
            className="fa-solid fa-chevron-right md:mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] max-md:text-[11px]">
            Section Attendance Report
          </h1>
        </div>

        <div className="flex">
          <button
            onClick={() =>
              navigate("/teacher-dashboard/coursestecher/addnewstudentteacher")
            }
            className="flex items-center justify-center bg-[#161B39] text-white m-2 w-52 h-11 rounded-[8px]"
          >
            <img className="h-5" src={addd} alt="" />
            <p className="p-2">View Excessive Absence</p>
          </button>
          <button
            onClick={exportToExcel}
            className="border border-[#161B39] text-[#161B39] m-2 w-48 rounded-[8px] h-11"
          >
            Export to Excel Sheet
          </button>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="px-4">
        <h2 className="md:text-2xl mb-2">Section 3 Attendance</h2>

        {/* Search */}
        <div className="w-[90%] my-6">
          <div className="relative">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              type="search"
              placeholder="Search by name or ID..."
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
            />
            <button
              onClick={handleSearch}
              className="text-white absolute end-[2px] bottom-[2px] bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-7 py-4"
            >
              Search
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="p-4 w-[90%] overflow-x-auto">
          <table className="w-full text-sm text-left border">
            <thead>
              <tr>
                <th className="p-2 text-[#A1A1AA]">#</th>
                <th className="p-2 text-[#A1A1AA]">Name</th>
                <th className="p-2 text-[#A1A1AA]">Academic ID</th>
                <th className="p-2 text-[#A1A1AA]">Date</th>
                <th className="p-2 text-[#A1A1AA]">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.academic_id}</td>
                  <td className="p-2">{item.date}</td>
                  <td className="p-2">
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

          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-[#A1A1A1] rounded-l-lg"
            >
              <img src={left} alt="prev" />
            </button>

            <div className="flex border border-[#A1A1A1]">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 text-sm border ${
                    currentPage === i + 1
                      ? "bg-[#161B39] text-white"
                      : "bg-gray-100 text-[#161B39]"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-[#A1A1A1] rounded-r-lg"
            >
              <img src={right} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
