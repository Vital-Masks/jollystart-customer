import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const ProfileInfoPopover = ({ label, link, subMenu, currentPath }) => {
  const [openPopover, setOpenPopover] = React.useState(false);
  console.log(currentPath, "0000000000");
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Button
          className={`flex items-center text-sm font-semibold leading-6 text-gray-100 gap-x-1 outline-none ${
            currentPath && currentPath.includes(link) ? " navactive" : ""
          }`}
          variant="text"
          style={{
            padding: "6px",
          }}
        >
          {label}
        </Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
        {subMenu.map(({ id, label, link }) => (
          <Link
            key={id}
            href={link}
            className="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 outline-none text-gray-900 rounded-lg hover:bg-gray-50"
            onClick={() => setOpenPopover(!openPopover)}
          >
            {label}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};
export default ProfileInfoPopover;
