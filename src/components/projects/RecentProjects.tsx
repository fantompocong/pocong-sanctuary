import { Project } from "../../../.contentlayer/generated";
import Link from "next/link";
import ProjectCard from "../card/ProjectCard";
import { motion } from "framer-motion";

const MAX_DISPLAY = 3;
function PersonalProjects({ projects }: { projects: Project[] }) {
  return (
    <motion.section
      initial={{ opacity: 0.1, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 1 }}
      viewport={{ once: true }}
      id="personal-projects"
      className="my-8"
    >
        <h2 className="text-3xl font-bold hover:cursor-pointer w-fit transition-colors">
          Recent Projects
        </h2>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.slice(0, MAX_DISPLAY).map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </motion.section>
  );
}

export default PersonalProjects;
