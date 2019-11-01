import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { Grid } from '@naturacosmeticos/natds-web';

import './styles.scss';

export default {
  title: 'Web|Grid',
  component: Grid,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Grid'],
    theme: 'web'
  }
};

export const Default = () => (
  <Grid container>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>
    <Grid item xs={1}>
      <div>xs=1</div>
    </Grid>

    <Grid item xs={2}>
      <div>xs=2</div>
    </Grid>
    <Grid item xs={2}>
      <div>xs=2</div>
    </Grid>
    <Grid item xs={2}>
      <div>xs=2</div>
    </Grid>
    <Grid item xs={2}>
      <div>xs=2</div>
    </Grid>
    <Grid item xs={2}>
      <div>xs=2</div>
    </Grid>
    <Grid item xs={2}>
      <div>xs=2</div>
    </Grid>

    <Grid item xs={3}>
      <div>xs=3</div>
    </Grid>
    <Grid item xs={3}>
      <div>xs=3</div>
    </Grid>
    <Grid item xs={3}>
      <div>xs=3</div>
    </Grid>
    <Grid item xs={3}>
      <div>xs=3</div>
    </Grid>

    <Grid item xs={4}>
      <div>xs=4</div>
    </Grid>
    <Grid item xs={4}>
      <div>xs=4</div>
    </Grid>
    <Grid item xs={4}>
      <div>xs=4</div>
    </Grid>

    <Grid item xs={6}>
      <div>xs=6</div>
    </Grid>
    <Grid item xs={6}>
      <div>xs=6</div>
    </Grid>

    <Grid item xs={12}>
      <div>xs=12</div>
    </Grid>
  </Grid>
);
