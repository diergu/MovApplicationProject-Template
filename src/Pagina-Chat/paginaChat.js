// Garante que tudo só rode depois do carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {

  // Seletores principais
  const contatos = document.querySelectorAll(".contato");
  const nomeContato = document.getElementById("nome-contato");
  const chatCorpo = document.getElementById("chat-corpo");
  const chatForm = document.getElementById("chat-form");
  const inputMsg = document.getElementById("chat-msg");

  const chatContatos = document.querySelector(".chat-contatos");
  const chatMensagens = document.querySelector(".chat-mensagens");
  const chatHeader = document.querySelector(".chat-header");

  // Verificação de segurança
  if (!chatForm || !inputMsg || !chatCorpo || !nomeContato) {
    console.warn("Chat não está presente nesta tela.");
    return;
  }

  // Histórico de mensagens (simulação local)
  const historicoMensagens = {
    "João Pereira": [
      { tipo: "recebida", texto: "Oi! A cesta básica ainda está disponível?", hora: "10:14" },
      { tipo: "enviada", texto: "Sim, está! Pode vir buscar hoje à tarde?", hora: "10:16" }
    ],
    "Ana Santos": [
      { tipo: "recebida", texto: "Obrigada pelas roupas!", hora: "11:10" }
    ]
  };

  let contatoAtivo = "João Pereira";

  // Função: renderizar mensagens
  function renderizarMensagens(nome) {
    chatCorpo.innerHTML = "";
    (historicoMensagens[nome] || []).forEach(msg => {
      const div = document.createElement("div");
      div.classList.add("mensagem", msg.tipo);
      div.innerHTML = `
        <p>${msg.texto}</p>
        <span class="hora">${msg.hora}</span>
      `;
      chatCorpo.appendChild(div);
    });
    chatCorpo.scrollTop = chatCorpo.scrollHeight;
  }

  // Render inicial
  renderizarMensagens(contatoAtivo);

  // Criar botão Voltar (mobile)
  const voltarBtn = document.createElement("button");
  voltarBtn.textContent = "← Voltar";
  voltarBtn.classList.add("voltar");
  voltarBtn.style.display = "none";
  chatHeader.prepend(voltarBtn);

  // Alternar contatos
  contatos.forEach(contato => {
    contato.addEventListener("click", () => {

      const ativo = document.querySelector(".contato.ativo");
      if (ativo) ativo.classList.remove("ativo");

      contato.classList.add("ativo");

      contatoAtivo = contato.dataset.nome;
      nomeContato.textContent = contatoAtivo;
      renderizarMensagens(contatoAtivo);

      // Mobile: esconder lista
      if (window.innerWidth <= 600 && chatContatos) {
        chatContatos.classList.add("escondido");
        voltarBtn.style.display = "inline";
      }
    });
  });

  // Envio de mensagem
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = inputMsg.value.trim();
    if (!texto) return;

    const hora = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    if (!historicoMensagens[contatoAtivo]) {
      historicoMensagens[contatoAtivo] = [];
    }

    historicoMensagens[contatoAtivo].push({
      tipo: "enviada",
      texto,
      hora
    });

    renderizarMensagens(contatoAtivo);

    inputMsg.value = "";
  });

  // Botão voltar (mobile)
  voltarBtn.addEventListener("click", () => {
    if (chatContatos) {
      chatContatos.classList.remove("escondido");
    }
    voltarBtn.style.display = "none";
  });

});
