import * as React from "react";
import { themes } from "@naturacosmeticos/natds-styles";
import Table from "@addons/Table";

const {fontFamily} = themes.natura.light.typography;

const mapSchema = (item: any) => ({
  name: item,
  type: "text",
});

const fontFamilySchema = {
  head: ["web"],
  body: [[fontFamily].map(mapSchema)],
};

export const TypographyFontFamily = () => <Table schema={fontFamilySchema} title="Default Font Family" />;
