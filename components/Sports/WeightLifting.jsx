import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';

const WeightLifting = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">
            WeightLifting
          </h1>
          <p className="p-5 mt-5 text-slate-600">
          Determination defines Jollystars' lifters, becoming sculpted powerhouses through immense dedication. Our lifters, forged with unwavering commitment, epitomize the club's focus on producing elite athletes. With dedication to excellence, our weight lifting legacy is a testament to the strength and determination instilled in every athlete.
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

export default WeightLifting;
