import React from 'react';
import { Avatar } from '@naturacosmeticos/natds-web';
import Favorite from '@material-ui/icons/Favorite';

export const types = [
  {
    title: 'Image',
    component: <Avatar src={require('../../assets/images/1.png')} />
  },
  {
    title: 'Letter',
    component: <Avatar children="XD" />
  },
  {
    title: 'Icon',
    component: <Avatar children={<Favorite />} />
  }
];

export const sizes = [
  {
    title: 'Tiny',
    component: <Avatar src={require('../../assets/images/1.png')} size="tiny" />
  },
  {
    title: 'Small',
    component: <Avatar src={require('../../assets/images/1.png')} size="small" />
  },
  {
    title: 'Standard',
    component: <Avatar src={require('../../assets/images/1.png')} size="standard" />
  },
  {
    title: 'Large',
    component: <Avatar src={require('../../assets/images/1.png')} size="large" />
  },
  {
    title: 'Huge',
    component: <Avatar src={require('../../assets/images/1.png')} size="huge" />
  }
];
