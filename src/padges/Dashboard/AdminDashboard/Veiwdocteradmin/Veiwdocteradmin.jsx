import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAdminStore from "../../../../store/useAdminStore";
import toast from "react-hot-toast";

export default function ViewDoctorAdmin() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { getDoctor, updateDoctor } = useAdminStore();
  const [isEditing, setIsEditing] = useState(false);

  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    phone: "",
    national_id: "",
    birth_date: "",
    address: "",
  });

  const fetchDoctor = async () => {
    try {
      const res = await getDoctor(id);
      setInitialValues({
        name: res.name || "",
        email: res.email || "",
        phone: res.phone || "",
        national_id: res.national_id || "",
        birth_date: res.birth_date || "",
        address: res.address || "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateDoctor = async (data) => {
    try {
      console.log(data);

      await toast.promise(updateDoctor(data), {
        loading: "please wait a few sacoend..",
        error: (err) => err,
        success: "doctor data is updated",
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

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
    onSubmit: handleUpdateDoctor,
  });

  return (
    <div>
      <div className="lg:flex items-center lg:justify-between ">
        <div className="flex gap-2 m-3 lg:m-3 justify-self-center">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 md:me-5 items-center  text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>
          </button>
          <h1 className="text-[#71717A] ">doctors </h1>
          <i
            className="fa-solid fa-chevron-right mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> view all </h1>
          <i
            className="fa-solid fa-chevron-right mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> doctor information </h1>
        </div>
        <div className="flex ">
          <button className="bg-[#EF1A1D] text-[white] m-2 w-32 max-md:text-[13px] rounded-[8px] h-11">
            delete doctor
          </button>
          <button
            type="submit"
            onClick={() => {
              if (isEditing) {
                formik.handleSubmit();
              }
              setIsEditing(!isEditing);
            }}
            className="max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-32 rounded-[8px] h-11"
          >
            <i className="fa-solid fa-pencil" />
            <p className="p-2">{isEditing ? "Save" : "Edit"}</p>
          </button>
        </div>
      </div>

      <div className="md:px-10 px-5">
        <div className="my-5">
          <h1 className="text-[#000] text-2xl font-bold">PROFILE </h1>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 gap-10 grid-cols-1"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5 h-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              readOnly={!isEditing}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-600 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5 h-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              readOnly={!isEditing}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-600 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="w-full">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5 h-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              readOnly={!isEditing}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-600 text-sm">{formik.errors.phone}</div>
            ) : null}
          </div>

          <div className="w-full">
            <label
              htmlFor="national_id"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              National ID
            </label>
            <input
              type="text"
              id="national_id"
              name="national_id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5 h-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.national_id}
              readOnly={!isEditing}
            />
            {formik.touched.national_id && formik.errors.national_id ? (
              <div className="text-red-600 text-sm">
                {formik.errors.national_id}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <label
              htmlFor="birth_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Date of birth
            </label>
            <input
              type="date"
              id="birth_date"
              name="birth_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5 h-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.birth_date}
              readOnly={!isEditing}
            />
            {formik.touched.birth_date && formik.errors.birth_date ? (
              <div className="text-red-600 text-sm">
                {formik.errors.birth_date}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Home address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5 h-12"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              readOnly={!isEditing}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-red-600 text-sm">
                {formik.errors.address}
              </div>
            ) : null}
          </div>

          {isEditing && (
            <div className="flex justify-start items-center gap-5 w-full md:col-span-2">
              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/admin-dashboard/profiledoctoer/changepassowredadmin"
                  )
                }
                className="border px-5 py-2.5 rounded-lg border-[#161B39] text-[#161B39] font-medium text-[16px] tracking-wider"
              >
                Change Password
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
