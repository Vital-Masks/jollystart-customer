import React from "react";
import Link from "next/link";
import formatDate from "../utils/formDate";

const Table = (props) => {
  const { items, handleEditItem, handleDeleteItem, table, schoolDetails } =
    props;
  const people =
    schoolDetails && schoolDetails.length > 0 ? schoolDetails : items;

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
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Team
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Game
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  From
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  To
                </th>

                {!(schoolDetails && schoolDetails.length > 0) && (
                  <th
                    colSpan={2}
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {people &&
                people.map((person, index) => (
                  <tr key={index}>
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-0">
                      {table === "2" ? person.clubName : person.schoolName}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {table === "2" ? person.involved : person.participated}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.game}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {person.role}
                    </td>{" "}
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {formatDate(person.from)}
                    </td>{" "}
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {formatDate(person.to)}
                    </td>
                    {!(schoolDetails && schoolDetails.length > 0) && (
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                        <button
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                          onClick={() => handleEditItem(index)}
                           type="button"
                        >
                          Edit<span className="sr-only">, {person.name}</span>
                        </button>
                      </td>
                    )}
                    {!(schoolDetails && schoolDetails.length > 0) && (
                      <td className="relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap sm:pr-0">
                        <button
                          onClick={() => handleDeleteItem(index)}
                          href="#"
                          className="text-red-500 hover:text-red-700"
                           type="button"
                        >
                          Delete<span className="sr-only">, {person.name}</span>
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
