import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { CircularProgress } from '@naturacosmeticos/natds-web';

import CircularProgressDocs from './CircularProgress.docs.mdx';

export { Interactive } from './Interactive';

export default {
  title: 'Components|ProgressIndicator/CircularProgress',
  component: CircularProgress,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['CircularProgress'],
    theme: {
      context: 'web',
    },
    docs: {
      page: CircularProgressDocs,
    },
  },
};
