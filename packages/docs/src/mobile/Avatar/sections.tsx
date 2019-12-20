import React from 'react';
import { Avatar } from '@naturacosmeticos/natds-rn';

export const types = [
  {
    title: 'Image',
    component: (
      <Avatar
        type="image"
        label=""
        icon=""
        source={require('../../assets/images/1.png')}
      />
    ),
  },
  {
    title: 'Letter',
    component: <Avatar type="text" label="XD" icon="" source={{}} />,
  },
  {
    title: 'Icon',
    component: <Avatar type="icon" label="" icon="heart" source={{}} />,
  },
];

export const sizes = [
  {
    title: 'Tiny',
    component: (
      <Avatar
        type="image"
        label=""
        icon=""
        source={require('../../assets/images/1.png')}
        avatarSizes="tiny"
      />
    ),
  },
  {
    title: 'Small',
    component: (
      <Avatar
        type="image"
        label=""
        icon=""
        source={require('../../assets/images/1.png')}
        avatarSizes="small"
      />
    ),
  },
  {
    title: 'Standard',
    component: (
      <Avatar
        type="image"
        label=""
        icon=""
        source={require('../../assets/images/1.png')}
        avatarSizes="standard"
      />
    ),
  },
  {
    title: 'Large',
    component: (
      <Avatar
        type="image"
        label=""
        icon=""
        source={require('../../assets/images/1.png')}
        avatarSizes="large"
      />
    ),
  },
  {
    title: 'Huge',
    component: (
      <Avatar
        type="image"
        label=""
        icon=""
        source={require('../../assets/images/1.png')}
        avatarSizes="huge"
      />
    ),
  },
];
