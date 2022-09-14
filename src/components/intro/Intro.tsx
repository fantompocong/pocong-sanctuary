/* eslint-disable react/no-unescaped-entities */
import OutlineGradientButton from "../button/OutlineGradientButton";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";

const ArtistFullName = "FantomPocong";
const ArtistNickName = "Pocong";
const Intro = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.5,
      }}
      className="h-screen text-center flex flex-col items-center justify-center"
    >
      <div>
        <p className="text-3xl sm:text-5xl font-black my-3">
          Welcome to Pocong Sanctuary!
        </p>
        <p className="text-3xl sm:text-5xl font-black my-3">
        I'm{" "}
          <span className="text-greenAccent">{ArtistFullName}</span>
        </p>
        <p className="text-3xl sm:text-5xl font-black">
          You can call me{" "}
          <span className="bg-greenAccent px-2 text-white">{ArtistNickName}</span>
        </p>
        <p className="my-8 text-lg sm:text-xl max-w-xl mx-auto">
        I am a self-proclaimed crypto artist and member of <a className="text-greenAccent" href="https://twitter.com/search?q=%23NonBlokMovement&src=typed_query&f=live">#NonBlokMovement</a>.
        </p>
        <br></br>
        <AiOutlineArrowDown size={30} className="my-8 max-w-xl mx-auto text-greenAccent" />
      </div>
    </motion.div>
  );
};

export default Intro;
