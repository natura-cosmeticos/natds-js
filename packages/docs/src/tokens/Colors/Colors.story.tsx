import * as React from 'react';
import { tokens } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table/Table';
import Colors from '@addons/Colors/Colors';
import tokensParams from '../shared';

const { natura } = tokens.colors;

function mapColorSchema(color: any) {
  return [
    { name: color[0], type: 'text' },
    { name: color[1], type: 'color' }
  ];
}

function createTable(entry: any[]) {
  const [title, colors] = entry;

  const schema = {
    head: ['name', 'color'],
    body: Object.entries(colors).map(mapColorSchema)
  };

  return (
    <Table key={title} schema={schema} title={title} />
  );
}

export default {
  title: 'Design Tokens|Colors',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          {Object.entries(natura).map(createTable)}
        </div>
      )
    },
    ...tokensParams
  }
};

export const Natura = () => (
  <Colors colors={natura} />
);
