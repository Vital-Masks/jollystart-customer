import React from 'react';
import Container from '../Shared/Container';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

const LatestNews = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            Latest News
          </h1>
          <p className="mt-3 text-slate-600">
            The membership of the club is open to all persons who are approved
            by the Executive Committee. Each applicant for admission as a member
            of the club shall apply in the prescribed “Membership Application
            Form” and such application shall be proposed and seconded by a
            member of the Executive Committee and one other member other than
            Temporary or Student Member. The entrance fee and subscription for
            at least one year relevant to the class of membership shall
            accompany the application.
          </p>
        </div>
        <div className="flex items-center justify-center gap-10">
          <LatestNewsCard />
          <LatestNewsCard />
          <LatestNewsCard />
        </div>
      </Container>
    </div>
  );
};

export default LatestNews;

const LatestNewsCard = () => {
  return (
    <div className="max-w-xs border-2 rounded-lg">
      <div className="flex items-center justify-center h-20 bg-slate-400 rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="p-5 text-black">
      <div className="mb-5 text-sm text-slate-400"> 2023 July 10th</div>
        <h1 className="mb-5 text-xl font-bold">Moors sports club emerge tier aplate champions 2019/2020</h1>
        <div className="mb-5 text-sm">
          <p>The membership of the club is open to all persons who are approved
            by the Executive Committee. Each applicant for admission as a member
            </p>
          
        </div>
        <Link
          href="#"
         className="mb-5 text-sm font-bold text-blue-900"
        >
          Read More 
        </Link>
      </div>
    </div>
    

    
  );
};


