import * as React from 'react';
import { TypographyScale } from './Typography';
import tokensParams from '../shared';
import withContainer from '@decorators/container/container';

export default {
  title: 'Design Tokens|Typography',
  parameters: {
    docs: {
      container: null,
      page: () => <TypographyScale />
    },
    theme: 'web',
    ...tokensParams
  },
};

export const Scale = () =>  <TypographyScale />;
