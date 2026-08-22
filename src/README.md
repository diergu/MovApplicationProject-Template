# Instruções de utilização

## Instalação do Site

O Bem Próximo é uma aplicação estática desenvolvida com HTML, CSS e JavaScript e não possui dependências de instalação.

Para executar localmente:

1. disponibilize o diretório `src` em um servidor HTTP estático;
2. abra `src/index.html` pelo endereço fornecido pelo servidor;
3. realize o cadastro e o login para acessar a página principal.

Exemplos de servidores compatíveis incluem a extensão Live Server, `python -m http.server` e plataformas como GitHub Pages, Vercel, Render ou Netlify. Abrir os arquivos diretamente por `file://` pode causar diferenças de comportamento entre navegadores.

## Estrutura do código

| Caminho | Conteúdo |
|---------|----------|
| `index.html`, `index.css`, `index.js` | Página inicial, cadastro e navegação de entrada |
| `Pagina-Principal/` | Área principal e integração das seções |
| `Pagina-Cadastro/` | Cadastro, validação de CPF/CNPJ e login |
| `Pagina-Doacoes/` | Cartões de pedidos de doação |
| `Pagina-Itenscadastro/` | Registro de itens e necessidades |
| `Pagina-Locais/` e `resultadobusca/` | Busca e filtros de locais |
| `Pagina-Chat/` | Conversas simuladas |
| `Pagina-Historico/` | Histórico de doações |
| `Pagina-feedback/` | Avaliações e comentários |

## Persistência local

O protótipo usa `localStorage` para manter usuários, sessão, pedidos e feedbacks. Os dados ficam somente no navegador utilizado. A implementação de origem armazena senhas em texto simples e deve ser usada apenas para demonstração local.

## Histórico de versões

### [1.0.0] — 23/11/2025

#### Adicionado

- cadastro e login local;
- visualização e registro de pedidos;
- busca e filtros de locais;
- chat simulado;
- histórico de doações;
- avaliações e feedbacks;
- layout responsivo.
