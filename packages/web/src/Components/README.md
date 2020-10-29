# API & Pattern Guidelines

Building a component? Get instructions and best practices here.

## Component folder structure

- `{Component}.tsx`: component production code (AC1);
- `{Component}.props.ts` (optional): interface with props definition and args metadata (AC3);
- `{Component}.stories.test.tsx`: tests for all stories (AC5);
- `{Component}.stories.tsx`: the interactive stories for Storybook (AC2);
- `{Component}.styles.ts` (optional): style overrides for component (AC4);
- `{Component}.test.tsx`: component test code (AC5);
- `README.md` (optional): documentation (AC2);

## Why write code in TypeScript?

We designed our repository project structure so that we can easily write TypeScript code.

Even if we chose to allow that people can write code in JavaScript, the set of dependencies and scripts that forms our
development environment could not be prepared to handle only JavaScript.

Considering the specific context of the Design System, and considering that you will use an IDE and already have
experience with JavaScrip, you will be able to develop in TypeScript in a short time.

If you have any points regarding these decisions, please contact Architecture and Infrastructure from Natura & Co.
