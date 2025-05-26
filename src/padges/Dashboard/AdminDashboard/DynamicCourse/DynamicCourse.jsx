import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import qrcode from "../../../../assets/qr-code-svgrepo-com.png";
import vectorright from "../../../../assets/Vector (8).png";
import studentvector from "../../../../assets/students-on-lecture-svgrepo-com (1).png";
import filliter from "../../../../assets/filter-svgrepo-com 1.png";
import sectionte from "../../../../assets/section-svgrepo-com.png";
import reportleture from "../../../../assets/book-education-learning-school-study-2-svgrepo-com.png";
import denger from "../../../../assets/danger-svgrepo-com.png";
import editee from "../../../../assets/edit-pencil-line-02-svgrepo-com 1.png";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import useAdminStore from "../../../../store/useAdminStore";
export default function DynamicCourse() {
  const { id } = useParams();
  const { getCourse } = useAdminStore();
  const navigate = useNavigate();
  const [course, setCourse] = useState({});
  const fetchCourse = async () => {
    try {
      const res = await getCourse(id);
      setCourse(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourse();
    console.log(course);
  }, [course?.id]);

  return (
    <div>
      <div className="flex gap-5 items-center m-3 lg:m-3  ">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A] "> Courses</h1>
        <i
          className="mt-1 fa-solid fa-chevron-right"
          style={{ color: "#71717a" }}
        />
        <h1 className="text-[#71717A] "> Veiw All </h1>
        <i
          className="mt-1 fa-solid fa-chevron-right"
          style={{ color: "#71717a" }}
        />
        <h1 className="text-[#71717A] "> {course?.name} </h1>
      </div>

      <div className="md:relative ">
        <div className="md:w-[63%] max-md:w-[95%] md:left-[17%] md:absolute top-40">
          <ul className="">
            <li>
              <Link
                to={`/admin-dashboard/courses/${course?.id}/students`}
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={studentvector} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  {" "}
                  View all students
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>
            <li>
              <Link
                to="/admin-dashboard/courses/absentstudentadmin"
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={denger} alt="" />{" "}
                </span>
                <span className="flex-1 text-[#161C39] ms-3 whitespace-nowrap">
                  {" "}
                  view excessive absence students
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>

            <li>
              <Link
                to="/admin-dashboard/courses/filter"
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={filliter} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  Filter By Lecture Or Section{" "}
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>

            <li>
              <Link
                to="/admin-dashboard/courses/sectionreportadmin"
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <span className="ml-0">
                  {" "}
                  <img src={sectionte} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  {" "}
                  final sections report
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>
            <li>
              <Link
                to="/admin-dashboard/courses/leturereportadmin"
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
              >
                <span className="ml-0">
                  {" "}
                  <img src={reportleture} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  {" "}
                  Final Lectures Report
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>

            <li>
              <Link
                to={`/admin-dashboard/courses/${id}/details`}
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={editee} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  {" "}
                  edit course information
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
