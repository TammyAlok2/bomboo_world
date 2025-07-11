"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../../../app/globals.css";
import Image from "next/image";

const FullScreenCarousel = () => {
  const slides = [
    "/images/CarouselImage/CM.jpg",
    "/images/CarouselImage/newimg/caroselimg1.jpeg",
    "/images/CarouselImage/newimg/caroselimg2.jpeg",
    "/images/CarouselImage/newimg/caroselimg3.jpeg",
    "/images/CarouselImage/newimg/caroselimg4.jpeg",
    "/images/CarouselImage/newimg/caroselimg5.jpeg",
    "/images/CarouselImage/newimg/caroselimg6.jpeg",
    "/images/CarouselImage/newimg/caroselimg7.jpeg",
  ];

  return (
    <div className="w-full overflow-hidden mt-16 md:mt-24">
      <Swiper
        modules={[Autoplay, Pagination]} // Remove the duplicate modules prop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Optional: pauses on mouse hover
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="w-full"
        speed={1000} // Optional: controls transition speed
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              {/* Default aspect ratio container */}
              <div className="relative aspect-[16/8] w-full 2xl:hidden">
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-contain md:object-cover"
                  quality={100}
                />
              </div>
              
              {/* Large screen container (>1444px) */}
              <div className="hidden 2xl:block relative h-[90%] w-full">
                <div className="relative w-screen h-[80vh]">
                  <Image
                    width={1600}
                    height={1600}
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    priority={index === 0}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FullScreenCarousel;