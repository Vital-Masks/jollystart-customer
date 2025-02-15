import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const TopHeader = () => {
  return (
    <div className="py-2 bg-slate-300 text-slate-600 p-5">
      <div className="flex items-center justify-center gap-3 md:justify-end responsive">
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <PhoneIcon className="w-4 h-4" />
          +94 77 178 9546
        </div>
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <EnvelopeIcon className="w-4 h-4" />
          jollystarsjaffna@gmail.com
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
