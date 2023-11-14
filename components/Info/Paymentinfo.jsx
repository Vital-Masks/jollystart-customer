import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';
import InputField from '../UI/InputField';
import PaymentTable from '../PaymentTable';
import { PhotoIcon } from '@heroicons/react/24/solid';


const Paymentinfo = () => {
  return (
    <div className="w-full bg-white border rounded-xl">  
    <div className="flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                <div className="max-w-[80rem] w-full h-full bg-[#e2e2e7] shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none" style={{ borderRadius: '10px' }}>
                    <div className="p-5 sm:p-10 flex flex-col sm:flex-row items-center">
                    <div className="w-60 h-60 rounded-md overflow-hidden object-cover mb-5 sm:mb-0">
                        <img
                        src="/assets/banner/gallery1.jpg"
                        alt="profile"
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '20px' }}
                        />
                    </div>
                    <div className="text-center sm:text-left ml-10 mr-5">
                        <h3 className="text-[#3b3f5c] text-2xl sm:text-4xl font-semibold mb-2 dark:text-black bold">
                        Luke Ivory
                        </h3>
                        <p className="mb-2 text-lg sm:text-xl text-dark">
                        Membership Type - Hon. Lifetime Member
                        </p>
                        <p className="mb-2 text-lg sm:text-xl text-dark">
                        Status - Pending Request
                        </p>
                        <p className="mb-2 text-lg sm:text-xs text-dark">
                        Member Request - 26 Oct 2020, 4:00 PM
                        </p>
                        <p className="mb-2 text-lg sm:text-xs text-dark">
                        Membership Approval Date - Not Approved Yet
                        </p>
                        <p className="mb-2 text-lg sm:text-xs text-dark">
                        Membership ID - Not Assigned Yet
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Payment Details
        </div>
        <div className="px-10 my-10">
          <div className="mt-10">
            <PaymentTable />
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            onClick={() => setStep(2)}
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-72"
          >
            Upgrade to Life Member
          </button>
        </div>
      </div>  
    </div>
  );
};

export default Paymentinfo;
