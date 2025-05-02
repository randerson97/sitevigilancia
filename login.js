import { auth } from "../firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "./index.html";
  } catch (error) {
    alert("Erro ao entrar: " + error.message);
  }
});
