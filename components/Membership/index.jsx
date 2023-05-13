import React from 'react';
import Container from '../Shared/Container';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';

const Membership = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            BECOME A MEMBER OF THE CLUB
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
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
        </div>
      </Container>
    </div>
  );
};

export default Membership;

const MembershipCard = () => {
  return (
    <div className="max-w-xs border-2 rounded-lg">
      <div className="flex items-center justify-center h-20 bg-black rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="p-10 text-center text-black">
        <h1 className="mb-5 text-xl font-bold">ORDINARY MEMBERS</h1>
        <div className="mb-10 text-sm">
          <p>Entrance Fee: Rs.5,000/-</p>
          <p>Annual Subscription: Rs.5,000/-</p>
        </div>
        <Link
          href="#"
          className="px-6 py-2 mt-10 text-lg text-white bg-blue-900 rounded-md "
        >
          More Details
        </Link>
      </div>
    </div>
  );
};
