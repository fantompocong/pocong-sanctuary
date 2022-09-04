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
        className="bg-sky-500 rounded-full p-3 hover:bg-sky-700 transition-colors duration-500"
      >
        <FaTwitter size={15} className="text-slate-100" />
      </a>
      <a
        href="https://instagram.com/fantompocong/"
        aria-label="Author instagram"
        target="_blank"
        rel="noreferrer"
        className="bg-pink-600 rounded-full p-3 hover:bg-pink-800 transition-colors duration-500"
      >
        <FaInstagram size={15} className="text-slate-100" />
      </a>
      <a
        href="https://github.com/fantompocong/"
        aria-label="Author Github"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-800 rounded-full p-3 hover:bg-slate-900 transition-colors duration-500"
      >
        <FaGithub size={15} className="text-slate-100" />
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
    </div>
  );
}

export default SocialMedia;
