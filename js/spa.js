// js/spa.js
// SPA básica: troca o conteúdo de <main> sem recarregar a página toda

(function () {
    function setupSPA() {
      const main = document.querySelector("main");
      const nav = document.querySelector("nav");
      if (!main || !nav) return;
  
      const links = nav.querySelectorAll("a[href$='.html']");
  
      async function loadPage(url, pushState = true) {
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error("Erro ao carregar página: " + url);
  
          const text = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, "text/html");
          const newMain = doc.querySelector("main");
          if (!newMain) return;
  
          main.innerHTML = newMain.innerHTML;
  
          if (pushState) {
            history.pushState({ url }, "", url);
          }
  
          // Dispara evento para outros scripts (ex: form-validation)
          document.dispatchEvent(
            new CustomEvent("spa:navigated", { detail: { url } })
          );
  
          setActiveLink(url);
        } catch (err) {
          console.error("Erro na SPA, redirecionando normalmente:", err);
          window.location.href = url; // fallback
        }
      }
  
      function setActiveLink(url) {
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === url) {
            link.classList.add("ativo");
          } else {
            link.classList.remove("ativo");
          }
        });
      }
  
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          const url = link.getAttribute("href");
          if (!url) return;
  
          // Se for link externo ou âncora, não intercepta
          if (/^https?:\/\//.test(url) || url.startsWith("#")) return;
  
          event.preventDefault();
          loadPage(url, true);
        });
      });
  
      window.addEventListener("popstate", (event) => {
        const url =
          (event.state && event.state.url) ||
          window.location.pathname.split("/").pop() ||
          "index.html";
        loadPage(url, false);
      });
    }
  
    document.addEventListener("DOMContentLoaded", setupSPA);
  })();
  