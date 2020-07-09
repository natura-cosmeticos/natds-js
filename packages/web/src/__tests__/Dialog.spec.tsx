import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '..';

describe('Dialog components', () => {
  describe('rendering variants', () => {
    test('should match to snapshot - Opened', () => {
      const component = mount(<Dialog open={true}>Lorem ipsum</Dialog>);
      expect(component).matchSnapshot('Dialog opened snapshot');
    });

    test('should match to snapshot - with title', () => {
      const children = <DialogTitle>Lorem ipsum</DialogTitle>;
      const component = mount(<Dialog open={true} children={children} />);
      expect(component).matchSnapshot('Dialog with title snapshot');
    });

    test('should match to snapshot - with content', () => {
      const component = mount(
        <Dialog open={true}>
          <DialogContent>Lorem ipsum</DialogContent>
        </Dialog>
      );
      expect(component).matchSnapshot('Dialog with content snapshot');
    });

    test('should match to snapshot - with content text', () => {
      const component = mount(
        <Dialog open={true}>
          <DialogContent>
            <DialogContentText>Lorem ipsum</DialogContentText>
          </DialogContent>
        </Dialog>
      );
      expect(component).matchSnapshot('Dialog with content text snapshot');
    });

    test('should match to snapshot - with actions', () => {
      const component = mount(
        <Dialog open={true}>
          <DialogContent>
            <DialogContentText>Lorem ipsum</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Action</Button>
          </DialogActions>
        </Dialog>
      );
      expect(component).matchSnapshot('Dialog with actions snapshot');
    });

    test('should match to snapshot - with content divider', () => {
      const component = mount(
        <Dialog open={true}>
          <DialogTitle>Lorem ipsum</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>Lorem ipsum</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Action</Button>
          </DialogActions>
        </Dialog>
      );
      expect(component).matchSnapshot('Dialog with content divider snapshot');
    });
  });
});
