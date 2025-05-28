import { create } from "zustand";
import axios from "../api/axios";

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
    try {
      const res = await axios.post(
        "https://your-backend.com/student/lecture-attendance/scan",
        formData
      );
      console.log(res);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("scan qr Error:", message);
      throw message;
    }
  },
}));
export default useStudentStore;
