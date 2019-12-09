import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from '@naturacosmeticos/natds-web';

import DialogDocs from './Dialog.docs.mdx';

export default {
  title: 'Web|Dialog',
  component: Dialog,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Dialog'],
    theme: 'web',
    docs: {
      page: DialogDocs,
    },
  },
};

export const Interactive = () => (
  <Dialog open={true}>
    <DialogTitle>Lorem ipsum</DialogTitle>
    <DialogContent>
      <DialogContentText>Test</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </DialogActions>
  </Dialog>
);
