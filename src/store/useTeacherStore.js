import { create } from "zustand";
import axios from "../api/axios";
import toast from "react-hot-toast";

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
  getSections: async (id) => {
    try {
      const res = await axios.get(`courses/${id}/sections`);
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
  addStudentToSections: async ({ academic_id, id }) => {
    try {
      const res = await axios.post(`courses/${id}/add-student-to-sections`, {
        academic_id,
      });
      toast.success(res.data.message);
      console.log(res);

      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
  generateQr: async (id) => {
    try {
      const res = await axios.get(`/sections/${id}/generate-qr`);
      console.log(res);
      return res.data.qr;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
  finalSectionsReport: async (courseId) => {
    try {
      const res = await axios.get(
        `courses/${courseId}/excessive-absence/sections`
      );
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("section report Error:", message);
      throw message;
    }
  },
  getSectionAttendace: async (courseId, sectionId) => {
    try {
      const res = await axios.get(
        `courses/${courseId}/sections/${sectionId}/attendance`
      );
      console.log(res);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
  changePassword: async (data) => {
    try {
      const res = await axios.post("/change-password", data);
      console.log(res);
      toast.success("password reseted successfully");
    } catch (error) {
      console.log("change password error:", error);
      const message = error.response?.data?.message || error.message;
      console.error("take action Error:", message);
      throw message;
    }
  },
}));
export default useTeacherStore;
