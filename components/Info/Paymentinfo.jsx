import React from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import InputField from "../UI/InputField";
import PaymentTable from "../PaymentTable";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SchoolinfoCard from "./InfoCard";
import { MembershipTypeDetails } from "@/services/defaultConst";

const Paymentinfo = ({ memberData }) => {
  const paymentDetails = memberData.paymentDetails || [];
  // const paymentDetails = memberData.paymentDetails || [];
  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
        <SchoolinfoCard memberData={memberData} />
      </div>
      <br></br>
      <br></br>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Payment Details
        </div>
        <div className="px-10 my-10">
          <div className="mt-10">
            <PaymentTable paymentDetails={paymentDetails} memberData={memberData}  />
          </div>
        </div>
        
        {memberData &&
          memberData.membershipCategory !==
            MembershipTypeDetails.ORDINARY_MEMBERS ||  MembershipTypeDetails.PLAYING_MEMBER  && (
            <div className="flex items-center justify-center mb-10">
              <button
                // onClick={() => setStep(2)}
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-72"
              >
                Pay Member Fee

              </button>
            </div>
          )}
      </div>
    </div>
  );
};

export default Paymentinfo;
