import { create } from "zustand";
import axios from "../api/axios";
import toast from "react-hot-toast";

const useAdminStore = create((set) => ({
  login: async ({ email, password, role_id }) => {
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role_id", role_id);

      const res = await axios.post("/login", formData, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(res);
      set({
        user: res.data.user,
        isLogin: true,
        error: null,
      });
      localStorage.setItem("token", res.data.token);
      return { role: res?.data?.user?.role };
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      set({
        error: message,
        isLogin: false,
      });
      throw message;
    }
  },
  logout: async () => {
    try {
      await axios.post("auth/logout", {
        email: "",
        password: "",
      });
      set({ user: {}, isLogin: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || err.message,
        isLogin: false,
      });
    }
  },

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

  addDoctor: async ({
    name,
    email,
    phone,
    password,
    national_id,
    education,
  }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("education", education);
      formData.append("national_id", national_id);
      formData.append("password", password);
      const res = await axios.post("/admin/doctors", formData);
      console.log(res);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Something went wrong while deleting the doctor.";
      console.error("Delete Doctor Error:", message);
      throw message;
    }
  },

  getDoctors: async () => {
    try {
      const res = await axios.get("admin/doctors");
      console.log(res);
      return res.data.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Something went wrong while deleting the doctor.";
      console.error("Delete Doctor Error:", message);
      throw message;
    }
  },

  getDoctor: async (id) => {
    try {
      const res = await axios.get(`/admin/doctors/${id}`);
      console.log(res);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error?.message;
      console.error("Get Doctor Error:", message);
      throw message;
    }
  },

  updateDoctor: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(`/admin/doctors/${id}`, formData, {
        headers: {
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Update Doctor Error:", message);
      throw message;
    }
  },

  deleteDoctor: async (id) => {
    try {
      const res = await axios.delete(`/admin/doctors/${id}`);
      console.log(res);
      console.log("Doctor deleted successfully:", res.data);
      return res.data.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Something went wrong while deleting the doctor.";
      console.error("Delete Doctor Error:", message);
      throw message;
    }
  },

  getTeachers: async () => {
    try {
      const res = await axios.get("/admin/teachers");
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Teachers Error:", message);
      throw message;
    }
  },

  getTeacher: async (id) => {
    try {
      const res = await axios.get(`/admin/teachers/${id}`);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Teacher Error:", message);
      throw message;
    }
  },

  addTeacher: async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post("/admin/teachers", formData, {
        headers: {
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Add Teacher Error:", message);
      throw message;
    }
  },

  updateTeacher: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(`/admin/teachers/${id}`, formData, {
        headers: {
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Update Teacher Error:", message);
      throw message;
    }
  },

  deleteTeacher: async (id) => {
    try {
      const res = await axios.delete(`/admin/teachers/${id}`);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Delete Teacher Error:", message);
      throw message;
    }
  },

  getStudents: async () => {
    try {
      const res = await axios.get("/admin/students");
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Students Error:", message);
      throw message;
    }
  },

  getStudent: async (id) => {
    try {
      const res = await axios.get(`/admin/students/${id}`);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Student Error:", message);
      throw message;
    }
  },

  addStudent: async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post("/admin/students", formData, {
        headers: {
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Add Student Error:", message);
      throw message;
    }
  },
  getStudentCourses: async (id) => {
    try {
      const res = await axios.get(`/admin/students/${id}/courses`);
      console.log(res);

      return res.data.courses;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Course Error:", message);
      throw message;
    }
  },
  updateStudentCourses: async (studentId, courseIds) => {
    try {
      const formData = new FormData();
      courseIds.forEach((id, index) => {
        formData.append(`course_ids[${index}]`, id);
      });
      const res = await axios.post(
        `/admin/students/${studentId}/add-courses`,
        formData
      );
      console.log(res);
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Update Student Error:", message);
      throw message;
    }
  },
  updateStudent: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(`/admin/students/${id}`, formData, {
        headers: {
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Update Student Error:", message);
      throw message;
    }
  },

  deleteStudent: async (id) => {
    try {
      console.log(id);

      const res = await axios.delete(`/admin/students/${id}`);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Delete Student Error:", message);
      throw message;
    }
  },

  getCourses: async () => {
    try {
      const res = await axios.get("/admin/courses");
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Courses Error:", message);
      throw message;
    }
  },

  getCourse: async (id) => {
    try {
      const res = await axios.get(`/admin/courses/${id}`);
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

  addCourse: async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post("/admin/courses", formData, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(res);
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Add Course Error:", message);
      throw message;
    }
  },

  updateCourse: async (id, data) => {
    try {
      const formData = new FormData();
      formData.append("_method", "PUT");
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(`/admin/courses/${id}`, formData, {
        headers: {
          Accept: "application/json",
        },
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Update Course Error:", message);
      throw message;
    }
  },

  deleteCourse: async (id) => {
    try {
      const res = await axios.delete(`/admin/courses/${id}`);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Delete Course Error:", message);
      throw message;
    }
  },
  getLectures: async (id) => {
    try {
      const res = await axios.get(`courses/${id}/lectures`);
      console.log(res);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
  getSections: async (id) => {
    try {
      const res = await axios.get(`/courses/${id}/sections`);
      console.log(res);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
  finalLecturesReport: async (courseId) => {
    try {
      const res = await axios.get(
        `courses/${courseId}/excessive-absence/lectures`
      );
      console.log(res);
      return res.data;
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
      console.log(res);

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Create Lecture Error:", message);
      throw message;
    }
  },
  getSectionAttendace: async (courseId, sectionId) => {
    try {
      console.log(courseId, sectionId);

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
  getLectureAttendace: async (courseId, lectureId) => {
    try {
      const res = await axios.get(
        `courses/${courseId}/lectures/${lectureId}/attendance`
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
  importFromExcel: async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`/admin/import-users`, formData);
      toast.success("Import successful!");
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      console.error("import file error:", message);
      throw message;
    }
  },
  sendMessage: async (data) => {
    try {
      const res = await axios.post("/inbox", data);
      console.log(res);
      toast.success("message send successfully");
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      console.error("send message error:", message);
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
  takeAcion: async (data) => {
    try {
      const res = await axios.post("/take-action", data);
      console.log(res);
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("take action Error:", message);
      throw message;
    }
  },
}));

export default useAdminStore;
