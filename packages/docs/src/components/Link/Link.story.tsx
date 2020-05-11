import * as React from 'react';
import { Link } from '@naturacosmeticos/natds-web';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/withContainer';
import { select, text } from '@storybook/addon-knobs';
import {
  colorList as colors,
  variantList as variants,
  underlineList as underlines
} from './sections';

import LinkDocs from './Link.docs.mdx';

export default {
  title: 'Components|Link',
  component: Link,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Link'],
    theme: {
      context: 'web'
    },
    docs: {
      page: LinkDocs
    }
  }
};

export const Interactive = () => {
  return (
    <Link
      color={select('color', colors, colors.default)}
      underline={select('underline', underlines, underlines.none)}
      variant={select('variant', variants, variants.body2)}
      component="button"
    >
      {text('text', 'link')}
    </Link>
  );
};
