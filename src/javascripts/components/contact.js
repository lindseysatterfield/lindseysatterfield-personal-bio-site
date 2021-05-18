import mail from '../../assets/mail.png';
import linkedin1 from '../../assets/linkedin1.png';
import github1 from '../../assets/github1.png';

const contact = () => {
  document.querySelector('#footer').innerHTML = `
  <h4 id="contact" class="text-center mb-4" >Get in touch with me!</h4>
    <ul id="contact-me" class="mb-4">
      <li><a href="mailto:satterfield.lindsey@gmail.com" target="_blank"><img src="${mail}" class="contact-icons mail"></a></li>
      <li><a href="https://www.linkedin.com/in/lindseysatterfield/" target="_blank"><img src="${linkedin1}" class="contact-icons linkedin"></a></li>
      <li><a href="https://github.com/lindseysatterfield" target="_blank"><img src="${github1}" class="contact-icons github"></a></li>
    </ul>`;
};

export default contact;
