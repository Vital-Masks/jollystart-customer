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
            priority
            src={'/assets2/brand/logo2.png'}
            alt="logo"
            width={720}
            height={720}
            className="w-[250px] object-contain"
          />
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Header;
