# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="04-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="08-Plano de Testes de Software.md"> Plano de Testes de Software</a>

O repositório de origem fornece um plano de testes, mas não apresenta evidências de execução, capturas, vídeos ou resultados preenchidos. Para preservar a rastreabilidade sem declarar testes não realizados, os casos permanecem com execução pendente.

| Caso de teste | Requisitos | Resultado | Evidência |
|---------------|------------|-----------|-----------|
| CT-01 — Cadastro e login | RF-01 e RF-02 | Pendente de execução | Não fornecida |
| CT-02 — Visualização e filtragem de pedidos | RF-08, RF-09 e RF-10 | Pendente de execução | Não fornecida |
| CT-03 — Registro de item | RF-04 e RF-05 | Pendente de execução | Não fornecida |
| CT-04 — Busca de locais de doação | RF-10 e RF-11 | Pendente de execução | Não fornecida |
| CT-05 — Histórico de doações | RF-15 | Pendente de execução | Não fornecida |
| CT-06 — Chat | RF-12 | Pendente de execução | Não fornecida |
| CT-07 — Feedback | RF-17 | Pendente de execução | Não fornecida |

## Relatório de testes de software

Não é possível concluir quais casos foram aprovados ou reprovados sem uma execução controlada e suas evidências. Após os testes, esta seção deverá registrar:

- ambiente e navegador utilizados;
- resultado obtido em cada caso;
- captura ou vídeo da execução;
- falhas encontradas e impacto no usuário;
- correções propostas e nova verificação.

A análise estática do código identificou previamente que o cadastro armazena senhas em texto simples no `localStorage`, comportamento incompatível com o RNF-08. Essa constatação não substitui a execução dos casos de teste.
