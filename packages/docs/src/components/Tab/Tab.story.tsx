import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { TabContainer, TabItem } from '@naturacosmeticos/natds-web';

import TabDocs from './Tab.docs.mdx';

export default {
  title: 'Components|Tab',
  component: [TabContainer, TabItem],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Tab'],
    theme: {
      context: 'web',
    },
    docs: {
      page: TabDocs,
    },
  },
};

export { Interactive } from './Interactive';
