// ===============================
// SPA SIMPLES (carrega páginas sem reload)
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[data-route]");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const rota = link.getAttribute("data-route");

      if (Templates[rota]) {
        document.querySelector("main").innerHTML = Templates[rota];
        window.history.pushState({}, "", rota);
      }
    });
  });

  // Back/forward do navegador
  window.addEventListener("popstate", () => {
    const path = window.location.pathname.replace("/", "");
    if (Templates[path]) {
      document.querySelector("main").innerHTML = Templates[path];
    }
  });
});
