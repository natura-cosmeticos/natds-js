import React from 'react';
import { Chip } from '@naturacosmeticos/natds-rn';
import { Image } from 'react-native';
import avatar from '../../assets/images/avatar.png';

export const variants = [
  {
    title: 'Outlined',
    component: <Chip children="Label" mode="outlined" onPress={() => {}} />,
  },
  {
    title: 'Flat',
    component: <Chip children="Label" onPress={() => {}} />,
  },
];

export const attributes = [
  {
    title: 'Selected',
    component: <Chip children="Label" selected onPress={() => {}} />,
  },
  {
    title: 'Disabled',
    component: <Chip children="Label" disabled />,
  },
  {
    title: 'Icon',
    component: <Chip children="Label" icon="camera" />,
  },
  {
    title: 'Avatar',
    component: <Chip children="Label" avatar={<Image source={avatar} />} />,
  },
  {
    title: 'Closed',
    component: <Chip children="Label" onClose={() => {}} />,
  },
];
