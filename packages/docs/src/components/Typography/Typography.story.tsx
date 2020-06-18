import { Typography } from '@naturacosmeticos/natds-web';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';

export { Variants } from './Variants';
export { Colors } from './Colors';
export { Align } from './Align';

import TypographyDocs from './Typography.mdx';

export default {
  title: 'Components|Typography',
  component: Typography,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['GridContainer'],
    theme: {
      context: 'web'
    },
    docs: {
      page: TypographyDocs
    }
  }
};




