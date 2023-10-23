import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';
import InputField from '../UI/InputField';
import { PhotoIcon } from '@heroicons/react/24/solid';


const Occupationinfo = () => {
  return (
      <div className="w-full bg-white border rounded-xl">
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Occupation Informations
        </div>
        <div className="px-10 my-10 ">
          <div className="grid grid-cols-4 gap-6">
            <InputField
              label="Workplace Name"
              name="workplace_name"
              required={true}
            />
            <InputField label="Occupation" name="Occupation" required={true} />
            <div className="col-span-1">
              <InputField label="Office Address" name="office_address" required={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Occupationinfo;
