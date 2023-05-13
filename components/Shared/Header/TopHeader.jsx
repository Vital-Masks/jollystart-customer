import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

const TopHeader = () => {
  return (
    <div className="py-2 bg-slate-300 text-slate-600">
      <div className="flex items-center justify-end gap-3 responsive">
        <div className="flex items-center gap-1 text-sm">
          <PhoneIcon className="w-4 h-4" />
          +94 112 693 006
        </div>
        <div className="flex items-center gap-1 text-sm">
          <EnvelopeIcon className="w-4 h-4" />
          hello@jssc.com
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
