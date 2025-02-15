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
        <h1 className="text-2xl font-bold text-slate-800 py-5">
        Cricket Team 2025/26
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
                Vijeyabalan Vaamanan (All Rounder), Mahadevan Kobiram (Captain
               - All Rounder), Subramaniam Pirasanna (All Rounder), Jeyakumar
                   Sajeekan (Batsman)
                </p>
              </div>

              <div className="mt-4">
                <h4 className="text-black text-lg font-bold">
                  Standing Left to Right:
                </h4>
                <p className="text-black font-light">
                  Vettivel Vithusikan (Batsman), Raveendran Dayansan (Bowler),
                  Thanapalasingam Umesh (Bowler), Lingamayam Sivaram (All
                  Rounder), Uthayasooriyan Kethees (Batsman), Pathmakanthan
                  Vishnusoorya (Bowler), Nanthakumar Abipiriyan (Bowler)
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
  // <>
    //   <div className="bg-slate-100">
    //     <Container className="text-left">
    //       <h1 className="text-2xl font-bold text-slate-800 p-5">
    //         Cricket Team 2022/23
    //       </h1>

    //       <div className="flex flex-col md:flex-row h-auto md:h-screen">
    //         <div className="flex-shrink-0 w-full md:w-8/10">
    //           <UserFullView
    //             picture={commityImg}
    //             name={"Mr. V. Manivannan"}
    //             occupation={"President"}
    //           />
    //         </div>
    //         <div className="w-full md:w-2/10 p-4 md:p-8">
    //           <div className="flex-shrink-1 max-w-full md:max-w-[400px] p-2">
    //             <p className="m-3 text-lg text-slate-600 font-bold">
    //               <span style={{ fontSize: "20px" }}>
    //                 Sitting Left to Right:
    //               </span>
    //               <br />
    //               Vijeyabalan Vaamanan (All Rounder), Mahadevan Kobiram (Captain
    //               - All Rounder), Subramaniam Pirasanna (All Rounder), Jeyakumar
    //               Sajeekan (Batsman)
    //             </p>
    //             <p className="font-bold mt-4" style={{ fontSize: "20px" }}>
    //               Standing Left to Right:
    //             </p>
    //             <p className="m-3 text-lg text-slate-600 font-bold">
    //               Vettivel Vithusikan (Batsman), Raveendran Dayansan (Bowler),
    //               Thanapalasingam Umesh (Bowler), Lingamayam Sivaram (All
    //               Rounder), Uthayasooriyan Kethees (Batsman), Pathmakanthan
    //               Vishnusoorya (Bowler), Nanthakumar Abipiriyan (Bowler)
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </Container>
    //   </div>
    // </>