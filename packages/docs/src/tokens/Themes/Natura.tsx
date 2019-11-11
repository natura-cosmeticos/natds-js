import * as React from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table/Table';

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

darkSchema.body.push(
  [
    {
      name: 'webFontFamilyBranding',
      type: 'text'
    },
    {
      name: dark.typography.web.fontFamilyBrand,
      type: 'text'
    }
  ],
  [
    {
      name: 'androidFontFamilyBranding',
      type: 'text'
    },
    {
      name: dark.typography.android.fontFamilyBrand,
      type: 'text'
    }
  ],
  [
    {
      name: 'iosFontFamilyBranding',
      type: 'text'
    },
    {
      name: dark.typography.iOS.fontFamilyBrand,
      type: 'text'
    }
  ]
);

const lightSchema = {
  head: ['name', 'color'],
  body: (light && light.palette) && Object.entries(light.palette).reduce(FlattenTheme, []).filter(removeStrings)
};

lightSchema.body.push(
  [
    {
      name: 'webFontFamilyBranding',
      type: 'text'
    },
    {
      name: light.typography.web.fontFamilyBrand,
      type: 'text'
    }
  ],
  [
    {
      name: 'androidFontFamilyBranding',
      type: 'text'
    },
    {
      name: light.typography.android.fontFamilyBrand,
      type: 'text'
    }
  ],
  [
    {
      name: 'iosFontFamilyBranding',
      type: 'text'
    },
    {
      name: light.typography.iOS.fontFamilyBrand,
      type: 'text'
    }
  ]
);

export const NaturaLightComponent = () => <Table schema={lightSchema} title="Light" />;
export const NaturaDarkComponent = () => <Table schema={darkSchema} title="Dark" />;
