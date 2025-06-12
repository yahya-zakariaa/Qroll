import { useNavigate } from "react-router-dom";
import useDoctorStore from "../../../../store/useDoctorStore";
import { useFormik } from "formik";
export default function Changepassowreddoctoer() {
  const navigate = useNavigate();
  const { changePassword } = useDoctorStore();
  const handleChangePassword = async (data) => {
    const formData = new FormData();
    formData.append("old_Password", data.old_password);
    formData.append("new_password", data.new_password);
    try {
      await changePassword(formData);
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
    },
    onSubmit: handleChangePassword,
  });
  return (
    <div>
      <div className="flex gap-6 md:m-10 max-md:m-3 items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 md:me-5 items-center  text-[#161B39]"
        >
          <i className="fa-solid fa-arrow-left-long" />
          <h1>BACK</h1>
        </button>
        <h1 className="text-[#71717A] ">PROFILE </h1>
        <i className="fa-solid fa-chevron-right" style={{ color: "#71717a" }} />
        <h1 className="text-[#71717A] ">CHANGE PASSWORD </h1>
      </div>
      <form onSubmit={formik.handleSubmit} className="mx-[5%]">
        <div className="mb-5 md:w-[55%] ">
          <label
            htmlFor="oldPassword"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            old password
          </label>
          <input
            type="password"
            id="oldPassword"
            name="old_password"
            value={formik.values.old_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="***********************"
            required
          />
        </div>
        <div className="mb-5 md:w-[55%]  ">
          <label
            htmlFor="newPassword"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            {" "}
            new password
          </label>
          <input
            type="password"
            id="newPassword"
            name="new_password"
            value={formik.values.new_password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:ring-1 focus:outline-none h-12 "
            placeholder="***********************"
            required
          />
        </div>
        <div className="mb-5 w-[55%] m-auto mt-14 ">
          <button
            type="submit"
            className="bg-[#161B39] text-white  w-[191px] h-[49px] rounded-[12px]"
          >
            save password
          </button>
        </div>
      </form>
    </div>
  );
}
