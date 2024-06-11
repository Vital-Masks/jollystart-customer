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
              PRESIDENT MESSAGE
            </h1>
            <p className="h-64 mt-4 overflow-hidden text-base text-center break-words md:text-left text-white p-5 ">
              I take great pleasure to welcome viewers to the Singhalese Sports
              Club revamped website. This website reflects the full scope of the
              numerous sports and entertainment activities the Club provides its
              members which are more fully described elsewhere in this website.
              Viewers accessing the website will now be able to gather all the
              information they may want to know about the Singhalese Sports
              Club, and the facilities available at the Club for sports and
              entertainment.
            </p>
          </div>
          <div className="mt-10 text-center md:text-left">
            <h4 className="text-lg font-bold text-white p-5">Mr.V. Manivannan</h4>
            <p className="text-sm text-gray-400 p-5">President 2019/20</p>
          </div>
        </div>
        <div className="flex-shrink-0 w-[400px] p-7">
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
              '/assets2/banner/mani.jpg'
            alt={'gg'}
            width={600}
            height={750}
            className="rounded-md object-cover w-[300px] h-[400px] "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
