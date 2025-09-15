import { ProjectsListPercentage } from "./projectsListPercentage";

import styles from "./projectsListItem.module.css";
import { Chip } from "@/components/ui/chip/chip";
import { ProgressBar } from "@/components/ui/progressBar/progressBar";

interface ProjectsListItemProps {
  project: any;
}

const ProjectsListItem = ({ project }: ProjectsListItemProps) => {
  return (
    <article key={project.id} className={styles.projectsListItem}>
      <header className="">
        <Chip label="Project status" variant="primary" />
        <h3 className="">{project.title}</h3>
        {/* {project.status.projectStatus[0] && (
        
        )} */}
      </header>
      <div className="">
        <p className="">{project.projectSummary}</p>
        <ul className={styles.projectLangs}>
          <li>Node</li>
          <li>TypeScript</li>
          <li>Express</li>
        </ul>
      </div>
      <footer className="">
        <div className="">
          <h4 className={styles.projectProgressTitle}>Project progress</h4>
          <ProgressBar progress={project.projectProgress} />
          <span className={styles.projectProgressValue}>
            {project.projectProgress}% complete
          </span>
        </div>
        <div className="">
          {/* <Link href={`/projects/${project.slug}`} className="">
            Read more
            <ArrowRight className="" />
          </Link> */}
        </div>
      </footer>
    </article>
  );
};

export { ProjectsListItem };
