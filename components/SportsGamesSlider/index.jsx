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
"Embark on a journey through the rich legacy of Jolly Stars Sports Club in cricket. From Northern Champions to stellar leadership, witness a tapestry woven with triumphs and dedication.",
      image:
        'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },//
    // {
    //   id: 1,
    //   title: 'Football',
    //   description:"",
    //   image:
    //     'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    //   icon: '',
    //   link: '#',
    // },
    {
      id: 2,
      title: 'Basketball',
      description:
"Dive into the heart of basketball excellence with Jolly Stars Sports Club. Explore a legacy marked by national representation, dedication, and a vibrant community beyond the courts.",
      image:
        'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },//
    {
      id: 4,
      title: 'Volleyball',
      description:
"Discover the powerhouse of volleyball prowess at Jolly Stars Sports Club. Our legacy is crafted with dedication, shaping players who redefine the game with skill and commitment.",
      image:
        'https://images.unsplash.com/photo-1553451310-1416336a3cca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fFZvbGxleWJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      icon: '',
      link: '#',
    },
    {
      id: 3,
      title: 'Hockey',
      description:
        'Experience the towering presence of Jolly Stars Sports Club in the realm of hockey. Sculpting champions through relentless commitment, our players leave an indelible mark on the field.',
      image:
        'https://images.unsplash.com/photo-1632649177996-a4fbcae82d55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      icon: '',
      link: '#',
    },
    
    {
      id: 5,
      title: 'Badminton',
      description:
        'Witness dominance in badminton as Jolly Stars Sports Club molds players through relentless dedication. Our shuttle warriors embody standout athletes, raising the bar in the world of badminton.',
      image:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      icon: '',
      link: '#',
    },
    // 
    {
      id: 6,
      title: 'Weight Lifting',
      description:
        "Determination defines Jollystars' lifters, becoming sculpted powerhouses through immense dedication. Our lifters, forged with unwavering commitment, epitomize the club's focus on producing elite athletes. With dedication to excellence, our weight lifting legacy is a testament to the strength and determination instilled in every athlete.",      image:
        'https://images.unsplash.com/photo-1599391398131-cd12dfc6c24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80',
      icon: '',
      link: '#',
    },
    {
      id: 7,
      title: 'Table Tennis',
      description:
"Table tennis captivates our players, and the club staff is on a mission to shape and create champions through unyielding effort. Our paddlers, honed with dedication, embody the club's mission to produce exceptional players. With a relentless pursuit of excellence, our table tennis legacy is marked by players consistently reaching new heights.",      image:
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

const Item = ({ title, description, image,id }) => {
  return (
    <SwiperSlide key={id}  >
      <div className="h-[400px] relative divide-x">
        <div className="absolute bottom-0 left-0 z-20 px-5 py-10">
          {/* <div className="w-16 h-16 mb-5 bg-blue-900 rounded-full"></div> */}
          <h5 className="mb-3 text-lg font-bold text-slate-200"> {title}</h5>
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
          alt="img"
        />
      </div>
    </SwiperSlide>
  );
};
