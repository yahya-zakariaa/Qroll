import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import logos from "../../assets/zz.png";
import avetarr from "../../assets/R.png";
import home from "../../assets/home-1393-svgrepo-com.png";
import actor from "../../assets/Vector (2).png";
import actor2 from "../../assets/Vector (6).png";
import cousess from "../../assets/coursessss (1).png";
import useTeacherStore from "../../store/useTeacherStore";

export default function TeacherLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  const [courses, setCourses] = useState([]);
  const userType = localStorage.getItem("userType");
  const { getCourses } = useTeacherStore();

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      console.log(res);
      setCourses(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [courses?.length]);

  if (userType !== "teacher") {
    return <Navigate to="/home" />;
  }
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <>
        <button
          onClick={toggleSidebar}
          data-drawer-target="sidebar-multi-level-sidebar"
          aria-controls="sidebar-multi-level-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg ms-3 sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>

        <aside
          id="sidebar-multi-level-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#161B39] transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4  bg-[#161B39]">
            <ul className="space-y-2 font-medium">
              <li
                onClick={closeSidebar}
                className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
              >
                <img className="m-2" src={logos} alt="" />

                <div className="h-[1px] bg-[#575757]  mt-8 mb-5"></div>
              </li>
              <li
                onClick={closeSidebar}
                className="flex items-center p-2 mb-5  rounded-lg text-white hover:bg-gray-700 group"
              >
                <div className="flex items-center justify-center gap-4">
                  <div className="bg-black rounded-full h-11 w-11">
                    <img src={avetarr} alt="" />
                  </div>
                  <p> mohamed ahmed</p>
                </div>
              </li>
              <li onClick={closeSidebar}>
                <Link
                  to="/teacher-dashboard"
                  className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <span className="ml-0">
                    <img src={home} alt="" />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                    <img src={actor} alt="" />
                  </span>
                </Link>
              </li>
              <li onClick={closeSidebar}>
                <Link
                  to="/teacher-dashboard/profile"
                  className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <span className="ml-0">
                    {" "}
                    <img src={actor2} alt="" />{" "}
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    My Profile
                  </span>
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                    <img src={actor} alt="" />
                  </span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2  rounded-lg text-white hover:bg-gray-700 group"
                  onClick={toggleDropdown}
                >
                  <span className="ml-0">
                    <img src={cousess} alt="" />
                  </span>
                  <span className="flex-1 text-start ms-3 whitespace-nowrap">
                    Courses
                  </span>
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium">
                    <img
                      src={actor}
                      alt=""
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <ul
                  id="dropdown-example"
                  className={`py-2 space-y-2 transition-all duration-300 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {courses.map((course) => (
                    <li>
                      <Link
                        to={`/teacher-dashboard/courses/${course.id}`}
                        className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 group text-white hover:bg-gray-700"
                      >
                        <span className="ml-0"> </span>
                        <span className="flex-1 ms-3 text-start whitespace-nowrap">
                          {course.name}
                        </span>
                        <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                          <img src={actor} alt="" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li onClick={closeSidebar} className="fixed bottom-5 w-52">
                <Link
                  to="/home"
                  className="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 shrink-0 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div onClick={closeSidebar} className="p-4 sm:ml-64">
          <Outlet />
        </div>
      </>
    </div>
  );
}
