import React from "react";
import { Radio } from "@naturacosmeticos/natds-web";

export const colors = [
  {
    title: "Primary",
    component:
      <Radio color="primary" checked={true} />,

  },
  {
    title: "Secondary",
    component:
      <Radio color="secondary" checked={true} />,

  },
  {
    title: "Default",
    component:
      <Radio color="default" checked={true} />,

  },
];

export const attributes = [
  {
    title: "Enabled",
    component:
      <>
        <Radio checked={false} />
        <Radio checked />
      </>,

  },
  {
    title: "Disabled",
    component:
      <>
        <Radio disabled checked={false} />
        <Radio disabled checked />
      </>,

  },
];
