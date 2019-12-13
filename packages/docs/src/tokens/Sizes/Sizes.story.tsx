import * as React from 'react';

import SizesScale from './Sizes.scale';
import Table from '@addons/Table';
import tokensParams from '../shared';
import { tokens } from '@naturacosmeticos/natds-styles';

const { sizes } = tokens;

function mapSchema(item: any) {
  return [
    {
      name: item[0],
      type: 'text'
    },
    {
      name: item[1],
      type: 'text'
    }
  ];
}

const SizesSchema = {
  head: ['name', 'value'],
  body: Object.entries(sizes).map(mapSchema)
};

export default {
  title: 'Design Tokens|Sizes',
  parameters: {
    docs: {
      container: null,
      page: () => (<Table schema={SizesSchema} title="Sizes" />)
    },
    ...tokensParams
  }
};

export const Scale = () => (
  <SizesScale sizes={sizes} />
);
