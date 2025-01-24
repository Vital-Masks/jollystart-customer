import Container from "@/components/Shared/Container";
import Image from "next/image";
import React from "react";

const ClubCricket = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">
            Club Cricket History
          </h1>
          <p className="p-4 mt-1 text-slate-600">
            Jollystars Sports Club proudly upholds a cricket legacy where
            dedication seamlessly intertwines with achievement. Our crowning
            glory came in 2019 as Northern Champions in the 50 Over format.
            Notable leaders, Shan Thayalan in 1998 and Nadarajah Sivaraj in 2003
            and 2014, showcased dynamic guidance.
          </p>
          
          <p className="p-4 mt-1 text-slate-600">
            Luxumykanth's vice-captaincy in 2003 and Giriharan Mathushan's role
            as Provincial Team Captain Under 19 exemplify our commitment to
            nurturing talent and field excellence. The club's cricket journey is
            a vibrant tapestry of triumphs, celebrating a legacy meticulously
            woven with threads of performance and success. Each victory
            resonates with our unwavering dedication to the sport.
          </p>
          <div className="flex justify-center p-5 mt-4">
            {/* <Image
              src={
                "https://images.unsplash.com/photo-1578742209285-c4dbba4af948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvY2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              width={720}
              height={720}
              className="w-full h-[400px] object-cover"
              alt="gg"
            /> */}
          </div>
    
        </Container>
      </div>
    </>
  );
};

export default ClubCricket;
