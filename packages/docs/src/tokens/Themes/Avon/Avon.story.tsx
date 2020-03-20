import * as React from 'react';
import tokensParams from '../../shared';
import Table from '@addons/Table';
import { parseColortokens } from '../shared';
import { tokens } from '@naturacosmeticos/natds-styles';

const { colorTokens: { avonLightColorTokens } } = tokens;

const LightComponent = () => (
  <Table schema={parseColortokens(avonLightColorTokens)} title="Avon Light" />
);

export default {
  title: 'Design Tokens|Themes/Avon',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          <LightComponent />
        </div>
      )
    },
    ...tokensParams
  }
};

export const Light = () => (
  <LightComponent />
);

