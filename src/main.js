import './style.css';
import openMenu from './js/menu';
import accordionOpen from './js/accordion';
import sendEmail from './js/sendemail';
import heroImages from './js/heroImages';
import createLenis from './js/lenis';

document.addEventListener("DOMContentLoaded", () => {
   openMenu();
   accordionOpen();
   sendEmail();
   heroImages();
   createLenis();
})
