import React from "react";
import Link from "next/link";

const PaymentTable = ({ paymentDetails, memberData }) => {
  console.log(paymentDetails, "payment");
  // const {membershipCategory,} = memberData.
  const data = paymentDetails || [];
  const openImageInNewTab = (url) => {
    console.log(url);
    const src = `data:image/png;base64,${url}`;

    // Replace 'imageURL' with the actual URL of your image
    const imageURL = `data:image/png;base64,${url}`;
    // Open the image in a new tab
    const newWindow = window.open();

    // Write the image data to the new window
    newWindow.document.write(`<img src="${imageURL}" alt="Image" />`);
  };
  return (
    <div className="flow-root mt-8">
      {/* {
        JSON.stringify(data)
      } */}
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
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Payment Status
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data &&
                data.length > 0 &&
                data.map((person) => (
                  <tr key={person.date}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                      {/* {memberData.membershipCategory} */}
                      {person.membershipCategory}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.bank}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.branch}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.total}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.date}
                    </td>
                    <td
                      className={`px-3 py-4 text-sm whitespace-nowrap ${person.isPaymentDetailVerified === false ? "text-[#ff8383]" : " text-[#008000] "
                        }`}
                    >
                      {person.isPaymentDetailVerified === false ? "Pending" : "Approved"}
                    </td>
                    <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                      <div
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                        onClick={() => openImageInNewTab(person.paymentSlip)}
                      >
                        View Image
                        <span className="sr-only">, {person.date}</span>
                      </div>
                      {/* <img
                        src={`data:image/png;base64,${person?.paymentSlip}`}
                        alt="profile"
                        className="w-full h-full object-cover"
                        style={{
                          borderRadius: "30px",
                          maxWidth: "100%",
                          maxHeight: "300px",
                        }}
                      /> */}
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
