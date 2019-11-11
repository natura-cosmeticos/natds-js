import * as React from 'react';
import { themes } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table/Table';

const {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline
} = themes.natura.light.typography;

const fontSizes:any = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline
};

const mapSchema = ([key, value]: any) => {
  return [
    {
      name: key,
      type: 'text'
    },
    {
      name: value.fontSize,
      type: 'text'
    }
  ];
};

const fontSizeSchema = {
  head: ['Tag/Key', 'Size'],
  body: Object.entries(fontSizes).map(mapSchema)
};

export const TypographyFontSize = () => (<Table schema={fontSizeSchema} title="Font Size"/>);
