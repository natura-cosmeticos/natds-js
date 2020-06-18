import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';

import { Snackbar } from '@naturacosmeticos/natds-web';
export { Interactive } from './Interactive';

import SnackbarDocs from './Snackbar.docs.mdx';

export default {
  title: 'Components|Snackbar',
  component: Snackbar,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Snackbar', 'SnackbarContent'],
    theme: {
      context: 'web',
    },
    docs: {
      page: SnackbarDocs,
    },
  },
};
