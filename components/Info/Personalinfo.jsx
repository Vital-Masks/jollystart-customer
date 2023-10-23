import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';
import InputField from '../UI/InputField';
import { PhotoIcon } from '@heroicons/react/24/solid';


const Personalinfo = () => {
  return (
      <div className="w-full bg-white border rounded-xl">
      
      
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Personal Details
        </div>
        <div className="px-10 my-10 ">
          <div className="grid grid-cols-4 gap-3">
            <div className="grid grid-cols-4 col-span-4 gap-3">
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
              <div className="col-span-3">
                <InputField
                  label="Resident Address"
                  name="resident_address"
                  required={true}
                />
                
              </div>
              <InputField
                label="Marital Status"
                name="marital_status"
                required={true}
              />
              
              
            </div>
           
          </div>
        </div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Change Password
        </div>
        <div className="px-10 my-10 ">
          <div className="grid grid-cols-4 gap-6">
            <InputField
              label="Old Password"
              name="old_password"
              required={true}
            />
            <InputField label="New Password" name="new_password" required={true} />
            <div className="col-span-1">
              <InputField label="Confirm Password" name="confirm_password" required={true} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-10">
          <button
            onClick={() => setStep(2)}
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personalinfo;
