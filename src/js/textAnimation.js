// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// export default function textAnimation() {
//    gsap.registerPlugin(SplitText, ScrollTrigger);

//    const copies = document.querySelectorAll("p")

//    function setUpSplits() {
//       // $(document).ready(function () {
//       //    $(".split-line").wrap('<div class="split-parent"></div>');
//       // })

//       wrapLines();

//       copies.forEach((copy) => {
//          copy.split = new SplitText(copy, {
//             type: "lines, words, chars",
//             linesClass: "split-line",
//          })

//          copy.anim = gsap.from(copy.split.lines, {
//             scrollTrigger: {
//                trigger: copy,
//                toggleActions: "restart pause resume",
//                start: "top 90%",
//             },
//             duration: 2,
//             ease: "power4.inOut",
//             yPercent: 100,
//             stagger: 0.1,
//          })
//       })
//    }

//    // Garante que as fontes estejam carregadas
//    if (document.fonts && document.fonts.ready) {
//       document.fonts.ready.then(setUpSplits);
//    } else {
//       window.addEventListener("load", setUpSplits);
//    }
// }

// function wrapLines() {
//    document.querySelectorAll(".split-line").forEach(line => {
//       const wrapper = document.createElement("div");
//       wrapper.classList.add("split-parent");
//       line.parentNode.insertBefore(wrapper, line);
//       wrapper.appendChild(line);
//    });
// }

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function textAnimation() {
   gsap.registerPlugin(SplitText, ScrollTrigger);

   // Se quiser, troca o "p" por algo mais específico, tipo "p.hero__description"
   const copies = document.querySelectorAll("p");

   function setUpSplits() {
      copies.forEach((copy) => {
         // Cria as linhas/chars/words
         copy.split = new SplitText(copy, {
            type: "lines, words, chars",
            linesClass: "split-line",
         });

         // Agora que as .split-line existem, podemos wrappar
         wrapLines();

         // Animação com ScrollTrigger
         copy.anim = gsap.from(copy.split.lines, {
            scrollTrigger: {
               trigger: copy,
               start: "top 90%",
               toggleActions: "play none none none",
               once: true,
            },
            duration: 2,
            ease: "power4.inOut",
            yPercent: 100,
            stagger: 0.1,
         });
      });
   }

   // Garante que as fontes estejam carregadas antes de usar SplitText
   if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setUpSplits);
   } else {
      window.addEventListener("load", setUpSplits);
   }
}

function wrapLines() {
   document.querySelectorAll(".split-line").forEach(line => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("split-parent");
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
   });
}

