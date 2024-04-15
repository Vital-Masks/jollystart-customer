import React from "react";
import formatDate from "../utils/date";

const SchoolinfoCard = (memberData) => {
  const {
    firstName,
    lastName,
    membershipCategory,
    memberApprovalStatus,
    created_at,
    updated_at,
    membershipId,profilePicture
  } = memberData.memberData;
  return (
    <div
      className="max-w-[80rem] w-full h-full bg-[#e2e2e7] shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none"
      style={{ borderRadius: "10px" }}
    >
      
      <div className="p-5 sm:p-10 flex flex-col sm:flex-row items-center text-white bg-blue-900">
        <div className="w-60 h-60 rounded-md overflow-hidden object-cover mb-5 sm:mb-0">
          <img
           src={`data:image/png;base64,${profilePicture}`}
            // src="/assets/banner/gallery1.jpg"
            alt="profile"
            className="w-full h-full object-cover"
            style={{ borderRadius: "20px" }}
          />
        </div>
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
            Member Request -  {created_at ? formatDate(created_at, "dd.MM.yyyy | hh.mm a") : ""}
          </p>
          <p className="mb-2 text-lg sm:text-xs text-dark">
            Membership Approval Date - {updated_at ? formatDate(updated_at, "dd.MM.yyyy | hh.mm a") : ""}
          </p>
          <p className="mb-2 text-lg sm:text-xs text-dark">
            Membership ID - {membershipId ? membershipId :"Not Approved Yet "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolinfoCard;
