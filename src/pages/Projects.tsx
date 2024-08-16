import ProjectItem from "../components/ProjectItem";
import PROJECT_DATA from "../data/projectsData";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const verifyPar = (index:number) => (index % 2 === 0 ? "left" : "right");

  return (
    <section className="bg-primary w-full min-h-screen h-full">
      <div className="w-10/12 flex flex-col gap-8 h-full mx-auto px-8 py-20">
        <h2 className="text-[2.5rem] font-bold -mt-8 md:text-[3rem]">
          My
          <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="w-full flex flex-col gap-16">
          {PROJECT_DATA.map((project, index) => {
            const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
            const itemNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                ref={ref}
                key={index}
                className={`transition-opacity duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              >
                <ProjectItem
                  altImage={project.title}
                  title={project.title}
                  desc={project.description}
                  linkTo={project.linkTo}
                  img={project.img}
                  number={itemNumber}
                  position={verifyPar(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
