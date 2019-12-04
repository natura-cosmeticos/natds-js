import * as React from 'react';
import { themes  } from '@naturacosmeticos/natds-styles';

import Table from '@addons/Table/Table';

const webFontFamily = themes.natura.light.typography.web.fontFamily;
const iosFontFamily = themes.natura.light.typography.iOS.fontFamily;
const androidFontFamily = themes.natura.light.typography.android.fontFamily;

const mapSchema = (item: any) => {
  return {
    name: item,
    type: 'text'
  };
};

const fontFamilySchema = {
  head: ['web', 'iOS', 'android'],
  body: [[webFontFamily, iosFontFamily, androidFontFamily].map(mapSchema)]
};


export const TypographyFontFamily = () => {
  return(
    <Table schema={fontFamilySchema} title="Default Font Family" />
  );
};
