import React from "react";
import { Avatar } from "@naturacosmeticos/natds-web";
import Favorite from "@material-ui/icons/Favorite";

export const colors = [
  {
    title: "Primary",
    component: <Avatar children="XD" size="standard" color="primary" />,
  },
  {
    title: "Secondary",
    component: <Avatar children="XD" size="standard" color="secondary" />,
  },
  {
    title: "Default",
    component: <Avatar children="XD" size="standard" color="default" />,
  },
];

export const types = [
  {
    title: "Image",
    component: <Avatar src={require("../../assets/images/1.png")} size="standard" color="primary" />,
  },
  {
    title: "Letter",
    component: <Avatar children="XD" size="standard" color="primary" />,
  },
  {
    title: "Icon",
    component: <Avatar children={<Favorite />} size="standard" color="primary" />,
  },
];

export const sizes = [
  {
    title: "Tiny",
    component: <Avatar src={require("../../assets/images/1.png")} size="tiny" color="primary" />,
  },
  {
    title: "Small",
    component: <Avatar src={require("../../assets/images/1.png")} size="small" color="primary" />,
  },
  {
    title: "Standard",
    component: <Avatar src={require("../../assets/images/1.png")} size="standard" color="primary" />,
  },
  {
    title: "Large",
    component: <Avatar src={require("../../assets/images/1.png")} size="large" color="primary" />,
  },
  {
    title: "Huge",
    component: <Avatar src={require("../../assets/images/1.png")} size="huge" color="primary" />,
  },
];
