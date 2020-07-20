import * as React from "react";
import { Fab } from "@naturacosmeticos/natds-web";
import AddIcon from "@material-ui/icons/Add";
import withJest from "@decorators/jest/jest";
import withContainer from "@decorators/container/withContainer";
import { select, boolean, text } from "@storybook/addon-knobs";

import FabDocs from "./Fab.docs.mdx";

export default {
  title: "Components|Buttons/Fab",
  component: Fab,
  decorators: [
    withJest(), withContainer,
  ],
  parameters: {
    jestImportPath: "web",
    jest: ["Fab"],
    theme: {
      context: "web",
    },
    docs: {
      page: FabDocs,
    },
  },
};

const colors: any = {
  primary: "primary",
  secondary: "secondary",
  light: "light",
};

const sizes: any = {
  small: "small",
  medium: "medium",
  large: "large",
};

const variants: any = {
  round: "round",
  extended: "extended",
};

export const Interactive = () => {
  const variant = select("variant", variants, variants.round);
  const content = variant === variants.round ? <AddIcon /> : text("content", "Extended");

  const leadingIcon = variant === variants.round
    ? undefined
    : boolean("Leading Icon", false);

  return (
    <Fab
      color={select("color", colors, colors.primary)}
      size={select("size", sizes, sizes.large)}
      variant={select("variant", variants, variants.round)}
      disabled={boolean("disabled", false)}
    >
      {leadingIcon && <AddIcon/>}
      {content}
    </Fab>
  );
};

export const Round = () => <Fab
  color={select("color", colors, colors.primary)}
  size={select("size", sizes, sizes.large)}
  disabled={boolean("disabled", false)}
  variant="round"
>
  <AddIcon />
</Fab>;
export const Extended = () => {
  const leadingIcon = boolean("Leading Icon", false);

  return (
    <Fab
      color={select("color", colors, colors.primary)}
      size={select("size", sizes, sizes.large)}
      disabled={boolean("disabled", false)}
      variant="extended"
    >
      {leadingIcon && <AddIcon/>}
      {text("children", "Extended")}
    </Fab>
  );
};
