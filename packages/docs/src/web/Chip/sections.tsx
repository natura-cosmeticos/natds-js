import React from 'react';
import { Chip } from '@naturacosmeticos/natds-web';
import Favorite from '@material-ui/icons/Favorite';

export const attributes = [
  {
    title: 'Standard',
    component: <Chip color="primary" variant="default" size="medium" label="Label" />
  },
  {
    title: 'Disabled',
    component: <Chip color="primary" variant="default" size="medium" disabled label="Label" />
  },
  {
    title: 'With Delete',
    component: <Chip color="primary" variant="default" size="medium" label="Label" onDelete={() => { }} />
  },
  {
    title: 'Clickable',
    component: <Chip color="primary" variant="default" size="medium" label="Label" clickable />
  },
  {
    title: 'Custom Icon',
    component: <Chip color="primary" variant="default" size="medium" label="Label" icon={<Favorite />} />
  }
];

export const variants = [
  {
    title: 'Default',
    component: <Chip color="primary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Outlined',
    component: <Chip color="primary" variant="outlined" size="medium" label="Label" onDelete={() => {}} />
  }
];

export const colors = [
  {
    title: 'Primary',
    component: <Chip color="primary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Secondary',
    component: <Chip color="secondary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Default',
    component: <Chip color="default" variant='default' size="medium" label="Label" onDelete={() => {}} />
  }
];

export const sizes = [
  {
    title: 'Small',
    component: <Chip color="primary" variant="default" size="small" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Medium',
    component: <Chip color="primary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  }
];
