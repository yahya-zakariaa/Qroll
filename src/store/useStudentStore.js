import { create } from "zustand";
import axios from "../api/axios";
import toast from "react-hot-toast";

const useStudentStore = create((set) => ({
  getProfile: async (token) => {
    try {
      const res = await axios.get("/profile", {
        headers: {
          Authorization: token?.toString(),
          Accept: "application/json",
        },
      });
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({
        error: message,
        isLogin: false,
      });
      throw message;
    }
  },
  getCourses: async () => {
    try {
      const res = await axios.get("/my-courses");
      console.log(res);

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Courses Error:", message);
      throw message;
    }
  },
  getCourse: async (id) => {
    try {
      const res = await axios.get(`/courses/${id}`);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Course Error:", message);
      throw message;
    }
  },
  scanLectureQr: async (data) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    console.log(data);
    try {
      const res = await axios.post(
        "https://your-backend.com/student/attendance/scan",
        formData
      );
      toast.success("add successfully");
      console.log(res);
    } catch (error) {
      console.log(error);

      const message = error.response?.data?.message || error.message;
      console.error("scan qr Error:", message);
      throw message;
    }
  },
  getLecturesAttendace: async (courseId) => {
    try {
      const res = await axios.get(
        `student/courses/${courseId}/lectures-attendance`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("scan qr Error:", message);
      throw message;
    }
  },
  getSectionsAttendace: async (courseId) => {
    try {
      const res = await axios.get(
        `student/courses/${courseId}/sections-attendance`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("scan qr Error:", message);
      throw message;
    }
  },
  getInbox: async () => {
    try {
      const res = await axios.get("/student/inbox");
      console.log(res);

      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("scan qr Error:", message);
      throw message;
    }
  },
}));
export default useStudentStore;
