import React from "react";
import "simple-datatables/dist/style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import useDoctorStore from "../../../../store/useDoctorStore";
export default function Addstudentdoctoer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addStudentToCourse } = useDoctorStore();
  const handleSubmit = async (data) => {
    data.id = id;
    try {
      await addStudentToCourse(data);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      academic_id: "",
    },
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <div className="lg:flex items-center  lg:justify-between ">
        <div className="flex gap-2 m-6  max-sm:m-5">
          <button
            onClick={() =>
              navigate("/doctor-dashboard/coursessdoctoer/allstudentdoctoer")
            }
            className="flex gap-2 items-center  text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>
          </button>
          <h1 className="text-[#71717A] ">COURCES </h1>
          <i
            className="fa-solid fa-chevron-right mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> CS </h1>
          <i
            className="fa-solid fa-chevron-right mt-1"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] "> all students </h1>
        </div>
        <div className="flex ">
          <button className="border border-[#161B39] text-[#161B39] m-2 w-48  rounded-[8px] h-11">
            import from excel sheet
          </button>
        </div>
      </div>

      <form onSubmit={formik.handleSubmit} className="mx-[5%] mt-16 md:w-[50%]">
        <div className="mb-10 w-[95%]  ">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            academic ID{" "}
          </label>
          <input
            type="text"
            id="Name"
            name="academic_id"
            value={formik.values.academic_id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="801256479 "
            required
          />
        </div>
        <div className=" w-[95%]  flex justify-center ">
          <button
            type="submit"
            className="bg-[#161B39] text-white text-xl w-[191px] h-[49px] rounded-[12px]"
          >
            {" "}
            Add{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
