import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCreative, Autoplay } from 'swiper';
import Image from 'next/image';
import Container from '../Shared/Container';

const Messages = () => {
  return (
    <div className="bg-slate-900">
      <Container className="flex flex-col-reverse items-center gap-20 py-20 md:flex-row md:items-start xl:gap-40">
        <div className="flex flex-col justify-between flex-1 w-full overflow-hidden">
          <div>
            <h1 className="text-2xl font-bold text-center uppercase md:text-left text-brand-maroon text-white p-5">
              PRESIDENT'S MESSAGE
            </h1>
            <p className="mt-2 overflow-hidden text-base text-center break-words md:text-left text-white p-5 ">
            It is my great pleasure to welcome you to the revamped website of JollyStars Sports Club, Jaffna. 
            This platform reflects the diverse range of sports and entertainment activities we proudly offer our members. 
            Through this website, you can explore everything about our club, including our facilities, events, and sporting opportunities.
            At JollyStars Sports Club, we are committed to fostering team spirit, sportsmanship, and community engagement, 
            creating a space where athletes and enthusiasts can thrive. I encourage you to navigate through the site and discover all that we have to offer.</p>

            <p className="mt-3 overflow-hidden text-base text-center break-words md:text-left text-white p-5 ">
            Thank you for being a part of our journey, and I look forward to seeing you at the club!
            </p>
          </div>
          <div className="mt-5 text-center md:text-left">
            <h4 className="text-lg font-regular text-white p-5">Mr.T. Sivathas - President 2025/27 </h4>
            {/* <p className="text-sm text-gray-400 p-5"></p> */}
          </div>
        </div>
        <div className="flex-shrink-0 w-[400px] mx-auto p-7">
          <Slider />
        </div>
      </Container>
    </div>
  );
};

export default Messages;

const Slider = () => {
  const onSwiperChange = () => {};

  return (
    <Swiper
      grabCursor={true}
      effect={'creative'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative, Autoplay]}
      loop={true}
      className="rounded-md "
      onSlideChange={(e) => onSwiperChange(e.slides[e.activeIndex]['id'])}
    >
      {[1].map((content) => (
        <SwiperSlide id={content} key={content}>
          <Image
            src=
              '/assets2/banner/siva.jpg'
            alt={'gg'}
            width={600}
            height={750}
            className="rounded-md object-cover w-[300px] h-[400px] mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
