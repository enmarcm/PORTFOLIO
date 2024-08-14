import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./PortButtom.css";

const PortButtom = ({
  title,
  callback,
  color,
  faIcon,
}: PortButtomInterface) => {
  const PARSED_COLOR = color ? `bg-${color}` : "bg-turq";
  const PARSED_FUNCT = callback ? callback : () => {};

  return (
    <div
      onClick={PARSED_FUNCT}
      className={`${PARSED_COLOR} flex gap-3 px-4 py-2 rounded-sm hover:cursor-pointer  hover:bg-opacity-80 relative port-buttom shadow-md backdrop-blur-sm `}
    >
      <div className="w-10/12 select-none">
        <p className="text-white font-semibold">{title ? title : "Button"}</p>
      </div>
      <div className="w-2/12 select-none">
        <FontAwesomeIcon icon={faIcon ? faIcon : faDownload} color="#fff" />
      </div>
    </div>
  );
};

export default PortButtom;

interface PortButtomInterface {
  title?: string;
  callback?: any;
  color?: string;
  faIcon?: any;
}
