import React from "react";
import { Checkbox } from "@naturacosmeticos/natds-web";

export const colors = [
  {
    "title": "Primary",
    "component":
      <Checkbox color="primary" checked={true} />

  },
  {
    "title": "Secondary",
    "component":
      <Checkbox color="secondary" checked={true} />

  },
  {
    "title": "Default",
    "component":
      <Checkbox color="default" checked={true} />

  }
];

export const attributes = [
  {
    "title": "Enabled",
    "component":
      <>
        <Checkbox checked={false} />
        <Checkbox checked />
      </>

  },
  {
    "title": "Disabled",
    "component":
      <>
        <Checkbox disabled checked={false} />
        <Checkbox disabled checked />
      </>

  }
];
