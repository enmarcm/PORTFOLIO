import { SOCIAL } from "../../data/links";
import SocialItem from "./SocialItem";

const SocialBar = ({ bar = true }: { bar?: boolean }) => {
  return (
    <div className="flex flex-col items-start  justify-center w-full">
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-8 justify-start">
          <SocialItem
            title="X"
            img={SOCIAL.twitter.img}
            linkTo={SOCIAL.twitter.url}
          />
          <SocialItem
            title="Linkdn"
            img={SOCIAL.linkdn.img}
            linkTo={SOCIAL.linkdn.url}
          />
          <SocialItem
            title="Github"
            img={SOCIAL.github.img}
            linkTo={SOCIAL.github.url}
          />
        </div>

        {bar && (
          <div className="w-full h-1 bg-gradient-to-r from-[#D3F500] to-[#00D9F5]"></div>
        )}
      </div>
    </div>
  );
};

export default SocialBar;
