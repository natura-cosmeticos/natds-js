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

const secondarySchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.secondary).map(mapColorSchema)
};

const commonSchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.common).map(mapColorSchema)
};

const levelSchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.level).map(mapColorSchema)
};

const complementarySchema = {
  head: ['name', 'color'],
  body: Object.entries(natura.complementary).map(mapColorSchema)
};

export default {
  title: 'Design Tokens|Colors',
  parameters: {
    docs: {
      container: null,
      page: () => (
        <div>
          <Table schema={primarySchema} title="Primary" />
          <Table schema={secondarySchema} title="Secondary" />
          <Table schema={commonSchema} title="Common" />
          <Table schema={levelSchema} title="Level" />
          <Table schema={complementarySchema} title="Complementary" />
        </div>
      )
    },
    ...tokensParams
  }
};

export const Natura = () => (
  <Colors colors={natura} />
);
