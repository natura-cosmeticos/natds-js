import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Avatar,
  Icon,
  IconButton,
} from '..';

describe('List components', () => {
  describe('rendering variants', () => {
    test('should match to snapshot - empty list', () => {
      const component = mount(<List />);
      expect(component).matchSnapshot('List empty snapshot');
    });

    test('should match to snapshot - with ListSubheader', () => {
      const component = mount(
        <List
          subheader={<ListSubheader id="subheader">Subheader</ListSubheader>}
        />
      );
      expect(component).matchSnapshot('List with ListSubheader snapshot');
    });

    test('should match to snapshot - with ListItem', () => {
      const component = mount(
        <List>
          <ListItem>Test</ListItem>
        </List>
      );
      expect(component).matchSnapshot('List with ListItem snapshot');
    });

    test('should match to snapshot - with ListItem button', () => {
      const component = mount(
        <List>
          <ListItem button>Test</ListItem>
        </List>
      );
      expect(component).matchSnapshot('List with ListItem button snapshot');
    });

    test('should match to snapshot - with ListItemAvatar', () => {
      const component = mount(
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar color="default" size="small">
                <Icon name="outlined-alert-check" size="tiny" />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      );
      expect(component).matchSnapshot('List with ListItemAvatar snapshot');
    });

    test('should match to snapshot - with ListItemIcon', () => {
      const component = mount(
        <List>
          <ListItem>
            <ListItemIcon>
              <Icon name="outlined-alert-check" size="small" />
            </ListItemIcon>
          </ListItem>
        </List>
      );
      expect(component).matchSnapshot('List with ListItemIcon snapshot');
    });

    test('should match to snapshot - with ListItemSecondaryAction', () => {
      const component = mount(
        <List>
          <ListItem>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="shopping">
                <Icon name="outlined-alert-cancel" size="tiny" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      );
      expect(component).matchSnapshot(
        'List with ListItemSecondaryAction snapshot'
      );
    });

    test('should match to snapshot - with ListItemText', () => {
      const component = mount(
        <List>
          <ListItem>
            <ListItemText primary="Text only" />
          </ListItem>
        </List>
      );
      expect(component).matchSnapshot('List with ListItemText snapshot');
    });
  });
});
