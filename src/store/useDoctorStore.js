import { create } from "zustand";
import axios from "../api/axios";

const useDoctorStore = create((set) => ({
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
  getStudentsInCourse: async (id) => {
    try {
      const res = await axios.get(`/courses/${id}/students`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Course Error:", message);
      throw message;
    }
  },
  createLecture: async ({ name, courseId, token }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("course_id", courseId);

      const response = await axios.post("/admin/lectures", formData);

      return response.data?.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
}));
export default useDoctorStore;
