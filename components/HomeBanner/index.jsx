import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import HeroBanner from "./heroContent";

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
          <HeroBanner imgclass={"hero-img-sec"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroBanner imgclass={"hero-img-sec"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroBanner imgclass={"hero-img-sec"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBanner;
