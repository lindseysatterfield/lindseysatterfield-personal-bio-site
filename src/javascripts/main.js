import 'bootstrap';
import '../styles/main.scss';
import createProjectCards from './components/projectsCard';
import projects from './helpers/data/projects';

const init = () => {
  createProjectCards(projects);
};

init();
