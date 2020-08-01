import {boolean, select, text} from "@storybook/addon-knobs";
import Fab, {colors, sizes, variants} from "./index";
import AddIcon from "@material-ui/icons/Add";
import * as React from "react";

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
