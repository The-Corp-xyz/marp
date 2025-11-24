import emailjs from '@emailjs/browser';

const contactForm = document.getElementById("contact-form"),
   contactMessage = document.getElementById("contact-message")

const nameInput = document.getElementById("name-input"),
   emailInput = document.getElementById("email-input"),
   empresaInput = document.getElementById("empresa-input"),
   phoneInput = document.getElementById("phone-input"),
   textArea = document.getElementById("text-area")

export default function sendEmail() {
   const sendEmail = (e) => {
      e.preventDefault()

      if (!nameInput.value.length) {
         contactMessage.textContent = 'Por favor insira seu nome! ❌';

         setTimeout(() => {contactMessage.textContent = ''}, 3000)
      } else if (!emailInput.value.length) {
         contactMessage.textContent = 'Por favor insira seu Email! ❌';

         setTimeout(() => {contactMessage.textContent = ''}, 3000)
      } else if (!empresaInput.value.length) {
         contactMessage.textContent = 'Por favor insira seu o nome da empresa! ❌';

        setTimeout(() => {contactMessage.textContent = ''}, 3000)
      } else if (!phoneInput.value.length) {
         contactMessage.textContent = 'Por favor insira seu o número de celular! ❌';

         setTimeout(() => {contactMessage.textContent = ''}, 3000)
      } else if (!textArea.value.length) {
         contactMessage.textContent = 'Por favor insira um texto! ❌';

         setTimeout(() => {contactMessage.textContent = ''}, 3000)
      } else {

         // serviceID - templateID - #form - publickey
         emailjs.sendForm('service_z86g21q', 'template_wmxis5o', '#contact-form', '8nZG7CgvJv9C5iUUv')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);

               contactMessage.textContent = 'Mensagem enviada com sucesso ✅';

               setTimeout(() => {
                  contactMessage.textContent = '';
               }, 5000)

               contactForm.reset();
            }, (err) => {
               console.log('FAILED...', err);
               contactMessage.textContent = `Erro ao enviar a mensagem ❌ ${err.text || ''}`;

               setTimeout(() => {
                  contactMessage.textContent = '';
               }, 5000)
            })
      }
   }

   contactForm.addEventListener("submit", sendEmail);
}