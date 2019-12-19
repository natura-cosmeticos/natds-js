import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

import { Snackbar } from '@naturacosmeticos/natds-web';
export { Interactive } from './Interactive';

import SnackbarDocs from './Snackbar.docs.mdx';

export default {
  title: 'Web|Snackbar',
  component: Snackbar,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Snackbar'],
    theme: 'web',
    docs: {
      page: SnackbarDocs
    }
  }
};



