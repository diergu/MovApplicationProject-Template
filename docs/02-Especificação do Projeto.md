# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

| EU COMO... `PERSONA` | QUERO/PRECISO... `FUNCIONALIDADE` | PARA... `MOTIVO/VALOR` |
|----------------------|-----------------------------------|------------------------|
| Donatário — instituição religiosa (CNPJ) | Criar uma campanha de arrecadação de agasalhos, informando quais itens são necessários, quantidades, tamanhos aceitos, prazo da campanha e local ou forma de entrega. | Divulgar uma necessidade específica à comunidade, acompanhar o que já foi arrecadado e evitar receber itens em excesso ou que não atendam à campanha. |
| Donatário — ONG (CNPJ) | Cadastrar uma lista atualizada de itens necessários, indicando prioridade, quantidade e se a necessidade é pontual ou recorrente. | Permitir que potenciais doadores saibam exatamente do que a instituição precisa naquele momento e direcionem suas doações de forma mais eficiente. |
| Donatário — ONG ou instituição religiosa (CNPJ) | Disponibilizar para outras instituições itens recebidos em quantidade superior à minha necessidade. | Evitar que doações fiquem paradas ou sejam desperdiçadas e permitir que outra instituição que esteja precisando desses itens possa utilizá-los. |
| Doador (CPF) | Informar quais itens tenho disponíveis para doação e encontrar instituições próximas que estejam precisando especificamente desses itens. | Destinar objetos em bom estado para quem realmente necessita, sem precisar procurar individualmente instituições e entrar em contato com cada uma delas. |
| Doador (CNPJ) | Cadastrar lotes de produtos excedentes ou próximos da retirada de estoque e identificar instituições interessadas em recebê-los. | Evitar desperdício, liberar espaço de armazenamento e direcionar produtos utilizáveis para organizações que possam aproveitá-los. |
| Doador ou donatário | Poder entrar em contato com a outra parte interessada na doação. | Combinar informações necessárias para sua realização, como disponibilidade, retirada e entrega dos itens. |
| Doador ou donatário | Acompanhar minhas doações e solicitações e consultar as que já foram concluídas. | Saber a situação das negociações atuais e manter um registro das doações que realizei ou recebi. |
| Usuário do aplicativo | Reportar uma solicitação ou oferta que considere suspeita, inadequada ou irregular. | Contribuir para que conteúdos incompatíveis com a finalidade da plataforma sejam identificados e analisados. |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

| ID | Nome | Descrição | Prioridade |
|----|------|-----------|------------|
| RF-01 | Cadastro de usuários | O sistema deve permitir o cadastro de usuários, diferenciando doadores, donatários, ONGs e instituições religiosas. | Alta |
| RF-02 | Confirmação e autenticação | O sistema deve permitir confirmação de conta por e-mail e login com e-mail e senha. | Alta |
| RF-03 | Gerenciamento de conta | O sistema deve permitir que o usuário visualize, edite seus dados cadastrais, altere senha e solicite exclusão da conta. | Média |
| RF-04 | Registro de necessidades | O sistema deve permitir que o donatário cadastre itens necessários, informando descrição, categoria, quantidade, prioridade e recorrência. | Alta |
| RF-05 | Registro de itens disponíveis | O sistema deve permitir que o doador registre itens, produtos ou serviços disponíveis para doação, informando descrição, categoria e quantidade. | Alta |
| RF-06 | Campanhas de arrecadação | O sistema deve permitir que o donatário crie campanhas de arrecadação, informando título, descrição, período, itens necessários e forma de entrega. | Média |
| RF-07 | Edição e cancelamento | O sistema deve permitir que o responsável edite ou cancele solicitações, campanhas ou ofertas criadas por ele. | Média |
| RF-08 | Detalhes da solicitação ou oferta | O sistema deve exibir detalhes de solicitações, campanhas e ofertas, incluindo item, responsável, localização, quantidade e situação atual. | Alta |
| RF-09 | Visualização de doações | O sistema deve permitir visualizar solicitações, campanhas, ofertas e instituições disponíveis para doação. | Alta |
| RF-10 | Pesquisa, filtros e ordenação | O sistema deve permitir pesquisar, filtrar e ordenar solicitações/ofertas por palavra-chave, categoria, localização, prioridade e proximidade. | Média |
| RF-11 | Mapa e geolocalização | O sistema deve exibir solicitações, ofertas ou instituições em mapas com marcadores geográficos e permitir uso da localização atual do usuário. | Média |
| RF-12 | Comunicação entre usuários | O sistema deve permitir comunicação direta entre doadores e donatários por chat ou mensagem. | Média |
| RF-13 | Confirmação da doação | O sistema deve permitir confirmar a realização da doação e atualizar seu status para concluída. | Alta |
| RF-14 | Acompanhamento de status | O sistema deve permitir acompanhar a situação de solicitações, campanhas, ofertas e doações. | Alta |
| RF-15 | Histórico de doações | O sistema deve registrar e disponibilizar o histórico de doações realizadas e recebidas pelo usuário. | Média |
| RF-16 | Reporte de irregularidades | O sistema deve permitir reportar solicitações, campanhas ou ofertas suspeitas, inadequadas ou irregulares. | Média |
| RF-17 | Avaliações e feedbacks | O sistema deve permitir avaliações e feedbacks sobre doações ou instituições. | Baixa |

### Requisitos não Funcionais

| ID | Nome | Descrição | Prioridade |
|----|------|-----------|------------|
| RNF-01 | Responsividade | O sistema deve possuir interface responsiva, adaptando-se adequadamente a diferentes tamanhos de tela. | Alta |
| RNF-02 | Usabilidade | A interface deve permitir que os usuários realizem as principais operações de forma simples e compreensível, sem treinamento prévio. | Alta |
| RNF-03 | Consistência da interface | A interface deve manter consistência visual e de navegação entre as diferentes telas da aplicação. | Alta |
| RNF-04 | Acessibilidade | A interface deve seguir princípios básicos de acessibilidade, incluindo contraste adequado, campos identificados e botões compreensíveis. | Média |
| RNF-05 | Tratamento de erros | O sistema deve apresentar mensagens de erro claras quando uma operação não puder ser concluída. | Média |
| RNF-06 | Compatibilidade | A aplicação deve ser compatível, caso seja aplicativo móvel, com Android e iOS nas versões suportadas pelo projeto. | Alta |
| RNF-07 | Desempenho | Consultas, pesquisas, filtros e mapas devem possuir tempo de resposta adequado, sem comprometer a navegação. | Média |
| RNF-08 | Segurança das credenciais | O sistema deve proteger credenciais e dados pessoais, não armazenando senhas em texto simples. | Alta |
| RNF-09 | Controle de acesso | O sistema deve garantir que usuários somente alterem dados, solicitações e publicações para os quais possuam autorização. | Alta |
| RNF-10 | Privacidade e localização | O sistema deve tratar dados pessoais e de localização respeitando a privacidade e solicitando permissão antes de acessar a localização do usuário. | Alta |
| RNF-11 | Integridade dos dados | O sistema deve evitar registros inconsistentes ou alterações indevidas em usuários, solicitações, doações e status. | Alta |
| RNF-12 | Disponibilidade | O sistema deve permanecer disponível, exceto em manutenções programadas ou indisponibilidade de serviços externos. | Média |
| RNF-13 | Manutenibilidade | O código deve possuir organização modular e manutenível, facilitando correções, testes e evolução. | Média |
| RNF-14 | Consumo de APIs externas | O sistema pode consumir dados de APIs ou bases de ONGs de forma assíncrona e consistente, quando disponível. | Baixa |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
