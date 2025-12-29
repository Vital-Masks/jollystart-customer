import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import UserFulViewName from "@/components/UserCard/UserFulViewName";
import UserFullView from "@/components/UserCard/UserFullView";
import Image from "next/image";
import React from "react";
import commityImg from "../../public/assets2/banner/basketballteam.jpg";

const Teams = () => {
  // new
  const MembersNames = [
    {
      name: "Ravi",
      role: "President",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "President",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
    {
      name: "Ravi",
      role: "Member",
    },
  ];
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800 py-5">
            Basketball Team 2025/26
          </h1>

          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 w-full md:w-8/12">
              <UserFullView
                picture={commityImg}
                name={"Mr. V. Manivannan"}
                occupation={"President"}
              />
            </div>

            <div className="w-full md:w-4/12 px-4 py-4 md:py-0 md:px-8">
              <div className="flex-shrink-1 w-full px-2">
                <div>
                  <h4 className="text-black text-lg font-bold">
                    Sitting Left to Right:
                  </h4>
                  <p className="text-black font-light">
                    Selvanayagam Thayakaran, Sanmugasuntharalingam Vaheesan, Thaninayagam Sivathas, 
                    Selvanayagam Thayakaran,   Sanmugasuntharalingam Vaheesan, Thaninayagam Sivathas (President),
                    Sivadoss Umadaran (Secretary), Balasubramaniyam Manchuthan (Captain), Neelamegam Bakeetharan,
                    Srikularajah Nishanan
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-black text-lg font-bold">
                    Standing Left to Right:
                  </h4>
                  <p className="text-black font-light">
                    Sivaskaran Riishiikaran, Raveendran Keerththanan, Gunasekaran Thuvarshan, 
                    Jararththanan Thanusankaran, Navaneethakrishnan Sanchajan, 
                    Thayaparan Pinehash, Kantharupan Thanushigan, Kanthauban Maarsilan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Teams;
