import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItem = ({
  img,
  altImage,
  number,
  title,
  desc,
  linkTo,
  position = "left",
}: ProjectItemInterface) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 justify-between items-center w-full">
      <div className={`w-full sm:w-5/12 flex flex-col ${position === "left" ? "sm:order-1" : "sm:order-2"} items-start`}>
        <ImgComponent img={img} altImage={altImage} />
      </div>

      <div className={`w-full sm:w-7/12 ${position === "left" ? "sm:order-2" : "sm:order-1"}`}>
        <ContentProject
          number={number}
          title={title}
          desc={desc}
          linkTo={linkTo}
        />
      </div>
    </div>
  );
};

const ImgComponent = ({ img, altImage }: { img: string; altImage: string }) => (
  <img
    src={img}
    alt={altImage}
    className="rounded-lg shadow-sm backdrop-blur-sm object-cover p-18 w-full sm:max-w-[88%]"
  />
);

const ContentProject = ({
  number,
  title,
  desc,
  linkTo,
}: {
  number: string;
  title: string;
  desc: string;
  linkTo?: string;
}) => (
  <div className="flex flex-col items-start justify-center gap-4">
    <h4 className="text-white text-3xl font-bold">{number}</h4>
    <h4 className="text-white text-2xl font-bold">{title}</h4>
    <p className="text-gray-50 text-sm font-extralight">{desc}</p>
    <a
      href={linkTo}
      target="_blank"
      rel="noreferrer noopener"
      className="text-white text-sm"
    >
      {linkTo && <FontAwesomeIcon icon={faUpRightFromSquare} color="white" />}
    </a>
  </div>
);

export default ProjectItem;

interface ProjectItemInterface {
  img: string;
  altImage: string;
  number: string;
  title: string;
  desc: string;
  linkTo?: string;
  position?: positions;
}

type positions = "left" | "right";