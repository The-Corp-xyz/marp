const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message")

export default function sendEmail() {
   const sendEmail = (e) => {
      e.preventDefault()

      // serviceID - templateID - #form - publickey
      emailjs.sendForm('service_z86g21q', 'template_wmxis5o', '#contact-form', '--rTMfrK7YmYR5xkm')
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