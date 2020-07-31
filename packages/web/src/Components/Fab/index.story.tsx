import * as React from "react";
import { select, boolean, text } from "@storybook/addon-knobs";
import Fab, { colors, sizes, variants } from '.';
import { parameters } from './parameters';
import withJest from "../../../.storybook/decorators/jest/jest";
import withContainer from "../../../.storybook/decorators/container";

import AddIcon from "@material-ui/icons/Add";

export default {
  decorators: [withJest(), withContainer],
  parameters,
  title: 'Playground|Buttons/Fab'
}

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
