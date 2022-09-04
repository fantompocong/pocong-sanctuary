import {
  AiFillGithub,
  AiFillTwitterSquare,
  
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function NavbarSocialMedia() {
  return (
    <>
      <a
        href="https://twitter.com/fantompocong"
        aria-label="Author Twitter"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-sky-400 transition-colors ease-linear"
      >
        <AiFillTwitterSquare size={25} />
      </a>
      <a
        href="https://instagram.com/fantompocong"
        aria-label="Author Instagram"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-pink-600 transition-colors ease-linear"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href="https://github.com/fantompocong"
        aria-label="Author Github"
        target="_blank"
        rel="noreferrer"
        className="text-slate-300 hover:text-slate-700 transition-colors ease-linear"
      >
        <AiFillGithub size={25} />
      </a>
      <a
        href="https://discord.com/invite/XAHA5XHNr7"
        aria-label="Author Discord"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-800 rounded-full p-3 hover:bg-slate-900 transition-colors duration-500"
      >
        <FaDiscord size={15} className="text-slate-100" />
      </a>
      <a
        href="https://mailto:fantompocong@proton.me/"
        aria-label="Author Mail"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-800 rounded-full p-3 hover:bg-slate-900 transition-colors duration-500"
      >
        <FaEnvelope size={15} className="text-slate-100" />
      </a>

    </>
  );
}

export default NavbarSocialMedia;
