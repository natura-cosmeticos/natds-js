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

/**
 * @constructor
 * @todo fix(docs): TS2322 - Type 'string[]' is not assignable to type 'IIconDisplayItem[]' on iconList prop
 */
export const Outlined = () => (
  // @ts-ignore
  <IconDisplay iconList={outlined} itemsPerRow={6} title="Outlined" />
);

/**
 * @constructor
 * @todo fix(docs): TS2322 - Type 'string[]' is not assignable to type 'IIconDisplayItem[]' on iconList prop
 */
export const Filled = () => (
  // @ts-ignore
  <IconDisplay iconList={filled} itemsPerRow={6} title="Filled" />
);
