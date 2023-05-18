import Container from '@/components/Shared/Container';
import UserCard from '@/components/UserCard';
import Image from 'next/image';
import React from 'react';

const Teams = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Container className="text-left">
          <h1 className="text-2xl font-bold text-slate-800">Team 2022/23</h1>

          <div className="grid grid-cols-2 gap-5 mt-5 md:grid-cols-4 xl:gap-10">
            {[1, 2, 3, 4].map((img) => (
              <UserCard
                key={img}
                picture="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                name={'Mr. V. Manivannan'}
                occupation={'President'}
              />
            ))}
          </div>

          <p className="mt-10 text-lg text-slate-600">
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

export default Teams;
