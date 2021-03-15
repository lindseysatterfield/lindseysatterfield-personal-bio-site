import 'bootstrap';
import '../styles/main.scss';
import contact from './components/contact';
import navbar from './components/navbar';
import profile from './components/profile';
import projectsHeader from './components/projects-header';
import technologies from './components/technologies';
import domEvents from './helpers/domEvents';

const init = () => {
  navbar();
  profile();
  technologies();
  projectsHeader();
  domEvents();
  contact();
};

init();
