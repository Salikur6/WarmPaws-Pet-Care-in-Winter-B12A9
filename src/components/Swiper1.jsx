import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/fgKhvCz/keeping-pets-warm-during-winter-parkside-vets-fb.jpg",
      title: "Keep Your Pet Warm This Winter",
      subtitle: "Cozy outfits, safe grooming and trusted winter care.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/FL1yKPM4/1f-Z7u-I8-KT8h9-Ml-Xa2dw-U2-X4ych-OPcdn55nw3-Gll9-Sk-QYcq8j-Sq-YGkc-S82t-Xnv0-WV.png",
      title: "Comfort Meets Care",
      subtitle: "Discover the best winter tips and expert pet services.",
    },
    {
      id: 3,
      img: "https://i.ibb.co/Xkt9V9j9/caniinverno1140-5.jpg",
      title: "Your Pet’s Winter Companion",
      subtitle: "Book trusted services from verified pet care providers.",
    },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="relative w-full max-h-[550px]">

      {/* Left Arrow */}
      <button
        type="button"
        onClick={() => swiperRef.current && swiperRef.current.slidePrev()}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={() => swiperRef.current && swiperRef.current.slideNext()}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
        // This is the important part: we store the swiper instance in the ref
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[500px] md:h-[550px]">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              <div className="absolute bottom-10 left-10 text-white max-w-md">
                <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-5 opacity-90">
                  {slide.subtitle}
                </p>
                <button className="btn btn-primary btn-wide text-base">
                  Explore Services
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
