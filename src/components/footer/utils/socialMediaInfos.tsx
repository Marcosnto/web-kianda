import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiOutlineTikTok,
} from "react-icons/ai";
import { FaThreads, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

type SocialMediaInfosType = {
  link: string;
  icon: React.ReactNode;
  key: string;
};

const style = "py-[1px] px-[1px]";

export const socialMediaInfos: SocialMediaInfosType[] = [
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <AiFillYoutube size={32} color="white" className={style} />,
    key: "youtube",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <FaLinkedinIn size={20} color="white" className={style} />,
    key: "linkedin",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <AiOutlineInstagram size={23} color="white" className={style} />,
    key: "instragram",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <FaThreads size={25} color="white" className={style} />,
    key: "threads",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <FaFacebookF size={20} color="white" className={style} />,
    key: "facebook",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <AiOutlineWhatsApp size={23} color="white" className={style} />,
    key: "whatsapp",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <AiOutlineTikTok size={28} color="white" className={style} />,
    key: "tiktok",
  },
  {
    link: "https://www.instagram.com/kiandadiversidade/",
    icon: <AiOutlineInstagram size={32} color="white" className={style} />,
    key: "x",
  },
];
