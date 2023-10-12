import React from 'react';
import Container from '../Shared/Container';
import Image from 'next/image';


const Gallery = () => {
  const images = [
    {
      id: 1,
      image: '/assets/banner/gallery1.jpg',
    },
    {
      id: 2,
      image: '/assets/banner/gallery2.jpg',
    },
    {
      id: 3,
      image: '/assets/banner/gallery3.jpg',
    },
    {
      id: 4,
      image: '/assets/banner/gallery4.jpg',
    },
    {
      id: 5,
      image: '/assets/banner/gallery5.jpg',
    },
    {
      id: 6,
      image: '/assets/banner/gallery6.jpg',
    },
    {
      id: 7,
      image: '/assets/banner/gallery1.jpg',
    },
    {
      id: 8,
      image: '/assets/banner/gallery2.jpg',
    },
    {
      id: 9,
      image: '/assets/banner/gallery3.jpg',
    },
    {
      id: 10,
      image: '/assets/banner/gallery4.jpg',
    },
    {
      id: 11,
      image: '/assets/banner/gallery5.jpg',
    },
    {
      id: 12,
      image: '/assets/banner/gallery6.jpg',
    },
  ];
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
          {images.map((img) => (
            <div key={img.id} className="w-full shrink-0">
              <Image
                src={img.image}
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
