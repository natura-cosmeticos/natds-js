import { Typography } from '@naturacosmeticos/natds-web';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';

export { Variants } from './Variants';

import TypographyDocs from './Typography.mdx';

export default {
  title: 'Web|Typography',
  component: Typography,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['GridContainer'],
    theme: 'web',
    docs: {
      page: TypographyDocs
    }
  }
};




