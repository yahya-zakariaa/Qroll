import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import vector from "../../../../assets/Chevron Down (1).png";
import plues from "../../../../assets/Vector (11).png";
import { QRCode } from "react-qrcode-logo";
import useTeacherStore from "../../../../store/useTeacherStore";

export default function Qrcodeteacher() {
  const [isOpen, setIsOpen] = useState(false);
  const { id: courseId } = useParams();
  const { createSection, getSections, generateQr } = useTeacherStore();
  const toggleSidebar = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [qrVisible, setQrVisible] = useState(false);
  const [qrData, setQrData] = useState("");
  const [sections, setSections] = useState([]);
  const getQrCode = async (id) => {
    try {
      const res = await generateQr(id);
      setQrData(res);
      setQrVisible(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateSection = async () => {
    try {
      const name = `Section ${new Date().getTime()}`;
      const section = await createSection({ name, courseId });
      getQrCode(section.id);
    } catch (err) {
      console.error("Error in handleCreateSection:", err);
    } finally {
      fetchSections();
    }
  };
  const fetchSections = async () => {
    try {
      const res = await getSections(courseId);
      setSections(res);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSections();
  }, []);
  return (
    <div className="w-full">
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
      <div className="flex md:flex-row flex-col md:gap-0 gap-10">
        <div className=" flex-1 ">
          <h1 className="mb-5">choose section number</h1>
          <ul className="w-full">
            <li className="w-full">
              <button
                type="button"
                className="w-full  flex items-center cursor-pointer md:w-[51%] max-md:w-[95%] p-2 border-[1px] border-[#A1A1A1] text-gray-900 rounded-lg "
                onClick={() => {
                  toggleSidebar();
                  setQrVisible(false);
                }}
              >
                <span className="flex-1 text-start text-[#A1A1A1]  whitespace-nowrap">
                  {" "}
                  choose Section number
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

              <ul
                id="dropdown-example"
                className={`py-0 w-full transition-all duration-300 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <li
                  onClick={handleCreateSection}
                  className="flex items-center md:w-[51%] max-md:w-[95%] p-2 cursor-pointer border-[1px] border-[#A1A1A1] text-gray-900 transition duration-75 rounded-lg  hover:bg-gray-100 "
                >
                  <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                    <img src={plues} alt="" />
                  </span>
                  <span className="flex-1 ms-3 text-[#161B39] text-start whitespace-nowrap">
                    add new Section{" "}
                  </span>
                </li>
                {sections?.map((s) => (
                  <li
                    onClick={() => getQrCode(s.id)}
                    className="flex items-center md:w-[51%] max-md:w-[95%] p-2 cursor-pointer border-[1px] border-[#A1A1A1] text-gray-900 transition duration-75 rounded-lg   "
                  >
                    <span className="inline-flex items-center justify-center px-2 text-sm font-medium "></span>
                    <span className="flex-1 ms-3  text-[#161B39] text-start whitespace-nowrap">
                      {s.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className=" md:w-[45%] w-full   text-center flex items-center justify-start  ">
          {qrVisible && (
            <div className=" w-fit flex flex-col justify-center items-center me-20  ">
              <h3 className="text-xl text-center md:mb-5 mb-0 ">
                section QR code
              </h3>

              <div className="flex   justify-start   ">
                <div className="box ">
                  <span className="corner  max-md:hidden top-left"></span>
                  <span className="corner  max-md:hidden top-right"></span>
                  <span className="corner  max-md:hidden  bottom-left"></span>
                  <span className="corner  max-md:hidden  bottom-right"></span>

                  <div className="scan-text  max-md:hidden">Scan</div>

                  <div className="qr-center flex items-start justify-start">
                    <img
                      src={`data:image/png;base64,${qrData}`}
                      alt="QR Code"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
