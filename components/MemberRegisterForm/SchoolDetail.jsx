import React from 'react';
import InputField from '../UI/InputField';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { useMembers } from '@/contexts/MemberContext';
import Table from '../Table';

const SchoolDetail = () => {
  const { setStep } = useMembers();

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="py-4 m-2 text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 02 - FILL YOUR SCHOOL AND CLUB DETAILS
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
    </div>
  );
};

export default SchoolDetail;
