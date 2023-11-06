import React from 'react';
import InputField from '../UI/InputField';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useMembers } from '@/contexts/MemberContext';

const PersonalDetail = () => {
  const { setStep } = useMembers();

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="py-4 m-2 text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 01 - FILL YOUR PERSONAL DATA
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
          Membership Details
        </div>
        <div className="flex items-center gap-4 px-10 my-10">
          <select
            className="w-full h-12 px-4 py-2 bg-transparent border rounded-full"
            name="category"
            id="category"
          >
            <option>Select Category</option>
            <option value="1">Ordinary Member</option>
            <option value="2">Life time Member</option>
            <option value="3">Hon Life time Member</option>
          </select>
          <button className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52">
            Pricing Table
          </button>
        </div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Personal Details
        </div>
        <div className="px-10 my-10 ">
          <div className="grid grid-cols-4 gap-3">
            <div className="grid grid-cols-3 col-span-3 gap-3">
              <InputField label="Title" name="title" required={true} />
              <InputField
                label="First Name"
                name="first_name"
                required={true}
                
              />
              <InputField label="Last Name" name="last_name" required={true} />
              <InputField
                label="NIC/ Passport ID"
                name="nic_passport_id"
                required={true}
              />
              <InputField
                label="Date of Birth"
                name="date_of_birth"
                required={true}
              />
              <InputField
                label="E-Mail Address"
                name="e_mail_address"
                required={true}
              />
              <div className="col-span-3">
                <InputField
                  label="Resident Address"
                  name="resident_address"
                  required={true}
                />
              </div>
              <InputField
                label="Mobile Number"
                name="mobile_number"
                required={true}
              />
              <InputField
                label="Telephone Number"
                name="telephone_number"
                required={true}
              />
              <InputField
                label="Marital Status"
                name="marital_status"
                required={true}
              />
              <InputField
                label="User Name"
                name="User_Name"
                required={true}
              />
              <InputField
                label="Password"
                name="password"
                required={true}
              />
              <InputField
                label="Confirm Password"
                name="Confirm_assword"
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
        </div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Personal Details
        </div>
        <div className="px-10 my-10 ">
          <div className="grid grid-cols-4 gap-3">
            <InputField
              label="Workplace Name"
              name="workplace_name"
              required={true}
            />
            <InputField label="Title" name="title" required={true} />
            <div className="col-span-2">
              <InputField label="Title" name="title" required={true} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            onClick={() => setStep(2)}
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
