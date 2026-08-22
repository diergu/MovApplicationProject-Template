// --- VARIÁVEIS DO FORMULÁRIO ---

const FORM_DOAR_ITEM = document.getElementById('form-doar-item');
const SELECT_CATEGORIA = document.getElementById('doar-categoria');
const OUTRA_CATEGORIA_FIELD = document.getElementById('outra-categoria-field');
const OUTRA_CATEGORIA_INPUT = document.getElementById('outra-categoria-input');

// Área dos cards (se existir na página de doações)
const REQUESTS_GRID = document.querySelector('.requests-grid');
const CHAVE_PEDIDOS = 'pedidosDoacao';


// --- CONTROLE DO CAMPO "OUTROS" ---
function handleCategoriaChange() {
    if (!SELECT_CATEGORIA) return;

    if (SELECT_CATEGORIA.value === 'Outros') {
        OUTRA_CATEGORIA_FIELD.style.display = 'flex';
        OUTRA_CATEGORIA_INPUT.setAttribute('required', 'required');
    } else {
        OUTRA_CATEGORIA_FIELD.style.display = 'none';
        OUTRA_CATEGORIA_INPUT.removeAttribute('required');
        OUTRA_CATEGORIA_INPUT.value = '';
    }
}


// --- RENDERIZAÇÃO DO CARD ---
function renderizarCardPedido(item) {
    if (!REQUESTS_GRID) return;

    const categoriaExibida = item.categoria === 'Outros'
        ? item.categoriaEspec
        : item.categoria;

    const novoCard = document.createElement('article');
    novoCard.classList.add('req-card');

    novoCard.innerHTML = `
        <div class="avatar" aria-hidden="true"></div>
        <div class="req-body">
            <span class="chip">${categoriaExibida}</span>
            <h3 class="req-title">${item.titulo}</h3>

            <div class="req-lines">
                <div class="line w85"></div>
                <div class="line w70"></div>
                <div class="line w60"></div>
            </div>

            <div class="req-meta">
                <span>Quantidade: ${item.quantidade}</span>
                <span>Local: ${item.local}</span>
            </div>
        </div>
    `;

    const primeiraColuna = REQUESTS_GRID.querySelector('.col:first-child');
    if (primeiraColuna) {
        primeiraColuna.prepend(novoCard);
    }
}


// --- CARREGAR PEDIDOS SALVOS ---
function carregarPedidosSalvos() {
    const pedidosSalvos = JSON.parse(localStorage.getItem(CHAVE_PEDIDOS)) || [];

    pedidosSalvos.forEach(pedido => {
        renderizarCardPedido(pedido);
    });
}


// --- ENVIO DO FORMULÁRIO ---
function handleDoarItem(event) {
    event.preventDefault();

    const categoriaSelecionada = SELECT_CATEGORIA.value;
    let categoriaFinal = categoriaSelecionada;

    if (categoriaSelecionada === 'Outros') {
        categoriaFinal = OUTRA_CATEGORIA_INPUT.value.trim();

        if (!categoriaFinal) {
            alert("Por favor, especifique a categoria.");
            return;
        }
    }

    const novoPedido = {
        id: Date.now(),
        titulo: document.getElementById('doar-titulo').value,
        categoria: categoriaSelecionada,
        categoriaEspec: categoriaFinal,
        quantidade: document.getElementById('doar-quantidade').value,
        local: document.getElementById('doar-local').value,
        descricao: document.getElementById('doar-descricao').value,
    };

    // Salvar no localStorage
    const pedidosAtuais = JSON.parse(localStorage.getItem(CHAVE_PEDIDOS)) || [];
    pedidosAtuais.unshift(novoPedido);
    localStorage.setItem(CHAVE_PEDIDOS, JSON.stringify(pedidosAtuais));

    // Atualizar interface
    renderizarCardPedido(novoPedido);

    alert(`Item "${novoPedido.titulo}" registrado com sucesso!`);

    // Limpar formulário
    FORM_DOAR_ITEM.reset();
    handleCategoriaChange();

    // Trocar para a aba Doações (usando a função que já está em script.js)
    const botaoDoacoes = document.getElementById('toDoações');
    if (botaoDoacoes && typeof window.activateSection === 'function') {
        window.activateSection(botaoDoacoes);
    }
}


// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    if (SELECT_CATEGORIA) {
        SELECT_CATEGORIA.addEventListener('change', handleCategoriaChange);
        handleCategoriaChange();
    }

    if (FORM_DOAR_ITEM) {
        FORM_DOAR_ITEM.addEventListener('submit', handleDoarItem);
    }

    carregarPedidosSalvos();
});
