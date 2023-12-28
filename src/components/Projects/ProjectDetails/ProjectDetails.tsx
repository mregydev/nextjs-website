import { Project } from '@/dtos/Project';
import Image from 'next/image';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/patterns';
import Block from '../../Common/Block';
import SDGViewer from './SDGViewer';

interface ProjectDetailsProps {
  project: Project;
}

function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div
      className={stack({
        width: '100%',
        alignContent: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: 10,
      })}
    >
      <div className={css({ width: '70%' })}>
        <div
          className={css({
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '2xl',
            mb: 5,
          })}
        >
          {project.name}
        </div>
        <div className={css({ height: 300, position: 'relative' })}>
          <Image src={project.image} layout="fill" alt={project.name} />
        </div>
        <div className={css({ lineHeight: 2, mt: 10 })}>
          <b>Description</b>
          {' '}
          <article>{project.description}</article>
        </div>
        <Block>
          <>
            <b>Country : </b>
            {' '}
            {project.country}
          </>

          <>
            <b>Number of volumes : </b>
            {' '}
            {project.offered_volume_in_tons}
          </>
          <>
            <b>Price per ton : </b>
            {' '}
            {project.price_per_ton}
          </>
        </Block>
        <Block>
          <>
            <b>Earliest delivery : </b>
            {' '}
            {project.earliest_delivery}
          </>

          <>
            <b>Distribution widget : </b>
            {' '}
            {project.distribution_weight}
          </>
          <>
            <b>Supplier Name : </b>
            {' '}
            {project.supplier_name}
          </>
        </Block>

        <SDGViewer sdgs={project.sdgs} />
      </div>
    </div>
  );
}

export default ProjectDetails;
