import Image from 'next/image';
import React from 'react';

const UserCard = ({ picture, name, occupation }) => {
  return (
    <div className='caption-card' >
      <Image
        width={1024}
        height={1024}
        className="h-[250px] lg:h-[300px] xl:h-[400px] object-cover"
        src={picture}
        alt="mig"
      />
      <div className="mt-2 text-center">
        <h1 className="text-lg text-slate-900">{name}</h1>
        <p className="text-slate-700">{occupation}</p>
      </div>
    </div>
  );
};

export default UserCard;
