import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";

const giftData = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
  {
    title: "4",
  },
  {
    title: "5",
  },
  {
    title: "6",
  },
];

const SwiperSpot = () => {
  return (
    <div className="container mx-auto p-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          2100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {giftData.map((item, idx) => (
          <SwiperSlide key={idx}>{item.title}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSpot;
