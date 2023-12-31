import ProjectDetails from '@/components/Projects/ProjectDetails';
import { getProjectDetails } from '@/controller/ProjectController';
import AddToCart from '@/components/Cart/AddToCart';
import { grid, gridItem } from '../../../../styled-system/patterns';

interface PropjectDetailsProps {
  params: { id: string };
}
function ProjectDetailsPage({ params: { id } }: PropjectDetailsProps) {
  const project = getProjectDetails(parseInt(id));

  return project ? (
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
        <AddToCart
          projectId={project.id}
          projectName={project.name}
          maxNumberOfVolumes={project.offered_volume_in_tons}
        />
      </div>
      <div className={gridItem({ colSpan: { base: 12, md: 9 } })}>
        <ProjectDetails
          project={project}
        />
      </div>
    </div>
  ) : null;
}

export default ProjectDetailsPage;
