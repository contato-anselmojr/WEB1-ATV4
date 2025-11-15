// =======================================
//   ACESSIBILIDADE – MODO ALTO CONTRASTE
// =======================================

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("toggle-contraste");
  
    if (!btn) return; // segurança: se o botão não existir
  
    btn.addEventListener("click", () => {
      const isActive = document.body.classList.toggle("modo-alto-contraste");
  
      // acessibilidade — informa ao leitor de tela o estado do botão
      btn.setAttribute("aria-pressed", isActive);
    });
  });
  