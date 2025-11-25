import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function textAnimation() {
   gsap.registerPlugin(SplitText, ScrollTrigger);

   const copies = document.querySelectorAll("p");

   function setUpSplits() {
      copies.forEach((copy) => {
         copy.split = new SplitText(copy, {
            type: "lines, words, chars",
            linesClass: "split-line",
         });

         wrapLines();

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

