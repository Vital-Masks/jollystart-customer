import React from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SchoolinfoCard from "./InfoCard";

const Occupationinfo = ({ memberData }) => {
  const { workPlaceName, occupation, officeAddress } = memberData;
  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
        <SchoolinfoCard memberData={memberData} />
      </div>
      <br></br>
      <br></br>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Occupation Informations
        </div>
        <div className="px-10 my-10 ">
          <div className="grid grid-cols-4 gap-6">
            <InputField
              label="Workplace Name"
              name="workplace_name"
              required={true}
              value={occupation}
            />
            <InputField
              value={workPlaceName}
              label="Occupation"
              name="Occupation"
              required={true}
            />
            <div className="col-span-1">
              <InputField
                value={officeAddress}
                label="Office Address"
                name="office_address"
                required={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occupationinfo;
