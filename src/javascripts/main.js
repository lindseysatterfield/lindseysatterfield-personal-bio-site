import 'bootstrap';
import '../styles/main.scss';
import contact from './components/contact';
import navbar from './components/navbar';
import profile from './components/profile';
import projectsHeader from './components/projects-header';
import createProjectCards from './components/projectsCard';
import technologies from './components/technologies';
import projects from './helpers/data/projects';

const init = () => {
  navbar();
  profile();
  technologies();
  projectsHeader();
  createProjectCards(projects);
  contact();
};

init();
