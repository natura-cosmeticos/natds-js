import * as React from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { select, text, boolean } from '@storybook/addon-knobs';

import { Intro, Icon } from '@naturacosmeticos/natds-web';
import { iconNames } from '@naturacosmeticos/natds-icons';
import { tokens } from '@naturacosmeticos/natds-styles';

import IntroDocs from './Intro.docs.mdx';

const variants: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  caption: 'caption',
  button: 'button',
  overline: 'overline',
  inherit: 'inherit'
};

export default {
  title: 'Components|Intro',
  component: Intro,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Intro'],
    theme: {
      context: 'web'
    },
    docs: {
      page: IntroDocs
    }
  }
};

export const Interactive = () => {
  const icons: any = Object.keys(iconNames);
  const sizes: any = Object.keys(tokens.iconSizes);
  const title = text('title', 'Heading');
  const IconWithTitle = () => (
    <>
      <Icon
        name={select('icon name', icons, icons[0])}
        size={select('icon size', sizes, sizes[1])}
      />
      {title}
    </>
  );
  const withIcon = boolean('with icon', true);
  
  return (
    <Intro 
      style={{ width: text('size', '600px') }}
      title={withIcon ? <IconWithTitle /> : title}
      titleVariant={select('title variant', variants, variants.subtitle1)}
      detail={text('detail', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut quam non libero placerat placerat id vel nunc. Etiam scelerisque urna vitae dignissim auctor.')}
      detailVariant={select('detail variant', variants, variants.body2)}
    />
  );
};
