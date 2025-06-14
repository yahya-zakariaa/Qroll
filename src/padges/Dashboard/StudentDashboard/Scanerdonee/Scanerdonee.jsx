import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function ScanDone() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className={`text-6xl mb-4 ${
          state?.success ? "text-green-500" : "text-red-500"
        }`}
      >
        {state?.success ? "✓" : "✗"}
      </div>

      <h1 className="text-xl text-center font-bold mb-10">
        {state?.success
          ? "Attendance Recorded Successfully!"
          : "Attendance Failed"}
      </h1>

      {state?.message && <p className="text-red-500 mb-4 text-center">{state.message}</p>}

      <button
        onClick={() => navigate(`/student-dashboard/courses/${id}`)}
        className="bg-[#161B39] text-white px-6 py-2 rounded"
      >
        Back to Courses
      </button>
    </div>
  );
}
