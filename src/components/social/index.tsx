import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "next-share";
import "./index.css";

export const Social = () => {
  return (
    <div
      id="social"
      className="px-56 flex flex-row gap-x-2 absolute right-0 top-0 pt-24"
    >
      <FacebookShareButton url="https://restaurang-hemsidor.se/#packages">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <FacebookMessengerShareButton
        appId="restaurang-hemsidor.se"
        url="https://restaurang-hemsidor.se/#packages"
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <WhatsappShareButton url="https://restaurang-hemsidor.se/#packages">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <LinkedinShareButton url="https://restaurang-hemsidor.se/#packages">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};
