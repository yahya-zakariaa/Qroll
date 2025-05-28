import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import left from "../../../../assets/Chevron left.png";
import right from "../../../../assets/Chevron right.png";
import useStudentStore from "../../../../store/useStudentStore";

export default function Sectionattendstudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSectionsAttendace } = useStudentStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pageSize = 9;
  const totalPages = Math.ceil(sections.length / pageSize);
  const currentSections = sections.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const fetchSections = async () => {
    try {
      setIsLoading(true);
      const res = await getSectionsAttendace(id);
      console.log("Fetched sections:", res);
      setSections(res);
    } catch (error) {
      console.log("Error fetching sections:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    fetchSections();
  }, []);
  return (
    <div>
      <div className="flex gap-6 md:m-10 max-md:m-3 items-center">
        <button
          onClick={() => navigate("/student-dashboard/coursesstudent")}
          className="flex gap-2 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A] ">COURCES </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> CS </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> SECTION ATTENDENCE REPORT </h1>
      </div>
      <div>
        <div className="p-4 w-full my-16">
          {sections.length > 0 ? (
            <>
              <table className="w-full text-sm text-left ">
                <thead className="">
                  <tr>
                    <th className="p-2 text-[#A1A1AA] ">section number</th>
                    <th className="p-2 text-[#A1A1AA] "> Date</th>
                    <th className="p-2 text-[#A1A1AA] text-center">status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSections.map((item) => (
                    <tr key={item.id} className="border-t">
                      <td className="p-2 ">{item.section_id}</td>
                      <td className="p-2 ">{item.date}</td>
                      <td className="p-2 text-center ">
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
            </>
          ) : isLoading ? (
            <h1 className="w-full text-center mt-20 font-bold text-xl">
              Loading...
            </h1>
          ) : (
            <h1 className="w-full text-center mt-20 font-bold text-xl">
              No Sections Yet
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
