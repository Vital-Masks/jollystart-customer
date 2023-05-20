import React from 'react';
import Container from '../Shared/Container';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="bg-slate-200">
      <Container>
        <div className="mb-10 text-center responsive">
          <h1 className="text-2xl font-bold text-slate-800">Gallery</h1>
          <p className="mt-3 text-slate-600 p-5">
            The membership of the club is open to all persons who are approved
            by the Executive Committee. Each applicant for admission as a member
            of the club shall apply in the prescribed.
          </p>
        </div>
        <div className="flex grid-cols-2 gap-2 overflow-auto md:grid md:grid-cols-3 lg:grid-cols-6 p-5">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div key={img} className="w-full shrink-0">
              <Image
                src={
                  'https://images.unsplash.com/photo-1578742209285-c4dbba4af948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvY2tleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                }
                width={720}
                height={720}
                className="w-full h-full aspect-square"
                alt="gg"
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
