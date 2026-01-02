import React, { useState } from "react";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import InputField from "../UI/InputField";
import { toast } from "react-toastify";
import { PhotoIcon } from "@heroicons/react/24/solid";
import SchoolinfoCard from "./InfoCard";
import axios from "axios";
import { isEmpty } from "@/utils/utils";

const Occupationinfo = ({ memberData }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    occupation: memberData?.occupation,
    workPlaceName: memberData?.workPlaceName,
    officeAddress: memberData?.officeAddress
  })

  async function handleSubmit() {
    setLoading(true)
    try {
      const response = await axios.put(
        "https://api.jollystars.lk/api/member/" + memberData?._id,
        formData
      );
      console.log(response);

      // Handle success
      if (!isEmpty(response.data.result)) {
        toast.success("successfully changed");
        localStorage.setItem("userData", JSON.stringify(response.data.result));
        window.location.href = "/info";
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      // Handle error
      console.error("Error submitting data:", error);

      // Display error message (you can use a toast library or another UI element)
      toast.error("Error Login data. Please try again.");
    }
    finally {
      setLoading(false)
    }
  }

  console.log(memberData, formData)
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
          <div class="flex flex-wrap gap-4">
            <InputField
              value={formData.workPlaceName}
              label="Workplace Name"
              name="workplace_name"
              required={true}
              // defaultValue={workPlaceName}
              onChange={(e) => {
                if (e.target.value !== '') {
                  setFormData({ ...formData, workPlaceName: e.target.value })
                } else {
                  setFormData({
                    ...formData, workPlaceName: undefined
                  })
                }
              }}
            />
            <InputField
              value={formData?.occupation}
              label="Occupation"
              name="Occupation"
              required={true}
              onChange={(e) => {
                if (e.target.value !== '') {
                  setFormData({ ...formData, occupation: e.target.value })
                } else {
                  setFormData({ ...formData, occupation: undefined })
                }
              }}
            />
            <div className="col-span-1">
              <InputField
                value={formData?.officeAddress}
                label="Office Address"
                name="office_address"
                required={true}
                onChange={(e) => {
                  if (e.target.value !== '') {
                    setFormData({ ...formData, officeAddress: e.target.value })
                  } else {
                    setFormData({ ...formData, officeAddress: undefined })
                  }
                }}
              />
            </div>
            <div className="flex w-full justify-center items-center pt-4">
              <button
                onClick={() => handleSubmit()}
                disabled={Object?.entries(formData)
                  .some(([key, value]) => value === undefined) || loading}
                type="submit"
                className={`p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52 ${(Object?.entries(formData)
                  .some(([key, value]) => value === undefined) || loading) && 'opacity-50 cursor-not-allowed'}`}
              >
                {loading ? "Loading" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occupationinfo;
