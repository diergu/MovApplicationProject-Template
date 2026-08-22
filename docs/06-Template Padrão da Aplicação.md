# Template Padrão da Aplicação

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>, <a href="03-Metodologia.md"> Metodologia</a>

O Bem Próximo utiliza uma identidade visual clara e acolhedora, baseada em azul, laranja, branco e azul-escuro. O padrão é aplicado à página inicial e aos módulos de cadastro, doações, busca, locais, chat, histórico, registro de itens e feedback.

## Identidade visual

| Elemento | Valor predominante | Aplicação |
|----------|--------------------|-----------|
| Azul-claro | `#c7dbe7` e variações | Fundos, linhas e áreas de destaque |
| Laranja-pastel | `#ffd6a5` | Etiquetas e realces |
| Laranja | `#ffa559` | Botões e ações principais |
| Azul-escuro | `#21364a` | Navegação e textos de maior contraste |
| Branco | `#ffffff` | Cartões e superfícies de conteúdo |

As fontes utilizadas incluem Poppins, Inter, Montserrat e Playfair Display, carregadas pelo Google Fonts em diferentes telas.

## Estrutura das páginas

O layout padrão possui:

- cabeçalho com marca e navegação principal;
- conteúdo organizado em seções ou cartões;
- botões de ação com destaque em laranja;
- etiquetas para categorias e estados;
- formulários com campos identificados;
- ajustes responsivos para telas menores.

![Tela principal do Bem Próximo](img/4.pedidos.jpg)

## Responsividade e componentes

As folhas de estilo utilizam grades, flexbox e media queries para reorganizar os elementos. Cards, filtros, formulários, menus, modais e botões mantêm padrões visuais semelhantes entre as páginas. O chat inclui um fluxo específico para telas de até 600 pixels, alternando entre a lista de contatos e a conversa selecionada.
