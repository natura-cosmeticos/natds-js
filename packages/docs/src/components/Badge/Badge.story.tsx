import * as React from 'react';
import { Badge, Icon } from '@naturacosmeticos/natds-web';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import {
  colorList as colors,
  variantList as variants,
  anchorList as anchors,
  overlapList as overlaps,
} from './sections';

import { iconNames } from '@naturacosmeticos/natds-icons';
import { tokens } from '@naturacosmeticos/natds-styles';

import BadgeDocs from './Badge.docs.mdx';

export default {
  title: 'Components|Badge',
  component: Badge,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Badge'],
    theme: {
      context: 'web'
    },
    docs: {
      page: BadgeDocs
    }
  }
};

const icons: any = Object.keys(iconNames);
const sizes: any = Object.keys(tokens.iconSizes);

const content: any = {
  icon: 'icon',
  rectangle: 'rectangle',
  circle: 'circle'
};

function Content({ type }) {
  const styles: any = {
    width: '40px',
    height: '40px',
    background: `${tokens.colors.natura.grayscale.colorBrdNatGray1}`
  };

  if(type === content.icon) {
    return (
      <Icon
        key="icon"
        name={select('icon name', icons, icons[0])}
        size={select('icon size', sizes, sizes[3])}
      />
    );
  }

  if(type === content.rectangle) {
    return <div style={styles} key="rectangle" />;
  }

  return (
    <div style={{ ...styles, borderRadius: '50%' }} key="circle" />
  );
}

export const Interactive = () => {
  return (
    <Badge
      color={select('color', colors, colors.primary)}
      anchorOrigin={select('anchor origin', anchors, anchors.topright)}
      variant={select('variant', variants, variants.standard)}
      overlap={select('overlap', overlaps, overlaps.rectangle)}
      badgeContent={text('badge content', '9999')}
      max={number('badge max value', 99)}
      showZero={boolean('show zero value', false)}
      invisible={boolean('invisible', false)}
    >
      <Content type={select('content', content, content.circle)} />
    </Badge>
  );
};
