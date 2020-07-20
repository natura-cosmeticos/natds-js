import React from "react";
import { Badge } from "@naturacosmeticos/natds-web";
import { tokens } from "@naturacosmeticos/natds-styles";

// @todo refactor(docs): fix anchorList key typos
export const anchorList: any = {
  topleft: {
    horizontal: "left",
    vertical: "top",
  },
  topright: {
    horizontal: "right",
    vertical: "top",
  },
  bottomleft: {
    horizontal: "left",
    vertical: "bottom",
  },
  bottomright: {
    horizontal: "right",
    vertical: "bottom",
  },
};

export const colorList: any = {
  default: "default",
  error: "error",
  primary: "primary",
  secondary: "secondary",
};

export const variantList: any = {
  dot: "dot",
  standard: "standard",
};

export const overlapList: any = {
  circle: "circle",
  rectangle: "rectangle",
};

const styles: any = {
  width: "40px",
  height: "40px",
  background: `${tokens.colors.natura.grayscale.colorBrdNatGray1}`,
};

const buildSection = (list: any, prop: any) => Object.values(list).map((item) => {
  const props = { [prop]: item };

  return {
    title: item,
    component:
        <Badge badgeContent="999" color="primary" {...props}><div style={styles} /></Badge>,

  };
});

export const colors = buildSection(colorList, "color");

export const variants = buildSection(variantList, "variant");

export const overlaps = buildSection(overlapList, "overlap");

export const anchors = [
  {
    title: "Top Left",
    component:
      <Badge badgeContent="999" color="primary" anchorOrigin={anchorList.topleft}><div style={styles} /></Badge>,

  },
  {
    title: "Top Right",
    component:
      <Badge badgeContent="999" color="primary" anchorOrigin={anchorList.topright}><div style={styles} /></Badge>,

  },
  {
    title: "Bottom Left",
    component:
      <Badge badgeContent="999" color="primary" anchorOrigin={anchorList.bottomleft}><div style={styles} /></Badge>,

  },
  {
    title: "Bottom Right",
    component:
      <Badge badgeContent="999" color="primary" anchorOrigin={anchorList.bottomright}><div style={styles} /></Badge>,

  },
];
