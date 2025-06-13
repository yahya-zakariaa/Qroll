import qrcode from "../../../../assets/qr-code-svgrepo-com.png";
import vectorright from "../../../../assets/Vector (8).png";
import lucture from "../../../../assets/Group 3.png";
import sectionattend from "../../../../assets/lecture-conference-svgrepo-com.png";
import {
  Link,
  Navigate,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function Coursesstudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex gap-2 items-center m-6 max-sm:m-5">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#161B39] mb-4"
        >
          <span>Back</span>
        </button>
        <h1 className="text-[#71717A] ">COURCES </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> CS </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
      </div>
      <div className="md:relative ">
        <div className=" md:w-[63%] max-md:w-[95%] md:left-[17%] md:absolute top-40">
          <ul className="">
            <li>
              <Link
                to={`/student-dashboard/courses/${id}/scan-qr`}
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={qrcode} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  {" "}
                  scan QR code
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>
              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>
            <li>
              <Link
                to={`/student-dashboard/courses/${id}/sections`}
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={sectionattend} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  {" "}
                  view section attendance report
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>

            <li>
              <Link
                to={`/student-dashboard/courses/${id}/lectures`}
                className="flex items-center p-2 text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 "
              >
                <span className="ml-0">
                  {" "}
                  <img src={lucture} alt="" />{" "}
                </span>
                <span className="flex-1 ms-3 text-[#161C39] whitespace-nowrap">
                  view lectures attendance report{" "}
                </span>
                <span className="inline-flex items-center justify-center px-2 text-sm font-medium ">
                  <img src={vectorright} alt="" />
                </span>
              </Link>

              <div className="h-[0.1px] bg-[#a1a1a1d6] w-[100%]   m-1"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
