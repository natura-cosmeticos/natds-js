import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { Paper } from '@naturacosmeticos/natds-web';

import PaperDocs from './Paper.docs.mdx';

export default {
  title: 'Components|Paper',
  component: Paper,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Paper'],
    theme: {
      context: 'web',
    },
    docs: {
      page: PaperDocs,
    },
  },
};

export { Interactive } from './Interactive';
