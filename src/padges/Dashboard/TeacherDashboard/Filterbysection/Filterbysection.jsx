import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import useTeacherStore from "../../../../store/useTeacherStore";
export default function Filterbysection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const { getSections } = useTeacherStore();

  const fetchSections = async () => {
    try {
      const res = await getSections(id);
      setSections(res);
      console.log(sections);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSections(id);
  }, []);
  return (
    <div>
      <div className="flex gap-3 md:m-8 max-md:m-3 items-center">
        <button
          onClick={() => navigate("/teacher-dashboard/coursestecher")}
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
        <div className="flex flex-wrap gap-4 mt-8 ">
          {sections?.map((s) => (
            <button
              onClick={() =>
                navigate(
                  "/teacher-dashboard/coursestecher/filterbysection/sectionattentencereport"
                )
              }
              className="w-[20%] h-14 border-[1px] border-[#161B39] text-[#161B39] rounded-[7px]"
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
