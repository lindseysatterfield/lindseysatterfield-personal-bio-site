import coding from '../../assets/coding.png';

const profile = () => {
  document.querySelector('#profile').innerHTML = `
    <h1 class="greeting">Hello World!</h1>
    <h1 class="greeting">I'm Lindsey.</h1>
    <h4 class="greeting-title">Web Developer</h4>
    <img src="${coding}" id="coding-img" alt="Computer with code">
    <div id="bio">
      <p class="bio">As a long time enthusiast of all things technology, I am currently loving what I do -- developing 
      websites and applications. A Nashville native, I am still here and currently attending Nashville Software School. Formerly a worker in the video production world and graduate of the University of Tennessee, I decided it was time to follow my dreams and enter the technology world to allow myself more creativity. I am in the process of learning Front End Development and C#/.NET. When I am not in front of a computer, I enjoy hiking, photography, traveling, and going to Preds games.</p> 
    </div>`;
};

export default profile;
