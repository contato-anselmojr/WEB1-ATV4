// js/storage.js
// Módulo responsável por salvar e ler cadastros no localStorage

window.StorageVoluntarios = (function () {
    const CHAVE = "cadastrosVoluntarios";
  
    function getAll() {
      try {
        const raw = localStorage.getItem(CHAVE);
        if (!raw) return [];
        const dados = JSON.parse(raw);
        return Array.isArray(dados) ? dados : [];
      } catch (e) {
        console.error("Erro ao ler cadastros do localStorage:", e);
        return [];
      }
    }
  
    function save(cadastro) {
      const cadastros = getAll();
      cadastros.push(cadastro);
      try {
        localStorage.setItem(CHAVE, JSON.stringify(cadastros));
        console.log("Cadastro salvo no localStorage:", cadastro);
      } catch (e) {
        console.error("Erro ao salvar no localStorage:", e);
      }
    }
  
    return { getAll, save };
  })();
  