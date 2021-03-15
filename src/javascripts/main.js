import 'bootstrap';
import '../styles/main.scss';
import domBuilder from './helpers/domBuilder';
import domEvents from './helpers/domEvents';

const init = () => {
  domBuilder();
  domEvents();
};

init();
