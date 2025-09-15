import { ProjectsListItem } from "./projectsListItem";
import styles from "./projectsList.module.css";

interface ProjectsListProps {
  projects: any[];
}

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className={styles.projectsList}>
      {projects.map((project: any) => (
        <ProjectsListItem project={project} key={project.id} />
      ))}
    </div>
  );
};

export { ProjectsList };
