import * as React from 'react';
import tokensParams from '../../shared';
import Table from '@addons/Table';
import { parseColortokens } from '../shared';
import { tokens } from '@naturacosmeticos/natds-styles';

const { colorTokens: { theBodyShopLightColorTokens } } = tokens;

const LightComponent = () => (
  <Table schema={parseColortokens(theBodyShopLightColorTokens)} title="The Body Shop Light" />
);

export default {
  title: 'Design Tokens|Themes/TheBodyShop',
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

