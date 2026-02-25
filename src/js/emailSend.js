const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const empresaInput = document.getElementById("empresa-input");
const phoneInput = document.getElementById("phone-input");
const mensagemInput = document.getElementById("text-area");

export default function emailSend() {
  const sendEmail = (e) => {
    e.preventDefault();

    const nome = nameInput.value.trim();
    const email = emailInput.value.trim();
    const empresa = empresaInput.value.trim();
    const phone = phoneInput.value.trim();
    const mensagem = mensagemInput.value.trim();

    if (!nome.length) {
      contactMessage.textContent = "Por favor insira seu nome! ❌";
      return setTimeout(() => (contactMessage.textContent = ""), 3000);
    }

    if (!email.length) {
      contactMessage.textContent = "Por favor insira seu Email! ❌";
      return setTimeout(() => (contactMessage.textContent = ""), 3000);
    }

    if (!empresa.length) {
      contactMessage.textContent = "Por favor insira o nome da empresa! ❌";
      return setTimeout(() => (contactMessage.textContent = ""), 3000);
    }

    if (!phone.length) {
      contactMessage.textContent = "Por favor insira seu número de celular! ❌";
      return setTimeout(() => (contactMessage.textContent = ""), 3000);
    }

    if (!mensagem.length) {
      contactMessage.textContent = "Por favor insira um texto! ❌";
      return setTimeout(() => (contactMessage.textContent = ""), 3000);
    }

    fetch("https://marp-server.onrender.com/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        email,
        empresa,
        phone,
        mensagem,
      }),
    })
      .then(async (response) => {
        // se o backend retornar erro, cair no catch com mensagem
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data?.error || "Erro no servidor");
        return data;
      })
      .then((data) => {
        console.log("SUCCESS!", data);
        contactMessage.textContent = "Mensagem enviada com sucesso ✅";

        // opcional: limpar form
        contactForm.reset();

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        contactMessage.textContent = `Erro ao enviar a mensagem ❌ ${err.message || ""}`;

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
      });
  };

  contactForm.addEventListener("submit", sendEmail);
}