# 4. Themes Usage

Date: 2019-09-24

## Status

Accepted

## Context

We must allow components to be globally customized by creating themes.
The theme will be responsible for consistently modifying all components from a palette.
The palette must consist of names that give meaning to the tokens used.
Components should still be able to override the theme as appropriate.

## Decision

We will make the components follow the defined theme and still allow independent customizations as desired by who implement them.

## Consequences

Speed and convenience when modifying all components at once from a palette.
Flexibility to customize components.
Great effort to make the components respect the theme. This difficulty will be paid by the flexibility, speed and convenience of use.
