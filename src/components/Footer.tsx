import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INFO_DATA } from "../data/info";
import SocialBar from "./SocialBar/SocialBar";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="lg:flex-row flex-col bg-black w-full h-72 flex gap-10 lg:items-start lg:justify-between lg:py-12 lg:px-24 p-4  box-border overflow-hidden items-center justify-center">
      <div className="flex gap-2 items-center justify-center">
        <FontAwesomeIcon icon={faPhone} color="white" />
        <p className="text-white text-lg text-center justify-center">
          {INFO_DATA.PHONE}
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faEnvelope} color="white" />
        <p className="text-white text-lg text-center">{INFO_DATA.EMAIL}</p>
      </div>
      <div className="flex items-center">
        <SocialBar bar={false} />
      </div>
    </section>
  );
};

export default Footer;
