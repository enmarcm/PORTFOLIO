import star from "../assets/star.svg";
import imgAbout from "../assets/ABOUT.svg";
import { INFO_DATA } from "../data/info";

const AboutMe = () => {
  return (
    <section className="bg-secondary w-full min-h-screen relative">
      <div className="absolute bottom-0 left-0  z-10 pointer-events-none opacity-45">
        <img src={star} alt="Star" className=" object-cover" />
      </div>

      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
        <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
        About <span className="text-turq">Me</span>
          </h2>
        </div>
        <div className="w-full grid flex-grow place-items-center grid-cols-1 md:grid-cols-2">
          
          <div className="order-2 md:order-1 flex flex-col items-center justify-center mt-6 md:mt-0">
            <p className="text-ms text-gray-300 font-light">
              {INFO_DATA.ABOUT_ME}
            </p>
          </div>

          <div className="order-1 md:order-2 flex flex-col items-center justify-center">
            <img src={imgAbout} alt="About Me" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
