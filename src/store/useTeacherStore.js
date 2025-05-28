import { create } from "zustand";
import axios from "../api/axios";

const useTeacherStore = create((set) => ({
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
  getSections: async () => {
    try {
      const res = await axios.get("/sections");
      console.log(res);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("get Sections Error:", message);
      throw message;
    }
  },
  createSection: async ({ name, courseId }) => {
    try {
      console.log(courseId, name);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("course_id", courseId);

      const res = await axios.post("/sections", formData);
      console.log(res);

      return res.data?.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Section Error:", message);
      throw message;
    }
  },
  addStudentToSection: async ({ academic_id, id }) => {
    try {
      const res = await axios.post(`/teacher/sections/${id}/add-student`, {
        academic_id,
      });
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
}));
export default useTeacherStore;
