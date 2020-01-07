import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { List } from '@naturacosmeticos/natds-web';

import ListDocs from './List.docs.mdx';

export { Interactive } from './Interactive';

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
