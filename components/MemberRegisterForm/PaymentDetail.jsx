import React from 'react';
import InputField from '../UI/InputField';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useMembers } from '@/contexts/MemberContext';
import Table from '../Table';

const PaymentDetail = () => {
  const { setStep } = useMembers();

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="py-4 m-2 text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 03 - PAYMENT DETAILS
      </div>
      <div className="px-10 my-10">
        <p className="text-xl text-center">
          The membership of the club is open to all persons who are approved by
          the Executive Committee. Each applicant for admission as a member of
          the club shall apply in the prescribed.
        </p>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Payment Details
        </div>
        <div className="px-10 my-10">
          <div className="grid grid-cols-4 gap-3">
            <div className="grid grid-cols-3 col-span-3 gap-2">
              
              <InputField
                label="First Name"
                name="first_name"
                required={true}    
              />
              <InputField label="Bank" name="bank" required={true} />
              <InputField
                label="Barnch"
                name="branch"
                required={true}
              />
              <InputField
                label="Mobile Number"
                name="mobile_number"
                required={true}
              />
               <InputField
                label="Totall"
                name="totall"
                required={true}
              />
              <InputField
                label="Date"
                name="date"
                required={true}
              />
            </div>
            <div>
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Add picture
                </label>
                <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                  <div className="text-center">
                    <PhotoIcon
                      className="w-12 h-12 mx-auto text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="flex mt-4 text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center ">
                  <div className="flex items-center h-6">
                    <input
                      id="comments"
                      aria-describedby="comments-description"
                      name="comments"
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <p id="comments-description" className="text-[#7E7A7C]">
                      I agree the terms of service and Privacy policy.
                    </p>
                  </div>
                </div>
        </div>
        
        <div className="flex items-center justify-center mb-10 gap-5">
          <button
            onClick={() => setStep(2)}
            className="p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52"
          >
            Previous
          </button>
          <button
            onClick={() => setStep(3)}
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetail;