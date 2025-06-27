import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderOne from "../assets/bannerImg/h1.jpg";
import sliderTwo from "../assets/bannerImg/h3.jpg";
import sliderThree from "../assets/bannerImg/h4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="pt-40">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={2000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="container h-[60vh] md:mt-0 md:h-[60vh] rounded-2xl"
      >
        <SwiperSlide>
          <div className="relative inline-block w-full h-full">
            <img src={sliderOne} alt="Banner" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-11/12 md:w-9/12 mx-auto lg:w-7/12 xl:w-5/12 text-center">
                <h1 className="text-white text-3xl lg:text-6xl font-bold mb-3">
                  {" "}
                  Plants Naturally Purify Your Air
                </h1>
                <p className="text-white lg:text-lg font-md">
                  Plants absorb carbon dioxide and release oxygen, improving the
                  air quality around you. Certain indoor plants like Snake
                  Plant, Money Plant, and Areca Palm are especially effective at
                  filtering toxins and making your living space feel fresher and
                  healthier.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative inline-block w-full h-full">
            <img src={sliderThree} alt="Banner" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-11/12 md:w-9/12 mx-auto lg:w-7/12 xl:w-5/12 text-center">
                <h1 className="text-white text-3xl lg:text-6xl font-bold mb-3">
                  {" "}
                  Overwatering Can Harm Your Plants
                </h1>
                <p className="text-white lg:text-lg font-md">
                  Giving your plants too much water is one of the most common
                  mistakes. It can lead to root rot and other issues. Each plant
                  has unique watering needs — check the soil moisture before
                  watering. For example, succulents prefer to dry out completely
                  between waterings.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative inline-block w-full h-full">
            <img src={sliderTwo} alt="Banner" className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="w-11/12 mx-auto md:w-9/12 lg:w-7/12 xl:w-5/12 text-center">
                <h1 className="text-white text-3xl lg:text-6xl font-bold mb-3">
                  Sunlight Is Essential for Plant Growth
                </h1>
                <p className="text-white lg:text-lg font-md">
                  Plants rely on sunlight to perform photosynthesis — their way
                  of producing food. Ensure your plants get adequate light.
                  While some thrive in direct sun, most indoor plants prefer
                  indirect sunlight or filtered light to stay healthy.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
          </Swiper>
    </div>
  );
};

export default Banner;
