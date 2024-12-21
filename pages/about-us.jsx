import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import Container from "@/components/Shared/Container";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-2 text-2xl font-bold text-slate-800">About Us</h1>
          <p className="p-2 mt-5 text-slate-600">
            Founded in 1948 by the esteemed alumni of Jaffna Hindu College,
            Jolly Stars Sports Club has proudly served as a symbol of sporting
            excellence and camaraderie for over seven decades. As we approach
            our remarkable 75th anniversary, we reflect upon our rich history
            and celebrate the countless achievements that have shaped our club.
            Jolly Stars Sports Club exclusively welcomes students who have had
            the privilege of studying at Jaffna Hindu College, fostering a sense
            of unity and shared values among our members. Our club has become a
            vibrant hub where passionate sports enthusiasts come together to
            showcase their talents and compete in a variety of thrilling
            sporting events.
          </p>
          <p className="p-2 mt-5 text-slate-600">
            We offer a diverse range of sports, catering to the interests and
            abilities of our members. From the excitement of football and
            cricket to the agility of badminton and athletics, the intensity of
            basketball and volleyball, the precision of table tennis, the speed
            of hockey, and the strength of weightlifting, Jolly Stars Sports
            Club provides a platform for individuals to excel in their chosen
            disciplines.
          </p>
          <div className="flex justify-center p-2 mt-4">
            <Image
              src="/assets/banner/about.jpg"
              width={720}
              height={720}
              className="w-full h-[400px] object-cover"
              alt="gg"
            />
          </div>

          <p className="p-2 mt-5 text-slate-600">
            Throughout our storied history, our club has consistently produced
            exceptional sportsmen and athletes who have made their mark not only
            within our organization but also at regional and national levels.
            Their achievements stand as a testament to the dedication,
            perseverance, and talent that thrive within the walls of our club.
            At Jolly Stars Sports Club, we pride ourselves on our commitment to
            excellence both on and off the field. We strive to be pioneers in
            the world of sports, setting a benchmark for achievement and
            functioning that inspires other clubs to follow suit. We believe in
            nurturing the holistic development of our members, encouraging
            sportsmanship, discipline, teamwork, and leadership qualities that
            extend far beyond the realm of sports.
          </p>
          <p className="p-2 mt-5 text-slate-600">
            As we embark on our 75th anniversary, we remain steadfast in our
            mission to provide a platform for Jaffna Hindu College alumni to
            connect, compete, and flourish. We invite you to join our esteemed
            community, where passion meets skill, friendships are forged, and
            legends are born. Come be a part of Jolly Stars Sports Club and
            witness the spirit of sportsmanship and camaraderie that has defined
            us for generations. Together, let&apos;s continue to create a legacy
            that transcends time. Jolly Stars Sports Club - Where Champions are
            Made!
          </p>
          <div className="flex justify-start gap-3 py-5">
            <a
              className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52 text-center"
              href="https://drive.google.com/file/d/1tjFVt_i1hdT1R4HY4WU4ZXveWtVIhWJy/view?usp=sharing"
              target="_blank"
            >
              English
            </a>
            <a
              className="p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52 text-center"
              href="https://drive.google.com/file/d/1y5VdUy7WPFUGhRNS1-CT_vVRVhMeXxeq/view?usp=sharing"
              target="_blank"
            >
              Tamil
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
