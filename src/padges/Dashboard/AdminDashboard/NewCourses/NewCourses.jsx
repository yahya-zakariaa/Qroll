import "simple-datatables/dist/style.css";
import useAdminStore from "../../../../store/useAdminStore";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function NewCourses() {
  const { addCourse } = useAdminStore();
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    console.log(data);

    try {
      await toast.promise(addCourse(data), {
        loading: "Adding Course...",
        success: "Course Created Successfully",
        error: (err) => err || "something want worng !",
      });
      formik.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid Egyptian phone number")
      .required("Phone number is required"),
    doctor_id: Yup.string().required("doctor ID is required"),
    teacher_id: Yup.string().required("teacher ID is required"),
    national_id: Yup.string()
      .matches(/^[0-9]{14}$/, "National ID must be 14 digits")
      .required("National ID is required"),
    academic_id: Yup.string()
      .matches(/^[0-9]{14}$/, "academic ID must be 14 digits")
      .required("academic ID is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      academic_id: "",
      national_id: "",
      doctor_id: "",
      teacher_id: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div>
      <div className="lg:flex items-center  lg:justify-between ">
        <div className="flex  gap-2 m-3 lg:m-3 justify-self-center">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-2 md:me-5 items-center  text-[#161B39]"
          >
            <i className="fa-solid fa-arrow-left-long" />
            <h1>BACK</h1>
          </button>
          <h1 className="text-[#71717A] ">Courses </h1>
          <i
            className="fa-solid fa-chevron-right mt-1"
            style={{ color: "#71717a" }}
          />

          <h1 className="text-[#71717A] "> add new Course </h1>
        </div>
      </div>

      <div className="md:px-10 px-5">
        <div className="my-5">
          <h1 className="text-[#000] text-2xl font-bold">New Course </h1>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid md:grid-cols-2 gap-10 grid-cols-1 "
        >
          <div className=" w-full">
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
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className=" w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className=" w-full">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
            )}
          </div>
          <div className=" w-full">
            <label
              htmlFor="national_id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              National ID
            </label>
            <input
              type="tel"
              id="national_id"
              name="national_id"
              value={formik.values.national_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.national_id && formik.errors.national_id && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.national_id}
              </p>
            )}
          </div>
          <div className=" w-full">
            <label
              htmlFor="academic_id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Academic ID
            </label>
            <input
              type="text"
              id="academic_id"
              name="academic_id"
              value={formik.values.academic_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.academic_id && formik.errors.academic_id && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.academic_id}
              </p>
            )}
          </div>
          <div className=" w-full">
            <label
              htmlFor="doctor_id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Doctor ID
            </label>
            <input
              type="text"
              id="doctor_id"
              name="doctor_id"
              value={formik.values.doctor_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.doctor_id && formik.errors.doctor_id && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.doctor_id}
              </p>
            )}
          </div>
          <div className=" w-full">
            <label
              htmlFor="doctor_id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Teacher ID
            </label>
            <input
              type="text"
              id="teacher_id"
              name="teacher_id"
              value={formik.values.teacher_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.teacher_id && formik.errors.teacher_id && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.doctor_id}
              </p>
            )}
          </div>

          <div className=" w-full">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              {" "}
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
              required
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className=" w-full">
            <button
              type="submit"
              className=" max-md:text-[13px] flex items-center self-center justify-center bg-[#161B39] text-[white] m-2 w-48  rounded-[8px] h-11"
            >
              <i className="fa-solid fa-check" />
              <p className="p-2">save </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
