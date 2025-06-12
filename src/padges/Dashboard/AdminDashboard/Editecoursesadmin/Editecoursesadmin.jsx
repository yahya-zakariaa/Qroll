import React, { useEffect, useState } from "react";
import useAdminStore from "../../../../store/useAdminStore";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

export default function Editecoursesadmin() {
  const { updateCourse, deleteCourse, getCourse } = useAdminStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    national_id: "",
    birth_date: "",
    address: "",
  });
  const fetchCourse = async () => {
    try {
      const res = await getCourse(id);
      setCourse(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteCourse = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this Course?"
    );
    if (!confirm) return;

    try {
      const res = await toast.promise(deleteCourse(id), {
        loading: "Deleting Course...",
        success: "Course deleted successfully",
        error: (err) => err || "Something went wrong!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\+?\d{7,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    national_id: Yup.string().required("National ID is required"),
    birth_date: Yup.date().required("Birth date is required"),
    address: Yup.string().required("Address is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Saving data:", values);
      setIsEditing(false);
    },
  });
  useEffect(() => {
    fetchCourse();
    console.log(course);
  }, [course?.id]);

  return (
    <div>
      <div className="items-center lg:flex lg:justify-between ">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 md:me-5 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <div className="flex gap-2 m-3 lg:m-3 justify-self-center">
          <h1 className="text-[#71717A] ">COURCES </h1>
          <i
            className="mt-1 fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] ">view all </h1>
          <i
            className="mt-1 fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] ">HTML </h1>
          <i
            className="mt-1 fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] ">course details </h1>
        </div>
        <div className="flex ">
          <button
            onClick={() => {
              handleDeleteCourse(id);
              navigate("/admin-dashboard/courses");
            }}
            className=" max-md:text-[13px] flex items-center self-center justify-center bg-[#EF1A1D] text-[white] m-2 w-48  rounded-[8px] h-11"
          >
            <p className="p-2">delete course </p>
          </button>
          <button className=" max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-48  rounded-[8px] h-11">
            <i className="fa-solid fa-check" />
            <p className="p-2">edit </p>
          </button>
        </div>
      </div>

      <div className="mx-[5%]">
        <div className="mb-5 w-[95%] ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            Name
          </label>
          <input
            type="text"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5 w-[95%] ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            doctor name
          </label>
          <input
            type="email"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5 w-[95%] ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            doctor’s Email
          </label>
          <input
            type="tel"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5 w-[95%] ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            teacher name
          </label>
          <input
            type="tel"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="name@flowbite.com"
            required
          />
        </div>

        <div className="mb-5 w-[95%] ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            Teacher’s Email
          </label>
          <input
            type="tel"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="name@flowbite.com"
            required
          />
        </div>
      </div>
    </div>
  );
}
