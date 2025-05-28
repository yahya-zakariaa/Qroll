import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDoctorStore from "../../../../store/useDoctorStore";
export default function Filterletureeorsectiondoctoer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lectures, setLectures] = useState([]);
  const [sections, setSections] = useState([]);
  const { getLectures, getSections } = useDoctorStore();

  const fetchLectures = async () => {
    try {
      const res = await getLectures(id);
      setLectures(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSections = async () => {
    try {
      const res = await getSections(id);
      setSections(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchLectures(id);
    fetchSections(id);
  }, []);
  return (
    <div>
      <div className="flex gap-3 md:m-10 max-md:m-3 items-center">
        <button
          onClick={() => navigate("/doctor-dashboard/coursessdoctoer")}
          className="flex gap-2 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A] ">COURCES </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> CS </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] "> section attendance </h1>
      </div>
      <div>
        <h2 className="text-xl ">sections</h2>
        <div className="flex flex-wrap gap-4 mt-8 text-lg font-medium">
          {sections?.length > 0
            ? sections?.map((s) => (
                <button
                  onClick={() =>
                    navigate(
                      "/doctor-dashboard/coursessdoctoer/sectionfilterdocter"
                    )
                  }
                  className="w-[20%] h-14 border-[1px] border-[#161B39] hover:bg-[#161B39] hover:text-white transition-all duration-300 font-medium text-[#161B39] rounded-[7px]"
                >
                  {s.name}
                </button>
              ))
            : "No Sections"}
        </div>
      </div>

      <div className="w-[95%] my-10 h-[1px] bg-[#A1A1A1]"></div>

      <div>
        <h2 className="text-xl ">lectures</h2>
        <div className="flex flex-wrap gap-4 mt-8 text-lg font-medium">
          {lectures?.length > 0
            ? lectures?.map((l) => (
                <button
                  onClick={() =>
                    navigate(
                      "/doctor-dashboard/coursessdoctoer/lecturesfilterdoctoer"
                    )
                  }
                  className="w-[20%] h-14 border-[1px] border-[#161B39] hover:bg-[#161B39] hover:text-white transition-all duration-300 font-medium text-[#161B39] rounded-[7px]"
                >
                  {l.name}
                </button>
              ))
            : "No Lectures"}
        </div>
      </div>
    </div>
  );
}
