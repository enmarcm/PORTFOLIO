import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from "@fortawesome/fontawesome-svg-core"
import "./PortButtom.css"

const PortButtom = ({
  title,
  callback,
  color,
  faIcon,
}: PortButtomInterface) => {
  const PARSED_COLOR = color ? `bg-${color}` : "bg-turq"
  const PARSED_FUNCT = callback ? callback : () => {}

  return (
    <div
      onClick={PARSED_FUNCT}
      className={`${PARSED_COLOR} flex items-center gap-3 px-3 py-2 rounded-sm hover:cursor-pointer  hover:bg-opacity-80 relative port-buttom shadow-md backdrop-blur-sm `}
    >
      <div className="flex-1 select-none">
        <p className="text-white font-semibold text-sm whitespace-normal">{title ? title : "Button"}</p>
      </div>
      <div className="flex-none select-none">
        <FontAwesomeIcon icon={faIcon ? faIcon : faDownload} color="#fff" />
      </div>
    </div>
  )
};

export default PortButtom;

interface PortButtomInterface {
  title?: string
  callback?: () => void
  color?: string
  faIcon?: IconProp
}
