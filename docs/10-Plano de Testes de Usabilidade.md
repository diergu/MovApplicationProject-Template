# Plano de Testes de Usabilidade

Os testes de usabilidade avaliarão se doadores e donatários conseguem concluir as tarefas essenciais do Bem Próximo com clareza, eficiência e pouca ou nenhuma assistência.

## Definição dos objetivos

- verificar se o cadastro e o login são compreensíveis;
- avaliar se os usuários encontram pedidos e locais de doação;
- identificar dificuldades no registro de itens;
- validar a compreensão do chat, do histórico e do feedback;
- observar consistência visual, responsividade e acessibilidade básica;
- coletar a percepção dos participantes sobre confiança e facilidade de uso.

## Seleção dos participantes

Recomenda-se selecionar ao menos cinco participantes representativos dos perfis definidos na especificação:

- pessoa física doadora;
- representante de empresa doadora;
- representante de ONG ou instituição religiosa;
- pessoa donatária;
- participante com pouca familiaridade com tecnologia.

Não devem ser registrados dados pessoais sensíveis. Cada voluntário será identificado apenas por um código, como `U01`.

## Definição de cenários de teste

### Cenário 1 — Criar conta e entrar

**Objetivo:** avaliar clareza dos formulários e mensagens de validação.

**Contexto:** um novo usuário deseja acessar a plataforma.

**Tarefa:** cadastrar CPF ou CNPJ, e-mail e senha e depois realizar login.

**Critério de sucesso:** concluir o acesso sem assistência e compreender eventuais mensagens de erro.

### Cenário 2 — Encontrar uma necessidade

**Objetivo:** avaliar navegação, leitura dos cartões e filtros.

**Contexto:** um doador possui um item e procura alguém que necessite dele.

**Tarefa:** localizar um pedido compatível e abrir a opção de contato.

**Critério de sucesso:** encontrar um pedido adequado e identificar responsável, local e forma de contato.

### Cenário 3 — Registrar um item ou necessidade

**Objetivo:** avaliar o formulário de registro.

**Contexto:** um usuário deseja publicar um item disponível ou necessário.

**Tarefa:** preencher e enviar o formulário de registro.

**Critério de sucesso:** concluir o cadastro, compreender a confirmação e encontrar o novo registro na interface.

### Cenário 4 — Buscar um local de doação

**Objetivo:** avaliar a busca por texto, categoria e localização.

**Contexto:** um doador procura um ponto que aceite determinado tipo de item.

**Tarefa:** informar uma localidade, selecionar uma categoria e refinar os resultados.

**Critério de sucesso:** obter resultados compatíveis ou compreender a mensagem de ausência de locais.

### Cenário 5 — Consultar histórico e enviar feedback

**Objetivo:** avaliar a compreensão dos estados e do formulário de avaliação.

**Contexto:** após uma interação, o usuário quer consultar seu histórico e avaliar a experiência.

**Tarefa:** localizar uma doação no histórico e enviar comentário e nota.

**Critério de sucesso:** identificar corretamente o estado da doação e receber confirmação do feedback.

## Métodos de coleta de dados

Para cada cenário serão registrados:

- tempo total de conclusão;
- quantidade aproximada de cliques;
- conclusão ou abandono da tarefa;
- erros e solicitações de ajuda;
- comentários espontâneos;
- resposta a um questionário breve de satisfação.

As observações qualitativas serão agrupadas por gravidade: crítica, moderada ou leve.
