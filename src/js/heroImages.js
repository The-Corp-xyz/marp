// export default function heroImages() {
//    const images = [
//       '/images/hero-img-1.png',
//       '/images/hero-img-2.png',
//       '/images/hero-img-3.png'
//    ];

//    const sliderImage = document.querySelector(".hero__img");
//    const buttons = document.querySelectorAll(".mark__content");

//    let currentIndex = 0;
//    const delay = 10000;
//    let intervalId = null;

//    function showImage(index) {
//       currentIndex = index;

//       const newSrc = images[currentIndex];

//       // troca a imagem
//       sliderImage.src = newSrc;

//       // só ativa o botão quando a imagem terminar de carregar
//       sliderImage.onload = () => {
//          buttons.forEach(btn => btn.classList.remove("active"));
//          buttons[currentIndex].classList.add("active");
//       };
//    }

//    function nextImage() {
//       const nextIndex = (currentIndex + 1) % images.length;
//       showImage(nextIndex);
//    }

//    function startAutoPlay() {
//       stopAutoPlay();
//       intervalId = setInterval(nextImage, delay);
//    }

//    function stopAutoPlay() {
//       if (intervalId) clearInterval(intervalId);
//    }

//    buttons.forEach(btn => {
//       btn.addEventListener("click", () => {
//          const index = Number(btn.dataset.index);
//          showImage(index);
//          startAutoPlay();
//       });
//    });

//    showImage(0);
//    startAutoPlay();
// }

export default function heroImages() {
   const images = [
      '/images/hero-img-1.webp',
      '/images/hero-img-2.webp',
      '/images/hero-img-3.webp'
   ];

   const sliderImage = document.querySelector(".hero__img");
   const buttons = document.querySelectorAll(".mark__content");

   let currentIndex = 0;
   const delay = 10000;
   let intervalId = null;

   function showImage(index) {
      currentIndex = index;

      const newSrc = images[currentIndex];

      // troca a imagem
      sliderImage.src = newSrc;

      // só ativa o botão quando a imagem terminar de carregar
      sliderImage.onload = () => {
         buttons.forEach(btn => btn.classList.remove("active"));
         buttons[currentIndex].classList.add("active");
      };
   }

   function nextImage() {
      const nextIndex = (currentIndex + 1) % images.length;
      showImage(nextIndex);
   }

   function startAutoPlay() {
      stopAutoPlay();
      intervalId = setInterval(nextImage, delay);
   }

   function stopAutoPlay() {
      if (intervalId) clearInterval(intervalId);
   }

   buttons.forEach(btn => {
      btn.addEventListener("click", () => {
         const index = Number(btn.dataset.index);
         showImage(index);
         startAutoPlay();
      });
   });

   showImage(0);
   startAutoPlay();
}