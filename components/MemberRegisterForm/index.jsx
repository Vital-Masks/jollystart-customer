import React, { useState } from "react";
import PersonalDetail from "./PersonalDetail";
import SchoolDetail from "./SchoolDetail";
import PaymentDetail from "./PaymentDetail";
import { useMembers } from "@/contexts/MemberContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const MemberRegisterForm = () => {
  const { step } = useMembers();
  const [PersonalData, setPersonalData] = useState({});
  const [SchoolData, setSchoolData] = useState({});
  const [paymentlData, setpaymentlData] = useState({});
  const [Loading, setLoading] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);

  const router = useRouter();

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
    console.log(allData.file)
    allData['gallery'] = allData.file;
    delete allData.file;
    
    const handlePostRequest = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "http://localhost:3000/api/member",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(allData),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        toast.success("User Created");
        router.push("/login/logreg");

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

  if (step === 1) {
    return (
      <PersonalDetail
        AllPersonalData={AllPersonalData}
        PersonalData={PersonalData}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    );
  } else if (step === 2) {
    return (
      <SchoolDetail
        AllSchoollData={AllSchoollData}
        SchoolData={SchoolData}
        selectedImage2={selectedImage2}
        setSelectedImage2={setSelectedImage2}
      />
    );
  } else if (step === 3) {
    return (
      <PaymentDetail
        AllPaymentData={AllPaymentData}
        Loading={Loading}
        paymentlData={paymentlData}
        AllPaymentDatas={AllPaymentDatas}
        PersonalData={PersonalData}
        selectedImage3={selectedImage3}
        setSelectedImage3={setSelectedImage3}
      />
    );
  }
};

export default MemberRegisterForm;
