import Filter from '@/components/Projects/Filter';
import ProjectsList from '@/components/Projects/ProjectsList';
import { getAllProjects } from '@/controller/ProjectController';
import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';

import { grid, gridItem } from '../../../styled-system/patterns';

interface ProjectPageProps {
  searchParams: Record<string, string>;
}

const ProjectsPage = async ({ searchParams }: ProjectPageProps) => {
  const filterCriteria: ProjectFilterCritera = {
    name: searchParams.name,
    description: searchParams.description,
    minVolume: Number.parseInt(searchParams.min_volume),
    maxVolume: Number.parseInt(searchParams.max_volume),
  };

  const projects = await getAllProjects(filterCriteria);

  return (
    <div
      className={grid({
        height: '100%',
        gridTemplateColumns: { base: 'repeat(12, 1fr)', md: 'repeat(12, 1fr)' },
        gap: 4,
      })}
    >
      <div
        className={gridItem({ colSpan: { base: 12, md: 3 }, bg: 'gray.100' })}
      >
        <Filter />
      </div>
      <div className={gridItem({ colSpan: { base: 12, md: 9 } })}>
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
};
export default ProjectsPage;
