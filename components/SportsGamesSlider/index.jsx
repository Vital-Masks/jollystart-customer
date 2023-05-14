import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

const SportsGames = () => {
  const sports = [
    {
      id: 0,
      title: 'Cricket',
      description:
        'Over its 100 years of existence, Moors SC’s main activity has been the game of cricket. The Moors initiation into sport although slow was steady.',
      image:
        'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },
    {
      id: 1,
      title: 'Football',
      description:
        'Over its 100 years of existence, Moors SC’s main activity has been the game of cricket. The Moors initiation into sport although slow was steady.',
      image:
        'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },
    {
      id: 2,
      title: 'Basketball',
      description:
        'Over its 100 years of existence, Moors SC’s main activity has been the game of cricket. The Moors initiation into sport although slow was steady.',
      image:
        'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },
    {
      id: 3,
      title: 'Hockey',
      description:
        'Over its 100 years of existence, Moors SC’s main activity has been the game of cricket. The Moors initiation into sport although slow was steady.',
      image:
        'https://images.unsplash.com/photo-1632649177996-a4fbcae82d55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      icon: '',
      link: '#',
    },
    {
      id: 4,
      title: 'Volleyball',
      description:
        'Over its 100 years of existence, Moors SC’s main activity has been the game of cricket. The Moors initiation into sport although slow was steady.',
      image:
        'https://images.unsplash.com/photo-1553451310-1416336a3cca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFZvbGxleWJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },
    {
      id: 5,
      title: 'Badminton',
      description:
        'Over its 100 years of existence, Moors SC’s main activity has been the game of cricket. The Moors initiation into sport although slow was steady.',
      image:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      icon: '',
      link: '#',
    },
  ];
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
      // slidesPerView={6}
      spaceBetween={0}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {sports.map(Item)}
    </Swiper>
  );
};

export default SportsGames;

const Item = ({ title, description, image }) => {
  return (
    <SwiperSlide>
      <div className="h-[400px] relative divide-x">
        <div className="absolute bottom-0 left-0 z-20 px-5 py-10">
          <div className="w-16 h-16 mb-5 bg-blue-900 rounded-full"></div>
          <h5 className="mb-3 text-lg font-bold"> {title}</h5>
          <p className="mb-4 text-sm text-slate-200 line-clamp-5">
            {description}
          </p>
          <Link
            href="#"
            className="px-4 py-2 text-sm rounded-md bg-slate-50 text-slate-600"
          >
            More Details
          </Link>
        </div>
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50"></div>
        <Image
          width={2500}
          height={2500}
          className="object-cover w-full h-full"
          src={image}
        />
      </div>
    </SwiperSlide>
  );
};
