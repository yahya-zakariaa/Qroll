import React, { useEffect, useState } from "react";
import imge1 from "../../../assets/465541941_1115304710376060_7367626225223365144_n 1.png";
import img2 from "../../../assets/logo.png";
import img3 from "../../../assets/Group 252.png";
import img8 from "../../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import useAuthStore from "../../../store/useAuthStore";

const role = {
  admin: "1",
  doctor: "2",
  teacher: "3",
  student: "4",
};

export default function Login() {
  const navigate = useNavigate();
  const { login, error } = useAuthStore();
  const [userRole, setUserRole] = useState("");
  const [Error, setError] = useState("");

  useEffect(() => {
    setError("");
    const userType = localStorage.getItem("userType");
    setUserRole(userType);
    if (!userType) {
      setError("No user type selected. Please go back and select a user type.");
    }
    if (error) {
      setError(error);
    }
  }, []);

  const handleLogin = async (data) => {
    data.role_id = role[userRole];

    console.log(data);

    await toast
      .promise(login(data), {
        loading: "Logging in",
        success: "Login success",
        error: (err) => err || "something want worng !",
      })
      .then((res) => {
        if (res) return navigate(`/${res.role}-dashboard`);
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string("email must be a string").required(
      "email is required fiald"
    ),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(24, "password must be max legnth is 24 chart")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="flex w-full h-screen o flex-col justify-start items-center  md:overflow-hidden  ">
      <nav className="flex justify-between md:px-16 items-center w-full  px-10 py-5 ">
        <img className="w-[30%] md:w-[200px]" src={img2} alt="" />

        <img className="w-[35%] md:w-[200px] " src={img3} alt="" />
      </nav>

      <div className="container flex items-center justify-center">
        <div className="w-[45%] h-full hidden md:flex justify-center px-16 items-center ">
          <img className=" w-full h-[600px]  " src={imge1} alt="" />
        </div>

        <div className="flex flex-col flex-1 md:items-start items-center md:mt-0 mt-24 justify-center  ">
          <h1 className="text-3xl text-start  font-medium mb-12 ">
            login to your account
          </h1>

          <div className="md:w-[80%] w-[90%] flex items-center justify-start h-full">
            <form onSubmit={formik.handleSubmit} className="mx-auto w-full ">
              <div className="md:mb-5  w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl text-gray-900 font- text-start"
                >
                  {" "}
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-full  p-2.5 w-full     focus:ring-1 focus:outline-none h-12"
                  placeholder="name@flowbite.com"
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-md font-medium mt-3">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="md:mb-5 w-full  ">
                <label
                  htmlFor="password"
                  className="block mb-2 text-xl text-gray-900 text-start"
                >
                  {" "}
                  password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-400 block md:w-full p-2.5 w-full    focus:ring-1 focus:outline-none  h-12"
                  placeholder="******************"
                  required
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm font-medium mt-3">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              <div className="flex justify-center mt-5 w-full">
                <button
                  type="submit"
                  className="flex justify-center items-center w-full rounded-lg py-2.5  bg-[#161B39] "
                >
                  <span className="mr-5 text-white">Login</span>
                  <img src={img8} alt="" />
                </button>
              </div>
              {Error && (
                <p className="text-red-500 text-sm font-medium ">{Error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
