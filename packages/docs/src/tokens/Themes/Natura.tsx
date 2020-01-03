import * as React from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table';

const { natura } = themes;

function FlattenTheme(accum: any, [key, value]: any): any {
  const type = typeof value;

  if (type === 'function' || (type === 'object' && !!value)) {
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
  body:
    dark &&
    dark.palette &&
    Object.entries(dark.palette)
      .reduce(FlattenTheme, [])
      .filter(removeStrings),
};

darkSchema.body.push(
  [
    {
      name: 'fontFamilyBranding1',
      type: 'text',
    },
    {
      name: dark.typography.fontFamilyBrand1
        ? dark.typography.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'fontFamilyBranding2',
      type: 'text',
    },
    {
      name: dark.typography.fontFamilyBrand2
        ? dark.typography.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'fontFamilyBranding3',
      type: 'text',
    },
    {
      name: dark.typography.fontFamilyBrand3
        ? dark.typography.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ],
);

const lightSchema = {
  head: ['name', 'color'],
  body:
    light &&
    light.palette &&
    Object.entries(light.palette)
      .reduce(FlattenTheme, [])
      .filter(removeStrings),
};

lightSchema.body.push(
  [
    {
      name: 'fontFamilyBranding1',
      type: 'text',
    },
    {
      name: light.typography.fontFamilyBrand1
        ? light.typography.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'fontFamilyBranding2',
      type: 'text',
    },
    {
      name: light.typography.fontFamilyBrand2
        ? light.typography.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'fontFamilyBranding3',
      type: 'text',
    },
    {
      name: light.typography.fontFamilyBrand3
        ? light.typography.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ],
);

export const NaturaLightComponent = () => (
  <Table schema={lightSchema} title="Light" />
);
export const NaturaDarkComponent = () => (
  <Table schema={darkSchema} title="Dark" />
);
