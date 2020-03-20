import * as React from 'react';
import tokensParams from '../../shared';
import Table from '@addons/Table';
import { parseColortokens } from '../shared';
import { tokens } from '@naturacosmeticos/natds-styles';

const { colorTokens: { naturaLightColorTokens } } = tokens;

const LightComponent = () => (
  <Table schema={parseColortokens(naturaLightColorTokens)} title="Natura Light" />
);

export default {
  title: 'Design Tokens|Themes/Natura',
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

