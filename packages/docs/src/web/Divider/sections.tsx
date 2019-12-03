import React from 'react';
import { Divider, GridContainer, GridItem } from '@naturacosmeticos/natds-web';

export const variants = [
  {
    title: 'FullWidth',
    component: (
      <GridContainer spacing={3} style={{ border: 1, borderStyle: 'ridge' }}>
        <GridItem
          style={{ width: '360px', height: '140px', padding: '42px 0' }}
        >
          <Divider variant="fullWidth" />
        </GridItem>
      </GridContainer>
    ),
  },
  {
    title: 'Inset',
    component: (
      <GridContainer spacing={3} style={{ border: 1, borderStyle: 'ridge' }}>
        <GridItem
          style={{ width: '360px', height: '140px', padding: '42px 0' }}
        >
          <Divider variant="inset" />
        </GridItem>
      </GridContainer>
    ),
  },
  {
    title: 'Middle',
    component: (
      <GridContainer spacing={3} style={{ border: 1, borderStyle: 'ridge' }}>
        <GridItem
          style={{ width: '360px', height: '140px', padding: '42px 0' }}
        >
          <Divider variant="middle" />
        </GridItem>
      </GridContainer>
    ),
  },
];
