const showProjects = (array) => {
  let domString = '';
  for (let i = 0; i < array.length; i += 1) {
    domString += `
    <div class="card m-4 text-center" id="card" style="width: 19.5rem; height: 38em;">
      <img class="card-img-top" id="card-img" src="${array[i].screenshot}" alt="Screenshot of ${array[i].title}">
      <div class="card-body d-flex flex-column" style="background-color: #564AA5; color: white;">
        <h4 class="card-title" style="color: #FBC263;">${array[i].title}</h4>
        <p class="card-text">${array[i].description}</p>
        <div class="mt-auto">
          <h5 style="color: #FBC263;">Technologies:</h5>
          <p class="card-text mb-4">${array[i].technologiesUsed}</p>
         <h5 class="card-text mb-3"><a href="${array[i].url}" target="_blank">Live Site</a></h5>
         <h5 class="card-text"><a href="${array[i].githubUrl}" target="_blank" style="text-decoration: none">Github</a></h5>
        </div> 
      </div>
    </div>`;

    document.querySelector('#projects-container').innerHTML = domString;
  }
};

export default showProjects;
