import * as React from 'react';
import Table from '@addons/Table/Table';
import Spacing from './Spacing.component';

import { tokens } from '@naturacosmeticos/natds-styles';

const spacingSchema = {
  head: ['name', 'value'],
  body: Object.entries(tokens.spacing).map(mapSchema)
}

export default {
  title: 'Design Tokens|Spacing',
  parameters: {
    docs: {
      container: null,
      page: () => (<Table schema={spacingSchema} title="Spacing" />)
    }
  }
};

export const Scale = () => (
  <Spacing spacing={tokens.spacing} />
);

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
