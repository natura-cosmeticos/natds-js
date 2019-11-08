import * as React from 'react';
import { TypographyScale } from './TypographyScale';
import tokensParams from '../shared';
import { TypographyFontFamily } from './TypographyFontFamily';

export default {
  title: 'Design Tokens|Typography',
  parameters: {
    docs: {
      container: null,
      page: null
    },
    theme: 'web',
    ...tokensParams
  },
};

export const Scale = () =>  <TypographyScale />;

export const FontFamily = () => <TypographyFontFamily />;
