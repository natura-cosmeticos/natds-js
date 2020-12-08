# Contributing to Natura Design System

## Before starting

We recommend that you open an issue to bring your suggestions and start a conversation.
Please note we have a [code of conduct](./CODE_OF_CONDUCT), follow it in all your interactions with the project.

## About the proccess to create a component

In summary:

1. You pull a card from our board. It contains what needs to be implemented, such as variants, props and acceptance criteria.

2. After create a _branch_ with the JIRA task code (e.g. DSY-1234) and finish your contribution, you can open a _pull request_ for us. Once ready, the code goes through a code review and the component goes through a visual validation by our Design System Team.

3. When everything is ready, the _pull request_ will be approved and the code integrated with the **main branch**, launching a new version of `natds-web`.

## Step-by-Step

### 1. Environment

This repo is using node version `node@10.16.3`. Have this version or higher installed to avoid potential problems. We also use yarn workspaces, so you should install `yarn@1.19.1` or higher as a package manager. See [installation guide](https://classic.yarnpkg.com/en/docs/install#mac-stable).

### 2. Project Structure

We use `lerna` to manage our versioning on the _monorepo_ packages. The monorepo structure goes as it follows:

- `packages/styles`: Natura Design System theme and styles library for the web;
- `packages/web`: component library for the web.

### 4. ABC of contributing flow

> These recommendations are only valid for people who contribute to the Natura organization. If this is not your case, fork this repository to propose improvements.

#### Branches

Contributions to the Design System must be created from a branch in the `DSY-0000` format. The branch name will be the code for a JIRA task that represents this contribution. To get a JIRA task code, just look for the Design System squad in Slack or Teams.

This is true for new features, hotfixes and documentation improvements.

#### Continuous Integration

Jenkins responsibilities are testing, bumping versions of the packages and the root package, and versioning the docs.

#### Design Validation

When a pull request is opened, the Jenkins pipeline takes care of generating a new version of the **storybook**. When this happens, include the **url** generated to the card on the Jira board, in the **Link field for functional validation** field.

> e.g.: https://storybook-web.natura.com.br/YOUR-BRANCH/index.html

### 5. Initiating the Contribution

Clone this repo to your development environment:

```shell script
$ git clone https://github.com/natura-cosmeticos/natds-js
```

Do the _checkout_ for your _branch_:

```shell script
$ cd natds-js
$ git checkout -b DSY-0000 # DSY-0000 such as the name of your branch
```

Install all dependencies and do an initial _build_, to guarantee that is all be working:

```shell script
$ yarn
$ yarn build:libs
```

#### Lint & Test tasks

Use `eslint` to check if your code is following our code style:

```sh
yarn lint
```

Any additional lines of code written within the components themselves must have 100% test coverage. Use `jest` to verify that all tests are passing

```sh
yarn test
```

#### Can I change a theme definition?

Our components and themes use Material UI as a base. The themes are created in the library @naturacosmeticos/natds-styles. This package performs a parse of the Material UI themes. Any changes to the existing theme or component contract must be communicated to the Design System team. Thus, we will assess whether the change is applicable, and whether it does not cause breaking changes.

### 6. Do semantic commits

Instead of use `git commit` please use this one:

```shell script
$ yarn commit
```

This command triggers [Commitizen](https://www.thoughtworks.com/pt/radar/tools/commitizen), already installed in the project as a dependency, which will help you to create a commit message.

Commits _must_ follow the format of [Conventional Commits](https://www.conventionalcommits.org/pt-br/). Thanks to thats is possivle to define whether the next version will be a _patch_, a _minor_ or _major_ release.

### 7. Create a Pull Request

When creating a PR, be sure to:

- Document, in the description of the PR, if there has been any change in the project's dependencies;
- Also tell in the description of the PR which changes were made
- If necessary, updates the README.md

A PR only will merge with main branch if:

- The code was approved by at least two contributors
- Changes pass all checks

When your branch is merged with the main branch, a new version of the libraries for this project will be released!

Well done!