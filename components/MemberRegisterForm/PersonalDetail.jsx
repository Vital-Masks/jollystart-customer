import React, { useState, useEffect } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { convertFileToBase64 } from "../utils/fileUtils";
import { routes } from "@/contents/routes";
import Link from "next/link";
import {
  MemberTitleOptions,
  MembershipTypeDetails,
  MembershipTypeDetailsOptions,
} from "@/services/defaultConst";
import Image from "next/image";

const PersonalDetail = ({ AllPersonalData, PersonalData }) => {
  const [initialValues, setinitialValues] = useState({
    membershipCategory: "",
    title: "",
    firstName: "",
    lastName: "",
    passportNumber: "",
    dateOfBirth: "",
    email: "",
    address: "",
    phoneNumber: "",
    telephoneNumber: "",
    maritalStatus: "",
    userName: "",
    password: "",
    cpassword: "",
    workPlaceName: "",
    occupation: "",
    officeAddress: "",
    profilePicture: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const validationSchema = Yup.object().shape({
    membershipCategory: Yup.string().required("Required"),
    title: Yup.string().required("Required"),
    firstName: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    lastName: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    passportNumber: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    dateOfBirth: Yup.string().required("Required"),
    email: Yup.string()
      .required("Required")
      .email("Invalid email address")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    address: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    phoneNumber: Yup.string()
      .required("Required")
      .matches(/^[0-9]{10,13}$/, "Invalid phone number format")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    telephoneNumber: Yup.string()
      .required("Required")
      .matches(/^[0-9]{10,13}$/, "Invalid phone number format")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    maritalStatus: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    userName: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    password: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    cpassword: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    workPlaceName: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    occupation: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    officeAddress: Yup.string()
      .required("Required")
      .matches(/^\S.*$/, "Cannot start with a space")
      .min(3, "Minimum 3 characters")
      .max(40, "Maximum 40 characters"),
    profilePicture: Yup.mixed()
      .test("fileValidation", "Invalid file", (value) => {
        if (!value) {
          return false;
        }
        if (typeof value === "string") {
          return value.length <= 3 * 1024 * 1024;
        }
        return value.size <= 2 * 1024 * 1024;
      })
      .required("File is required"),
  });

  const { setStep } = useMembers();

  const handleSubmit = async (values) => {
    try {
      var base64String = "";
      if (PersonalData) {
        try {
          base64String = await convertFileToBase64(values.profilePicture);
        } catch (error) {
          base64String = values.profilePicture;
          console.log(error, "error");
        }
      } else {
        try {
          base64String = await convertFileToBase64(values.profilePicture);
        } catch (error) {
          console.log("error:", error);
        }
      }

      let obj = {
        membershipCategory: values.membershipCategory,
        title: values.title,
        firstName: values.firstName,
        lastName: values.lastName,
        dateOfBirth: values.dateOfBirth,
        passportNumber: values.passportNumber,
        email: values.email,
        userName: values.userName,
        password: values.password,
        cpassword: values.cpassword,
        phoneNumber: values.phoneNumber,
        telephoneNumber: values.telephoneNumber,
        address: values.address,
        workPlaceName: values.workPlaceName,
        occupation: values.occupation,
        officeAddress: values.officeAddress,
        maritalStatus: values.maritalStatus,
        profilePicture: base64String,
      };
      AllPersonalData(obj);
      setStep(2);
    } catch (error) {
      console.log(">> error", error);
    }
  };

  useEffect(() => {
    if (PersonalData) {
      setinitialValues(PersonalData);
    }
  }, [PersonalData]);

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="py-4 m-2 text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 01 - FILL YOUR PERSONAL DATA
      </div>
      <div className="px-10 my-10">
        <p className="text-xl text-center">
          The membership of the club is open to all persons who are approved by
          the Executive Committee. Each applicant for admission as a member of
          the club shall apply in the prescribed.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, actions) => {
          handleSubmit(values).then(() => {
            actions.setSubmitting(false);
            // actions.resetForm();
          });
        }}
      >
        {({
          handleSubmit,
          errors,
          values,
          touched,
          isSubmitting,
          isValidating,
          isValid,
          setFieldValue,
          dirty,
        }) => (
          // warn user when leaving the page without saving
          // {WarnIfUnsaved(Object.keys(touched).some((v) => v !== '') && dirty)}

          <Form onSubmit={handleSubmit} className="space-y-5">
            <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
              Membership Details
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 px-10 mt-10">
              <Field
                as="select"
                name="membershipCategory"
                className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
              >
                {MembershipTypeDetailsOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </Field>
              <Link
                href={routes.MEMBERSHIPFULL}
                target="_blank"
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52 text-center"
              >
                Pricing Table
              </Link>
            </div>
            {touched.membershipCategory && errors.membershipCategory && (
              <p className=" mb-10 px-14 text-red-400">
                {errors.membershipCategory}
              </p>
            )}
            <br />
            <br />
            <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
              Personal Details
            </div>
            <div className="px-10 my-10 ">
              <div className="md:grid md:grid-cols-4 gap-3">
                <div className="md:grid  md:grid-cols-3 col-span-4 md:col-span-3 gap-3">
                  <div>
                    <label htmlFor={"title"} className="ml-2">
                      {"Title"}
                      {true && <span className="text-red-500">*</span>}
                    </label>
                    <Field
                      as="select"
                      name="title"
                      className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
                    >
                      {MemberTitleOptions.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          label={option.label}
                        />
                      ))}
                    </Field>
                  </div>
                  <InputField
                    label="First Name"
                    name="firstName"
                    error={errors.firstName}
                  />
                  <InputField
                    label="Last Name"
                    name="lastName"
                    error={errors.lastName}
                  />
                  <InputField
                    label="NIC/ Passport ID"
                    name="passportNumber"
                    error={errors.passportNumber}
                  />
                  <InputField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    error={errors.dateOfBirth}
                    max={new Date().toISOString().split("T")[0]}
                  />
                  <InputField
                    label="E-Mail Address"
                    type="text"
                    name="email"
                    error={errors.email}
                  />
                  <div className="col-span-3">
                    <InputField
                      label="Resident Address"
                      name="address"
                      error={errors.address}
                    />
                  </div>
                  <InputField
                    label="Mobile Number"
                    name="phoneNumber"
                    placeholder={"00442078628000"}
                    error={errors.phoneNumber}
                  />
                  <InputField
                    label="Telephone Number"
                    name="telephoneNumber"
                    placeholder={"00442078628000"}
                    error={errors.telephoneNumber}
                  />
                  <InputField
                    label="Marital Status"
                    name="maritalStatus"
                    error={errors.maritalStatus}
                  />
                  <InputField
                    label="User Name"
                    name="userName"
                    error={errors.userName}
                  />
                  <InputField
                    label="Password"
                    name="password"
                    type="password"
                    error={errors.password}
                  />
                  <InputField
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    error={errors.cpassword}
                  />
                </div>
                <div>
                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Add picture
                    </label>
                    <div
                      style={
                        errors.profilePicture &&
                        touched.profilePicture && { borderColor: "red" }
                      }
                      className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25"
                    >
                      <div className="text-center">
                        {selectedImage ? (
                          <Image src={selectedImage} width={200} height={200} />
                        ) : (
                          <PhotoIcon
                            className="w-12 h-12 mx-auto text-gray-300"
                            aria-hidden="true"
                          />
                        )}
                        <div className="flex mt-4 text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="profilePicture"
                            className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="profilePicture"
                              name="profilePicture"
                              type="file"
                              className="sr-only"
                              onChange={(event) => {
                                setFieldValue(
                                  "profilePicture",
                                  event.currentTarget.files[0]
                                );
                                setSelectedImage(
                                  URL.createObjectURL(
                                    event.currentTarget.files[0]
                                  )
                                );
                              }}
                              accept="image/*"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>

                        <p
                          className="text-xs leading-5 text-gray-600"
                          style={
                            errors.profilePicture &&
                            touched.profilePicture && {
                              borderColor: "red",
                            }
                          }
                        >
                          PNG, JPG, GIF up to2MB
                        </p>
                        {errors.profilePicture && (
                          <p
                            className="text-xs leading-5 text-red-400"
                            style={{ color: "red" }}
                          >
                            {errors.profilePicture}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
              Personal Details
            </div>
            <div className="px-10 my-10 ">
              <div className="md:grid md:grid-cols-4 gap-3">
                <InputField
                  label="Workplace Name"
                  name="workPlaceName"
                  error={errors.workPlaceName}
                />
                <InputField
                  label="Occupation"
                  name="occupation"
                  error={errors.occupation}
                />
                <div className="col-span-2">
                  <InputField
                    label="Office Address"
                    name="officeAddress"
                    error={errors.officeAddress}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mb-10">
              <button
                type="submit"
                // onClick={changeStep}
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalDetail;
