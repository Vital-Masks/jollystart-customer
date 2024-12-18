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
            BasketBall Team 2022/23
          </h1>

          <div className="flex">
            <div className="flex h-screen">
              <div className="flex-shrink-0 w-8/10">
                <UserFullView
                  picture={commityImg}
                  name={"Mr. V. Manivannan"}
                  occupation={"President"}
                />
              </div>
              <div className="w-2/10 px-8">
                <div className="flex-shrink-1 w-[400px] px-2 w-100">
                  <div>
                    <h4 className="text-black text-lg font-bold">
                      Sitting Left to Right:
                    </h4>
                    <p className="text-black font-light">
                      Vijeyabalan Vaamanan(All Rounder), Mahadevan
                      Kobiram(Captain - All Rounder), Subramaniam Pirasanna(All
                      Rounder), Jeyakumar Sajeekan(Batsman)
                    </p>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-black text-lg font-bold">
                      Standing Left to Right:
                    </h4>
                    <p className="text-black font-light">
                      Vettivel Vithusikan (Batsman), Raveendran Dayansan
                      (Bowler), Thanapalasingam Umesh(Bowler), Lingamayam
                      Sivaram(All Rounder), Uthayasooriyan Kethees(Batsman),
                      Pathmakanthan Vishnusoorya(Bowler), Nanthakumar
                      Abipiriyan(Bowler)
                    </p>
                  </div>
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
