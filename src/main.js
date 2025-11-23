import './style.css';
import openMenu from './js/menu';
import accordionOpen from './js/accordion';
import sendEmail from './js/sendemail';
import heroImages from './js/heroImages';
import createLenis from './js/lenis';
import scrollActive from './js/scrollActive';
// import textAnimation from './js/textAnimation';
// import revealAnimation from './js/revelAnimation';

document.addEventListener("DOMContentLoaded", () => {
   // textAnimation();
   openMenu();
   accordionOpen();
   sendEmail();
   heroImages();
   createLenis();
   scrollActive();
   // revealAnimation();
})
