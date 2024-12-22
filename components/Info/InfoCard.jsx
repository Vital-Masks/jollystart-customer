import React from "react";
import { useState } from "react";
import formatDate from "../utils/date";
import ProfileImageUploader from "./ProfileImageUploader";

const SchoolinfoCard = (memberData) => {
  const {
    firstName,
    lastName,
    membershipCategory,
    memberApprovalStatus,
    created_at,
    updated_at,
    membershipId,
    profilePicture,
  } = memberData.memberData;
  const [Loading, setLoading] = useState(false);

  const onUpload = async (img) => {
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);

    let obj = {
      profilePicture: img,
    };
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.jollystarssc.com/api/member/" + userData._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("POST request successful. Response:", data);
    } catch (error) {
      console.error("Error during POST request:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="max-w-[80rem] w-full h-full bg-[#e2e2e7] shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none"
      style={{ borderRadius: "10px" }}
    >
      {/* memberData.memberData:{JSON.stringify(memberData.memberData)} */}
      <div className="p-5 sm:p-10 flex flex-col sm:flex-row items-center text-white bg-blue-900">
        <ProfileImageUploader
          profilePicture={profilePicture}
          onUpload={onUpload}
          loading={Loading}
        />
        <div className="text-center sm:text-left ml-10 mr-5">
          <h3 className=" text-2xl sm:text-4xl font-semibold mb-2  bold">
            {firstName} {lastName}
          </h3>
          <p className="mb-2 text-lg sm:text-xl text-dark">
            Membership Type - {membershipCategory}
          </p>
          <p className="mb-2 text-lg sm:text-xl text-dark">
            Status - {memberApprovalStatus}
          </p>
          <p className="mb-2 text-lg sm:text-xs text-dark">
            Member Request -{" "}
            {created_at ? formatDate(created_at, "dd.MM.yyyy | hh.mm a") : ""}
          </p>
          <p className="mb-2 text-lg sm:text-xs text-dark">
            Membership Approval Date -
            {memberApprovalStatus === "APPROVED" ||
            memberApprovalStatus === "REMOVED"
              ? updated_at
                ? formatDate(updated_at, "dd.MM.yyyy | hh.mm a")
                : ""
              : "Not Approved Yet "}
          </p>
          <p className="mb-2 text-lg sm:text-xs text-dark">
            Membership ID - {membershipId ? membershipId : "Not Assign Yet "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolinfoCard;
