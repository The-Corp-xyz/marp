const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message")

export default function sendEmail() {
   const sendEmail = (e) => {
      e.preventDefault()

      // serviceID - templateID - #form - publickey
      emailjs.sendForm('', '', '#contact-form', '')
      .then(() => {
         contactMessage.textContent = 'Mensagem enviada com sucesso ✅';

         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000)

         contactForm.reset();
      }, () => {
         contactMessage.textContent = "Erro ao enviar a mensagem ❌";
         
         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000)
      })
   }
   
   contactForm.addEventListener("submit", sendEmail);
}