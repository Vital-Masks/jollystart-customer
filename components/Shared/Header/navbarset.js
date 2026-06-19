import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const ProfileInfoPopover = ({ label, link, subMenu, currentPath }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`flex items-center text-sm font-semibold leading-6 text-gray-100 gap-x-1 outline-none ${
              currentPath && currentPath.includes(link) ? " navactive" : ""
            }`}
            style={{ padding: "6px" }}
          >
            {label}
            <ChevronDownIcon
              className={`flex-none w-5 h-5 text-gray-100 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-0 z-50 mt-2 w-56 rounded-lg bg-white py-2 shadow-lg ring-1 ring-gray-900/5">
              {subMenu.map(({ id, label: subLabel, link: subLink }) => (
                <Link
                  key={id}
                  href={subLink}
                  className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {subLabel}
                </Link>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ProfileInfoPopover;
