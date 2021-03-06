import sortingHat from '../../../assets/sortingHat.png';
import tamagotchi from '../../../assets/tamagotchi.png';
import nashvilleRestaurantRandomizer from '../../../assets/nashvilleRestaurantRandomizer.png';
import bearWatcher from '../../../assets/bearWatcher.png';

const projects = [
  {
    title: 'The Sorting Hat',
    screenshot: `${sortingHat}`,
    description: 'This sorts prospective students into random Hogwarts houses via array looping and attached dynamically to the DOM.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootstrap, Version Control with Github',
    available: true,
    url: 'https://lindseysatterfield-sorting-hat.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/lindseysatterfield/sorting-hat'
  },
  {
    title: 'Nashville Restaurant Randomizer',
    screenshot: `${nashvilleRestaurantRandomizer}`,
    description: 'An app for when a user cannot choose a restaurant in Nashville. The user clicks a button and a random restaurant appears.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Bootstrap, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://nashville-restaurant-randomizer.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/lindseysatterfield/nashville-restaurant-randomizer'
  },
  {
    title: 'Tamagotchi',
    screenshot: `${tamagotchi}`,
    description: 'A virtual pet app where the user can take care of a cat.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Bootstrap, Vanilla JavaScript, Webpack, Version Control with Github',
    available: true,
    url: 'https://lindseysatterfield-tamagotchi.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/lindseysatterfield/ASSIGNMENT-Tamagotchi'
  },
  {
    title: 'Bear Watcher',
    screenshot: `${bearWatcher}`,
    description: 'A user can add a bear name and url then get back the weight and a random fact about the bear. ', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Bootstrap, Vanilla JavaScript, Webpack, Version Control with Github',
    available: true,
    url: 'https://lindseysatterfield-bear-watcher.netlify.app/', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/lindseysatterfield/ASSIGNMENT-Bear-Watcher'
  },
  {
    title: 'Cool Project',
    screenshot: 'https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  }
];

export default projects;
