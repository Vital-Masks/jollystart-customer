import React from 'react';
import Link from 'next/link';

const PaymentTable = () => {
  const people = [
    {
      member_type: 'Basic User',
      bank: 'Bank of Ceylon',
      branch: 'Chunnagam',
      totall: '1000',
      date: '10/10/2023',
    },
  ];

  return (
    <div className="flow-root mt-8">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Member Type
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Bank
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Branch
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Totall
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {people.map((person) => (
                <tr key={person.date}>
                  <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                    {person.member_type}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.bank}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.branch}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.totall}
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {person.date}
                  </td>
                  <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                    <Link
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Image<span className="sr-only">, {person.date}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
