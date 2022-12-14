import { allProjects, Project } from "../../../../.contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Giscus from "@giscus/react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectDetailPage({ project }: { project: Project }) {
  const MDXContent = useMDXComponent(project.body.code);

  return (
    <>
      <Head>
        <title>{`${project.title} - Projects | pocong.xyz`}</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="py-4" />

      <motion.main
        initial={{ y: 2000, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        className="w-full lg:w-[65%] mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
        <p className="text-slate-400">{project.description}</p>
        <article className="mt-5 w-full">
          {project.thumbnail && (
            <div className="w-full h-72 md:h-96 rounded-lg overflow-hidden object-cover relative">
              <Image
                src={project.thumbnail}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}

          <div id="content-space" className="py-3">
            <MDXContent />
          </div>
          <div className="border-y-2 border-slate-400 mt-3 text-lg">
            <p className="py-4 flex flex-wrap items-center gap-2">
              Tech Stack :{" "}
              {project.techStack?.map((tech, idx) => (
                <span
                  className="p-0.5 text-lg bg-greenAccent text-slate-100 rounded-lg"
                  key={idx}
                >
                  {tech.toLocaleString()}
                </span>
              ))}
            </p>
          </div>
        </article>
        <div className="py-4" />
        <Giscus
          id="comments"
          repo="fantompocong/pocong-sanctuary"
          repoId="R_kgDOH71gWA"
          category="General"
          categoryId="DIC_kwDOH71gWM4CROQR"
          mapping="url"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </motion.main>
    </>
  );
}

export default ProjectDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map((project) => project.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = allProjects.find(
    (project) => project.url === `/projects/${context.params?.slug}`
  );

  return {
    props: {
      project,
    },
  };
};
