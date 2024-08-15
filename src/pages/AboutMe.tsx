import star from "../assets/star.svg";
import imgAbout from "../assets/ABOUT.svg";

const AboutMe = () => {
  return (
    <section className="bg-secondary w-full min-h-screen relative">
      <div className="absolute bottom-0 left-0  z-10 pointer-events-none opacity-45">
        <img src={star} alt="Star" className=" object-cover" />
      </div>

      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[3rem] font-bold -mt-8">
            About <span className="text-turq">Me</span>
          </h2>
        </div>
        <div className="w-full grid flex-grow place-items-center grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <p className="text-ms text-gray-300 font-light">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={imgAbout} alt="About Me" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
