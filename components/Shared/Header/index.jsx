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
                src="/assets/brand/jolly 2.png"
                alt="logo"
                width={4000}
                height={1000}
                className="w-10 lg:w-12 shrink-0"
                
              />
          
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
