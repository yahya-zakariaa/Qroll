import { useNavigate, useParams } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import left from "../../../../assets/Chevron left.png";
import right from "../../../../assets/Chevron right.png";
import useDoctorStore from "../../../../store/useDoctorStore";
import addd from "../../../../assets/danger-svgrepo-com (1).png";

export default function Finalleturesdoctoer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { finalLecturesReport } = useDoctorStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 9;
  const totalPages = Math.ceil(filteredStudents?.length / pageSize);
  const currentItems = filteredStudents?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const FetchStudents = async () => {
    try {
      const res = await finalLecturesReport(id);
      setStudents(res);
      setFilteredStudents(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearch = () => {
    const filtered = students.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.studentId.includes(searchTerm)
    );
    setFilteredStudents(filtered);
    setCurrentPage(1);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };
  const exportToExcel = () => {
    const exportData = filteredStudents.map(
      ({ id, name, studentId, numberabsence, percentage }) => ({
        ID: id,
        Name: name,
        StudentID: studentId,
        numberabsence: numberabsence,
        percentage: percentage,
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
  useEffect(() => {
    FetchStudents();
  }, []);
  return (
    <div>
      <div className="items-center lg:flex lg:justify-between ">
        <div className="flex gap-2 md:m-3 lg:m-3 justify-self-center max-md:mb-4">
          <button
            onClick={() => navigate(-1)}
            className=" max-md:text-[12px] flex gap-2 items-center  text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>{" "}
          </button>
          <h1 className="text-[#71717A] max-md:text-[12px] ">COURCES </h1>
          <i
            className="fa-solid fa-chevron-right md:mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] max-md:text-[12px]"> CS </h1>
          <i
            className="fa-solid fa-chevron-right md:mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] max-md:text-[12px] ">
            {" "}
            LECTURE ATTENDENCE REPORT{" "}
          </h1>
        </div>
        <div className="flex ">
          <button className=" justify-center items-center flex self-center bg-[#161B39] text-[white] m-2 w-52  rounded-[8px] h-11">
            <img className="h-5" src={addd} alt="" />
            <p
              className="p-2"
              onClick={() =>
                navigate(`/doctor-dashboard/courses/${id}/excessive-absence`)
              }
            >
              view excessive absence{" "}
            </p>
          </button>
        </div>
      </div>
      <div className="w-full mt-20 ">
        <div className="  w-[90%] mx-auto">
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
              className="block w-full p-4 text-sm text-gray-900 border max-md:w-[100%] border-gray-300 rounded-lg ps-10 bg-gray-50 "
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

        <div className="p-6 w-full">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full ">
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
                  <th className="px-4 py-2 text-center text-sm font-medium text-[#A1A1AA]">
                    {" "}
                    number of absence{" "}
                  </th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-[#A1A1AA]">
                    {" "}
                    absence percentage{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems?.map((item) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {item.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {item.academic_id}{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-center text-gray-600">
                      {item.number_of_absence}{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-center text-gray-600">
                      {item.absence_percentage}{" "}
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
    </div>
  );
}
