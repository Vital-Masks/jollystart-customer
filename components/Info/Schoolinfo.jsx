import React from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import InputField from "../UI/InputField";
import Table from "../Table";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SchoolinfoCard from "./InfoCard";

const Schoolinfo = ({ memberData }) => {
  const { schoolDetails,clubDetails } = memberData || [];
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
          
          
          <div className="mt-10">
            <Table schoolDetails={schoolDetails} />
          </div>
        </div>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Club Details
        </div>
        <div className="px-10 my-10">
          {/* <div className="flex items-end gap-4 mb-10">
            <div className="w-full">
              <InputField
                label="School Name"
                name="school_name"
                required={true}
              />
            </div>

            <button className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52">
              Add
            </button>
          </div>
          <div className="grid grid-cols-5 gap-3">
            <InputField
              label="Team you played"
              name="team_you_played"
              required={true}
            />
            <InputField label="Game" name="game" required={true} />
            <InputField label="From" name="from" required={true} />
            <InputField label="To" name="to" required={true} />
            <InputField label="Role" name="role" required={true} />
          </div> */}
          <div className="mt-10">
            <Table  schoolDetails={clubDetails} />
          </div>
        </div>
      </div>
      <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
        Image Proof
      </div>
      <div className="py-4 px-10">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Add picture
          </label>
          <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
            <div className="text-center">
              <PhotoIcon
                className="w-12 h-12 mx-auto text-gray-300"
                aria-hidden="true"
              />
              <div className="flex mt-4 text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schoolinfo;
