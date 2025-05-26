import React, { useState } from "react";
import imge1 from "../../assets/465541941_1115304710376060_7367626225223365144_n 1.png";
import img2 from "../../assets/logo.png";
import img3 from "../../assets/Group 253.png";
import img4 from "../../assets/Group 247.png";
import img5 from "../../assets/Group 245.png";
import img6 from "../../assets/Group 241.png";
import img7 from "../../assets/Group 243.png";
import img8 from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import admin from "../../assets/Group 1000011676.png";
import techer from "../../assets/Group 1000011686.png";
import docter from "../../assets/Group 1000011681.png";
import student from "../../assets/Group 1000011691.png";

export default function Home() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");

  const handleSelectUser = (type) => {
    setUserType(type);
    localStorage.setItem("userType", type);
    setError("");
  };

  const handleNext = () => {
    if (!userType) {
      setError("Please select a user type before proceeding.");
      return;
    }
    navigate("/login");
  };

  return (
    <>
      <div className="flex w-full h-screen o flex-col justify-start items-center md:overflow-hidden   ">
        <nav className="flex justify-between md:px-16 items-center w-full  px-10 py-5 ">
          <img className="w-[30%] md:w-[200px]" src={img2} alt="" />

          <img className="w-[35%] md:w-[200px] " src={img3} alt="" />
        </nav>

        <div className="container flex items-center justify-center">
          <div className="w-[45%] h-full hidden md:flex justify-center px-16 items-center ">
            <img className=" w-full h-[600px]  " src={imge1} alt="" />
          </div>

          <div className="flex-1  w-full  ">
            <div className=" text-start max-md:mt-5">
              <h1 className="text-4xl max-md:hidden text-center mb-7">
                select user type
              </h1>
              <div className="flex justify-center items-center flex-col gap-10  ">
                <div className="grid grid-cols-2 w-[350px] gap-10 grid-rows-2">
                  <div
                    className="w-full  cursor-pointer "
                    onClick={() => handleSelectUser("admin")}
                  >
                    {" "}
                    <img className="w-full"
                      src={userType === "admin" ? admin : img4}
                      alt="admin"
                    />{" "}
                  </div>

                  <div
                    className="w-full  cursor-pointer"
                    onClick={() => handleSelectUser("teacher")}
                  >
                    {" "}
                    <img className="w-full"
                      src={userType === "teacher" ? techer : img6}
                      alt="techer"
                    />
                  </div>
                  <div
                    className="w-full  cursor-pointer "
                    onClick={() => handleSelectUser("doctor")}
                  >
                    {" "}
                    <img className="w-full"
                      src={userType === "doctor" ? docter : img5}
                      alt="doctor"
                    />
                  </div>

                  <div
                    className="w-full  cursor-pointer "
                    onClick={() => handleSelectUser("student")}
                  >
                    {" "}
                    <img className="w-full" src={userType === "student" ? student : img7} alt="" />
                  </div>
                </div>
                <button
                    className=" flex justify-center items-center gap-2 bg-[#161B39] w-[277px] p-[13px] rounded-[12px] "
                    onClick={handleNext}
                  >
                    <span className=" text-white">next </span>
                    <i
                      className="fa-solid fa-arrow-right-long mt-1"
                      style={{ color: "#ffffff" }}
                    />
                  </button>
              </div>
              {error && <p className="mt-4 text-red-500">{error}</p>}{" "}
              
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}
