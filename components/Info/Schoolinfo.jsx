import React, { useState } from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import InputField from "../UI/InputField";
import Table from "../Table";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SchoolinfoCard from "./InfoCard";
import AddSchool from "./AddSchool";
import AddClub from "./AddClub";
import ProffImageUploader from "./schoolAndClubProffpart";

const Schoolinfo = ({ memberData }) => {
  const { schoolDetails, clubDetails } = memberData || [];
  const [selectedImage, setSelectedImage] = useState(null);

  //  schoolName, participated, game, from, to, role, _id
  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
        <SchoolinfoCard memberData={memberData} />
      </div>
      <br></br>
      <br></br>

      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          School Details
        </div>
        <div className="px-10 my-10">
          <AddSchool schoolDetails={schoolDetails} />
        </div>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Club Details
        </div>
        <AddClub schoolDetails={clubDetails} />
        {/* <div className="px-10 my-10">
          <div className="mt-10">
            <Table schoolDetails={clubDetails} />
          </div>
        </div> */}
      </div>
      <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
        Image Proof
      </div>
      <ProffImageUploader gallery={memberData.gallery} />
     
    </div>
  );
};

export default Schoolinfo;
