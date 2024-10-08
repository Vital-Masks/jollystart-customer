import MemberRegisterForm from '@/components/MemberRegisterForm';
import Container from '@/components/Shared/Container';
import { MemberProvider } from '@/contexts/MemberContext';
import { StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const Membership = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold uppercase text-slate-800">
            Register New Member
          </h1>
          <p className="p-5 mt-3 text-slate-600">
            The membership of the club is open to all persons who are approved
            by the Executive Committee. Each applicant for admission as a member
            of the club shall apply in the prescribed.
          </p>
        </div>
        {/* <div className="flex items-center justify-start gap-10 overflow-x-auto md:justify-center snap-x scroll-smooth">
          <MembershipCard />
          <MembershipCard />
          <MembershipCard />
        </div> */}
        <div className="text-slate-600">
          <MemberProvider>
            <MemberRegisterForm />
          </MemberProvider>
        </div>
      </Container>
    </div>
  );
};

export default Membership;

const MembershipCard = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs border-2 rounded-lg snap-start">
      <div className="flex items-center justify-center h-20 bg-black rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="flex-1 p-10 text-center text-black">
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
