import Container from '@/components/Shared/Container';
import { StarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

const Membershipfull = () => {
  return (
    <div className="bg-slate-100">
      <Container>
        <div className="mb-10 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            BECOME A MEMBER OF THE CLUB
          </h1>
          <p className="mt-3 text-slate-600 p-5">
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
        <div className="flex items-center justify-start gap-10  justify-center flex-wrap">
          
          <MembershipCard />
          <MembershipCard2 />
          <MembershipCard3 />
          <MembershipCard4 />
        </div>

      <div className='flex justify-center gap-3 py-5'>
        <Link className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52 text-center" href='/memberregister'>
            Register
        </Link>
        <Link className="p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52 text-center" href='/login/logreg'>
            Login
        </Link>
      </div>
      </Container>
      
      
    </div>
  );
};

export default Membershipfull;

const MembershipCard = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs border-2 rounded-lg snap-start member-pack-card">
      <div className="flex items-center justify-center h-20 bg-black rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="flex-1 p-10 text-center text-black">
        <h1 className="mb-5 text-xl font-bold">ORDINARY MEMBERS</h1>
        <div className="mb-10 text-sm">
          <p>Entrance Fee: Rs.5,000/-</p>
          <p>Annual Subscription: Rs.5,000/-</p>
        </div>
        <div className="mb-10 text-sm">
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        </div>
      </div>
    </div>
  );
};
const MembershipCard2 = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs border-2 rounded-lg snap-start member-pack-card">
      <div className="flex items-center justify-center h-20 bg-black rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="flex-1 p-10 text-center text-black">
        <h1 className="mb-5 text-xl font-bold">LIFE MEMBERS</h1>
        <div className="mb-10 text-sm">
          <p>Life membership Fee: </p>
          <p>Rs.5,000/-</p>
        </div>
        <div className="mb-10 text-sm">
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
      </div>
    </div>
    </div>
  );
};

const MembershipCard3 = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs border-2 rounded-lg snap-start member-pack-card">
      <div className="flex items-center justify-center h-20 bg-black rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="flex-1 p-10 text-center text-black">
        <h1 className="mb-5 text-xl font-bold">HON LIFE MEMBERS</h1>
        <div className="mb-10 text-sm">
          <p>Entrance Fee: Rs.5,000/-</p>
          <p>Annual Subscription: Rs.5,000/-</p>
        </div>
        <div className="mb-10 text-sm">
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        </div>
      </div>
    </div>
  );
};

const MembershipCard4 = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-xs border-2 rounded-lg snap-start member-pack-card">
      <div className="flex items-center justify-center h-20 bg-black rounded-t-lg">
        <StarIcon className="w-10 h-10" />
      </div>
      <div className="flex-1 p-10 text-center text-black">
        <h1 className="mb-5 text-xl font-bold">HON LIFE MEMBERS</h1>
        <div className="mb-10 text-sm">
          <p>Entrance Fee: Rs.5,000/-</p>
          <p>Annual Subscription: Rs.5,000/-</p>
        </div>
        <div className="mb-10 text-sm">
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        <p>Life membership Fee: </p>
        <p>Rs.5,000/-</p>
        </div>
      </div>
    </div>
  );
};
