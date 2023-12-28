import { Project } from '@/dtos/Project';
import ProjectListItem from '../ProjectListItem';
import { grid } from '../../../../styled-system/patterns';

export interface ProjectsListProps {
  projects: Project[];
}

function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <div
      className={grid({
        gridTemplateColumns: { base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 4,
        padding: 35,
      })}
    >
      {projects.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;
