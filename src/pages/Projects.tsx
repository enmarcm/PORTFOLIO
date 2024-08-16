import ProjectItem from "../components/ProjectItem";
import PROJECT_DATA from "../data/projectsData";
const Projects = () => {
  const verifyPar = (number: number) => {
    if (number % 2 === 0 || number === 0) {
      return "left";
    } else {
      return "right";
    }
  };

  return (
    <section className="bg-primary w-full min-h-screen h-full">
      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <div className="flex w-full items-center justify-start">
          <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
            My
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </div>
        <div className="w-full flex flex-col gap-16">
          {PROJECT_DATA.map((project, index) => {
           const parsedIndex = (index + 1).toString();
           const itemNumber = parsedIndex.length === 1 ? `0${parsedIndex}` : parsedIndex;

            return (
              <ProjectItem
                altImage={project.title}
                title={project.title}
                desc={project.description}
                linkTo={project?.linkTo}
                img={project.img}
                number={itemNumber}
                key={index}
                position={verifyPar(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
