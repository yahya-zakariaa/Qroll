import { create } from "zustand";
import axios from "../api/axios";

const useAuthStore = create((set) => ({
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
  myStats: async () => {
    try {
      const res = await axios.get("/my-stats");
      return res.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error("Get Course Error:", message);
      throw message;
    }
  },
}));

export default useAuthStore;
