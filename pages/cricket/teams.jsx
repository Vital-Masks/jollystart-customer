import Container from "@/components/Shared/Container";
import UserCard from "@/components/UserCard";
import UserFulViewName from "@/components/UserCard/UserFulViewName";
import UserFullView from "@/components/UserCard/UserFullView";
import Image from "next/image";
import React from "react";
import commityImg from "../../public/assets2/banner/cricketteam.jpg";

const Teams = () => {
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
          <h1 className="text-2xl font-bold text-slate-800 p-5">
            Cricket Team 2022/23
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
              <div className="w-2/10  p-8">
                <div className="flex-shrink-1 w-[400px] p-2 w-100">
                  <p
                    className="m-3 text-lg text-slate-600 p-2 font"
                    style={{ fontWeight: "bold" }}
                  >
                    <span
                      className="font-bold"
                      style={{
                        fontSize: "20px",
                      }}
                    >
                      Sitting Left to Right:
                    </span>
                    <br />
                    Vijeyabalan Vaamanan(All Rounder), Mahadevan Kobiram(Captain
                    - All Rounder), Subramaniam Pirasanna(All Rounder),
                    Jeyakumar Sajeekan(Batsman)
                    <br />
                    <div
                      className="font-bold"
                      style={{
                        fontSize: "20px",
                        marginTop: "10px",
                      }}
                    >
                      tanding Left to Right:
                    </div>
                    Vettivel Vithusikan (Batsman), Raveendran Dayansan (Bowler),
                    Thanapalasingam Umesh(Bowler), Lingamayam Sivaram(All
                    Rounder), Uthayasooriyan Kethees(Batsman), Pathmakanthan
                    Vishnusoorya(Bowler), Nanthakumar Abipiriyan(Bowler)
                    <br />
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
