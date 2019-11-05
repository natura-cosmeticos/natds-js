import * as React from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table/Table';
import tokensParams from '../shared';

const { natura } = themes;

function FlattenTheme(accum: any, [key, value]: any): any {
  const type = typeof value;

  if (type === 'function' || type === 'object' && !!value) {
    return Object.entries(value).reduce(FlattenTheme, [key, ...accum]);
  }

  const [parent] = accum;

  if (!parent) return accum;

  const name = `${parent}-${key}`;

  return [...accum, [{ name }, { name: value, type: 'color' }]];
}

function removeStrings(entry: any) {
  return typeof entry !== 'string';
}

const { light, dark } = natura;

const darkSchema = {
  head: ['name', 'color'],
  body: (dark && dark.palette) && Object.entries(dark.palette).reduce(FlattenTheme, []).filter(removeStrings)
};

const lightSchema = {
  head: ['name', 'color'],
  body: (light && light.palette) && Object.entries(light.palette).reduce(FlattenTheme, []).filter(removeStrings)
};

const LightComponent = () => <Table schema={lightSchema} title="Light" />;
const DarkComponent = () => <Table schema={darkSchema} title="Dark" />;

export default {
  title: 'Design Tokens|Themes',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          <Table schema={lightSchema} title="Light" />
          <Table schema={darkSchema} title="Dark" />
        </div>
      )
    },
    ...tokensParams
  }
};

export const NaturaLight = () => (
  <LightComponent />
);

export const NaturaDark = () => (
  <DarkComponent />
);
