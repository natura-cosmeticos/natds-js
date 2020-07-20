import * as React from "react";
import { select } from "@storybook/addon-knobs";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { Divider, GridContainer, GridItem } from "@naturacosmeticos/natds-web";

import DividerDocs from "./Divider.docs.mdx";

export default {
  title: "Components|Divider",
  component: Divider,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Divider"],
    theme: {
      context: "web",
    },
    docs: {
      page: DividerDocs,
    },
  },
};

const variants: any = {
  fullWidth: "fullWidth",
  inset: "inset",
  middle: "middle",
};

export const Interactive = () => <GridContainer
  spacing={3}
  style={{
    width: 360,
    height: 140,
    margin: 0,
    border: 1,
    borderStyle: "ridge",
  }}
>
  <GridItem md={12} style={{
    height: 140,
    padding: "42px 0",
  }}>
    <Divider variant={select("variants", variants, variants.fullWidth)} />
  </GridItem>
</GridContainer>;
export const FullWidth = () => <GridContainer
  spacing={3}
  style={{
    width: 360,
    height: 140,
    margin: 0,
    border: 1,
    borderStyle: "ridge",
  }}
>
  <GridItem md={12} style={{
    height: 140,
    padding: "42px 0",
  }}>
    <Divider variant="fullWidth" />
  </GridItem>
</GridContainer>;
export const Inset = () => <GridContainer
  spacing={3}
  style={{
    width: 360,
    height: 140,
    margin: 0,
    border: 1,
    borderStyle: "ridge",
  }}
>
  <GridItem md={12} style={{
    height: 140,
    padding: "42px 0",
  }}>
    <Divider variant="inset" />
  </GridItem>
</GridContainer>;
export const Middle = () => <GridContainer
  spacing={3}
  style={{
    width: 360,
    height: 140,
    margin: 0,
    border: 1,
    borderStyle: "ridge",
  }}
>
  <GridItem md={12} style={{
    height: 140,
    padding: "42px 0",
  }}>
    <Divider variant="middle" />
  </GridItem>
</GridContainer>;
