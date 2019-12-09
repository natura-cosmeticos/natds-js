import * as React from 'react';

import ComponentWithLabel from '../../addons/ComponentWithLabel';
import { outlined, filled } from './sections';
import IconsDocs from './Icons.docs.mdx';
import tokensParams from '../tokens/shared';

import '@naturacosmeticos/natds-icons/dist/natds-icons.css';

const styles = {
  padding: '30px 50px'
};

const container = (story) => (
  <div style={styles}>
    {story()}
  </div>
);

export default {
  title: 'Icons|Natura',
  parameters: {
    docs: { page: IconsDocs },
    ...tokensParams
  },
  decorators: [
    container
  ]
};

export const Outlined = () => (
  <ComponentWithLabel componentList={outlined} />
);

export const Filled = () => (
  <ComponentWithLabel componentList={filled} />
);
