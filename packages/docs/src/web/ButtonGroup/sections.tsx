import React from 'react';
import { ButtonGroup, Button } from '@naturacosmeticos/natds-web';

export const variants = [
  {
    title: 'Contained',
    component: (
      <ButtonGroup color="primary" variant="contained" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
  {
    title: 'Outlined',
    component: (
      <ButtonGroup color="primary" variant="outlined" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
  {
    title: 'Text',
    component: (
      <ButtonGroup color="primary" variant="text" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  }
];

export const colors = [
  {
    title: 'Primary',
    component: (
      <ButtonGroup color="primary" variant="contained" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
  {
    title: 'Secondary',
    component: (
      <ButtonGroup color="secondary" variant="contained" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
  {
    title: 'Default',
    component: (
      <ButtonGroup color="default" variant="contained" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  }
];

export const sizes = [
  {
    title: 'Primary',
    component: (
      <ButtonGroup color="primary" variant="contained" size="small">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
  {
    title: 'Secondary',
    component: (
      <ButtonGroup color="primary" variant="contained" size="medium">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  },
  {
    title: 'Default',
    component: (
      <ButtonGroup color="primary" variant="contained" size="large">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    )
  }
];
