import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      <a
        href="https://twitter.com/fantompocong/"
        aria-label="Author Twitter"
        target="_blank"
        rel="noreferrer"
        className="rounded-full p-3 hover:bg-green-400 transition-colors duration-500"
      >
        <FaTwitter size={25} className="fill-white opacity-50 hover:fill-black hover:opacity-100" />
      </a>
      <a
        href="https://instagram.com/fantompocong/"
        aria-label="Author instagram"
        target="_blank"
        rel="noreferrer"
        className="rounded-full p-3 hover:bg-green-400 transition-colors duration-500"
      >
        <FaInstagram size={25} className="fill-white opacity-50 hover:fill-black hover:opacity-100" />
      </a>
      <a
        href="https://github.com/fantompocong/"
        aria-label="Author Github"
        target="_blank"
        rel="noreferrer"
        className="rounded-full p-3 hover:bg-green-400 transition-colors duration-500"
      >
        <FaGithub size={25} className="fill-white opacity-50 hover:fill-black hover:opacity-100" />
      </a>
      <a
        href="https://discord.com/invite/XAHA5XHNr7"
        aria-label="Author Discord"
        target="_blank"
        rel="noreferrer"
        className="rounded-full p-3 hover:bg-green-400 transition-colors duration-500"
      >
        <FaDiscord size={25} className="fill-white opacity-50 hover:fill-black hover:opacity-100" />
      </a>
      <a
        href="mailto:fantompocong@proton.me/"
        aria-label="Author Mail"
        target="_blank"
        rel="noreferrer"
        className="rounded-full p-3 hover:bg-green-400 transition-colors duration-500"
      >
        <FaEnvelope size={25} className="fill-white opacity-50 hover:fill-black hover:opacity-100" />
      </a>
    </div>
  );
}

export default SocialMedia;
