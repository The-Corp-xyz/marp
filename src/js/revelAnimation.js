import gsap from "gsap";
const header = document.querySelector(".header");
const heroContainer = document.querySelector(".hero__image")

export default function revealAnimation() {
   gsap.from(header, {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.out"
   })

   gsap.fromTo(
      heroContainer,
      { clipPath: "inset(50% 50% 50% 50% round 0px)" }, // Start hidden
      { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1,  ease: "power3.out" } // End revealed
   );

   // gsap.fromTo(
   //    heroContainer,
   //    {
   //       scale: 0.4,
   //       borderRadius: "50px"   // só pra dar um visual de máscara arredondada
   //    },
   //    {
   //       scale: 1,
   //       borderRadius: "0px",
   //       duration: 1.2,
   //       ease: "power3.out"
   //    }
   // );
}