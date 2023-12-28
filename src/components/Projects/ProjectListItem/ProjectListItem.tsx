import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/dtos/Project';
import { css } from '../../../../styled-system/css';
import { stack } from '../../../../styled-system/patterns';

interface ProjectListItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectListItemProps) {
  return (
    <div
      className={css({
        flexDir: 'column',
        padding: 5,
        height: 470,
        boxShadow: 'xl',
        maxW: 'sm',
      })}
    >
      <div className={css({ height: 300 })}>
        <div className={css({ height: 200, position: 'relative' })}>
          <Image
            className={css({ borderRadius: 'md', height: 200 })}
            src={project.image}
            alt={project.name}
            layout="fill"
          />
        </div>
        <div className={stack({ mt: 2, wordSpacing: 2 })}>
          <div className={css({ fontSize: 'xl', fontWeight: 'bold' })}>
            {project.name}
          </div>
          <div
            className={css({
              bg: 'red.600',
              borderRadius: 'full',
              color: 'white',
              padding: 1,
              width: '35%',
              textAlign: 'center',
              fontSize: 'sm',
              fontWeight: 'bold',
            })}
          >
            {project.country}
          </div>
          <div className={stack({ gap: '2' })}>
            <div className={css({ fontSize: 'sm' })}>
              Offered volume :
              {' '}
              <b>{project.offered_volume_in_tons}</b>
            </div>
            <div className={css({ fontSize: 'sm' })}>
              Price per ton :
              {' '}
              <b>{project.price_per_ton}</b>
            </div>
            <div className={css({ fontSize: 'sm' })}>
              Deliver date :
              {' '}
              <b>{project.earliest_delivery}</b>
            </div>
          </div>
          <Link
            className={css({ width: '100%' })}
            href={`/project/${project.id}`}
          >
            <div
              className={css({
                bg: 'blue.400',
                fontSize: 'xl',
                width: '100%',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: 2,
                color: 'white',
                borderRadius: 'md',
              })}
            >
              Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
