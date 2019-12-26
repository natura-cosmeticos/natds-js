import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  Divider,
  Icon,
  IconButton,
} from '@naturacosmeticos/natds-web';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import ListDocs from './List.docs.mdx';

export default {
  title: 'Components|List',
  component: List,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['List'],
    theme: {
      context: 'web',
    },
    docs: {
      page: ListDocs,
    },
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export const Interactive = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List dense={boolean('List dense', false)}>
        <ListItem button>
          <ListItemText
            primary="Text only"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Icon name="outlined-navigation-close" size="small" />
          </ListItemIcon>
          <ListItemText
            primary="Icon with text"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar color="default" size="small">
              <Icon name="outlined-navigation-close" size="tiny" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Avatar with text"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <Avatar color="default" size="small">
              <Icon name="outlined-navigation-close" size="tiny" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Avatar with text and icon"
            secondary={
              boolean('ListItemText secondary', false) ? 'Secondary text' : ''
            }
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="shopping">
              <Icon name="outlined-navigation-close" size="tiny" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};
