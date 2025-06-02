import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminStore from "../../../../store/useAdminStore";
import { useFormik } from "formik";
export default function Actionmassageadmin() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getStudent, sendMessage } = useAdminStore();
  const [student, setStudent] = useState({});
  const fetchStudent = async () => {
    try {
      const student = await getStudent(id);
      setStudent(student);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendMessage = async (data) => {
    data.receiver_id = id || student?.student_id;
    try {
      const res = await sendMessage(data);
    } catch (error) {
      console.log(error);
    } finally {
      formik.resetForm();
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const formik = useFormik({
    initialValues: {
      message: "",
    },
    onSubmit: handleSendMessage,
  });
  return (
    <div>
      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#161B39] mb-4"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
          <h1 className="text-[#71717A] ">inbox </h1>

          <i
            className="fa-solid fa-chevron-right"
            style={{ color: "#71717a" }}
          />
          <h1 className="text-[#71717A] ">message </h1>
        </button>

        <div className="w-full">
          <h1 className="  text-[#161B39] mb-4">
            student name: <span className="ml-20">{student?.name} </span>{" "}
          </h1>
          <h1 className="  text-[#161B39] mb-4">
            {" "}
            student academic ID:{" "}
            <span className="ml-20"> {student?.academic_id} </span>{" "}
          </h1>
          <form
            action="#"
            onSubmit={formik.handleSubmit}
            className="flex flex-col w-full md:w-[50%] items-center justify-center gap-10"
          >
            <textarea
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="message"
              id="message"
              rows={10}
              className="bg-gray-200 rounded-md  px-4 py-2 mt-5 w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-[#161c39] px-5 py-2 rounded-lg  text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
