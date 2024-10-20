import Container from "@/components/Shared/Container";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { isEmpty } from "@/utils/utils";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  
});

const ContactPage = () => {
  const router = useRouter();

  const [Loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        // Perform the API request (replace the URL with your actual API endpoint)
        const response = await axios.post(
          "https://api.jollystarssc.com/api/member/login",
          values
        );
        console.log(response);

        // Handle success
        if (!isEmpty(response.data.result)) {
          toast.success("Login successfully");
          localStorage.setItem('userData', JSON.stringify(response.data.result));
          window.location.href='/info';
          resetForm();
        } else {
          toast.error("email or password incorrect");
        }
      } catch (error) {
        // Handle error
        console.error("Error submitting data:", error);

        // Display error message (you can use a toast library or another UI element)
        toast.error("Error Login data. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div className="w-full bg-white border rounded-xl">
      <Container className="text-center">
        <h1 className="text-2xl font-bold text-slate-800 uppercase">LOGIN</h1>
        <p className="mt-5 text-slate-600 p-5">
          Founded in 1948 by the esteemed alumni of Jaffna Hindu College, Jolly
          Stars Sports Club has proudly served as a symbol of sporting
          excellence and camaraderie for over seven decades. As we approach our
          remarkable 75th anniversary, we reflect upon our rich history and
          celebrate the countless achievements that have shaped our club
        </p>
        <div className="w-full h-full p-5 rounded">
          <form onSubmit={formik.handleSubmit}>
            <div
              className="flex flex-col justify-between h-full text-slate-500"
              style={{ maxWidth: "400px", margin: "0 auto" }}
            >
              <div className="mt-5 space-y-2">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.email && formik.errors.email && "border-red"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.email}
                  </div>
                )}

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`bg-[#ebedeb] w-full text-sm py-3 px-3 rounded ${
                    formik.touched.password &&
                    formik.errors.password &&
                    "border-red"
                  }`}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm text-start ps-2">
                    {formik.errors.password}
                  </div>
                )}

                
              </div>
              <button
                type="submit"
                className="px-4 py-2 mt-10 text-white bg-blue-900 rounded-md "
                disabled={Loading}
              >
                {Loading ? "Loading ..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>

        <div className="py-3 text-sm">
          <Link
            id="comments-description"
            className="text-[#7E7A7C]"
            href="/memberpackage"
          >
            Register for membership?
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
