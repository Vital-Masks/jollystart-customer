import Image from 'next/image';
import React from 'react';

const UserFullView = ({ picture }) => {
  return (
    <div>
      <Image
        width={2500}
        height={2500}
        className="h-[250px] lg:h-[300px] xl:h-[400px] object-cover"
        src={picture}
        style={{objectFit: "contain"}}
      />
      {/* <div className="mt-2 text-center">
        <h1 className="text-lg text-slate-900">{name}</h1>
        <p className="text-slate-700">{occupation}</p>
      </div> */}
    </div>
  );
};

export default UserFullView;
