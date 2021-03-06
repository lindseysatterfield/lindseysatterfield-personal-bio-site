import printToDom from '../helpers/printToDom';

const createProjectCards = (array) => {
  let domString = '';
  for (let i = 0; i < array.length; i += 1) {
  //   domString += `<div class="card-group">
  //   <div class="card .h-100 mx-4 text-center">
  //     <img class="card-img-top" style="width: 100%;" src="${array[i].screenshot}" alt="Image screenshot">
  //     <div class="card-body">
  //       <h5 class="card-title">${array[i].title}</h5>
  //       <p class="card-text">${array[i].description}</p>
  //       <p class="card-text">${array[i].technologiesUsed}</p>
  //       <p class="card-text"><a href="${array[i].url}">Live Site</a></p>
  //       <p class="card-text"><a href="${array[i].githubUrl}">Github</a></p>
  //     </div>
  //   </div>
  // </div>`;

    domString += `<div class="card .h-100 mx-4 text-center" style="width: 18rem;">
    <img class="card-img-top" style="width: 100%"; src="${array[i].screenshot}" alt="Card image cap">
    <div class="card-body">
    <h3 class="card-title">${array[i].title}</h3>
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
