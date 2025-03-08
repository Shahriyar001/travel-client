import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import saint from "../../assets/saint.png";
import slide3 from "../../assets/Sajek.png";
import slide4 from "../../assets/Sreemongol.png";
import slide5 from "../../assets/sundorbon.png";

const Category = () => {
  return (
    // <Swiper
    //   slidesPerView={4}
    //   spaceBetween={30}
    //   centeredSlides={true}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   modules={[Pagination]}
    //   className="mySwiper"
    // >
    //   <SwiperSlide>
    //     <img src={slide3} alt="slide1" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={slide4} alt="slide1" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={slide5} alt="slide1" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={slide3} alt="slide1" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={slide4} alt="slide1" />
    //   </SwiperSlide>
    //   <SwiperSlide>
    //     <img src={slide5} alt="slide1" />
    //   </SwiperSlide>
    // </Swiper>
    <div
      className="w-full h-screen relative flex items-center justify-center p-10 my-10"
      style={{
        backgroundImage: `url(${saint})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black overlay with 30% opacity */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative w-full p-6 rounded-lg ">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide3} alt="slide1" className="rounded-lg shadow-md" />
            <h3 className="text-3xl uppercase text-center -mt-16 text-white">
              Sajek
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="slide1" className="rounded-lg shadow-md" />
            <h3 className="text-3xl uppercase text-center -mt-16 text-white">
              Sreemongol
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="slide1" className="rounded-lg shadow-md" />
            <h3 className="text-3xl uppercase text-center -mt-16 text-white">
              Sundorbon
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="slide1" className="rounded-lg shadow-md" />
            <h3 className="text-3xl uppercase text-center -mt-16 text-white">
              Sajek
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="slide1" className="rounded-lg shadow-md" />
            {/* <h3 className="text-3xl uppercase text-center -mt-16 text-white">
              Sreemongol
            </h3> */}
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="slide1" className="rounded-lg shadow-md" />
            <h3 className="text-3xl uppercase text-center -mt-16 text-white">
              Sundorbon
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
