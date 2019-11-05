import * as React from 'react';
import { tokens } from '@naturacosmeticos/natds-styles';
import Table from '@addons/Table/Table';
import Colors from './Colors.component';
import tokensParams from '../shared';

const { natura } = tokens.colors;

function mapColorSchema(color: any) {
  return [
    {
      name: color[0],
      type: 'text'
    },
    {
      name: color[1],
      type: 'color'
    }
  ];
}

const primarySchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.primary).map(mapColorSchema)
};

const complementarySchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.complementary).map(mapColorSchema)
};

const gradientSchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.gradient).map(mapColorSchema)
};

export default {
  title: 'Design Tokens|Colors',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          <Table schema={primarySchema} title="Primary" />
          <Table schema={complementarySchema} title="Complementary" />
          <Table schema={gradientSchema} title="Gradient" />
        </div>
      )
    },
    ...tokensParams
  }
};

export const Natura = () => (
  <Colors colors={natura} />
);
