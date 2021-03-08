import gmail from '../../assets/gmail.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const contact = () => {
  document.querySelector('#footer').innerHTML = `
  <h4 id="contact" class="text-center mb-4" >Get in touch with me!</h4>
    <ul id="contact-me" class="mb-4">
      <li><a href="mailto:satterfield.lindsey@gmail.com" target="_blank"><img src="${gmail}" class="contact-icons"></a></li>
      <li><a href="https://www.linkedin.com/in/lindseysatterfield/" target="_blank"><img src="${linkedin}" class="contact-icons"></a></li>
      <li><a href="https://github.com/lindseysatterfield" target="_blank"><img src="${github}" class="contact-icons"></a></li>
    </ul>`;
};

export default contact;
