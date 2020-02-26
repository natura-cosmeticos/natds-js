import * as React from 'react';
import tokensParams from '../../shared';
import Table from '@addons/Table';
import { parseTheme } from '../shared';
import { themes } from '@naturacosmeticos/natds-styles';

const { avon: { light, dark } } = themes;

const LightComponent = () => (
  <Table schema={parseTheme(light)} title="Avon Light" />
);
const DarkComponent = () => (
  <Table schema={parseTheme(dark)} title="Avon Dark" />
);

export default {
  title: 'Design Tokens|Themes/Avon',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          <LightComponent />
          <DarkComponent />
        </div>
      )
    },
    ...tokensParams
  }
};

export const Light = () => (
  <LightComponent />
);

export const Dark = () => (
  <DarkComponent />
);
