import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from "@storybook/client-api";
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import Container from "./decorators/Container";
import { withTheme } from './decorators/theme/provider';
import { initialParams } from "./parameters/initialParams";

addDecorator(storyFn => <Container>{storyFn()}</Container>);
addDecorator(withA11y);
addDecorator(withTheme);
addDecorator(withKnobs);
addParameters(initialParams);
