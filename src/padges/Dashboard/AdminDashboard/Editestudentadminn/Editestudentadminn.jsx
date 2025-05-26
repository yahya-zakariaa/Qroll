import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminStore from "../../../../store/useAdminStore";

export default function Editestudentadminn() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getStudent, getCourses, getStudentCourses, updateStudentCourses } =
    useAdminStore();
  const [user, setUser] = useState({});
  const [courses, setCourses] = useState([]);
  const [studentCourses, setStudentCourses] = useState([]);
  const fetchStudent = async () => {
    try {
      const res = await getStudent(id);
      setUser(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      console.log(res);
      setCourses(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchStudentCourses = async () => {
    try {
      const res = await getStudentCourses(id);
      console.log(res);
      setStudentCourses(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateStudentCourses = async () => {
    try {
      const courseIds = studentCourses.map((course) => course.id);
      await updateStudentCourses(id, courseIds);
      console.log("Courses updated successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  const toggleCourse = (courseId) => {
    if (studentCourses.some((s) => s.id === courseId)) {
      setStudentCourses((prev) => prev.filter((c) => c.id !== courseId));
    } else {
      const course = courses.find((c) => c.id === courseId);
      if (course) setStudentCourses((prev) => [...prev, course]);
    }
  };

  useEffect(() => {
    fetchStudent();
    fetchCourses();
    fetchStudentCourses();
  }, []);

  return (
    <div>
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-5 text-[#161B39] mb-4"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
          <h1 className="text-[#71717A] ">all students </h1>

          <i
            className="fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] ">add student to course </h1>
        </button>

        <div>
          <h1 className="  text-[#161B39] mb-4">
            student name: <span className="ml-5"> {user.name} </span>{" "}
          </h1>
          <h1 className="  text-[#161B39] mb-4">
            {" "}
            student academic ID:{" "}
            <span className="ml-5">{user.academic_id} </span>{" "}
          </h1>
          <div className="leading-7 text-gray-700">
            <div className="flex flex-wrap gap-4 mt-8">
              {courses.length > 0
                ? courses?.map((c) => (
                    <div key={c?.id} class="flex">
                      <input
                        checked={studentCourses?.some((s) => c?.id === s.id)}
                        onChange={() => toggleCourse(c.id)}
                        type="checkbox"
                        id={c.id}
                        class="peer hidden"
                      />
                      <label
                        for={c.id}
                        class="select-none cursor-pointer rounded-lg border-2 border-[#161B39]
   py-3 px-6 font-bold text-[#161B39] transition-colors duration-200 ease-in-out peer-checked:bg-[#161B39] peer-checked:text-[#fff] peer-checked:border-[#161B39] "
                      >
                        {c.name}
                      </label>
                    </div>
                  ))
                : ""}
            </div>

            <div className="flex justify-center mt-14 w-[90%]">
              <button
                onClick={handleUpdateStudentCourses}
                className="bg-[#161B39] text-white  w-[191px] h-[49px] rounded-[12px]"
              >
                save{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
