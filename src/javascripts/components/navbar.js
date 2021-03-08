const navbar = () => {
  document.querySelector('#navbar-container').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light" style="background-color: #ee8c84;">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Lindsey Satterfield</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="#bio">Bio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#technologies">Technologies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#projects-header">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact Me</a>
      </li>
    </ul>
  </div>
</nav>`;
};

export default navbar;
