import { Meta, Preview, Props, Story } from '@storybook/addon-docs/blocks';

<Meta title="Developer/Components" />

# Component anatomy

Building a component? Get instructions and best practices here.

## Component folder structure

- `{Component}.tsx`: component production code (AC1);
- `{Component}.props.ts` (optional): interface with props definition and args metadata (AC3);
- `{Component}.stories.test.tsx`: tests for all stories (AC5);
- `{Component}.stories.tsx`: the interactive stories for Storybook (AC2);
- `{Component}.styles.ts` (optional): style overrides for component (AC4);
- `{Component}.test.tsx`: component test code (AC5);
- `README.md` (optional): documentation (AC2);
