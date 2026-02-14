import {
  hosp,
  loginform,
  login,
  button,
  user,
  email,
  password,
  msg,
} from "../controllers/script.js";

const lab = document.getElementById("log");
const msgLogin = document.getElementById("msg-login");
const closeMsg = document.getElementById("close-msg");
const tag = document.getElementById("tagprinci");

// 🔎 Verifica se é SOMENTE números
function verificarLog(valor) {
  return /^[0-9]+$/.test(valor);
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  // 1️⃣ Campos vazios
  if (user.value === "" || email.value === "" || password.value === "") {
    msg.textContent = "*Todos os campos são obrigatórios";
    msg.style.color = "red";
    return;
  }

  // 2️⃣ Usuário só com números ❌
  if (verificarLog(user.value)) {
    msg.textContent = "Usuário não pode conter apenas números";
    msg.style.color = "red";
    return;
  }

  // ✅ Login válido
  msg.textContent = "";
  lab.textContent = `${user.value}`;

  user.value = "";
  email.value = "";
  password.value = "";

  loginform.style.display = "none";
  hosp.style.filter = "blur(0px)";
  tag.style.display = "none";
  login.style.pointerEvents = "none";

  // Mostrar mensagem com animação
  msgLogin.classList.add("ativo");

  // Auto-fechar depois de 3s
  setTimeout(() => {
    msgLogin.classList.remove("ativo");
  }, 3000);
});

closeMsg.addEventListener("click", () => {
  msgLogin.classList.remove("ativo");
});
