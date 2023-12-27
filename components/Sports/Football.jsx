import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';

const Football = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">
            OUR LEGACY IN FOOTBALL
          </h1>
          <p className="p-5 mt-5 text-slate-600">
          In football, Jollystars Sports Club boasts a rich legacy with remarkable achievements. Shan Thayalan, National Team Captain in 1975, and Vithiyatharan, a goalkeeping stalwart, showcased their skills at the national level. In 1976, Shan Thayalan continued his excellence as a player in the National Team at the Under 19 level. These accomplishments underline the club's commitment to nurturing football talent, foreseeing a future where our efforts continue to yield national-level football achievers.

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

export default Football;
