import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { convertFileToBase64 } from "../utils/fileUtils";
import Image from "next/image";
import { membershipPaymentdata } from "@/services/fixedDatas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MembershipTypeDetails } from "../utils/variable";

const PaymentDetail = (props) => {
  const { Loading, PersonalData, afterpayment } = props;
  const [selectedImage3, setSelectedImage3] = useState(false);

  const validationSchema = Yup.object().shape({
    membershipCategory: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    bank: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    branch: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    total: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(1, "Minimum 1 letter")
      .max(10, "Max 10 Letter"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10,13}$/, "Invalid phone number format")
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    date: Yup.string().required("Required"),
    isPaymentDetailVerified: Yup.boolean().oneOf(
      [true],
      "You must accept the terms of service and Privacy policy"
    ),
    paymentSlip: Yup.mixed()
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

  const formik = useFormik({
    initialValues: {
      membershipCategory:
        PersonalData && PersonalData.membershipCategory
          ? PersonalData.membershipCategory
          : "",
      bank: "",
      branch: "",
      total: 0,
      date: "",
      paymentSlip: null,
      isPaymentDetailVerified: false,
      mobileNumber: "",
      memberId: PersonalData && PersonalData._id ? PersonalData._id : "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Submit form data to server or perform other actions
      console.log("Submitted values:", values);

      var base64String = "";
      if (values) {
        var img = values.paymentDetails;
        try {
          base64String = await convertFileToBase64(values.paymentSlip);
        } catch (error) {
          base64String = img.paymentSlip;
          console.log(error, "error");
        }
      } else {
        try {
          base64String = await convertFileToBase64(values.paymentSlip);
        } catch (error) {
          console.log(error, "error");
        }
      }

      let paymentData = {
        paymentDetails: {
          membershipCategory: values.membershipCategory,
          bank: values.bank,
          branch: values.branch,
          total: values.total,
          date: values.date,
          isPaymentDetailVerified: values.isPaymentDetailVerified,
          mobileNumber: values.mobileNumber,
          paymentSlip: base64String,
          memberId: PersonalData && PersonalData._id ? PersonalData._id : "",
          isPaymentDetailVerified: false
        },
      };
      // post data
      postData(paymentData);
      console.log(paymentData);
    },
  });

  const updateMembershipCategory = async (data) => {
    alert("sd;lfjsdhf")
    try {
      const userDataString = localStorage.getItem("userData");
      // Parse the userData JSON string
      const userData = JSON.parse(userDataString);
      const response = await fetch(
        `https://api.jollystars.lk/api/member/` + userData._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

    } catch (error) {
      console.log(error, "eeee");

    }
  }

  const postData = async (dataObj) => {
    try {
      const userDataString = localStorage.getItem("userData");
      // Parse the userData JSON string
      const userData = JSON.parse(userDataString);
      let membershipCategory1 = formik.values.membershipCategory
      let data1 = {
        membershipCategory: membershipCategory1.toUpperCase(),
        "memberApprovalStatus": "PENDING",
      }
      const response = await fetch(
        `https://api.jollystars.lk/api/payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataObj.paymentDetails),
        }
      );
      const response2 = await fetch(
        `https://api.jollystars.lk/api/member/` + userData._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data1),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }


      afterpayment()
      toast.success("Payment Successfull");

      const data = await response.json();
      console.log("POST request successful. Response:", data);
    } catch (error) {
      console.error("Error during POST request:", error);
      toast.error("Something Went Wrong");
    } finally {
    }
  };

  const handleButtonClick = () => {
    // Manually trigger form submission
    formik.handleSubmit();
  };

  useEffect(() => {
    console.log("Sdsd");

    if (formik.values.membershipCategory) {
      formik.setValues((prevState) => ({
        ...prevState,
        total: membershipPaymentdata.find(
          (x) =>
            x.title.toLowerCase() ===
            formik.values.membershipCategory.toLowerCase()
        ).price,
      }));
    }
  }, [formik.values.membershipCategory]);

  return (
    <form
      // onSubmit={formik.handleSubmit}
      className="w-full bg-white border rounded-xl"
    >
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Payment Details
        </div>
        <div className="px-10 my-10">
          <div className="md:grid md:grid-cols-4 gap-3">
            <div className="md:grid md:grid-cols-3 col-span-3 gap-2 space-y-4 md:space-y-0">
              <div>
                <label htmlFor={"membershipCategory"} className="ml-2">
                  {"Membership Category"}
                  {true && <span className="text-red-500">*</span>}
                </label>
                <select
                  required={true}
                  onBlur={() => formik.setFieldTouched("membershipCategory")}
                  className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
                  id="membershipCategory"
                  name="membershipCategory"
                  onChange={formik.handleChange}
                  value={formik.values.membershipCategory}
                >
                  <option value="" label="Select an option" />
                  <option value={MembershipTypeDetails.RESIDENT_LIFE_MEMBER} label={MembershipTypeDetails.RESIDENT_LIFE_MEMBER} />
                  <option value={MembershipTypeDetails.OVERSEAS_LIFE_MEMBER} label={MembershipTypeDetails.OVERSEAS_LIFE_MEMBER} />
                  <option value={MembershipTypeDetails.ORDINARY_MEMBERS} label={MembershipTypeDetails.ORDINARY_MEMBERS} />
                  <option value={MembershipTypeDetails.PLAYING_MEMBER} label={MembershipTypeDetails.PLAYING_MEMBER} />
                  <option value={MembershipTypeDetails.PLAYING_MEMBER_STUDENT} label={MembershipTypeDetails.PLAYING_MEMBER_STUDENT} />
                </select>
              </div>

              <InputField
                label="Bank"
                name="bank"
                required={true}
                value={formik.values.bank}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("bank")}
                error={
                  formik.touched.bank &&
                  formik.errors.bank && <p>{formik.errors.bank}</p>
                }
              />
              <InputField
                label="Branch"
                name="branch"
                required={true}
                value={formik.values.branch}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("branch")}
                error={
                  formik.touched.branch &&
                  formik.errors.branch && <p>{formik.errors.branch}</p>
                }
              />
              <InputField
                label="Mobile Number"
                name="mobileNumber"
                required={true}
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("mobileNumber")}
                error={
                  formik.touched.mobileNumber &&
                  formik.errors.mobileNumber && (
                    <p>{formik.errors.mobileNumber}</p>
                  )
                }
              // placeholder="075XXXXXXXX"
              />
              <InputField
                disabled
                label="Total"
                name="total"
                type={"text"}
                required={true}
                value={formik.values.total}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("total")}
                error={
                  formik.touched.total &&
                  formik.errors.total && <p>{formik.errors.total}</p>
                }
              />
              <InputField
                label="Date"
                name="date"
                type="date"
                required={true}
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("date")}
                error={
                  formik.touched.date &&
                  formik.errors.date && <p>{formik.errors.date}</p>
                }
                max={new Date().toISOString().split("T")[0]}

              />
            </div>
            <div className="mt-5">
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add picture
                </label>
                <div
                  className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25"
                  style={
                    formik.errors.paymentSlip &&
                    formik.touched.paymentSlip && { borderColor: "red" }
                  }
                >
                  <div className="text-center">
                    {selectedImage3 ? (
                      <Image src={selectedImage3} width={200} height={200} />
                    ) : (
                      <PhotoIcon
                        className="w-12 h-12 mx-auto text-gray-300"
                        aria-hidden="true"
                      />
                    )}
                    <div className="flex mt-4 text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="paymentSlip"
                        className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>

                        <input
                          id="paymentSlip"
                          name="paymentSlip"
                          type="file"
                          className="sr-only"
                          onChange={(event) => {
                            formik.setFieldValue(
                              "paymentSlip",
                              event.currentTarget.files[0]
                            );
                            setSelectedImage3(
                              URL.createObjectURL(event.currentTarget.files[0])
                            );
                          }}
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 1 MB
                    </p>
                    {formik.errors.paymentSlip && (
                      <p
                        className="text-xs leading-5 text-red-400"
                        style={{ color: "red" }}
                      >
                        {formik.errors.paymentSlip}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center ">
            <div className="flex items-center h-6">
              <input
                type="checkbox"
                name="isPaymentDetailVerified"
                checked={formik.values.isPaymentDetailVerified}
                onChange={formik.handleChange}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
              />
            </div>
            <div className="ml-3 text-sm mt-4">
              <p id="comments-description" className="text-[#7E7A7C]">
                I agree the terms of service and Privacy policy.
              </p>
            </div>
          </div>
          {formik.errors.isPaymentDetailVerified && (
            <div className="mt-1 text-sm">
              <p
                className="text-xs leading-5 text-red-400"
                style={{ color: "red" }}
              >
                {formik.errors.isPaymentDetailVerified}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-5">
          {/* <button
            type="button"
            className=" text-center p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52 "
          >
            Previous
          </button> */}

          <button
            disabled={Loading}
            type="button"
            onClick={handleButtonClick}
            // onClick={() => setStep(3)}
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
            {Loading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentDetail;
