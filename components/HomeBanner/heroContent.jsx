import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = ({imgclass}) => {
  return (
    <div class={`relative h-screen w-full flex items-center justify-center text-left bg-cover bg-center ${imgclass}`} 
    style={{marginTop:"-150px" }}
    >
      <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

      <main class="px-10 lg:px-24 z-10" style={{marginTop:"136px"}}>
        <div class="text-left">
        <p class="mt-3 text-white sm:mt-5  md:mt-5 text-lg font-light text-center "  >
            {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. */}
          </p>
          <h2 class="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl text-center" style={{
            maxWidth:"900px",
            fontSize:"5rem",
            margin:"20px 0px"
        }}>
            First Sports Club 
            in Jaffna Peninsula!
          </h2>
         
          <div class="mt-5 sm:mt-8 sm:flex justify-center text-center">
            <div class="rounded-md shadow text-center">
              <Link
              style={{
                height:"45px"
              }}
                href="/memberregister"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Join as a Member
              </Link>
            </div>
           
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroBanner;
