import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { testiomnialUsers } from "@/constants/dummyData";
import RatingComp from "./RatingComp";

const TestimonialSwiper = () => {
  const [swiper, setSwiper] = useState<SwiperType>();
  const [swiperIndex, setSwiperIndex] = useState(0);

  const totalItem = 6;
  const slidesPerView = 3;
  const pagination = totalItem - slidesPerView + 1;

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slidesPerView}
      onSlideChange={(e) => setSwiperIndex(e.activeIndex)}
      onBeforeInit={(swiper) => {
        setSwiper(swiper);
      }}
      className="overflow-visible"
    >
      {testiomnialUsers.map(({ profileIcon, testimonial, name, rating }, i) => (
        <SwiperSlide
          key={i}
          className="flex h-[323px] w-[410.67px] flex-col justify-between rounded-[30px] border p-[30px]"
        >
          <div className="flex items-start justify-between">
            <div className="h-[60px] w-[60px]">
              <img src={profileIcon} alt="user-1" />
            </div>
            <RatingComp rating={rating} />
          </div>
          <h5>{name}</h5>
          <p className="h-[130px] overflow-y-hidden font-gilroy text-[16px] font-medium leading-[19.41px] tracking-[0.035em] text-grayText">
            {testimonial.length >= 245
              ? testimonial.substring(0, 245) + "..."
              : testimonial}
          </p>
        </SwiperSlide>
      ))}
      <div className="mt-8 flex justify-center gap-6">
        {Array(pagination)
          .fill("")
          .map((_, i) => (
            <button
              key={i}
              className={`h-4 w-4 rounded-full ${
                swiperIndex === i ? "bg-primary" : "bg-gray-200"
              }`}
              onClick={() => swiper?.slideTo(i)}
            />
          ))}
      </div>
    </Swiper>
  );
};

export default TestimonialSwiper;
