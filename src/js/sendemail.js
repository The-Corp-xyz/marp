const contactForm = document.getElementById("contact-form"),
      contactMessage = document.getElementById("contact-message")

export default function sendEmail() {
   const sendEmail = (e) => {
      e.preventDefault()

      // serviceID - templateID - #form - publickey
      emailjs.sendForm('service_z86g21q', 'template_wmxis5o', '#contact-form', '8nZG7CgvJv9C5iUUv')
      .then(() => {
         contactMessage.textContent = 'Mensagem enviada com sucesso ✅';

         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000)

         contactForm.reset();
      }, (err) => {
         contactMessage.textContent = `Erro ao enviar a mensagem ❌ ${err.text || ''}`;
         
         setTimeout(() => {
            contactMessage.textContent = '';
         }, 5000)
      })
   }
   
   contactForm.addEventListener("submit", sendEmail);
}