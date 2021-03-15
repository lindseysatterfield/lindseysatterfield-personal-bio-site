const showProjects = (array) => {
  let domString = '';
  for (let i = 0; i < array.length; i += 1) {
    domString += `
    <div class="card m-4 text-center" id="cards" style="width: 18rem; height: 41em; border: 2px solid black">
      <img class="card-img-top" style="width: 100%" src="${array[i].screenshot}" alt="Screenshot of app">
      <div class="card-body d-flex flex-column" style="background-color: #564AA5; color: white;">
        <h4 class="card-title" style="color: #FBC263;">${array[i].title}</h4>
        <p class="card-text">${array[i].description}</p>
          <h5 style="color: #FBC263;">Technologies:</h5>
          <p class="card-text mb-5">${array[i].technologiesUsed}</p>
          <div id="links" class="mt-auto">
            <h5 class="card-text mb-3"><a href="${array[i].url}" target="_blank">Live Site</a></h5>
            <h5 class="card-text"><a href="${array[i].githubUrl}" target="_blank" style="text-decoration: none">Github</a></h5>
          </div>
      </div>
    </div>`;

    document.querySelector('#projects-container').innerHTML = domString;
  }
};

export default showProjects;
