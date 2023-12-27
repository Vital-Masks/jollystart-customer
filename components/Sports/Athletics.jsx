import React from 'react';
import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';

const Athletics = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="p-5 text-2xl font-bold text-slate-800">Athletics</h1>
          <p className="p-5 mt-5 text-slate-600">
          Jolly Stars Sports Club thrives in athletics, with Shan Thayalan showcasing remarkable achievements at the national level in Javelin and Pole Vault. Particularly noteworthy is his 5th-place finish in Javelin at the 2019 Asian Games Masters category. Thayalan's exceptional performance reflects the club's commitment to fostering athletic talent, pointing towards a future filled with successes on the track and field.

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

export default Athletics;
