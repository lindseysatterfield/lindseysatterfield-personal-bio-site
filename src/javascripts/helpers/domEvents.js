import showProjects from '../components/showProjects';
import getProjects from './data/projectData';

const domEvents = () => {
  getProjects().then((projectsArray) => showProjects(projectsArray));
};

export default domEvents;
