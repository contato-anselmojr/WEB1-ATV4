// js/form-validation.js
// Validação do formulário de cadastro + mensagens de feedback

(function () {
    function initCadastroForm() {
      const form = document.getElementById("cadastroForm");
      if (!form || form.dataset.enhanced === "true") return;
  
      // Área para mensagens de erro/sucesso
      let feedback = document.getElementById("form-messages");
      if (!feedback) {
        feedback = document.createElement("div");
        feedback.id = "form-messages";
        form.parentNode.insertBefore(feedback, form);
      }
  
      const sucesso = document.getElementById("mensagem-sucesso");
  
      function mostrarMensagem(tipo, texto) {
        if (window.Templates && typeof Templates.alert === "function") {
          feedback.innerHTML = Templates.alert(tipo, texto);
        } else {
          feedback.textContent = texto;
        }
        feedback.style.display = "block";
  
        if (tipo === "success" && sucesso) {
          sucesso.style.display = "block";
          sucesso.textContent = "✅ Cadastro enviado com sucesso!";
          setTimeout(() => {
            sucesso.style.display = "none";
          }, 4000);
        }
      }
  
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const cpf = form.cpf.value.trim();
        const telefone = form.telefone.value.trim();
        const cep = form.cep.value.trim();
        const cidade = form.cidade.value.trim();
        const estado = form.estado.value.trim();
  
        let erros = [];
  
        if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
          erros.push("O nome deve conter apenas letras e espaços.");
        }
  
        if (!/\S+@\S+\.\S+/.test(email)) {
          erros.push("Digite um e-mail válido.");
        }
  
        if (!/^\d{11}$/.test(cpf)) {
          erros.push("O CPF deve ter exatamente 11 números.");
        }
  
        if (!/^\d{10,11}$/.test(telefone)) {
          erros.push("O telefone deve ter 10 ou 11 números.");
        }
  
        if (!/^\d{8}$/.test(cep)) {
          erros.push("O CEP deve ter 8 números.");
        }
  
        if (!/^[A-Za-zÀ-ÿ\s]+$/.test(cidade)) {
          erros.push("A cidade deve conter apenas letras.");
        }
  
        if (!/^[A-Za-z]{2}$/.test(estado)) {
          erros.push("O estado deve ter 2 letras, como PR, SP, RJ.");
        }
  
        if (erros.length > 0) {
          mostrarMensagem(
            "error",
            "Por favor, corrija os seguintes erros:<br>" + erros.join("<br>")
          );
          return;
        }
  
        // Se passou nas validações, monta objeto de cadastro:
        const dados = {
          nome,
          email,
          cpf,
          telefone,
          cep,
          cidade,
          estado,
          dataCadastro: new Date().toISOString()
        };
  
        // Salva no localStorage (simulação de "banco de dados")
        if (window.StorageVoluntarios && typeof StorageVoluntarios.save === "function") {
          StorageVoluntarios.save(dados);
        }
  
        mostrarMensagem(
          "success",
          "Cadastro válido! Seus dados foram salvos localmente (simulação)."
        );
        form.reset();
      });
  
      // Marca como já configurado para não duplicar eventos
      form.dataset.enhanced = "true";
    }
  
    document.addEventListener("DOMContentLoaded", initCadastroForm);
    document.addEventListener("spa:navigated", initCadastroForm);
  })();
  