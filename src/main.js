import './style.css';
import openMenu from './js/menu';
import accordionOpen from './js/accordion';
import sendEmail from './js/sendemail';
import heroImages from './js/heroImages';
import createLenis from './js/lenis';
import scrollActive from './js/scrollActive';
import load from './js/load';

document.addEventListener("DOMContentLoaded", () => {
   load();
   openMenu();
   accordionOpen();
   sendEmail();
   heroImages();
   createLenis();
   scrollActive();
})
