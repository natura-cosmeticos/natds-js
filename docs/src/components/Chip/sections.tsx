import React from 'react';
import { Chip, Icon } from '@naturacosmeticos/natds-web';

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
    component: <Chip color="primary" variant="default" size="medium" label="Label" icon={<Icon name="outlined-action-add" />} />
  },
  {
    title: 'Standard (outlined)',
    component: <Chip color="primary" variant="outlined" size="medium" label="Label" />
  },
  {
    title: 'Disabled (outlined)',
    component: <Chip color="primary" variant="outlined" size="medium" disabled label="Label" />
  },
  {
    title: 'With Delete (outlined)',
    component: <Chip color="primary" variant="outlined" size="medium" label="Label" onDelete={() => { }} />
  },
  {
    title: 'Clickable (outlined)',
    component: <Chip color="primary" variant="outlined" size="medium" label="Label" clickable />
  },
  {
    title: 'Custom Icon (outlined)',
    component: <Chip color="primary" variant="outlined" size="medium" label="Label" icon={<Icon name="outlined-action-add" />} />
  }
];

export const variants = [
  {
    title: 'Default',
    component: <Chip clickable color="primary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Outlined',
    component: <Chip clickable color="primary" variant="outlined" size="medium" label="Label" onDelete={() => {}} />
  }
];

export const colors = [
  {
    title: 'Primary',
    component: <Chip clickable color="primary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Secondary',
    component: <Chip clickable color="secondary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Default',
    component: <Chip clickable color="default" variant='default' size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Primary (outlined)',
    component: <Chip clickable color="primary" variant="outlined" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Secondary (outlined)',
    component: <Chip clickable color="secondary" variant="outlined" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Default (outlined)',
    component: <Chip clickable color="default" variant='outlined' size="medium" label="Label" onDelete={() => {}} />
  }
];

export const sizes = [
  {
    title: 'Small',
    component: <Chip clickable color="primary" variant="default" size="small" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Medium',
    component: <Chip clickable color="primary" variant="default" size="medium" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Small (outlined)',
    component: <Chip clickable color="primary" variant="outlined" size="small" label="Label" onDelete={() => {}} />
  },
  {
    title: 'Medium (outlined)',
    component: <Chip clickable color="primary" variant="outlined" size="medium" label="Label" onDelete={() => {}} />
  }
];
