import Image from "next/image";
import { MDBFooter } from 'mdb-react-ui-kit';
import React from "react";
import SocialMediaLinks from '../SocialMediaLinks';
import Link from "next/link";

const Footer = () => {
    return (
      <>
        <div className="w-full p-10 text-center border-t bg-brand-light">
          <div className="flex justify-center">
            <Image
              priority
              src="/assets/brand/jolly 1.png"
              alt="logo"
              width={1080}
              height={1080}
              className="z-20 object-contain w-16 h-16 mb-5 md:w-24 md:h-24"
            />
          </div>

          {/* <p className="text-white mt-4 lg:w-[60%] mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            est tenetur, deleniti in nesciunt quas soluta tempora ducimus rem
            dolorum nihil? Dolore laborum distinctio animi placeat obcaecati!
            Deleniti, quisquam placeat!
          </p> */}
          <div className="px-10 py-3 bg-brand-light">
          <p className="text-sm text-center text-gray-400 justify-center">
          House My Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable House My
  Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable
          </p>
        </div>
          <div className="flex justify-center mt-5">
            <SocialMediaLinks />
          </div>
        </div>
  
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
         
          <a className='text-dark text-sm' href='#'>
            Home
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
            About Us
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
            Cricket
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
            BasketBall
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
           Membership     
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
           Sports News & Events
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
          Gallery
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
          Contact Us
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
          Terms Privacy 
          </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='text-dark text-sm' href='#'>
           Privacy Policy
          </a>
        </div>
      </MDBFooter> 
  
        <div className="px-10 py-3 bg-brand-light">
          <p className="text-sm text-center text-gray">
            Copyright &copy; {new Date().getFullYear()} jollystarsportsclub.com.
            All Rights Reserved. Designed and Developed by{' '}
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
