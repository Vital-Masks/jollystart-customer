import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';

const Badminton = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">Badminton</h1>
          <p className="p-5 mt-5 text-slate-600">
          Jolly Stars Sports Club dominates in badminton, molding players through relentless dedication. Our shuttle warriors, shaped by unwavering commitment, embody the club's ethos of producing standout athletes. With a focus on excellence, we consistently nurture talent that raises the bar in the world of badminton.

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

export default Badminton;
