import Container from "@/components/Shared/Container";
import Image from "next/image";
import React from "react";

const ClubBasketball = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">
            Club Basket Ball History
          </h1>
          <p className="p-3 mt-1 text-slate-600">
            Jollystars Sports Club excels in basketball, notably with Vaheesan's
            representation in the SL National Team, a testament to our tangible
            success and unwavering commitment. As we produce national-level
            players, our dedication to fostering talent and achieving milestones
            in basketball excellence remains steadfast.
          </p>
          <p className="p-3 mt-1 text-slate-600">
            In our basketball journey, players exemplify rigorous training and
            values of discipline, forming a strong community on and off the
            court. Beyond victories, our commitment extends into the heart of
            sportsmanship, resonating with the echoes of camaraderie and
            achievement. This underscores our enduring legacy in the realm of
            basketball excellence, where every bounce of the ball signifies more
            than just a game.
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

export default ClubBasketball;
