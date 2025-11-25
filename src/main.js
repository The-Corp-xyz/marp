import './style.css';
import openMenu from './js/menu';
import accordionOpen from './js/accordion';
import sendEmail from './js/sendemail';
import heroImages from './js/heroImages';
import createLenis from './js/lenis';
import scrollActive from './js/scrollActive';
// import textAnimation from './js/textAnimation';
// import revealAnimation from './js/revelAnimation';
import load from './js/load';

document.addEventListener("DOMContentLoaded", () => {
   // textAnimation();
   load();
   openMenu();
   accordionOpen();
   sendEmail();
   heroImages();
   createLenis();
   scrollActive();
   // revealAnimation();
})
