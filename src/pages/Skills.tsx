import TechGroup from "../components/Tech/TechGroup";

const Skills = () => {
  return (
    <section className="bg-secondary w-full min-h-screen">
      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
          <div className="flex w-full items-center justify-start">
            <h2 className="text-[3rem] font-bold -mt-8">
              My <span className="text-yellow-400">Skills</span>
            </h2>
          </div>
          <div className="w-full flex flex-grow">
            <TechGroup />
          </div>
      </div>
    </section>
  );
};

export default Skills;
