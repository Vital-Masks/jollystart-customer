import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';

const Volleyball = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">Volleyball</h1>
          <p className="p-5 mt-5 text-slate-600">
          Our Club asserts itself as a volleyball powerhouse, cultivating top-tier talent through unwavering dedication. Our athletes, refined through persistent effort, embody court excellence, reflecting the club's commitment to shaping players who redefine the game.
ts and compete in a variety of thrilling
            sporting events.
          </p>
         
          <div className="flex justify-center p-5 mt-4">
            <Image
              src={
                'https://images.unsplash.com/photo-1578742209285-c4dbba4af948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvY2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
              }
              width={720}
              height={720}
              className="w-full h-[400px] object-cover"
              alt="gg"
            />
          </div>

        
        </Container>
      </div>
    </>
  );
};

export default Volleyball;
