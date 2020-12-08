# Contribuindo para o Design System da Natura

## Antes de começar

Recomendamos [criar uma issue](https://github.com/natura-cosmeticos/natds-js/issues/new/choose)
para trazer a sugestão e estimular conversas.

Note que temos um [Código de Conduta](./CODE_OF_CONDUCT.md).
Por favor, siga as suas regras em todas as interações com as pessoas, documentação, código e discussões do projeto.

## Como é o processo de criação de um componente para o Design System?

1. Uma pessoa de uma squad puxa um card no nosso board (no card vai ter a especificação do que precisa ser implementado, como as variantes, propriedades, e os critérios de aceitação);

2. A gente cria uma PR no GitHub com o nome do card, e lá a pessoa (ou o grupo de pessoas) da squad pode ir codando e enviando as alterações. Sempre tem uma pipeline rodando pra conferir se tem testes, se não tem problemas de código, etc.;

3. Uma vez pronto, o código passa por validação (code review) e o componente passa por validação visual (usando as histórias que forem criadas no Storybook). A gente vai acompanhando as pessoas desenvolvedoras à medida que sugerimos ajustes, até a aprovação;

4. Quando tudo estiver OK, o código é integrado com a branch principal, e é lançada uma nova versão do `natds-web` com o novo componente.

## Passo-a-passo de contribuição

### Como preparar meu ambiente de desenvolvimento para contribuir?

#### Node.js

Garanta que o seu ambiente tenha o [Node.js](https://nodejs.org/en/) instalado.
Recomendamos pelo menos a versão `10.16.3` do Node.js. Idealmente, prefira versões superiores a `12.17.0`.

### Yarn

Utilizamos o recurso de [Espaços de Trabalho (Workspaces) do Yarn](https://classic.yarnpkg.com/pt-BR/docs/workspaces).
Por isso, é essencial [instalar o `yarn` globalmente](https://classic.yarnpkg.com/pt-BR/docs/install).
Recomendamos pelo menos a versão `1.19.1`. Idealmente, prefira versões superiores a `1.22.4`.

## Qual é a estrutura básica do projeto?

Como utilizamos `lerna` para gerenciar o versionamento dos pacotes do _monorepo_.
Estes são os pacotes atuais do projeto:

- `packages/styles`: Biblioteca com tema e estilos do Design System para a web;
- `packages/web`: Biblioteca de componentes para a web.

## Conheça o ABC do fluxo de contribuição

### Antes de começar

Estas recomendações são válidas apenas para pessoas contribuidoras da organização Natura.

Se este não é o seu caso, realize um _fork_ do repositório para propor melhorias.

### Branches

Contribuições com o Design System devem ser criadas a partir de uma _branch_ no formato `DSY-0000`.
O nome da _branch_ será o código de uma tarefa do JIRA que representa essa contribuição.

Isso é válido para novas _features_, _hotfixes_ e melhorias na documentação.

Para obter um código de tarefa do JIRA, basta procurar a _squad_ de Design System no **Slack** ou **Teams**.

### Continuous Integration

Utilizamos o Jenkins como _pipeline_ de integração contínua.
É responsabilidade do Jenkins realizar o teste e _bumping_ de versões dos pacotes.

Atualmente, novos _releases_ só são publicados quando realizamos um _merge_ para o _branch_ principal.

<details>

<summary>O que aconteceu com os branches de feature e milestone?</summary>

Antes de 20 de junho de 2020, utilizávamos os padrões `^feature/(.+)$` para _feature branches_
e `^v\d+.\d+.\d+$` para _milestone branches_, bem como `hotfix/` e `docs/`.

Abandonamos este formato antigo em favor de utilizarmos CI/CD, garantindo um fluxo mais enxuto.
Por isso, desde essa data, a _pipeline_ ignora _branches_ nesse formato.

Além disso, o novo formato viabiliza a possibilidade de, em breve, permitirmos que _pushes_ para branches no formato `DSY-000` gerem _pre-releases_,
o que facilitaria o teste e validação das contribuições.

</details>

### Design Validation

Quando um _pull request_ é aberto, a pipeline do Jenkins se encarrega de gerar uma nova versão do _storybook_. Quando isso acontecer, inclua a `url` gerada à card no board do Jira, no campo **Link para validação funcional**

> A `url` gerada será algo como `https://storybook-web.natura.com.br/[SUA-BRANCH]/index.html`

## 4. Comece a contribuir

Clone o repositório no seu ambiente de desenvolvimento:

```shell script
$ git clone https://github.com/natura-cosmeticos/natds-js
```

Navegue até o diretório do repositório recém-clonado e faça o _checkout_ para a sua _branch_:

```shell script
$ cd natds-js
$ git checkout DSY-000 # sendo DSY-000 o nome do seu branch
```

Por fim, faça a instalação das dependências e um _build_ inicial, para garantir que está tudo pronto:

```shell script
$ yarn
$ yarn build:libs
```

### Tarefas de _linting_ e testes

Use o `eslint` para verificar se o seu código está de acordo com o _code style_:

```sh
yarn lint
```

Como muitos dos nossos componentes são _wrappers_ de outros já testados, usamos muitos testes de _snapshot_.
Quaisquer linhas adicionais de código escritas dentro dos próprios componentes precisam ter 100% de cobertura de teste.

Use o `jest` para verificar se os testes passam:

```sh
yarn test
```

Consulte a seção `scripts` no arquivo `package.json` para conferir a lista completa de tarefas disponíveis.

### Posso alterar alguma definição de tema?

Os nossos componentes e temas utilizam o Material UI como base.
Os temas são criados na biblioteca `@naturacosmeticos/natds-styles`.
Esse pacote realiza um _parse_ dos temas do Material UI.

Qualquer alteração no contrato do tema ou componentes existentes deve ser comunicada ao time Design System.
Assim, iremos avaliar se a alteração é aplicável, e se não causa _breaking changes_.

## 5. Faça commits semânticos

Em vez de utilizar `git commit`, por favor, use este comando:

```shell script
$ yarn commit
```

Este comando aciona o [Commitizen](https://www.thoughtworks.com/pt/radar/tools/commitizen),
já instalado no projeto, que lhe ajudará na criação de uma mensagem de _commit_.

Os commits serão ser feitos no formato [Conventional Commits](https://www.conventionalcommits.org/pt-br/).
Graças a esse formato, é possível definir se a próxima versão será um _patch_, _minor_ ou _major release_.

A partir de 20 de junho de 2020, _commits_ feitos fora deste formato poderão ser recusados.

## 6. Crie um _pull request_

Ao criar um _pull request_, não se esqueça de:

- Documentar, na descrição do _pull request_, se houve alguma modificação nas dependências do projeto;
- Informar, também na descrição do _pull request_, quais mudanças foram realizadas;
- Atualizar o README.md, caso haja mudanças que afetem a instalação ou utilização da biblioteca;

Um _pull request_ só será mesclado com a _branch_ principal se:

- O código foi aprovado por pelo menos duas pessoas contribuidoras;
- As alterações passam em todos os _checks_, incluindo:
  - Codecov: a cobertura de 100% deve ser mantida;
  - Commitlint: todas as mensagens de _commit_ seguem o [Conventional Commits](https://www.conventionalcommits.org/pt-br/);
  - Mergeable: as alterações e a descrição do _pull request_
    não ferem nenhuma das [políticas do Mergeable](https://github.com/natura-cosmeticos/.github/blob/main/.github/mergeable.yml);
  - Travis CI: nenhum _build_ quebrou e todos os testes passaram;
  - Typo CI: não há nenhum typo que prejudique o entendimento ou leitura do código;
  - Snyk: não há versões obsoletas ou com vulnerabilidades conhecidas;

Quando o seu _branch_ for mesclado com a _branch_ principal, uma nova versão das bibliotecas deste projeto será lançada.

## Agradecemos por contribuir com este projeto

Esperamos que todas as pessoas contribuidoras leiam o nosso [Código de Conduta](./CODE_OF_CONDUCT.md),
inspirado no [Contributor Convenant](https://www.contributor-covenant.org/).

Bom trabalho!
