import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { BottomNavigation } from '@naturacosmeticos/natds-web';

export { Interactive } from './Interactive';

import BottomNavigationDocs from './BottomNavigation.docs.mdx';

export default {
  title: 'Components|BottomNavigation',
  component: BottomNavigation,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['BottomNavigation', 'BottomNavigationAction'],
    theme: {
      context: 'web'
    },
    docs: {
      page: BottomNavigationDocs
    }
  }
};

