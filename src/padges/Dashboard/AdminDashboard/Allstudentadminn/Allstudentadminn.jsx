import "simple-datatables/dist/style.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import left from "../../../../assets/Chevron left.png";
import right from "../../../../assets/Chevron right.png";
import useAdminStore from "../../../../store/useAdminStore";
import toast from "react-hot-toast";

export default function Allstudentadminn() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [openActionId, setOpenActionId] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const { getStudents, deleteStudent } = useAdminStore();
  const pageSize = 9;
  const totalPages = Math.ceil(filteredUsers.length / pageSize);
  const currentIUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      setOpenActionId({});
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await getStudents();
      console.log(res);

      setUsers(res);
      setFilteredUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    const filtered = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.national_id?.includes(searchTerm) ||
        user.phone?.includes(searchTerm) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleDeleteStudent = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Student?"
    );
    if (!confirm) return;

    try {
      const res = await toast.promise(deleteStudent(id), {
        loading: "Deleting Student...",
        success: "Student deleted successfully",
        error: (err) => err || "Something went wrong!",
      });
      console.log(res);

      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };

  const exportToExcel = () => {
    const exportData = filteredUsers.map(
      ({ id, name, national_id, phone, email, education }) => ({
        ID: id,
        Name: name,
        "National ID": national_id,
        Phone: phone,
        Email: email,
        Education: education,
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

    saveAs(dataBlob, "Student.xlsx");
  };

  return (
    <>
      <div className="lg:flex items-center  lg:justify-between ">
        <div className="flex  m-3 lg:m-3 gap-4 md:justify-start justify-around items-center">
          <button
            onClick={() => navigate("/Student-dashboard/coursestecher")}
            className="flex gap-2 md:me-5 items-center  text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>
          </button>
          <h1 className="text-[#71717A] ">Student </h1>
          <i
            className="fa-solid fa-chevron-right mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> view all </h1>
        </div>
      </div>

      <div className="w-full mx-auto ">
        <div className="header flex md:flex-row flex-col-reverse items-center justify-between">
          <div className="  md:flex-1 w-full md:px-6 my-5">
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
                className="text-white absolute end-[2px] bottom-[2px]  bg-[#161B39] font-medium rounded-lg text-sm px-5 py-4  "
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex ">
            <button
              onClick={exportToExcel}
              className="border border-[#161B39] text-[#161B39] m-2 px-4 max-md:text-[13px]  rounded-[8px] py-2"
            >
              import to excel sheet
            </button>
            <button className=" max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-48  rounded-[8px] h-11">
              <i className="fa-solid fa-plus" />
              <p
                className="p-2"
                onClick={() => navigate("/admin-dashboard/newstudentadmin")}
              >
                Add new Student{" "}
              </p>
            </button>
          </div>
        </div>

        <div className="md:p-6 w-full">
          <div className=" rounded-lg ">
            <table className="w-full border rounded-md ">
              <thead className="">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                    ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                    {" "}
                    national ID
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                    {" "}
                    phone number
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-[#A1A1AA]">
                    {" "}
                    actions
                  </th>
                </tr>
              </thead>

              <tbody className="">
                {currentIUsers.map((item) => (
                  <tr key={item.id} className="border-y ">
                    <td className="px-4 py-2 text-sm text-gray-600 ">
                      {item.student_id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {item.name}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {item.national_id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {item.phone}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      <div className="flex relative">
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className={`actions ${
                            openActionId[item?.id] ? "" : "hidden"
                          } absolute bottom-[-100px] left-[-105px] bg-gray-300 rounded-lg flex flex-col gap-3 px-2 py-2`}
                        >
                          <button
                            onClick={() =>
                              navigate(
                                `/admin-dashboard/veiwStudentadmin/${item.student_id}`
                              )
                            }
                            className="bg-[#161B39] hover:bg-[#2d3772] text-white text-xs px-3 py-1 rounded-[5px] "
                          >
                            View
                          </button>
                          <button
                            onClick={() => {
                              navigate(
                                `/admin-dashboard/editestudentadminn/${item.student_id}`
                              );
                            }}
                            className="bg-[#161B39] hover:bg-[#2d3772] text-white text-xs px-3 py-1 rounded-[5px] "
                          >
                            Edit Courses
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteStudent(item?.student_id)
                            }
                            className="bg-[#EF1A1D] hover:bg-red-600 text-white text-xs px-3 py-1 rounded-[5px]"
                          >
                            Delete
                          </button>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenActionId((prev) => ({
                              ...prev,
                              [item?.id]: !prev[item?.id],
                            }));
                          }}
                          className=""
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center mt-10 ">
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
    </>
  );
}
