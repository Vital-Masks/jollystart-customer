import Image from "next/image";
import React from "react";

const UserFulViewName = ({ name, occupation }) => {
  return (
    <div>
      <div className="mt-2 text-center">
        <h1 className="text-lg text-slate-900">{name}</h1>
        <p className="text-slate-700">{occupation}</p>
      </div>
    </div>
  );
};

export default UserFulViewName;
