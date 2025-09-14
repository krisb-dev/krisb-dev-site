import Link from "next/link";
import { ProjectsListContent } from "../types";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";
import { ProjectsListPercentage } from "./projectsListPercentage";
import { Button } from "@/components/ui/button/button";

const ProjectsListBlock = async ({ block }: ProjectsListBlockProps) => {
  // console.log(block);

  return (
    <section className="py-20">
      <div className="w-full max-w-4xl mx-auto">
        <header className="flex items-center gap-10">
          <div className="flex-1">
            <h2 className="font-bold text-4xl">{block.title}</h2>
            <p className="mt-2 text-xl ">{block.summary}</p>
          </div>
          <Button to="/projects">View All</Button>
        </header>
        <div className="grid grid-cols-2 gap-4 mt-10">
          {block.projects.map((project: any) => (
            <article
              key={project.id}
              className="flex flex-col dark:bg-gray-800 rounded-xl duration-300 group"
            >
              <header className="mb-4 px-8 pt-8">
                <h3 className="mb-2 font-inter font-black text-2xl">
                  {project.title}
                </h3>
                {project.status.projectStatus[0] && (
                  <Badge
                    type={project.status.projectStatus[0]?.title}
                    label={project.status.projectStatus[0]?.title}
                  />
                )}
              </header>
              <div className="mt-4 mb-8 px-8">
                <p className="dark:text-gray-400 text-sm">
                  {project.projectSummary}
                </p>
              </div>
              <footer className="flex items-center mt-auto">
                <div className="flex items-center w-1/2 h-full px-8 py-4">
                  <ProjectsListPercentage
                    value={parseInt(project.projectProgress)}
                  />
                </div>
                <div className="w-1/2 ">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex gap-1 group w-full px-8 py-4"
                  >
                    Read more
                    <ArrowRight className="w-4 stroke-green-500 group-hover:translate-x-1 duration-300" />
                  </Link>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsListBlock;
