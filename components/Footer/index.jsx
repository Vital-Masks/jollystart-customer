import Image from 'next/image';

import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="w-full p-10 text-center bg-white border-t">
        <div className="flex justify-center">
          <Image
            priority
            src="/assets/brand/logo1.png"
            alt="logo"
            width={720}
            height={720}
            className="w-[250px] h-auto object-contain"
          />
        </div>

        <div className="px-10 py-3 bg-white">
          <p className="justify-center text-sm text-center text-gray-400">
            Founded in 1948 by the esteemed alumni of Jaffna Hindu College,
            Jolly Stars Sports Club has proudly served as a symbol of sporting
            excellence and camaraderie for over seven decades. As we approach
            our remarkable 75th anniversary, we reflect upon our rich history
            and celebrate the countless achievements that have shaped our club.
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <SocialMediaLinks />
        </div>
      </div>

      <div className="text-center bg-white bg-gray-50 text-lg-left">
        <div
          className="p-3 text-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <a className="text-sm text-dark" href="#">
            Home
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            About Us
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Cricket
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            BasketBall
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Membership
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Sports News & Events
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Gallery
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Contact Us
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Terms Privacy
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="text-sm text-dark" href="#">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="px-10 py-3 bg-brand-light">
        <p className="text-xs text-center text-gray">
          Copyright &copy; {new Date().getFullYear()} jollystarssc.com. All
          Rights Reserved. Designed and Developed by{' '}
          <Link
            href="https://www.vitalmasks.lk/"
            target="_blank"
            className="font-bold text-brand-yellow"
          >
            Vital Masks
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
