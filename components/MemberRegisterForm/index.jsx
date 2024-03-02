import React, { useState } from "react";
import PersonalDetail from "./PersonalDetail";
import SchoolDetail from "./SchoolDetail";
import PaymentDetail from "./PaymentDetail";
import { useMembers } from "@/contexts/MemberContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MemberRegisterForm = () => {
  const { step } = useMembers();
  const [PersonalData, setPersonalData] = useState({});
  const [SchoolData, setSchoolData] = useState({});
  const [paymentlData, setpaymentlData] = useState({});
  const [Loading, setLoading] = useState(false);

  const AllPersonalData = (parObj) => {
    console.log(parObj, "payObj");
    setPersonalData(parObj);
  };
  const AllSchoollData = (parObj) => {
    console.log(parObj, "payObj");
    setSchoolData(parObj);
  };
  const AllPaymentData = (payObj) => {
    console.log(payObj, "payObj");
    setpaymentlData(payObj);
  };
  const AllPaymentDatas = (payObj) => {
    console.log(payObj, "payObj");
    setpaymentlData(payObj);
    let status = {
      memberApprovalStatus: "PENDING",
    };
    console.log(PersonalData, SchoolData, paymentlData, status);

    var allData = Object.assign({}, PersonalData, SchoolData, payObj, status);
    const handlePostRequest = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/member", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        toast.success("Successfully Added");
        window.location.href ="/login/logreg"
        const data = await response.json();
        console.log("POST request successful. Response:", data);
      } catch (error) {
        console.error("Error during POST request:", error);
        toast.error("Something Went Wrong");
      } finally {
        setLoading(false);
      }
    };
    handlePostRequest();
  };

  if (step === 2) {
    return (
      <PersonalDetail
        AllPersonalData={AllPersonalData}
        PersonalData={PersonalData}
      />
    );
  } else if (step === 1) {
    return (
      <SchoolDetail AllSchoollData={AllSchoollData} SchoolData={SchoolData} />
    );
  } else if (step === 3) {
    return (
      <PaymentDetail
        AllPaymentData={AllPaymentData}
        Loading={Loading}
        paymentlData={paymentlData}
        AllPaymentDatas={AllPaymentDatas}
        PersonalData={PersonalData}
      />
    );
  }
};

export default MemberRegisterForm;
