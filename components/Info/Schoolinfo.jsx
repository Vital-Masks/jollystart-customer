import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';
import InputField from '../UI/InputField';
import Table from '../Table';
import { PhotoIcon } from '@heroicons/react/24/solid';


const Schoolinfo = () => {
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
          School Details
        </div>
        <div className="px-10 my-10">
          <div className="flex items-end gap-4 mb-10">
            <div className="w-full">
              <InputField
                label="School Name"
                name="school_name"
                required={true}
              />
            </div>

            <button className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52">
              Add
            </button>
          </div>
          <div className="grid grid-cols-5 gap-3">
            <InputField
              label="Team you played"
              name="team_you_played"
              required={true}
            />
            <InputField label="Game" name="game" required={true} />
            <InputField label="From" name="from" required={true} />
            <InputField label="To" name="to" required={true} />
            <InputField label="Role" name="role" required={true} />
          </div>
          <div className="mt-10">
            <Table />
          </div>
        </div>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Club Details
        </div>
        <div className="px-10 my-10">
          <div className="flex items-end gap-4 mb-10">
            <div className="w-full">
              <InputField
                label="School Name"
                name="school_name"
                required={true}
              />
            </div>

            <button className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52">
              Add
            </button>
          </div>
          <div className="grid grid-cols-5 gap-3">
            <InputField
              label="Team you played"
              name="team_you_played"
              required={true}
            />
            <InputField label="Game" name="game" required={true} />
            <InputField label="From" name="from" required={true} />
            <InputField label="To" name="to" required={true} />
            <InputField label="Role" name="role" required={true} />
          </div>
          <div className="mt-10">
            <Table />
          </div>
        </div>
      </div> 
      <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Image Proof
        </div>
        <div className='py-4 px-10'>
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
  );
};

export default Schoolinfo;
