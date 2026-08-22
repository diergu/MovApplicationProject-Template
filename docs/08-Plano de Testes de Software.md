# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="02-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="04-Projeto de Interface.md"> Projeto de Interface</a>

Os testes devem ser executados com a aplicação servida por um servidor HTTP estático e com um navegador atualizado. Como o código de origem utiliza dados de demonstração e `localStorage`, recomenda-se limpar os dados do site antes de repetir um cenário desde o estado inicial.

## CT-01 — Cadastro e login

| Campo | Descrição |
|-------|-----------|
| Requisitos associados | RF-01 e RF-02 |
| Objetivo | Verificar o cadastro com CPF ou CNPJ e o acesso com e-mail e senha. |
| Passos | 1. Abrir `src/index.html`.<br>2. Abrir o cadastro.<br>3. Informar CPF ou CNPJ válido, e-mail e senha.<br>4. Confirmar o cadastro.<br>5. Efetuar login com as credenciais cadastradas. |
| Critérios de êxito | O cadastro deve ser confirmado, duplicidades devem ser recusadas e o login válido deve abrir a página principal. |
| Responsável | Equipe de desenvolvimento |

## CT-02 — Visualização e filtragem de pedidos

| Campo | Descrição |
|-------|-----------|
| Requisitos associados | RF-08, RF-09 e RF-10 |
| Objetivo | Garantir que os pedidos sejam exibidos e possam ser consultados pelos controles disponíveis. |
| Passos | 1. Acessar a página principal.<br>2. Abrir a seção de doações.<br>3. Verificar os cartões de pedidos.<br>4. Alterar o filtro de período.<br>5. Acionar o chat de um cartão. |
| Critérios de êxito | Os cartões devem exibir categoria, descrição, localização e responsável; a ação de chat deve abrir a área de conversa. |
| Responsável | Elizabeth França Vaz dos Santos |

## CT-03 — Registro de item

| Campo | Descrição |
|-------|-----------|
| Requisitos associados | RF-04 e RF-05 |
| Objetivo | Validar o registro de um item ou necessidade e sua persistência local. |
| Passos | 1. Abrir a seção de registro.<br>2. Preencher título, categoria, quantidade, local e descrição.<br>3. Confirmar o formulário.<br>4. Recarregar a página. |
| Critérios de êxito | A aplicação deve confirmar o cadastro, limpar o formulário e manter o registro salvo após o recarregamento. |
| Responsável | Helena Bretas |

## CT-04 — Busca de locais de doação

| Campo | Descrição |
|-------|-----------|
| Requisitos associados | RF-10 e RF-11 |
| Objetivo | Verificar a busca e os filtros de localização e categoria. |
| Passos | 1. Abrir a área de locais.<br>2. Informar uma cidade, bairro ou item.<br>3. Selecionar um tipo de doação.<br>4. Executar a busca.<br>5. Aplicar um filtro adicional nos resultados. |
| Critérios de êxito | A lista deve mostrar somente registros compatíveis e informar claramente quando nenhum local for encontrado. |
| Responsável | Gildney Chaves Neto e Helena Bretas |

## CT-05 — Histórico de doações

| Campo | Descrição |
|-------|-----------|
| Requisito associado | RF-15 |
| Objetivo | Validar a apresentação do histórico e dos estados das doações. |
| Passos | 1. Abrir a seção Histórico.<br>2. Verificar as colunas de data, item, quantidade, doador e status.<br>3. Conferir a diferenciação visual dos estados. |
| Critérios de êxito | A tabela deve ser legível e cada registro deve exibir suas informações e situação correspondente. |
| Responsável | Gildney Chaves Neto e Geovana Vitória Andrade Silva |

## CT-06 — Chat

| Campo | Descrição |
|-------|-----------|
| Requisito associado | RF-12 |
| Objetivo | Testar a seleção de contatos e o envio local de mensagens. |
| Passos | 1. Abrir a seção Chat.<br>2. Selecionar um contato.<br>3. Digitar e enviar uma mensagem.<br>4. Repetir o fluxo em uma largura de tela de até 600 pixels. |
| Critérios de êxito | A mensagem deve aparecer na conversa ativa e a navegação móvel deve alternar entre contatos e conversa. |
| Responsável | Geovana Vitória Andrade Silva e Elizabeth França Vaz dos Santos |

## CT-07 — Feedback

| Campo | Descrição |
|-------|-----------|
| Requisito associado | RF-17 |
| Objetivo | Validar o envio e a persistência de avaliações. |
| Passos | 1. Abrir a seção Feedback.<br>2. Informar comentário e nota.<br>3. Enviar o formulário.<br>4. Recarregar a página. |
| Critérios de êxito | A aplicação deve confirmar o envio e manter o feedback visível após o recarregamento. |
| Responsável | Geovana Vitória Andrade Silva |
