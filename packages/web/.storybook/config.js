import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withTheme } from './addons/theme/provider';
import { initialParams } from "./parameters/initialParams";
import {componentsLoader} from "./loaders/componentsLoader"

addParameters(initialParams);

addDecorator(withTheme);
addDecorator(withA11y);
addDecorator(withKnobs);

const readmeLoader = require.context(
  '../',
  false,
  /(README)\.(mdx)?$/
);

configure([readmeLoader, componentsLoader], module);
