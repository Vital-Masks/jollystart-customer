import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import Image from 'next/image';

const HomeBanner = () => {
  return (
    <div className="h-[calc(100vh-5rem)] md:h-[calc(100vh-11rem)]">
      <Swiper
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full">
            <Image
              width={2500}
              height={2500}
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px]">
            <Image
              width={2500}
              height={2500}
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNwb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[650px]">
            <Image
              width={2500}
              height={2500}
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BvcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
