const locais = [
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Alimentos", item: "Arroz", descricao: "Pacotes de 1kg fechados" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Alimentos", item: "Feijão", descricao: "Grãos em bom estado" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Alimentos", item: "Macarrão", descricao: "Pacotes lacrados" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Roupas", item: "Blusa", descricao: "Roupas em bom estado" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Roupas", item: "Agasalhos", descricao: "Casacos e moletons" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Higiene", item: "Pasta De Dente", descricao: "Unidades novas" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Higiene", item: "Escova", descricao: "Escovas lacradas" },
  { cidade: "Belo Horizonte", bairro: "Centro", tipo: "Higiene", item: "Shampoo", descricao: "Frascos fechados" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Roupas", item: "Blusa", descricao: "Camisetas em bom estado" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Roupas", item: "Agasalhos", descricao: "Roupas de inverno" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Roupas", item: "Calças", descricao: "Calças jeans e moletom" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Alimentos", item: "Arroz", descricao: "Pacotes de 1kg" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Alimentos", item: "Feijão", descricao: "Fechado e dentro da validade" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Higiene", item: "Pasta De Dente", descricao: "Produtos novos" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Higiene", item: "Shampoo", descricao: "Frascos lacrados" },
  { cidade: "Belo Horizonte", bairro: "Savassi", tipo: "Higiene", item: "Condicionador", descricao: "Produtos novos" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Alimentos", item: "Macarrão", descricao: "Massas secas" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Alimentos", item: "Arroz", descricao: "Pacotes fechados" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Alimentos", item: "Feijão", descricao: "Grãos selecionados" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Roupas", item: "Blusa", descricao: "Roupas em bom estado" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Roupas", item: "Calças", descricao: "Calças doadas" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Higiene", item: "Pasta De Dente", descricao: "Caixas fechadas" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Higiene", item: "Escova", descricao: "Novas e embaladas" },
  { cidade: "Belo Horizonte", bairro: "Venda Nova", tipo: "Higiene", item: "Shampoo", descricao: "Frascos novos" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Alimentos", item: "Arroz", descricao: "Pacotes de 1kg" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Alimentos", item: "Feijão", descricao: "Fechado e limpo" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Alimentos", item: "Macarrão", descricao: "Massas secas" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Roupas", item: "Blusa", descricao: "Em bom estado" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Roupas", item: "Agasalhos", descricao: "Casacos e jaquetas" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Higiene", item: "Pasta De Dente", descricao: "Produtos novos" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Higiene", item: "Shampoo", descricao: "Frascos lacrados" },
  { cidade: "São Paulo", bairro: "Sé", tipo: "Higiene", item: "Escova", descricao: "Embaladas" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Roupas", item: "Blusa", descricao: "Roupas doadas" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Roupas", item: "Agasalhos", descricao: "Jaquetas em bom estado" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Roupas", item: "Calças", descricao: "Calças variadas" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Alimentos", item: "Arroz", descricao: "Pacotes fechados" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Alimentos", item: "Feijão", descricao: "Grãos selecionados" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Higiene", item: "Pasta De Dente", descricao: "Novos e embalados" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Higiene", item: "Escova", descricao: "Lacradas" },
  { cidade: "São Paulo", bairro: "Vila Mariana", tipo: "Higiene", item: "Condicionador", descricao: "Produtos novos" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Alimentos", item: "Macarrão", descricao: "Pacotes fechados" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Alimentos", item: "Arroz", descricao: "1kg lacrado" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Alimentos", item: "Feijão", descricao: "Feijão carioca" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Roupas", item: "Blusa", descricao: "Roupas em bom estado" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Roupas", item: "Calças", descricao: "Jeans e moletom" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Higiene", item: "Pasta De Dente", descricao: "Produtos fechados" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Higiene", item: "Shampoo", descricao: "Frascos lacrados" },
  { cidade: "São Paulo", bairro: "Moema", tipo: "Higiene", item: "Escova", descricao: "Embaladas" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Alimentos", item: "Arroz", descricao: "Não perecíveis" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Alimentos", item: "Feijão", descricao: "Pacotes fechados" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Alimentos", item: "Macarrão", descricao: "Dentro da validade" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Roupas", item: "Blusa", descricao: "Em bom estado" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Roupas", item: "Agasalhos", descricao: "Jaquetas e casacos" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Higiene", item: "Pasta De Dente", descricao: "Novos" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Higiene", item: "Escova", descricao: "Embaladas" },
  { cidade: "Rio De Janeiro", bairro: "Centro", tipo: "Higiene", item: "Shampoo", descricao: "Frascos lacrados" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Roupas", item: "Blusa", descricao: "Roupas doadas" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Roupas", item: "Agasalhos", descricao: "Moletons e casacos" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Roupas", item: "Calças", descricao: "Jeans e moletom" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Alimentos", item: "Arroz", descricao: "Pacotes fechados" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Alimentos", item: "Feijão", descricao: "Grãos selecionados" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Higiene", item: "Pasta De Dente", descricao: "Produtos novos" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Higiene", item: "Escova", descricao: "Lacradas" },
  { cidade: "Rio De Janeiro", bairro: "Copacabana", tipo: "Higiene", item: "Condicionador", descricao: "Novo" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Alimentos", item: "Macarrão", descricao: "Massas secas" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Alimentos", item: "Arroz", descricao: "1kg lacrado" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Alimentos", item: "Feijão", descricao: "Fechado" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Roupas", item: "Blusa", descricao: "Roupas em bom estado" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Roupas", item: "Agasalhos", descricao: "Casacos e jaquetas" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Higiene", item: "Pasta De Dente", descricao: "Produtos novos" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Higiene", item: "Shampoo", descricao: "Frascos fechados" },
  { cidade: "Rio De Janeiro", bairro: "Tijuca", tipo: "Higiene", item: "Escova", descricao: "Embaladas" }
];

// Elementos principais
const resultados = document.getElementById("resultados");
const formBusca = document.getElementById("formBusca");
const filtroFlutuante = document.getElementById("filtroFlutuante");
const btnFiltro = document.getElementById("btnFiltro");

// Listas de controle
let listaAtual = [];
let listaBase = [];

// ========= FUNÇÃO: Exibir resultados =========
function exibirResultados(lista) {
  listaAtual = lista;
  resultados.innerHTML = "";

  if (lista.length === 0) {
    filtroFlutuante.classList.remove("aberto");
    resultados.innerHTML = `
      <p style="color:#c0392b; font-weight:bold;">
        ❌ Não foi possível encontrar um local nessa região.
      </p>`;
    return;
  }

  // Renderizar resultados
  lista.forEach(l => {
    resultados.innerHTML += `
      <div class="local-item">
        <strong>${l.cidade}</strong><br>
        Bairro: ${l.bairro}<br>
        Tipo: ${l.tipo}<br>
        Item: ${l.item}<br>
        Descrição: ${l.descricao}
      </div>
    `;
  });
}

// ========= FUNÇÃO: Criar / Atualizar lista flutuante =========
function atualizarFiltroFlutuante(lista) {
  const itens = new Set();
  const bairros = new Set();
  const tipos = new Set();

  lista.forEach(l => {
    itens.add(l.item);
    bairros.add(l.bairro);
    tipos.add(l.tipo);
  });

  let html = "";

  html += `<div class="titulo">=-=-=-= ITENS =-=-=-=</div>`;
  itens.forEach(i => {
    html += `<div class="filtro-opcao" data-valor="${i}">${i}</div>`;
  });

  html += `<div class="titulo">=-=-=-= BAIRROS =-=-=-=</div>`;
  bairros.forEach(b => {
    html += `<div class="filtro-opcao" data-valor="${b}">${b}</div>`;
  });

  html += `<div class="titulo">=-=-=-= TIPOS =-=-=-=</div>`;
  tipos.forEach(t => {
    html += `<div class="filtro-opcao" data-valor="${t}">${t}</div>`;
  });

  filtroFlutuante.innerHTML = html;
  filtroFlutuante.classList.remove("aberto");
}

// ========= CLIQUE NAS OPÇÕES =========
filtroFlutuante.addEventListener("click", (e) => {
  const opcao = e.target.closest(".filtro-opcao");
  if (!opcao) return;

  const valor = opcao.dataset.valor;

  const filtrados = listaBase.filter(l =>
    l.item === valor ||
    l.bairro === valor ||
    l.tipo === valor
  );

  exibirResultados(filtrados);
  atualizarFiltroFlutuante(filtrados);
});

// ========= BOTÃO BUSCAR =========
formBusca.addEventListener("submit", (e) => {
  e.preventDefault();

  const termo = document.getElementById("termo").value.toLowerCase();
  const tipo = document.getElementById("tipo").value.toLowerCase();

  const filtrados = locais.filter(l =>
    (
      l.cidade.toLowerCase().includes(termo) ||
      l.bairro.toLowerCase().includes(termo) ||
      l.item.toLowerCase().includes(termo)
    ) &&
    (!tipo || l.tipo.toLowerCase() === tipo)
  );

  listaBase = filtrados;

  exibirResultados(filtrados);
  atualizarFiltroFlutuante(filtrados);

  // Mostrar botão após busca
  btnFiltro.style.display = "inline-block";
});

// ========= ABRIR / FECHAR LISTA =========
btnFiltro.addEventListener("click", (e) => {
  e.stopPropagation();
  filtroFlutuante.classList.toggle("aberto");
});

// ========= FECHAR AO CLICAR FORA =========
document.addEventListener("click", (e) => {
  if (!e.target.closest(".filtro-container")) {
    filtroFlutuante.classList.remove("aberto");
  }
});

// Iniciar botão escondido
btnFiltro.style.display = "none";
