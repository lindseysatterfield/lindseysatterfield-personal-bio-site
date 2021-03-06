import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/navbar';
import profile from './components/profile';
import createProjectCards from './components/projectsCard';
import technologies from './components/technologies';
import projects from './helpers/data/projects';

const init = () => {
  navbar();
  profile();
  technologies();
  createProjectCards(projects);
};

init();
