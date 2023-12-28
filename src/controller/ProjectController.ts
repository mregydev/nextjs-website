import projects from '@/data/projects.json';
import { ProjectFilterCritera } from '@/dtos/ProjectFilterCriteria';

export const getAllProjects = async (
  filterCriteria: ProjectFilterCritera,
) => {
  const filteredProjects = projects.filter((project) => {
    const isApplyingNameFilter = filterCriteria.name
      ? project.name
        .toLowerCase()
        .includes(filterCriteria.name.toLocaleLowerCase())
      : true;
    const isBiggerThanMinVol = filterCriteria.minVolume
      ? project.offered_volume_in_tons > filterCriteria.minVolume
      : true;
    const isLessThanMaxVol = filterCriteria.maxVolume
      ? project.offered_volume_in_tons < filterCriteria.maxVolume
      : true;

    return isApplyingNameFilter && isBiggerThanMinVol && isLessThanMaxVol;
  });

  return filteredProjects;
};

export const getProjectDetails = (projectId: number) => projects.find((p) => p.id === projectId);
