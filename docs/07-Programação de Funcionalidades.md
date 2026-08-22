# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>, <a href="03-Metodologia.md"> Metodologia</a>, <a href="05-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Esta seção relaciona as funcionalidades presentes no código de origem aos requisitos consolidados do projeto.

## Cadastro e login

![Cadastro e login](img/_1_cadastro.jpg)

**Requisitos atendidos:** RF-01 e RF-02.

**Artefatos:** `src/index.html`, `src/index.css` e `src/Pagina-Cadastro/paginaCadasto.js`.

O formulário valida campos obrigatórios, CPF ou CNPJ, confirmação de senha e duplicidade de e-mail. Os usuários e a sessão são armazenados localmente no navegador. Essa persistência é adequada somente para demonstração e não atende ao requisito de segurança de credenciais.

**Acesso:** abrir `src/index.html`, selecionar a opção de cadastro e alternar para login quando necessário.

## Visualização de pedidos de doação

![Pedidos de doação](img/4.pedidos.jpg)

**Requisitos atendidos:** RF-08 e RF-09.

**Artefatos:** `src/Pagina-Principal/principal.html`, `src/Pagina-Doacoes/doacoes.css` e `src/Pagina-Doacoes/doacoes.js`.

Os pedidos são renderizados em cartões contendo categoria, localização, descrição, quantidade, responsável e ação de contato.

**Acesso:** após o login, abrir a seção de doações na página principal.

## Registro de itens e necessidades

![Registro de itens](img/3.registro.jpg)

**Requisitos atendidos:** RF-04 e RF-05.

**Artefatos:** `src/Pagina-Principal/principal.html`, `src/Pagina-Itenscadastro/itens.css` e `src/Pagina-Itenscadastro/itens.js`.

O formulário registra título, categoria, quantidade, local e descrição. Os registros são persistidos na chave `pedidosDoacao` do `localStorage` e adicionados à interface.

**Responsável informado no plano de testes:** Helena Bretas.

## Busca, filtros e locais de doação

![Busca local e filtros](img/9.Busca.jpg)

**Requisitos atendidos:** RF-10 e RF-11.

**Artefatos:** `src/Pagina-Locais/pagina-Locais.css`, `src/Pagina-Locais/pagina-Locais.js` e `src/resultadobusca/`.

A busca usa dados de demonstração e permite filtrar por cidade, bairro, item e tipo, abrangendo alimentos, roupas e produtos de higiene.

**Responsáveis informados no plano de testes:** Gildney Chaves Neto e Helena Bretas.

## Comunicação entre usuários

![Chat](img/5.chat.jpg)

**Requisito atendido:** RF-12.

**Artefatos:** `src/Pagina-Chat/paginaChat.css`, `src/Pagina-Chat/paginaChat.js` e `src/Pagina-Chat/imagens/`.

O chat permite selecionar contatos e enviar mensagens em uma simulação local. As mensagens existem apenas durante a sessão da página e não são transmitidas para outro usuário.

**Responsáveis informados no plano de testes:** Geovana Vitória Andrade Silva e Elizabeth França Vaz dos Santos.

## Histórico de doações

![Histórico](img/6.historico.jpg)

**Requisito atendido:** RF-15.

**Artefatos:** `src/Pagina-Historico/historico.html` e `src/Pagina-Historico/historico.css`.

A tela apresenta uma tabela com data, item, quantidade, doador e situação da doação.

**Responsáveis informados no plano de testes:** Gildney Chaves Neto e Geovana Vitória Andrade Silva.

## Avaliações e feedbacks

![Feedback](img/7.feedback.jpg)

**Requisito atendido:** RF-17.

**Artefatos:** `src/Pagina-feedback/feedback.css` e `src/Pagina-feedback/feedback.js`.

O usuário informa um comentário e uma nota. Os dados são mantidos na chave `feedbacks` do `localStorage` e exibidos na própria tela.

**Responsável informado no plano de testes:** Geovana Vitória Andrade Silva.
