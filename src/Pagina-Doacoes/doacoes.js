/* ==================================================================
   PARTE 2: PÁGINA DE DOAÇÕES (Cards com Localização e Rodapé Cinza)
   ================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  if (app) {

    // DADOS COMPLETOS (Incluindo location e footerData)
    const requests = [
      // --- Coluna 1: Pedidos de doação ---
      {
        col: 1,
        chip: "Alimentos",
        location: "Saranhema - Ouro Preto - MG",
        title: "Cestas básicas para famílias do Bairro Esperança",
        desc: "Arrecadação de alimentos não perecíveis (arroz, feijão, óleo) para apoiar 25 famílias em situação de vulnerabilidade.",
        meta: ["Quantidade: 25", "Entrega: Em mãos"],
        img: "avatar_homem.png",
        footerData: { label: "Donatário:", name: "João Pereira", action: "Chat", date: "01/11" }
      },
      {
        col: 1,
        chip: "Brinquedos",
        location: "Venda Nova - Belo Horizonte - MG",
        title: "Kits de brinquedos para ação do Dia das Crianças",
        desc: "Coleta de bonecas, carrinhos e bolas novas ou em bom estado para distribuir durante o evento comunitário de outubro.",
        meta: ["Idade: 4–10", "Meta: 60 kits"],
        img: "avatar_mulhermorena.png",
        footerData: { label: "Donatário:", name: "Maria Aparecida", action: "Chat", date: "02/11"}
      },
      {
        col: 1,
        chip: "Roupas",
        location: "Morumbi - Uberlândia MG",
        title: "Agasalhos e calçados para abrigo municipal",
        desc: "Necessidade urgente de casacos, moletons e tênis para os acolhidos do abrigo municipal devido à frente fria.",
        meta: ["Tamanhos: P ao GG", "Urgente"],
        img: "avatar_homemnegro.png",
        footerData: { label: "Donatário:", name: "Victor Cruz", action: "Chat", date: "05/11"}
      },

      // --- Coluna 2:  ---
      {
        col: 2,
        chip: "Alimentos",
        location: "Morro da Pedra - Belo Horizonte - MG",
        title: "Leite em pó e fraldas para creche comunitária",
        desc: "Doação mensal destinada ao berçário da creche, auxiliando na alimentação e higiene de bebês.",
        meta: ["Leite: 90 latas", "Fraldas: tam. M e G"],
        img: "avatar_mulher.png",
        footerData: { label: "Donatário:", name: "Ana Santos", action: "Chat", date: "10/11",}
      },
      {
        col: 2,
        chip: "Brinquedos",
        location: "Venda Nova - Belo Horizonte - MG",
        title: "Jogos de tabuleiro para sala de convivência",
        desc: "Doação de jogos educativos e de estratégia para equipar a nova sala de lazer dos idosos.",
        meta: ["Meta: 25 jogos", "Preferência: usados"],
        img: "avatar_homemmoreno.png",
        footerData: { label: "Donatário:", name: "Jaime Ferreira", action: "Chat", date: "13/11",}
      },
      {
        col: 2,
        chip: "Roupas",
        location: "Jardim das Palmeiras - Uberlândia MG",
        title: "Roupas infantis para campanha de inverno",
        desc: "Conjuntos de moletom e calças quentes arrecadados para distribuição em escolas rurais.",
        meta: ["0–12 anos", "Meta: 200 peças"],
        img: "avatar_mulhernegra.png",
        footerData: { label: "Donatário:", name: "Maria Ferraz", action: "Chat", date: "15/11", }
      },
    ];

    // HTML da estrutura principal
    app.innerHTML = `
<div class="wrap">
        <div class="filter-area">
          <select class="date-select">
              <option value="" disabled selected>Último mês</option>
              <option value="1">Últimos 3 meses</option>
              <option value="6">Últimos 6 meses</option>
              <option value="12">Último ano</option>
          </select>
        </div>

        <div class="header-wrapper">
            <div class="column-header">Pedidos de Doação</div>
        </div>

        <div class="main-grid">

            <div id="col1"></div>

            <div id="col2"></div>

        </div>
      </div>
    `;

    // Função auxiliar para Estrelas
    function getStars(count) {
        let starsHtml = '';
        for(let i=0; i<5; i++) starsHtml += i < count ? '★' : '☆';
        return starsHtml;
    }

    // Função Criar Card
    function createCard(req) {
      const card = document.createElement("article");
      card.classList.add("req-card");

      // Caminho da imagem
      const imagePath = `../Pagina-Doacoes/imagensdoacoes/${req.img}`;

      // Monta o conteúdo do Rodapé Cinza
      let footerContent = '';
      if (req.col === 1) {
          // Coluna 1: Chat e Status
          footerContent = `
              <div class="footer-item">
                  <strong>${req.footerData.label}</strong> ${req.footerData.name}
              </div>
              <div class="footer-item">Entrega: ${req.footerData.date}</div>
              <div class="footer-item">
                  <button class="btn-chat">Chat</button>
              </div>
          `;
      } else {
          // Coluna 2: Avaliação
          footerContent = `
              <div class="footer-item">
                  <strong>${req.footerData.label}</strong> ${req.footerData.name}
              </div>
              <div class="footer-item">Entrega: ${req.footerData.date}</div>
              <div class="footer-item">
                 <button class="btn-chat">${req.footerData.action}</button>
              </div>
          `;
      }

      card.innerHTML = `
        <div class="avatar-container">
             <img src="${imagePath}"
                  class="avatar-img"
                  onerror="this.style.display='none'; this.parentNode.style.backgroundColor='#eee'">
        </div>

        <div class="req-body">
          <div class="card-header-top">
            <span class="chip">${req.chip}</span>
            <span class="location-text">${req.location}</span>
          </div>

          <h3 class="req-title">${req.title}</h3>

          <p class="req-desc">${req.desc}</p>

          <div class="req-meta">
            ${req.meta.map(m => `<span>${m}</span>`).join("")}
          </div>

          <div class="card-footer">
            ${footerContent}
          </div>
        </div>
      `;
      return card;
    }

    requests.forEach(req => {
      const col = document.getElementById(`col${req.col}`);
      if (col) col.appendChild(createCard(req));
    });


     const target = document.getElementById('toChat');

    document.querySelectorAll(".btn-chat").forEach(btn => {
        btn.addEventListener("click", () => {
            activateSection(target);
        });
    });

  }
});
