import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className="bg-white">
        <div className="py-5 responsive">
        <Image
                src="/assets/brand/KSC.png"
                alt="logo"
                width={720}
                height={720}
                className="w-10 lg:w-12 shrink-0"
                
              />
          <h1 className="text-4xl font-bold text-blue-900">JOLLY STARS SC</h1>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
