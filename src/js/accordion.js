const accordionItems = document.querySelectorAll(".faq__card");

export default function accordionOpen() {
   accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector(".faq__header");

      accordionHeader.addEventListener("click", () => {
         const openItem = document.querySelector(".accordion-open");

         toggleItem(item);

         if(openItem && openItem !== item) {
            toggleItem(openItem);
         }
      })
   })

   const toggleItem = (item) => {
      const accordionContent = item.querySelector(".faq__card-content");

      if(item.classList.contains('accordion-open')) {
         accordionContent.removeAttribute('style');

         item.classList.remove("accordion-open");
      } else {
         accordionContent.style.height = accordionContent.scrollHeight + 16 + "px";
         item.classList.add('accordion-open');
      }

   }
} 