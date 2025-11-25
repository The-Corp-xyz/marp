import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function createLenis() {
   gsap.registerPlugin(ScrollTrigger);

   const lenis = new Lenis();
   lenis.on("scroll", ScrollTrigger.update);
   gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
   });

   gsap.ticker.lagSmoothing(0);
}