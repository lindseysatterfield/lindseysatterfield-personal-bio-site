import contact from '../components/contact';
import navbar from '../components/navbar';
import profile from '../components/profile';
import projectsHeader from '../components/projects-header';
import showProjects from '../components/showProjects';
import technologies from '../components/technologies';
import getProjects from './data/projectData';

const domEvents = () => {
  navbar();
  profile();
  technologies();
  projectsHeader();
  getProjects().then((projectsArray) => showProjects(projectsArray));
  contact();
};

export default domEvents;
