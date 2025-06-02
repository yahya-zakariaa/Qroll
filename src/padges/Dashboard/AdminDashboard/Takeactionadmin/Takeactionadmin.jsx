import { useFormik } from "formik";
import useAdminStore from "../../../../store/useAdminStore";
import * as Yup from "yup";

export default function Takeactionadmin() {
  const { takeAction } = useAdminStore();
  const handleTakeAction = async (data) => {
    try {
      const res = await takeAction(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const validationSchema = Yup.object({
    absence_percentage: Yup.number()
      .min(0, "Minimum is 0")
      .max(100, "Maximum is 100")
      .required("Required"),
    type: Yup.string()
      .oneOf(["lecture", "section"], "Invalid type")
      .required("Required"),
    message: Yup.string().min(5, "Message too short").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      absence_percentage: "",
      type: "",
      message: "",
    },
    validationSchema,
    onSubmit: handleTakeAction,
  });
  return (
    <div>
      <div className="m-7 max-sm:m-5 ">
        <h1 className="text-[#71717A] text-xl">Take an action</h1>
      </div>

      <form onSubmit={formik.handleSubmit} className="w-full">
        <div className="w-[80%] mb-6 max-sm:w-[90%]">
          <label
            htmlFor="absence_percentage"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Absence Percentage
          </label>
          <input
            type="number"
            min="0"
            max="100"
            name="absence_percentage"
            value={formik.values.absence_percentage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="%"
            required
          />
          {formik.touched.absence_percentage &&
            formik.errors.absence_percentage && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.absence_percentage}
              </p>
            )}
        </div>

        <div className="w-[80%] mb-6 flex gap-6 items-center max-sm:w-[90%]">
          <label className=" gap-2 text-md text-gray-900   w-[50%] py-3 bg-gray-50 flex items-center justify-start px-5 rounded-md border border-gray-300">
            <input
              type="radio"
              name="type"
              value="lecture"
              checked={formik.values.type === "lecture"}
              onChange={formik.handleChange}
            />
            Lecture
          </label>
          <label className=" gap-2 text-md text-gray-900   w-[50%] py-3 bg-gray-50 flex items-center justify-start px-5 rounded-md border border-gray-300">
            <input
              type="radio"
              name="type"
              value="section"
              checked={formik.values.type === "section"}
              onChange={formik.handleChange}
            />
            Section
          </label>
          {formik.touched.type && formik.errors.type && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.type}</p>
          )}
        </div>

        <div className="w-[80%] mb-6 max-sm:w-[90%]">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your message..."
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
          )}
        </div>

        <div className="mb-10 flex justify-center w-[80%]">
          <button
            type="submit"
            className="bg-[#161B39] text-white w-60 h-12 rounded-[10px]"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
