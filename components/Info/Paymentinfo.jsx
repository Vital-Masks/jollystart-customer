import React, { useState } from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import InputField from "../UI/InputField";
import PaymentTable from "../PaymentTable";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SchoolinfoCard from "./InfoCard";
import { MembershipTypeDetails } from "@/services/defaultConst";
import AddNewPaymentDetail from "./addNewPayment.jsx";

const Paymentinfo = ({ memberData, afterpayment }) => {
  const paymentDetails = memberData.paymentDetails || [];
  const [Open, setOpen] = useState(false)
  const closeTable = () => {
    setOpen(false)
    afterpayment()
  }
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
            <PaymentTable
              paymentDetails={paymentDetails}
              memberData={memberData}
            />
          </div>
        </div>

        {
          memberData &&
          memberData.membershipCategory !== MembershipTypeDetails.RESIDENT_LIFE_MEMBER &&
          memberData.membershipCategory !== MembershipTypeDetails.OVERSEAS_LIFE_MEMBER && (
            <div className="flex items-center justify-center mb-10">
              <button
                onClick={() => setOpen(!Open)}
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-72"
              >
                {!Open ? "Pay Member Fee" : "Cancel"}
              </button>
            </div>
          )
        }

      </div>
      <br />
      <br />
      <br />
      <div
        onClick={afterpayment}>
      </div>
      <br />
      <br />
      {Open && <AddNewPaymentDetail PersonalData={memberData} afterpayment={closeTable} />}
    </div>
  );
};

export default Paymentinfo;
