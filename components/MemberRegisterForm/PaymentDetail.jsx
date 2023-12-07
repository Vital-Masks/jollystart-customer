import React from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { convertFileToBase64 } from "../utils/fileUtils";

const PaymentDetail = (props) => {
  const { AllPaymentData, Loading, paymentlData, AllPaymentDatas } = props;
  const validationSchema = Yup.object().shape({
    memberId: Yup.string(),
    bank: Yup.string().required("Title is required"),
    branch: Yup.string().required("Title is required"),
    total: Yup.string().required("Title is required"),
    date: Yup.string().required("Title is required"),
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
    isPaymentDetailVerified: Yup.boolean().oneOf(
      [true],
      "You must accept the terms of service and Privacy policy"
    ),
  });

  const { setStep } = useMembers();
  const formik = useFormik({
    initialValues: {
      memberId:
        paymentlData && paymentlData.paymentDetails
          ? paymentlData.paymentDetails.memberId
          : "",
      bank:
        paymentlData && paymentlData.paymentDetails
          ? paymentlData.paymentDetails.bank
          : "",
      branch:
        paymentlData && paymentlData.paymentDetails
          ? paymentlData.paymentDetails.branch
          : "",
      total:
        paymentlData && paymentlData.paymentDetails
          ? paymentlData.paymentDetails.total
          : "",
      date:
        paymentlData && paymentlData.paymentDetails
          ? paymentlData.paymentDetails.date
          : "",
      paymentSlip:
        paymentlData && paymentlData.paymentDetails
          ? paymentlData.paymentDetails.paymentSlip
          : null,
      isPaymentDetailVerified: true,
      mobileNumber: "077XXXXXXX",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Submit form data to server or perform other actions
      console.log("Submitted values:", values);

      var base64String = "";
      if (paymentlData) {
        var img = paymentlData.paymentDetails;
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
          memberId: values.memberId,
          bank: values.bank,
          branch: values.branch,
          total: values.total,
          date: values.date,
          isPaymentDetailVerified: values.isPaymentDetailVerified,
          mobileNumber: values.mobileNumber,
          paymentSlip: base64String,
        },
      };
      AllPaymentDatas(paymentData);
      console.log(paymentData);
    },
  });
  const handleButtonClick = () => {
    // Manually trigger form submission
    formik.handleSubmit();
  };
  const pre = async () => {
    var base64String = "";
    if (paymentlData) {
      var img = paymentlData.paymentDetails;
      try {
        base64String = await convertFileToBase64(formik.values.paymentSlip);
      } catch (error) {
        base64String =
          paymentlData && paymentlData.paymentDetails
            ? paymentlData.paymentDetails.paymentSlip
            : "";
        console.log(error, "error");
      }
    } else {
      try {
        base64String = await convertFileToBase64(formik.values.paymentSlip);
      } catch (error) {
        console.log(error, "error");
      }
    }
    let data = formik.values;
    let paymentData = {
      paymentDetails: {
        memberId: data.memberId,
        bank: data.bank,
        branch: data.branch,
        total: data.total,
        date: data.date,
        isPaymentDetailVerified: data.isPaymentDetailVerified,
        mobileNumber: data.mobileNumber,
        paymentSlip: base64String,
      },
    };

    setStep(2);
    AllPaymentData(paymentData);
    console.log(paymentData);
  };
  return (
    <form
      // onSubmit={formik.handleSubmit}
      className="w-full bg-white border rounded-xl"
    >
      <div className="py-4 m-2 text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 03 - PAYMENT DETAILS
      </div>
      <div className="px-10 my-10">
        <p className="text-xl text-center">
          The membership of the club is open to all persons who are approved by
          the Executive Committee. Each applicant for admission as a member of
          the club shall apply in the prescribed.
        </p>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Payment Details
        </div>
        <div className="px-10 my-10">
          <div className="grid grid-cols-4 gap-3">
            <div className="grid grid-cols-3 col-span-3 gap-2">
              <InputField
                label="First Name"
                name="memberId"
                required={true}
                value={formik.values.memberId}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("memberId")}
                error={
                  formik.touched.memberId &&
                  formik.errors.memberId && <p>{formik.errors.memberId}</p>
                }
              />
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
                label="Barnch"
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
              />
              <InputField
                label="Total"
                name="total"
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
                  className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25"
                  style={
                    formik.errors.paymentSlip &&
                    formik.touched.paymentSlip && { borderColor: "red" }
                  }
                >
                  <div className="text-center">
                    <PhotoIcon
                      className="w-12 h-12 mx-auto text-gray-300"
                      aria-hidden="true"
                    />
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
                          }}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
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
          {formik.errors.paymentSlip && formik.touched.paymentSlip && (
            <div>{formik.errors.paymentSlip}</div>
          )}

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
            <div className="ml-3 text-sm">
              <p id="comments-description" className="text-[#7E7A7C]">
                I agree the terms of service and Privacy policy.
              </p>
            </div>
          </div>
          {formik.errors.isPaymentDetailVerified && (
            <p className="text-red-400 ps-4">
              {" "}
              {formik.errors.isPaymentDetailVerified}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center mb-10 gap-5">
          <button
            type="button"
            onClick={pre}
            className=" text-center p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52 "
          >
            Previous
          </button>
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
