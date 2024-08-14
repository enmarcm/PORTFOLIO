import { TECHS } from "../../data/techDatas";
import TechItem from "./TechItem";

const TechGroup = () => {
  return (
    <div className="grid grid-cols-5 w-full place-items-center gap-8">
      {TECHS.map((tech, index) => (
        <TechItem key={index} image={tech.img} text={tech.name} />
      ))}
    </div>
  );
};

export default TechGroup;
