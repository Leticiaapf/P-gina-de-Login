// Javascript/script.js

const form = document.getElementById("loginForm");
const user = document.getElementById("user");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Carrega username salvo (se existir)
window.addEventListener("load", () => {
  user.value = localStorage.getItem("user") || "";
  password.value = ""; // nunca carregar senha
});

// Trata o envio do formulário
form.addEventListener("submit", (event) => {
  // evita submissão para checar manualmente
  event.preventDefault();

  // Checa validade do formulário (usa os atributos HTML como required)
  if (!form.checkValidity()) {
    // Mostra mensagens nativas de validação do navegador
    form.reportValidity();
    return;
  }

  const userNameValue = user.value.trim();
  const passwordValue = password.value;

  console.log("Tentativa de login:", userNameValue);

  // Limpa campo de senha no cliente por segurança
  password.value = "";
});

// Alterna visibilidade da senha
if (password && togglePassword) {
  togglePassword.addEventListener('click', () => {
    const isPassword = password.type === 'password';
    password.type = isPassword ? 'text' : 'password';

    // usa toggle para trocar entre fa-eye e fa-eye-slash
    togglePassword.classList.toggle('fa-eye', !isPassword);      // remove fa-eye quando mostrar texto
    togglePassword.classList.toggle('fa-eye-slash', isPassword); // adiciona fa-eye-slash quando mostrar texto

    // Ajuste aria-label para acessibilidade
    togglePassword.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
  });

  // opção acessível: permitir toggle via Enter quando o ícone está focado
  togglePassword.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePassword.click();
    }
  });
}