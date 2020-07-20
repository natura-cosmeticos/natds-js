import React from "react";
import { Tooltip, Fab, Icon } from "@naturacosmeticos/natds-web";

export const placementList: any = {
  "bottom-end": "bottom-end",
  "bottom-start": "bottom-start",
  bottom: "bottom",
  "left-end": "left-end",
  "left-start": "left-start",
  left: "left",
  "right-end": "right-end",
  "right-start": "right-start",
  right: "right",
  "top-end": "top-end",
  "top-start": "top-start",
  top: "top",
};

const buildSection = (list: any, prop: string) => Object.keys(list).map((item) => {
  const props = { [prop]: item };

  return {
    title: item,
    component:
        <Tooltip title="Tooltip title" {...props}>
          <div style={{ display: "inline-block" }}><Fab children={<Icon name="outlined-action-add" />} /></div>
        </Tooltip>,
  };
});

export const placement = buildSection(placementList, "placement");
