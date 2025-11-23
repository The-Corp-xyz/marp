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

      if (!nameInput.length) {
         contactMessage.textContent = 'Por favor insira seu nome! ❌';
      } else if (!emailInput.length) {
         contactMessage.textContent = 'Por favor insira seu Email! ❌';
      } else if (!empresaInput.length) {
         contactMessage.textContent = 'Por favor insira seu o nome da empresa! ❌';
      } else if (!phoneInput.length) {
         contactMessage.textContent = 'Por favor insira seu o número de celular! ❌';
      } else if (!textArea.length) {
         contactMessage.textContent = 'Por favor insira um texto! ❌';
      } else {

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
   }

   contactForm.addEventListener("submit", sendEmail);
}