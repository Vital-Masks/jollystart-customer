import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isEmpty } from "@/utils/utils";
import axios from "axios";

export default function ChangePasswordForm({ memberData }) {
  const [Loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    old_password: Yup.string().required("Old Password is required"),
    new_password: Yup.string().required("New Password is required"),
    confirm_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      updatePassword(values);
    },
  });

  const updateData = async (obj,id) => {
    setLoading(true);
    let data = {
      password: obj.confirm_password,
    };
    try {
      // Perform the API request (replace the URL with your actual API endpoint)
      const response = await axios.put(
        "http://localhost:3000/api/member/"+id,
        data
      );
      console.log(response);

      // Handle success
      if (!isEmpty(response.data.result)) {
        toast.success("successfully changed");
        localStorage.setItem("userData", JSON.stringify(response.data.result));
        window.location.href = "/info";
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting data:", error);

      // Display error message (you can use a toast library or another UI element)
      toast.error("Error Login data. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const updatePassword = (formData) => {
    // Add logic to update password
    if (memberData && memberData.email) {
      console.log(memberData.password);
      let orinalPassword = memberData.password;
      if (orinalPassword !== formData.old_password) {
        toast.error("password incorrect");
        return;
      } else {
        updateData(formData,memberData._id)
        // toast.success("Successfully Changed");
      }
    }
    console.log(formData);
  };

  return (
    <div className="px-10 my-10">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1">
            <label
              htmlFor="old_password"
              className="block text-sm font-medium text-gray-700"
            >
              Old Password
            </label>
            <input
              type="password"
              id="old_password"
              name="old_password"
              value={formik.values.old_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 ps-4 bg-transparent border rounded-full mt-1 "
              //   className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {formik.touched.old_password && formik.errors.old_password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.old_password}
              </div>
            ) : null}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="new_password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="new_password"
              name="new_password"
              value={formik.values.new_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 ps-4 bg-transparent border rounded-full mt-1 "
            />
            {formik.touched.new_password && formik.errors.new_password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.new_password}
              </div>
            ) : null}
          </div>
          <div className="col-span-1">
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="p-2 ps-4 bg-transparent border rounded-full mt-1 "
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.confirm_password}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
          {
            Loading ? "Loading":"Update"
          }  
          </button>
        </div>
      </form>
    </div>
  );
}
