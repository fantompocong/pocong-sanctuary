import { Project } from "../../../.contentlayer/generated";
import Link from "next/link";

function ProjectCard(project: Project) {
  return (
    <div className="flex flex-col gap-3 bg-darkSecondary p-4 border-2 border-greenAccent  rounded-none hover:scale-[1.02] transition-transform ease-in-out">
      <h3 className="font-bold text-2xl hover:text-greenAccent transition-colors w-fit">
        <Link href={project.url}>{project.title}</Link>
      </h3>
      <p className="text-opacity-80">{project.description}</p>
      <div className="flex flex-wrap gap-3">
        {project.techStack.map((tech, key) => (
          <p
            key={key}
            className="px-1 py-[0.20rem] bg-greenAccent text-slate-100 text-sm w-fit rounded-md"
          >
            {tech.toLocaleString()}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
