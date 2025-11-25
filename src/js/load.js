

export default function load() {
   onload = () => {
      const load = document.getElementById("page-load");
      const body = document.querySelector("body");

      setTimeout(() => {
         load.style.display = 'none';
         body.style.overflow = 'initial'
      }, 2000);
   }
}