import Head from "next/head";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <>
      <Head>
        <title>Profile - pocong.xyz</title>
        <meta name="description" content="Know more about me" />
      </Head>
      <div className="py-4" />
      <motion.div
        initial={{ y: 2000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
      >
        <h1 className="font-bold text-4xl text-center">Artist Profile</h1>
        <div id="content-space" className="py-3 w-full lg:w-[65%] mx-auto">
          <h2 className="font-bold text-3xl">Introduction</h2>
          <p>
            Greetings! I&apos;m{" "}
            <span className="font-bold text-greenAccent">Pocong</span>. I&apos;m a
            self-proclaimed Crypto Artist and member of <a href="https://twitter.com/search?q=%23NonBlokMovement&src=typed_query&f=live">#NonBlokMovement</a> from Yogyakarta,
            Indonesia. I mostly active on Fantom Opera Network, especially in its NFT community.
          </p>
          <p>
            I currently learning about cryptocurrency and blockchain technology
            and its relation to art. As part of my learning process, I have launched
            several <a href="/projects">projects</a>.
          </p>
          <p>
            I learned everything nearly from zero, no coding experience,
            no digital art making experience, no marketing experience etc.
            The projects I have worked on have given me more courage to try
            something completely new afterward.. That's why I created this site,
            to share and also learn to make my own site, thanks to some people
            and projects whose code I use on this site, especially <a href="https://www.bughowi.com/">Mohamad Kholid Bughowi</a> for letting me use his template. 
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default AboutPage;
