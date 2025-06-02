import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ContentStudent() {
  const { state: message } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#161B39] mb-4"
        >
          {/* <img src={back} alt="Back" /> */}
          <span>Back</span>
        </button>
        <h1 className="text-xl font-bold text-[#161B39] mb-4">Full Content</h1>
        <p className="leading-7 text-gray-700">{message}</p>
      </div>
    </div>
  );
}
