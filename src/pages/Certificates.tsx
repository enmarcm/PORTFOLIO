import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMGS } from "../data/info";

const AUTO_PLAY_CONFIG = {
  stopOnLastSlide: false,
  delay: 3000,
};

const BREAKPOINTS_CONFIG = {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};

const Certificates = () => {
  return (
    <section className="bg-primary w-full h-[35rem]">
      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
            <span className="bg-gradient-to-r from-[#D3F500] to-[#00D9F5] text-transparent bg-clip-text">
              Certificates
            </span>
          </h2>
        </div>
        <div className="w-full flex flex-grow">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(_swiper) => {}}
            loop
            autoplay={AUTO_PLAY_CONFIG}
            breakpoints={BREAKPOINTS_CONFIG}
          >
            {IMGS.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  className="rounded-lg w-full h-auto object-cover"
                  src={img.src}
                  alt={img.alt}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
