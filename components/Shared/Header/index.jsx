import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className="hidden w-full bg-white md:block">
        <div className="py-5 responsive">
          <Image
            src="/assets/brand/jolly-2.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-[250px]"
          />
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Header;
