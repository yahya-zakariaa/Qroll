import React, { useEffect, useState } from "react";
import courses from "../../../../assets/Group 1000011649.png";
import student from "../../../../assets/Group 1000011649 (1).png";
import useAuthStore from "../../../../store/useAuthStore";
export default function DoctorDashboard() {
  const { myStats } = useAuthStore();
  const [statistics, setStatistics] = useState({});

  const fetchStats = async () => {
    try {
      const res = await myStats();
      setStatistics(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <div>
      <div className="m-10 max-sm:m-5 ">
        <h1 className="text-[#71717A] text-2xl">Home </h1>
      </div>

      <div className="flex gap-32 m-16 max-sm:m-1">
        <div className="flex gap-3">
          <div>
            <img src={courses} alt="" />
          </div>

          <div>
            <p>courses </p>
            <p>{statistics.courses_count}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src={student} alt="" />
          </div>

          <div>
            <p>students </p>
            <p>{statistics.students_count} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
