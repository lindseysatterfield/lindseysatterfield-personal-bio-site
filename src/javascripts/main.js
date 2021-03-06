import 'bootstrap';
import '../styles/main.scss';
import navbar from './components/navbar';
import profile from './components/profile';
import createProjectCards from './components/projectsCard';
import projects from './helpers/data/projects';

const init = () => {
  navbar();
  profile();
  createProjectCards(projects);
};

init();
