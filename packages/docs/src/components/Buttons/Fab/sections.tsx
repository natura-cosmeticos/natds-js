import React from "react";
import { Fab } from "@naturacosmeticos/natds-web";
import AddIcon from "@material-ui/icons/Add";

export const colors = [
  {
    title: "Primary",
    component: <Fab color="primary"><AddIcon/></Fab>,
  },
  {
    title: "Secondary",
    component: <Fab color="secondary"><AddIcon/></Fab>,
  },
  {
    title: "Light",
    component: <Fab color="light"><AddIcon/></Fab>,
  },
];

export const variants = [
  {
    title: "Round",
    component: <Fab variant="round"><AddIcon/></Fab>,
  },
  {
    title: "Extended",
    component: <Fab variant="extended">Extended</Fab>,
  },
];

export const sizes = [
  {
    title: "Large",
    component: <Fab size="large"><AddIcon/></Fab>,
  },
  {
    title: "Medium",
    component: <Fab size="medium"><AddIcon/></Fab>,
  },
  {
    title: "Small",
    component: <Fab size="small"><AddIcon/></Fab>,
  },
];

export const leadingIcon = [
  {
    title: "Leading Icon",
    component: <Fab variant="extended"><AddIcon/> Extended</Fab>,
  },
];

export const disabled = [
  {
    title: "Disabled",
    component: <Fab disabled><AddIcon/></Fab>,
  },
];
