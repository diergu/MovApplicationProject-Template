document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const requests = [
    { col: 1, chip: "Alimentos", title: "Cestas básicas para famílias do Bairro Esperança",
      lines: ["w85", "w70", "w60"], meta: ["Quantidade: 25", "Entrega: Gamboa, RJ"] },

    { col: 1, chip: "Brinquedos", title: "Kits de brinquedos para ação do Dia das Crianças",
      lines: ["w85", "w60", "w70"], meta: ["Idade: 4–10", "Meta: 60 kits"] },

    { col: 1, chip: "Roupas", title: "Agasalhos e calçados para abrigo municipal",
      lines: ["w85", "w70", "w60"], meta: ["Tamanhos: P ao GG", "Urgente"] },

    { col: 2, chip: "Alimentos", title: "Leite em pó e fraldas para creche comunitária",
      lines: ["w70", "w85", "w60"], meta: ["Leite: 90 latas", "Fraldas: tam. M e G"] },

    { col: 2, chip: "Brinquedos", title: "Jogos de tabuleiro para sala de convivência",
      lines: ["w85", "w70", "w60"], meta: ["Meta: 25 jogos", "Preferência: usados em bom estado"] },

    { col: 2, chip: "Roupas", title: "Roupas infantis para campanha de inverno",
      lines: ["w70", "w85", "w60"], meta: ["0–12 anos", "Meta: 200 peças"] },
  ];

  app.innerHTML = `
    <main class="wrap">
      <div class="section-title">
        <h2>Pedidos de doação</h2>
      </div>

      <div class="requests-grid">
        <div class="col" id="col1"></div>
        <div class="col" id="col2"></div>
      </div>
    </main>

    <footer style="margin-top:40px;border-top:1px solid var(--line);background:#fff;">
      <div class="wrap" style="padding:18px 20px;">
        <p style="margin:0;color:#71717a;">2025 - Plataforma de doação - todos os direitos reservados</p>
      </div>
    </footer>
  `;

  function createCard(req) {
    const card = document.createElement("article");
    card.classList.add("req-card");

    card.innerHTML = `
      <div class="avatar" aria-hidden="true"></div>

      <div class="req-body">
        <span class="chip">${req.chip}</span>

        <h3 class="req-title">${req.title}</h3>

        <div class="req-lines">
          ${req.lines.map(l => `<div class="line ${l}"></div>`).join("")}
        </div>

        <div class="req-meta">
          ${req.meta.map(m => `<span>${m}</span>`).join("")}
        </div>
      </div>
    `;

    return card;
  }

  requests.forEach(req => {
    document.getElementById(`col${req.col}`).appendChild(createCard(req));
  });
});
