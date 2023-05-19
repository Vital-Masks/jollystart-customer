import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className="hidden w-full bg-white md:inline-block">
        <div className="py-5 responsive">
        <Image
            priority
            src="/assets/brand/jolly-2.png"
            alt="logo"
            width={2000}
            height={1000}
            className="z-20 object-contain w-16 h-16 mb-5 md:w-24 md:h-24 p-5"
          />
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Header;
