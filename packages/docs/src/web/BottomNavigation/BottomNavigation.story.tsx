import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { BottomNavigation } from '@naturacosmeticos/natds-web';

export { Interactive } from './Interactive';

export default {
  title: 'Web|BottomNavigation',
  component: BottomNavigation,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['BottomNavigation', 'BottomNavigationAction'],
    theme: {
      context: 'web'
    },
  }
};

