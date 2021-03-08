import printToDom from '../helpers/printToDom';

const createProjectCards = (array) => {
  let domString = '';
  for (let i = 0; i < array.length; i += 1) {
    domString += `
    <div class="card m-4 text-center" style="width: 18rem; height: 32em;">
      <img class="card-img-top" style="width: 100%" src="${array[i].screenshot}" alt="Card image cap">
      <div class="card-body" style="background-color: #564AA5; color: white;">
        <h4 class="card-title">${array[i].title}</h4>
        <p class="card-text">${array[i].description}</p>
          <p class="card-text">${array[i].technologiesUsed}</p>
          <p class="card-text"><a href="${array[i].url}">Live Site</a></p>
          <p class="card-text"><a href="${array[i].githubUrl}">Github</a></p>
      </div>
    </div>`;

    if (array[i].available === true) {
      printToDom('#projects-container', domString);
    }
  }
};

export default createProjectCards;
