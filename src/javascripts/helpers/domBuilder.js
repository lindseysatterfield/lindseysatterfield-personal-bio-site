const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <nav id="navbar-container"></nav>
  <div id="profile"></div>
  <div id="technologies"></div>
  <div id="projects-header"></div>
  <div id="projects-container" class="d-flex"></div>
  <footer id="footer"></footer>`;
};

export default domBuilder;
