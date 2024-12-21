import React, { useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import { useFormik } from "formik";
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
  const [selectedImage, setSelectedImage] = useState(null);

  const validationSchema = Yup.object().shape({
    membershipCategory: Yup.string().required("Required"),
    title: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required"),
    firstName: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    lastName: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    dateOfBirth: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    passportNumber: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    email: Yup.string()
      .email("Invalid email address")
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    userName: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    password: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    cpassword: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10,13}$/, "Invalid phone number format")
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    telephoneNumber: Yup.string()
      .matches(/^[0-9]{10,13}$/, "Invalid phone number format")
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    address: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    workPlaceName: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    occupation: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    officeAddress: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    maritalStatus: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required"),
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
  const intalvalue = {
    membershipCategory: PersonalData ? PersonalData.membershipCategory : "",
    title: PersonalData ? PersonalData.title : "",
    firstName: PersonalData ? PersonalData.firstName : "",
    lastName: PersonalData ? PersonalData.lastName : "",
    dateOfBirth: PersonalData ? PersonalData.dateOfBirth : "",
    passportNumber: PersonalData ? PersonalData.passportNumber : "",
    email: PersonalData ? PersonalData.email : "",
    userName: PersonalData ? PersonalData.userName : "",
    password: PersonalData ? PersonalData.password : "",
    cpassword: PersonalData ? PersonalData.membershipCategory : "",
    phoneNumber: PersonalData ? PersonalData.membershipCategory : "",
    telephoneNumber: PersonalData ? PersonalData.membershipCategory : "",
    address: PersonalData ? PersonalData.membershipCategory : "",
    workPlaceName: PersonalData ? PersonalData.membershipCategory : "",
    occupation: PersonalData ? PersonalData.membershipCategory : "",
    officeAddress: PersonalData ? PersonalData.membershipCategory : "",
    maritalStatus: PersonalData ? PersonalData.membershipCategory : "",
    profilePicture: PersonalData ? PersonalData.membershipCategory : "",
  };
  const formik = useFormik({
    initialValues: {
      membershipCategory: PersonalData.membershipCategory
        ? PersonalData.membershipCategory
        : "",
      title: PersonalData.title ? PersonalData.title : "",
      firstName: PersonalData.firstName ? PersonalData.firstName : "",
      lastName: PersonalData.lastName ? PersonalData.lastName : "",
      dateOfBirth: PersonalData.dateOfBirth ? PersonalData.dateOfBirth : "",
      passportNumber: PersonalData.passportNumber
        ? PersonalData.passportNumber
        : "",
      email: PersonalData.email ? PersonalData.email : "",
      userName: PersonalData.userName ? PersonalData.userName : "",
      password: PersonalData.password ? PersonalData.password : "",
      cpassword: PersonalData.cpassword ? PersonalData.cpassword : "",
      phoneNumber: PersonalData.phoneNumber ? PersonalData.phoneNumber : "",
      telephoneNumber: PersonalData.telephoneNumber
        ? PersonalData.telephoneNumber
        : "",
      address: PersonalData.address ? PersonalData.address : "",
      workPlaceName: PersonalData.workPlaceName
        ? PersonalData.workPlaceName
        : "",
      occupation: PersonalData.occupation ? PersonalData.occupation : "",
      officeAddress: PersonalData.officeAddress
        ? PersonalData.officeAddress
        : "",
      maritalStatus: PersonalData.maritalStatus
        ? PersonalData.maritalStatus
        : "",
      profilePicture: PersonalData.profilePicture
        ? PersonalData.profilePicture
        : "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Submit form data to server or perform other actions
      console.log("Submitted values:", values);
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
          console.log(error, "error");
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
    },
  });

  const changeStep = (e) => {
    formik.handleSubmit();
    // setStep(2)
  };
  const options = [
    {
      value: MembershipTypeDetails.RESIDENT_LIFE_MEMBER,
      label: MembershipTypeDetails.RESIDENT_LIFE_MEMBER,
    },
    {
      value: MembershipTypeDetails.OVERSEAS_LIFE_MEMBER,
      label: MembershipTypeDetails.OVERSEAS_LIFE_MEMBER,
    },
    {
      value: MembershipTypeDetails.ORDINARY_MEMBERS,
      label: MembershipTypeDetails.ORDINARY_MEMBERS,
    },
    {
      value: MembershipTypeDetails.PLAYING_MEMBER,
      label: MembershipTypeDetails.PLAYING_MEMBER,
    },
  ];

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="p-4 m-2 text-xl md:text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 01 - FILL YOUR PERSONAL DATA
      </div>
      <div className="px-10 my-10">
        <p className="text-xl text-center">
          The membership of the club is open to all persons who are approved by
          the Executive Committee. Each applicant for admission as a member of
          the club shall apply in the prescribed.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Membership Details
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 px-10 mt-10">
          <select
            className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
            id="membershipCategory"
            name="membershipCategory"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.membershipCategory}
          >
            <option value="" label="Select an option" />
            {MembershipTypeDetailsOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                label={option.label}
              />
            ))}
          </select>
          <a
            href={routes.MEMBERSHIPFULL}
            target="_blank"
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52 text-center"
          >
            Pricing Table
          </a>
        </div>
        {formik.touched.membershipCategory &&
          formik.errors.membershipCategory && (
            <p className="mb-10 px-14 text-red-400">
              {formik.errors.membershipCategory}
            </p>
          )}
        <br />
        <br />
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Personal Details
        </div>
        <div className="px-10 my-10 ">
          <div className="grid md:grid-cols-4 gap-3">
            <div className="md:grid md:grid-cols-3 col-span-3 gap-3 space-y-4 md:space-y-0">
              {/* <InputField
                label="Title"
                name="title"
                
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("title")}
                error={
                  formik.touched.title &&
                  formik.errors.title && <p>{formik.errors.title}</p>
                }
              /> */}
              <div>
                <label htmlFor={"title"} className="ml-2">
                  {"Title"}
                  {true && <span className="text-red-500">*</span>}
                </label>
                <select
                  required={true}
                  onBlur={() => formik.setFieldTouched("title")}
                  className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                >
                  <option value="" label="Select an option" />
                  {MemberTitleOptions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </select>
              </div>
              <InputField
                label="First Name"
                name="firstName"
                required={true}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("firstName")}
                error={
                  formik.touched.firstName &&
                  formik.errors.firstName && <p>{formik.errors.firstName}</p>
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
                max={new Date().toISOString().split("T")[0]}
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
              <div className="col-span-3">
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
                label="Mobile Number"
                name="phoneNumber"
                placeholder={"00442078628000"}
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
                placeholder={"00442078628000"}
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
              <div>
                <label htmlFor={"maritalStatus"} className="ml-2">
                  {"Marital Status"}
                  {true && <span className="text-red-500">*</span>}
                </label>
                <select
                  required={true}
                  onBlur={() => formik.setFieldTouched("maritalStatus")}
                  className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
                  id="maritalStatus"
                  name="maritalStatus"
                  onChange={formik.handleChange}
                  value={formik.values.maritalStatus}
                >
                  <option value="" label="Select an option" />
                  <option value={"single"} label={"Single"} />
                  <option value={"married"} label={"Married"} />
                  <option value={"divorced"} label={"Divorced"} />
                </select>
              </div>
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
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                required={true}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("password")}
                error={
                  formik.touched.password &&
                  formik.errors.password && <p>{formik.errors.password}</p>
                }
              />
              <InputField
                label="Confirm Password"
                type="password"
                name="cpassword"
                required={true}
                value={formik.values.cpassword}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("cpassword")}
                error={
                  formik.touched.cpassword &&
                  formik.errors.cpassword && <p>{formik.errors.cpassword}</p>
                }
              />
            </div>
            <div className="w-full col-span-3 md:col-span-1">
              <div className="col-span-full w-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add picture
                </label>
                <div
                  style={
                    formik.errors.profilePicture &&
                    formik.touched.profilePicture && { borderColor: "red" }
                  }
                  className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25 w-full"
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
                            formik.setFieldValue(
                              "profilePicture",
                              event.currentTarget.files[0]
                            );
                            setSelectedImage(
                              URL.createObjectURL(event.currentTarget.files[0])
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
                        formik.errors.profilePicture &&
                        formik.touched.profilePicture && { borderColor: "red" }
                      }
                    >
                      PNG, JPG, GIF up to2MB
                    </p>
                    {formik.errors.profilePicture && (
                      <p
                        className="text-xs leading-5 text-red-400"
                        style={{ color: "red" }}
                      >
                        {formik.errors.profilePicture}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Workplace Details
        </div>
        <div className="px-10 my-10 ">
          <div className="md:grid md:grid-cols-4 gap-3 space-y-4 md:space-y-0">
            <InputField
              label="Workplace Name"
              name="workPlaceName"
              required={true}
              value={formik.values.workPlaceName}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched("workPlaceName")}
              error={
                formik.touched.workPlaceName &&
                formik.errors.workPlaceName && (
                  <p>{formik.errors.workPlaceName}</p>
                )
              }
            />
            <InputField
              label="Occupation"
              name="occupation"
              required={true}
              value={formik.values.occupation}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched("occupation")}
              error={
                formik.touched.occupation &&
                formik.errors.occupation && <p>{formik.errors.occupation}</p>
              }
            />
            <div className="col-span-2">
              <InputField
                value={formik.values.officeAddress}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("officeAddress")}
                label="Office Address"
                name="officeAddress"
                required={true}
                error={
                  formik.touched.officeAddress &&
                  formik.errors.officeAddress && (
                    <p>{formik.errors.officeAddress}</p>
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            type="submit"
            onClick={changeStep}
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
