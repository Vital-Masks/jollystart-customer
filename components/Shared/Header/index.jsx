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
          <h1 className="text-2xl font-bold text-center text-blue-900 md:text-left md:text-4xl">
            JOLLY STARS SC
          </h1>
        </div>
      </div>

      <Navbar />
    </>
  );
};

export default Header;
