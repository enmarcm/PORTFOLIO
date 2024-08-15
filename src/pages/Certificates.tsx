import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img from "../assets/default-project.jpg"

const Certificates = () => {
  return (
    <section className="bg-primary w-full h-[35rem]">
      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[3rem] font-bold -mt-8">
            <span className="bg-gradient-to-r from-[#D3F500] to-[#00D9F5] text-transparent bg-clip-text">
              Certificates
            </span>
          </h2>
        </div>
        <div className="w-full flex flex-grow">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop
            autoplay={{
             stopOnLastSlide: false,
            }}
          >
            <SwiperSlide><img className="rounded-lg" src={img}  /></SwiperSlide>
            <SwiperSlide><img className="rounded-lg" src={img}  /></SwiperSlide>
            <SwiperSlide><img className="rounded-lg" src={img}  /></SwiperSlide>
            <SwiperSlide><img className="rounded-lg" src={img}  /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
