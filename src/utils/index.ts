import { StoredProject } from '@/dtos/StoredProject';

const getCartProjects = () => {
  const cartProjectsStr = localStorage.getItem('cartProjects');
  return cartProjectsStr ? JSON.parse(cartProjectsStr) : [];
};

export const AddProjectToCart = (project: StoredProject) => {
  const cartProjects: StoredProject[] = getCartProjects();

  if (cartProjects.some((proj) => proj.id === project.id)) {
    return false;
  }

  cartProjects.push(project);
  localStorage.setItem('cartProjects', JSON.stringify(cartProjects));
  return true;
};

export const isProjectAddedToCart = (projectId: number) => {
  const cartProjects: StoredProject[] = getCartProjects();

  return cartProjects.some((project) => project.id === projectId);
};

export const removeProjectFromCart = (projectId: number) => {
  const cartProjects: StoredProject[] = getCartProjects();
  const filtertedProjects = cartProjects.filter(
    (project) => project.id !== projectId,
  );
  localStorage.setItem('cartProjects', JSON.stringify(filtertedProjects));
};

export const getAllProjects = () => {
  const cartProjects: StoredProject[] = getCartProjects();

  return cartProjects;
};

export const updateNumberOfVolumes = (value: number, projectId: number) => {
  const cartProjects: StoredProject[] = getCartProjects();
  const updatedCartProjects = cartProjects.map((project) => {
    if (project.id === projectId) {
      return { ...project, saved_volume: value };
    }
    return { ...project };
  });
  localStorage.setItem('cartProjects', JSON.stringify(updatedCartProjects));
};
