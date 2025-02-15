import Image from "next/image";
// import { MDBFooter } from 'mdb-react-ui-kit';
import React from "react";
import SocialMediaLinks from "../SocialMediaLinks";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full p-10 text-center bg-white border-t">
        <div className="flex justify-center">
          <Image
            priority
            src="/assets2/brand/logo1.png"
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

      {/* <MDBFooter bgColor="light" className="text-center bg-white text-lg-left">
        <div
          className="p-3 text-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        > */}
      {/* <div className="w-full mx-auto max-w-screen-xl p-1 md:flex md:items-center md:justify-between">
      
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        <Link className="text-sm text-dark" href="/">
            Home
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/about-us">
            About Us
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/cricket/club-cricket">
            Cricket
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/basketball/club-basketball">
            BasketBall
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/membership">
            Membership
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/latest-news">
            Sports News & Events
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/gallery">
            Gallery
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/contact-us">
            Contact Us
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="#">
            Terms Privacy
          </Link>
        </li>
        <li>
        <Link className="text-sm text-dark" href="/UserProfile">
            Privacy Policy
          </Link>
        </li>
    </ul>
    </div> */}

      <section>
        <div className="max-w-screen-xl px-4 py-2 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/">
                Home
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/about-us">
                About Us
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/cricket/club-cricket">
                Cricket
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link
                className="text-sm text-dark"
                href="/basketball/club-basketball"
              >
                BasketBall
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/memberpackage">
                Membership
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/latest-news">
                News & Events
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/gallery">
                Gallery
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/contact-us">
                Contact Us
              </Link>
            </div>
            {/* <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="#">
                Terms Privacy
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link className="text-sm text-dark" href="/UserProfile">
                Privacy Policy
              </Link>
            </div> */}
          </nav>
        </div>
      </section>
      {/* </div>
      </MDBFooter> */}

      <div className="px-10 py-3 bg-brand-light">
        <p className="text-xs text-center text-gray">
          Copyright &copy; {new Date().getFullYear()} jollystarssc.com. All
          Rights Reserved. Designed and Developed by{" "}
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
