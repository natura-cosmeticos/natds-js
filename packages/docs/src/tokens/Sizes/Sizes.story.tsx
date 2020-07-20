import * as React from "react";

import Table from "@addons/Table";
import { tokens } from "@naturacosmeticos/natds-styles";
import SizesScale from "./Sizes.scale";
import tokensParams from "../shared";

const { sizes } = tokens;

const mapSchema = (item: any) => [
  {
    name: item[0],
    type: "text",
  },
  {
    name: item[1],
    type: "text",
  },
];

const SizesSchema = {
  head: [
    "name", "value",
  ],
  body: Object.entries(sizes).map(mapSchema),
};

export default {
  title: "Design Tokens|Sizes",
  parameters: {
    docs: {
      container: null,
      page: () => <Table schema={SizesSchema} title="Sizes" />,
    },
    ...tokensParams,
  },
};

export const Scale = () => <SizesScale sizes={sizes} />;
