import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStudentStore from "../../../../store/useStudentStore";
import toast from "react-hot-toast";

export default function Profilestudent() {
  const { getProfile } = useStudentStore();
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getData = async (token) => {
    try {
      setIsLoading(true);
      const res = await toast.promise(getProfile(token), {
        loading: "Please wait...",
        success: "Profile loaded successfully",
        error: "Something went wrong!!",
      });
      setData(res);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!data.name && !isLoading) {
      getData(token).finally(() => setIsLoading(false));
    }
  }, []);
  return (
    <div className="md:px-10 px-5">
      <div className="my-5">
        <h1 className="text-[#000] text-2xl font-bold">PROFILE </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-10 grid-cols-1 ">
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder={data?.name || "Unknown"}
            required
          />
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
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder={data?.email || "Unknown"}
            required
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            phone number
          </label>
          <input
            type="tel"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder={data?.phone || "Unknown"}
            required
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            National ID
          </label>
          <input
            type="tel"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder={data?.national_id || "Unknown "}
            required
          />
        </div>
        <div className=" w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            date of birth
          </label>
          <input
            type="date"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder={data?.birth_date || "Unknown"}
            required
          />
        </div>

        <div className=" w-full">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            home address{" "}
          </label>
          <input
            type="text"
            id="Name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 placeholder:text-gray-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder={data?.address || "Unknown"}
            required
          />
        </div>

        <div className="flex justify-start items-center gap-5 w-full md:col-span-2">
          <button className="border px-5 py-2.5 rounded-lg bg-[#161B39] text-white font-medium text-[16px] tracking-wider">
            Save
          </button>
          <button
            onClick={() =>
              navigate("/student-dashboard/profile/change-password")
            }
            className="border px-5 py-2.5 rounded-lg border-[#161B39] text-[#161B39] font-medium text-[16px] tracking-wider"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
