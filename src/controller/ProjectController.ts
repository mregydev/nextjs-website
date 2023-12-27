import projects from '@/data/projects.json';
import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';

export const getAllProjects = async (
  filterCriteria: ProjectFilterCritera
) => {
  const filteredProjects = projects.filter((project) => {

    const isApplyingNameFilter = filterCriteria.name
      ? project.name
          .toLowerCase()
          .includes(filterCriteria.name.toLocaleLowerCase())
      : true;
    const isBiggerThanMinVol = filterCriteria.min_volume
      ? project.offered_volume_in_tons > filterCriteria.min_volume
      : true;
    const isLessThanMaxVol = filterCriteria.max_volume
      ? project.offered_volume_in_tons < filterCriteria.max_volume
      : true;

    return isApplyingNameFilter && isBiggerThanMinVol && isLessThanMaxVol;
  });

  return filteredProjects;
};


export const getProjectDetails = (projectId: number) => {
  return  projects.find((p) => p.id === projectId);
};

