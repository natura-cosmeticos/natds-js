import React from 'react';
import { Button } from '@naturacosmeticos/natds-rn';

export const variants = [
  {
    title: 'Contained',
    component: (
      <Button
        children="Label"
        mode="contained"
        elevation={3}
        onPress={() => {}}
      />
    ),
  },
  {
    title: 'Outlined',
    component: <Button children="Label" mode="outlined" onPress={() => {}} />,
  },
  {
    title: 'Text',
    component: <Button children="Label" mode="text" onPress={() => {}} />,
  },
];

export const colors = [
  {
    title: 'Primary',
    component: (
      <Button
        children="Label"
        mode="contained"
        colorType="primary"
        elevation={3}
        onPress={() => {}}
      />
    ),
  },
  {
    title: 'Secondary',
    component: (
      <Button
        children="Label"
        mode="contained"
        colorType="secondary"
        elevation={3}
        onPress={() => {}}
      />
    ),
  },
  {
    title: 'Default',
    component: (
      <Button
        children="Label"
        mode="contained"
        colorType="default"
        elevation={3}
        onPress={() => {}}
      />
    ),
  },
];

export const sizes = [
  {
    title: 'Small',
    component: (
      <Button
        children="Label"
        mode="contained"
        colorType="primary"
        elevation={3}
        size="small"
        onPress={() => {}}
      />
    ),
  },
  {
    title: 'Medium',
    component: (
      <Button
        children="Label"
        mode="contained"
        colorType="primary"
        elevation={3}
        size="medium"
        onPress={() => {}}
      />
    ),
  },
  {
    title: 'Large',
    component: (
      <Button
        children="Label"
        mode="contained"
        colorType="primary"
        elevation={3}
        size="large"
        onPress={() => {}}
      />
    ),
  },
];

export const attributes = [
  {
    title: 'Enabled',
    component: (
      <Button
        children="Label"
        mode="contained"
        elevation={3}
        onPress={() => {}}
      />
    ),
  },
  {
    title: 'Disabled',
    component: <Button children="Label" mode="contained" disabled />,
  },
  {
    title: 'Icon',
    component: (
      <Button
        children="Label"
        mode="contained"
        icon="delete"
        onPress={() => {}}
      />
    ),
  },
];
