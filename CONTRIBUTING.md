# Contributing to Natura Design System

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

This repo is using node version `node@10.16.3`. Have this version installed to avoid potential problems.
We also use yarn workspaces, so you should install `yarn@1.19.1` or higher as a package manager. See [installation guide](https://yarnpkg.com/en/docs/install).

We use typescript in this project, with only a few exceptions on the docs package for configuration.

Please note we have a [code of conduct](./CODE_OF_CONDUCT), follow it in all your interactions with the project.

## Project Structure

We use lerna to manage our versioning on the monorepo packages. The monorepo structure goes as it follows:

packages <br>
&nbsp;&nbsp;&nbsp;&nbsp; /styles <br>
&nbsp;&nbsp;&nbsp;&nbsp; /web <br>
&nbsp;&nbsp;&nbsp;&nbsp; /mobile <br>
&nbsp;&nbsp;&nbsp;&nbsp; /docs <br>

## Travis CI

Travis CI's responsibilities are testing, bumping versions of the packages and the root package, and versioning the docs. List of branches that will be evaluated on Travis and their respectives pipelines right now.

| Branch Name Pattern | Pipeline                                                                                                                                                                                                   |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `^feature/(.+)$`    | Travis will build and test on pull requests                                                                                                                                                                |
| `^v\d+.\d+.\d+$`    | Travis will build and test on pull request.On merge it will bump the root package version, commit changes to the current branch, build and version the docs and commit it to the docs corresponding branch |
## Code of Conduct

Natura Design System has adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as its Code of Conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand which actions will and will not be tolerated.

## Branching

Your feature branch must be checked out from the milestone that the feature belongs. You can follow whichever PR guideline inside your feature branch, but make sure that when Pull Requesting back to the milestone branch to use the [pull request template](./.github/PULL_REQUEST_TEMPLATE.md).

You can follow our guideline in your feature branch which go as it follows:

- After creating your feature branch, checkout from it with another branched named with one of the conventions:
  - `feature/<task name>` when Pull Requesting back to your original feature branch, travis will run tests;
  - `docs/<name>` for docs only. Travis will also run tests;
- Then PR it back to your original feature branch;
- Iterate until the whole original feature is complete and PR it to the milestone branch;

## For contributors on Natura Organization

If you find yourself in this category, you can go directly to branching this repository, without worrying about forking.

## For contributors outside Natura Organization

We are not open for external contribution right now.

## Visual Validation

After merged, the PR will generate a version on the storybook that the milestone is attached. Provide the version number to the UX team for validation.

## Initiating the Contribution

First, you need to install dependencies and build packages. After that you will be able to execute any of the projects (docs, web or mobile).

```sh
git clone https://github.com/natura-cosmeticos/natds
cd natds
git checkout <milestone_branch>
yarn
yarn build:libs
```

### Commits

You should use the [Commitizen](https://github.com/commitizen/cz-cli) CLI that is installed on the root `package.json`. You can use it by going to the root folder and:

```sh
yarn commit
```

Be careful on which options you choose, please, read the [Semantic Release](https://github.com/semantic-release/semantic-release) guideline.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build;
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters;
3. We use [Commitizen](https://github.com/commitizen/cz-cli) to follow [Semantic Release](https://github.com/semantic-release/semantic-release) patterns;
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you;
5. We use [Verdaccio](https://github.com/verdaccio/verdaccio) to release local test. Before submitting a PR, we advise you to take a few steps:
   > After installing Verdaccio, on a terminal/console, start `verdaccio` process.<br/>
   > At another terminal/console, run the command `yarn release:local`. This will publish the packages locally (http://localhost:4873), which may include the dependency required for other projects, e.g.: `yarn add @ naturacosmeticos/natds-web --registry=http://localhost:4873`.<br/>
   > Before you finish, run `yarn release:local:revert` to revert commit generated by the previous process.

## Publish new storybook instance

We use [Netlify](https://www.netlify.com/) to create new storybook instances, generated after creating a milestone (alpha versions). Get access with an administrator and follow [instructions](./DEPLOY_NETLIFY.md).

## Starting a new milestone

Checkout to the master branch and create a new branch with the following naming:
- vM.m.p
  - v &rarr; letter v for version;
  - M.m.p &rarr; Version number of the milestone following [SemVer](https://semver.org/);

From the new branch, create another one with the same name, but with `-docs` sufix.

Example: `v0.5.0` and `v0.5.0-docs`

After that, follow the guide on [DEPLOY_NETLIFY.md](./DEPLOY_NETLIFY.md) and make the instance build with the docs branch.
