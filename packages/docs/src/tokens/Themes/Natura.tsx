import * as React from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table/Table';

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
      name: 'webFontFamilyBranding1',
      type: 'text',
    },
    {
      name: dark.typography.web.fontFamilyBrand1
        ? dark.typography.web.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'webFontFamilyBranding2',
      type: 'text',
    },
    {
      name: dark.typography.web.fontFamilyBrand2
        ? dark.typography.web.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'webFontFamilyBranding3',
      type: 'text',
    },
    {
      name: dark.typography.web.fontFamilyBrand3
        ? dark.typography.web.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'androidFontFamilyBranding1',
      type: 'text',
    },
    {
      name: dark.typography.android.fontFamilyBrand1
        ? dark.typography.android.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'androidFontFamilyBranding2',
      type: 'text',
    },
    {
      name: dark.typography.android.fontFamilyBrand2
        ? dark.typography.android.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'androidFontFamilyBranding3',
      type: 'text',
    },
    {
      name: dark.typography.android.fontFamilyBrand3
        ? dark.typography.android.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'iosFontFamilyBranding1',
      type: 'text',
    },
    {
      name: dark.typography.iOS.fontFamilyBrand1
        ? dark.typography.iOS.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'iosFontFamilyBranding2',
      type: 'text',
    },
    {
      name: dark.typography.iOS.fontFamilyBrand2
        ? dark.typography.iOS.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'iosFontFamilyBranding3',
      type: 'text',
    },
    {
      name: dark.typography.iOS.fontFamilyBrand3
        ? dark.typography.iOS.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ]
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
      name: 'webFontFamilyBranding1',
      type: 'text',
    },
    {
      name: light.typography.web.fontFamilyBrand1
        ? light.typography.web.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'webFontFamilyBranding2',
      type: 'text',
    },
    {
      name: light.typography.web.fontFamilyBrand2
        ? light.typography.web.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'webFontFamilyBranding3',
      type: 'text',
    },
    {
      name: light.typography.web.fontFamilyBrand3
        ? light.typography.web.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'androidFontFamilyBranding1',
      type: 'text',
    },
    {
      name: light.typography.android.fontFamilyBrand1
        ? light.typography.android.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'androidFontFamilyBranding2',
      type: 'text',
    },
    {
      name: light.typography.android.fontFamilyBrand2
        ? light.typography.android.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'androidFontFamilyBranding3',
      type: 'text',
    },
    {
      name: light.typography.android.fontFamilyBrand3
        ? light.typography.android.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'iosFontFamilyBranding1',
      type: 'text',
    },
    {
      name: light.typography.iOS.fontFamilyBrand1
        ? light.typography.iOS.fontFamilyBrand1
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'iosFontFamilyBranding2',
      type: 'text',
    },
    {
      name: light.typography.iOS.fontFamilyBrand2
        ? light.typography.iOS.fontFamilyBrand2
        : 'Undefined',
      type: 'text',
    },
  ],
  [
    {
      name: 'iosFontFamilyBranding3',
      type: 'text',
    },
    {
      name: light.typography.iOS.fontFamilyBrand3
        ? light.typography.iOS.fontFamilyBrand3
        : 'Undefined',
      type: 'text',
    },
  ]
);

export const NaturaLightComponent = () => (
  <Table schema={lightSchema} title="Light" />
);
export const NaturaDarkComponent = () => (
  <Table schema={darkSchema} title="Dark" />
);
