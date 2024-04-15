import Container from "@/components/Shared/Container";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-white">
      <Container>
        <>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 p-5">
              Our offices
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 p-5">
              Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
              id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
              fames.
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h3 className="pl-6 font-semibold text-gray-900 border-l border-indigo-600">
                Address
              </h3>
              <address className="pt-2 pl-6 not-italic text-gray-600 border-l border-gray-200">
                <p>4556 Brendan Ferry</p>
                <p>Los Angeles, CA 90210</p>
              </address>
            </div>
            <div>
              <h3 className="pl-6 font-semibold text-gray-900 border-l border-indigo-600">
                Contact Us
              </h3>
              <address className="pt-2 pl-6 not-italic text-gray-600 border-l border-gray-200">
                <p>886 Walter Street</p>
                <p>New York, NY 12345</p>
              </address>
            </div>
            <div>
              <h3 className="pl-6 font-semibold text-gray-900 border-l border-indigo-600">
                Social Media
              </h3>
              <address className="pt-2 pl-6 not-italic text-gray-600 border-l border-gray-200">
                <p>7363 Cynthia Pass</p>
                <p>Toronto, ON N3Y 4H8</p>
              </address>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.632784479475!2d79.88689167522007!3d6.814440719713547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245b28611882f%3A0x6c0b8ef0e70a59a!2sHindu%20College%20Play%20Ground!5e0!3m2!1sen!2slk!4v1710755104472!5m2!1sen!2slk"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.033713873992!2d80.00782707805787!3d9.669999242928622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1684598161590!5m2!1sen!2slk"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] mt-10 p-5"
            ></iframe>
          </div>
        </>
      </Container>
    </div>
  );
};

export default ContactUs;
