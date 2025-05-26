import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import vector from "../../../../assets/Chevron Down (1).png";
import plues from "../../../../assets/Vector (11).png";
import { QRCode } from "react-qrcode-logo";
import useDoctorStore from "../../../../store/useDoctorStore";
export default function Qrcodeleturedoctoer() {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const toggleSidebar = () => setIsOpen(!isOpen);
  const { createLecture } = useDoctorStore();
  const navigate = useNavigate();
  const [qrVisible, setQrVisible] = useState(false);
  const [qrData, setQrData] = useState("");

  const handleCreateLecture = async () => {
    try {
      const name = `Lecture ${new Date().getTime()}`;

      const lecture = await createLecture({ name, id });

      if (lecture) {
        const qrPayload = {
          lectureId: lecture.id,
          courseId: lecture.course_id,
          name: lecture.name,
          generatedAt: new Date().toISOString(),
        };

        setQrData(JSON.stringify(qrPayload));
        setQrVisible(true);
      }
    } catch (err) {
      console.error("Error in handleCreateLecture:", err);
    }
  };
  return (
    <div className="">
      <div className="flex gap-3 md:m-10 max-md:m-3 items-center">
        <button
          onClick={() => navigate("/doctor-dashboard/coursessdoctoer")}
          className="flex gap-2 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>{" "}
        </button>
        <h1 className="text-[#71717A] ">COURCES </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> CS </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> Generate QR code </h1>
      </div>
      <div className="">
        <h1 className="mb-5">choose section number</h1>
        <ul className="">
          <li className="">
            <button
              type="button"
              className="  flex items-center cursor-pointer md:w-[51%] max-md:w-[95%] p-2 border-[1px] border-[#A1A1A1] text-gray-900 rounded-lg "
              onClick={toggleSidebar}
            >
              <span className="flex-1 text-start text-[#A1A1A1]  whitespace-nowrap">
                {" "}
                choose lecture number
              </span>
              <span className="inline-flex items-center justify-center px-2 text-sm font-medium">
                <img
                  src={vector}
                  alt=""
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            {/* القائمة المنسدلة */}
            <ul
              id="dropdown-example"
              className={`py-0  transition-all duration-300 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li
                onClick={handleCreateLecture}
                className="flex items-center md:w-[51%] max-md:w-[95%] p-2 cursor-pointer border-[1px] border-[#A1A1A1] text-gray-900 transition duration-75 rounded-lg  hover:bg-gray-100 "
              >
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={plues} alt="" />
                </span>
                <span className="flex-1 ms-3 text-[#161B39] text-start whitespace-nowrap">
                  add new lecture{" "}
                </span>
              </li>
              <li className="flex items-center md:w-[51%] max-md:w-[95%] p-2 cursor-pointer border-[1px] border-[#A1A1A1] text-gray-900 transition duration-75 rounded-lg   ">
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium "></span>
                <span className="flex-1 ms-3  text-[#161B39] text-start whitespace-nowrap">
                  {" "}
                  lecture 1{" "}
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="w-[51%]   text-center ">
        {qrVisible && (
          <div className=" mt-[8%]  ">
            <h3 className="text-xl text-center mb-5 ">section QR code</h3>

            <div className="flex   justify-center  flex-wrap max-md:ml-[85%] ">
              <div className="box ">
                <span className="corner  max-md:hidden top-left"></span>
                <span className="corner  max-md:hidden top-right"></span>
                <span className="corner  max-md:hidden  bottom-left"></span>
                <span className="corner  max-md:hidden  bottom-right"></span>

                <div className="scan-text  max-md:hidden">Scan</div>

                <div className="qr-center">
                  <QRCode value={qrData} size={230} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
