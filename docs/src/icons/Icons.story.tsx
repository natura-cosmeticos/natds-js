import * as React from 'react';

import IconDisplay from './index';
import { getListByType } from './sections';
import IconsDocs from './Icons.docs.mdx';
import tokensParams from '../tokens/shared';

import '@naturacosmeticos/natds-icons/dist/natds-icons.css';

export default {
  title: 'Icons|Natura',
  parameters: {
    docs: { page: IconsDocs },
    ...tokensParams
  }
};

const outlined = getListByType('outlined');
const filled = getListByType('filled');

export const Outlined = () => (
  <IconDisplay iconList={outlined} itemsPerRow={6} title="Outlined" />
);

export const Filled = () => (
  <IconDisplay iconList={filled} itemsPerRow={6} title="Filled" />
);
