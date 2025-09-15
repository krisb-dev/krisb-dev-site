import Link from "next/link";
import { BlockBase, ProjectsListContent } from "../types";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge/badge";
import { ProjectsListPercentage } from "./projectsListPercentage";
import { Button } from "@/components/ui/button/button";

import styles from "./projectsListBlock.module.css";
import { Container } from "@/components/global/layout/container/container";
import { ReadMore } from "@/components/ui/readMore/readMore";
import { ProjectsListItem } from "./projectsListItem";
import { ProjectsList } from "./projectsList";

interface ProjectsListBlockProps {
  block: any;
}

const ProjectsListBlock = async ({ block }: ProjectsListBlockProps) => {
  // console.log(block);

  return (
    <section className={styles.projectsList}>
      <Container className="flex-col">
        <header className={styles.projectsListHeader}>
          <div className="">
            <h2 className="">{block.title}</h2>
            <p className="">{block.summary}</p>
          </div>
          <ReadMore label="View projects" href="/prjects" />
        </header>
        <ProjectsList projects={block.projects} />
      </Container>
    </section>
  );
};

export default ProjectsListBlock;
