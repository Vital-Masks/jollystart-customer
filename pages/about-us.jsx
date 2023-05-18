import Footer from '@/components/Footer';
import HomeBanner from '@/components/HomeBanner';
import Container from '@/components/Shared/Container';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800">About Us</h1>
          <p className="mt-5 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum lorem ligula, a viverra justo luctus fringilla. Phasellus
            lobortis dui et ipsum dictum semper. Quisque dui erat, feugiat in
            sapien ut, bibendum lobortis lectus. Vivamus id tristique tellus.
            Sed cursus sollicitudin sapien. Integer sollicitudin libero non erat
            fermentum, vel tempus arcu varius. Nunc tempor ut metus a pretium.
            Duis eget leo ut tellus aliquam pulvinar. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed vestibulum lorem ligula, a
            viverra justo luctus fringilla. Phasellus lobortis dui et ipsum
            dictum semper. Quisque dui erat, feugiat in sapien ut, bibendum
            lobortis lectus. Vivamus id tristique tellus. Sed cursus
            sollicitudin sapien.
          </p>
          <div className="flex justify-center mt-4">
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

          <p className="mt-5 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum lorem ligula, a viverra justo luctus fringilla. Phasellus
            lobortis dui et ipsum dictum semper. Quisque dui erat, feugiat in
            sapien ut, bibendum lobortis lectus. Vivamus id tristique tellus.
            Sed cursus sollicitudin sapien. Integer sollicitudin libero non erat
            fermentum, vel tempus arcu varius. Nunc tempor ut metus a pretium.
            Duis eget leo ut tellus aliquam pulvinar. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed vestibulum lorem ligula, a
            viverra justo luctus fringilla. Phasellus lobortis dui et ipsum
            dictum semper. Quisque dui erat, feugiat in sapien ut, bibendum
            lobortis lectus. Vivamus id tristique tellus. Sed cursus
            sollicitudin sapien.
          </p>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
