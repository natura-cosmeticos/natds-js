import * as React from "react";
import { Fab, Icon } from "@naturacosmeticos/natds-web";

export const colors = [
  {
    title: "Primary",
    component: <Fab color="primary"><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
  {
    title: "Secondary",
    component: <Fab color="secondary"><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
  {
    title: "Light",
    component: <Fab color="light"><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
];

export const variants = [
  {
    title: "Round",
    component: <Fab variant="round"><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
  {
    title: "Extended",
    component: <Fab variant="extended">Extended (with text)</Fab>,
  },
];

export const sizes = [
  {
    title: "Large",
    component: <Fab size="large"><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
  {
    title: "Medium",
    component: <Fab size="medium"><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
  {
    title: "Small",
    component: <Fab size="small"><Icon name={"outlined-action-add"} size={"small"} /></Fab>,
  },
];

export const leadingIcon = [
  {
    title: "Leading Icon",
    component: <Fab variant="extended"><Icon name={"outlined-action-add"} size={"small"} /> Icon and text</Fab>,
  },
];

export const disabled = [
  {
    title: "Disabled",
    component: <Fab disabled><Icon name={"outlined-action-add"} size={"standard"} /></Fab>,
  },
];
