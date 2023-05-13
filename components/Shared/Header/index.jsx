import React from 'react';
import TopHeader from './TopHeader';
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className="bg-white">
        <div className="py-5 responsive">
          <h1 className="text-4xl font-bold text-blue-900">JOLLY STARS SC</h1>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
