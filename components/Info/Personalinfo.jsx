import React, { useState, useMemo } from "react";
import InputField from "../UI/InputField";
import SchoolinfoCard from "./InfoCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MemberTitleOptions } from "@/services/defaultConst";
import ChangePasswordForm from "./updatepassword";
import { isEmpty } from "@/utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  membershipCategory: Yup.string().required("Category is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dateOfBirth: Yup.string().required("DOB is required"),

  passportNumber: Yup.string().required("Passport Number is required"),
  email: Yup.string().required("email is required"),
  userName: Yup.string().required("username is required"),
  phoneNumber: Yup.string().required("phoneNumber is required"),

  telephoneNumber: Yup.string().required("telephoneNumber is required"),
  address: Yup.string().required("address is required"),
  maritalStatus: Yup.string().required("maritalStatus is required"),
});
const Personalinfo = ({ memberData }) => {
  const [Loading, setLoading] = useState(false);

  console.log(memberData, "line 23 ");

  const updateData = async (obj, id) => {
    setLoading(true);

    try {
      // Perform the API request (replace the URL with your actual API endpoint)
      const response = await axios.put(
        "https://api.jollystarssc.com/api/member/" + id,
        obj
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
  const formik = useFormik({
    initialValues: {
      membershipCategory: memberData ? memberData.membershipCategory : "",
      firstName: memberData ? memberData.firstName : "",
      lastName: memberData ? memberData.lastName : "",
      passportNumber: memberData ? memberData.passportNumber : "",

      dateOfBirth: memberData ? memberData.dateOfBirth : "",
      email: memberData ? memberData.email : "",
      phoneNumber: memberData ? memberData.phoneNumber : "",
      telephoneNumber: memberData ? memberData.telephoneNumber : "",

      address: memberData ? memberData.address : "",
      maritalStatus: memberData ? memberData.maritalStatus : "",
      userName: memberData ? memberData.userName : "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Submit form data to server or perform other actions
      console.log("Submitted values:", values);
      updateData(values, memberData._id);
    },
  });

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
        <SchoolinfoCard memberData={memberData} />
      </div>
      <br></br>
      <br></br>

      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Personal Details
        </div>
        {!isEmpty(memberData) && (
          <form onSubmit={formik.handleSubmit}>
            <div className="px-10 my-10 ">
              <div className="grid grid-cols-4 gap-3">
                <div className="grid grid-cols-4 col-span-4 gap-3">
                  <InputField
                    label="Title"
                    name="membershipCategory"
                    required={true}
                    value={formik.values.membershipCategory}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("membershipCategory")}
                    error={
                      formik.touched.membershipCategory &&
                      formik.errors.membershipCategory && (
                        <p>{formik.errors.membershipCategory}</p>
                      )
                    }
                  />
                  <InputField
                    label="First Name"
                    name="firstName"
                    required={true}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("firstName")}
                    error={
                      formik.touched.firstName &&
                      formik.errors.firstName && (
                        <p>{formik.errors.firstName}</p>
                      )
                    }
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    required={true}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("lastName")}
                    error={
                      formik.touched.lastName &&
                      formik.errors.lastName && <p>{formik.errors.lastName}</p>
                    }
                  />
                  <InputField
                    label="NIC/ Passport ID"
                    name="passportNumber"
                    required={true}
                    value={formik.values.passportNumber}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("passportNumber")}
                    error={
                      formik.touched.passportNumber &&
                      formik.errors.passportNumber && (
                        <p>{formik.errors.passportNumber}</p>
                      )
                    }
                  />
                  <InputField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    required={true}
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("dateOfBirth")}
                    error={
                      formik.touched.dateOfBirth &&
                      formik.errors.dateOfBirth && (
                        <p>{formik.errors.dateOfBirth}</p>
                      )
                    }
                  />
                  <InputField
                    label="E-Mail Address"
                    type="email"
                    name="email"
                    required={true}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("email")}
                    error={
                      formik.touched.email &&
                      formik.errors.email && <p>{formik.errors.email}</p>
                    }
                  />
                  <InputField
                    label="Mobile Number"
                    name="phoneNumber"
                    required={true}
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("phoneNumber")}
                    error={
                      formik.touched.phoneNumber &&
                      formik.errors.phoneNumber && (
                        <p>{formik.errors.phoneNumber}</p>
                      )
                    }
                  />
                  <InputField
                    label="Telephone Number"
                    name="telephoneNumber"
                    required={true}
                    value={formik.values.telephoneNumber}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("telephoneNumber")}
                    error={
                      formik.touched.telephoneNumber &&
                      formik.errors.telephoneNumber && (
                        <p>{formik.errors.telephoneNumber}</p>
                      )
                    }
                  />
                  <div className="col-span-2">
                    <InputField
                      label="Resident Address"
                      name="address"
                      required={true}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={() => formik.setFieldTouched("address")}
                      error={
                        formik.touched.address &&
                        formik.errors.address && <p>{formik.errors.address}</p>
                      }
                    />
                  </div>
                  <InputField
                    label="Marital Status"
                    name="maritalStatus"
                    required={true}
                    value={formik.values.maritalStatus}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("maritalStatus")}
                    error={
                      formik.touched.maritalStatus &&
                      formik.errors.maritalStatus && (
                        <p>{formik.errors.maritalStatus}</p>
                      )
                    }
                  />
                  <InputField
                    label="User Name"
                    name="userName"
                    required={true}
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    onBlur={() => formik.setFieldTouched("userName")}
                    error={
                      formik.touched.userName &&
                      formik.errors.userName && <p>{formik.errors.userName}</p>
                    }
                  />{" "}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mb-10">
              <button
                type="submit"
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
              >
                {Loading ? "Loading" : "Update"}
              </button>
            </div>
          </form>
        )}
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Change Password
        </div>

        <ChangePasswordForm memberData={memberData} />
      </div>
    </div>
  );
};

export default Personalinfo;
