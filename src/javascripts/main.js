import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/navbar';
import createProjectCards from './components/projectsCard';
import projects from './helpers/data/projects';

const init = () => {
  navbar();
  createProjectCards(projects);
};

init();
