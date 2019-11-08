import * as React from 'react';
import { Typography } from '@material-ui/core';
import { themes  } from '@naturacosmeticos/natds-styles';

import './styles.scss';
import Table from '@addons/Table/Table';

const header = ['web', 'iOS', 'android'];
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
    <Table schema={fontFamilySchema} />
  );
};
