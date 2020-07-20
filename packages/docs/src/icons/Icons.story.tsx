/**
 * @todo fix(docs): TS2322 - Type 'string[]' is not assignable to type 'IIconDisplayItem[]' on iconList prop
 */
import * as React from "react";

import IconDisplay from "./index";
import { getListByType } from "./sections";
import IconsDocs from "./Icons.docs.mdx";
import tokensParams from "../tokens/shared";

import "@naturacosmeticos/natds-icons/dist/natds-icons.css";

export default {
  title: "Icons|Natura",
  parameters: {
    docs: { page: IconsDocs },
    ...tokensParams,
  },
};

const outlined = getListByType("outlined");
const filled = getListByType("filled");

// @ts-ignore
export const Outlined = () => <IconDisplay iconList={outlined} itemsPerRow={6} title="Outlined" />;

// @ts-ignore
export const Filled = () => <IconDisplay iconList={filled} itemsPerRow={6} title="Filled" />;
