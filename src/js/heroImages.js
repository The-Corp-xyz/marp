export default function heroImages() {
   const images = [
      '/images/hero-img-1.png',
      '/images/hero-img-2.png',
      '/images/hero-img-3.png'
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

// import gsap from "gsap";

// export default function heroImages() {
//    const images = [
//       "/images/hero-img-1.png",
//       "/images/hero-img-2.png",
//       "/images/hero-img-3.png"
//    ];

//    const sliderImage = document.querySelector(".hero__img");
//    const buttons = document.querySelectorAll(".mark__content");

//    if (!sliderImage || !buttons.length) {
//       console.warn("heroImages: faltando .hero__img ou .mark__content no HTML");
//       return;
//    }

//    const totalSlides = Math.min(images.length, buttons.length);

//    let currentIndex = 0;
//    const delay = 3000;
//    let intervalId = null;
//    let isAnimating = false;
//    let isFirstShow = true;

//    function normalizeIndex(index) {
//       return ((index % totalSlides) + totalSlides) % totalSlides;
//    }

//    function updateButtons() {
//       buttons.forEach(btn => btn.classList.remove("active"));
//       const activeBtn = buttons[currentIndex];
//       if (activeBtn) activeBtn.classList.add("active");
//    }

//    function animateChange() {
//       // mata animações antigas pra não acumular
//       gsap.killTweensOf(sliderImage);
//       isAnimating = true;

//       const tl = gsap.timeline({
//          onComplete: () => {
//             isAnimating = false;
//          }
//       });

//       tl.to(sliderImage, {
//          opacity: 0,
//          duration: 0.4,
//          ease: "power2.out",
//          onComplete: () => {
//             sliderImage.src = images[currentIndex];
//          }
//       }).to(sliderImage, {
//          opacity: 1,
//          duration: 0.5,
//          ease: "power2.inOut"
//       });
//    }

//    function showImage(index, { animate = true } = {}) {
//       const newIndex = normalizeIndex(index);
//       if (newIndex === currentIndex && !isFirstShow) return;
//       if (isAnimating && animate) return; // evita spam de clique

//       currentIndex = newIndex;
//       updateButtons();

//       if (isFirstShow || !animate) {
//          sliderImage.src = images[currentIndex];
//          gsap.set(sliderImage, { opacity: 1 });
//          isFirstShow = false;
//       } else {
//          animateChange();
//       }
//    }

//    function nextImage() {
//       const nextIndex = currentIndex + 1;
//       showImage(nextIndex);
//    }

//    function startAutoPlay() {
//       stopAutoPlay();
//       intervalId = setInterval(nextImage, delay);
//    }

//    function stopAutoPlay() {
//       if (intervalId) {
//          clearInterval(intervalId);
//          intervalId = null;
//       }
//    }

//    // clique nos botões
//    buttons.forEach((btn, indexFromNodeList) => {
//       btn.addEventListener("click", () => {
//          const dataIndex = btn.dataset.index;
//          const index =
//             dataIndex !== undefined ? Number(dataIndex) : indexFromNodeList;

//          showImage(index);
//          startAutoPlay(); // reseta o timer
//       });
//    });

//    // inicia
//    showImage(0, { animate: false });
//    startAutoPlay();
// }