import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { select, boolean, text, number } from '@storybook/addon-knobs';
import { anchors, variants, navigation, footer } from './sections';

import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerMenu,
} from '@naturacosmeticos/natds-web';

import DrawerDocs from './Drawer.docs.mdx';

export default {
  title: 'Components|Drawer',
  component: Drawer,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Drawer'],
    theme: {
      context: 'web'
    },
    docs: {
      page: DrawerDocs
    }
  }
};

export const Interactive = () => {
  const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
      width: text('width', '256px'),
      height: text('height', '100%'),
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'column nowrap'
    },
  }));

  const classes = useStyles();

  return (
    <Drawer
      open={boolean('open', false)}
      anchor={select('anchor', anchors, anchors.left)}
      variant={select('variant', variants, variants.permanent)}
      classes={{ paper: classes.drawer }}>

      <DrawerHeader
        avatarSrc={require('../../assets/images/1.png')}
        primary={text('header title', 'Hello, Long Name Lorem ipsum dolor sit amet...')}
        secondary={text('header subtitle', 'Option')}
      />

      <DrawerBody>
        <DrawerMenu list={navigation as any} />
      </DrawerBody>

      <DrawerFooter>
        <DrawerMenu list={footer as any} />
      </DrawerFooter>
    </Drawer>
  );
};
