import { routes } from '@/contents/routes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Navbar = () => {
  const menus = [
    {
      id: 0,
      label: 'Home',
      link: routes.HOME,
    },
    {
      id: 1,
      label: 'About us',
      link: routes.ABOUT_US,
    },
    {
      id: 2,
      label: 'Cricket',
      link: routes.CRICKET,
    },
    {
      id: 3,
      label: 'Basket ball',
      link: routes.BASKET_BALL,
    },
    {
      id: 4,
      label: 'Sport',
      link: routes.SPORTS,
    },
    {
      id: 5,
      label: 'Lates news',
      link: routes.LATEST_NEWS,
    },
    {
      id: 6,
      label: 'Gallery',
      link: routes.GALLERY,
    },
    {
      id: 7,
      label: 'Contact us',
      link: routes.CONTACT_US,
    },
  ];
  return (
    <div className="bg-blue-900">
      <div className="flex py-3 space-x-8 responsive">
        {menus.map((menu) => (
          <NavItems key={menu.id} {...menu} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;

const NavItems = ({ label, link }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={link}
      className={`text-lg ${asPath === link && ' text-amber-200'}`}
    >
      {label}
    </Link>
  );
};
