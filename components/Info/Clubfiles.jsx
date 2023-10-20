import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';
import Link from 'next/link';

const Clubfile = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold text-slate-800">Club Files</h1>
          
        </div>
        <div className="flex items-center justify-start gap-5 overflow-auto lg:grid-cols-2 xl:grid-cols-4 md:grid md:grid-cols-2 lg:justify-center p-5">
          <ClubfileCard />
          <ClubfileCard />
          <ClubfileCard />
          <ClubfileCard />
        </div>

        <div className="text-center">
          <button className="content-center px-4 py-2 mt-10 text-white bg-blue-900 rounded-md">
            View More
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Clubfile;

const ClubfileCard = () => {
  return (
    <div className="w-full max-w-xs border-2 rounded-lg shrink-0">
      <div className="flex items-center justify-center h-40 rounded-t-lg bg-slate-400">
      <h1 className="mb-5 text-xl font-bold">
          Account Audit 2022
        </h1>
      </div>
      <div className="p-5 text-black">
        <div className="mb-5 text-sm text-slate-400"> 2023 July 10th</div>
        <div className="mb-5 text-sm">
          <p>
            The membership of the club is open to all persons who are approved
            by the Executive Committee. Each applicant for admission as a member
          </p>
        </div>
        <Link href="#" className="mb-5 text-sm font-bold text-blue-900">
          View File
        </Link>
      </div>
    </div>
  );
};
