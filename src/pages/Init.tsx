import cube from "../assets/drawing.svg";
import people from "../assets/main-draw.svg";
import SocialBar from "../components/SocialBar/SocialBar";

const Init = () => {
  return (
    <section className="relative w-full min-h-screen bg-primary py-14">
      <div className="absolute -top-16 left-0  z-10 pointer-events-none opacity-45">
        <img src={cube} alt="Cube" className=" object-cover" />
      </div>

      <div className="relative w-10/12 mx-auto flex z-20">
        <div className="w-7/12 flex flex-col ">
          <h2 className="text-[2rem] font-normal text-white -mb-4">
            Hello I`m
          </h2>

          <h1 className="text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] to-[#00D9F5]">
            Enmanuel Colina
          </h1>

          <h2 className="text-[3.5rem] font-bold -mt-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3F500] to-[#00D9F5]">
              FullStack Web
            </span>
            <span className="text-white"> Developer</span>
          </h2>

          <div className="my-12 text-sm font-light text-start w-5/6">
            <p>
              I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to specimen book. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Sit laborum
              animi, nulla nihil neque vel incidunt obcaecati laboriosam veniam.
              Veritatis, laborum nam? Et distinctio quibusdam accusamus.
              Excepturi quod accusantium eveniet.
            </p>
          </div>

          <SocialBar />
        </div>

        <div className="w-5/12 flex flex-col items-center justify-center">
          <div className="rounded-full  bg-transparent shadow-2xl p-8 w-10/12 ">
            <img src={people} alt="People" className=" object-cover " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Init;
