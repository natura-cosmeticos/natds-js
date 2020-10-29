import { ArgType } from "@storybook/addons";
import { ISnackbarProps } from "./Snackbar.props";
import { horizontalAnchorOrigins } from "./__fixtures__/horizontalAnchorOrigins";

export const argTypes : Record<keyof ISnackbarProps | string, ArgType> = {
  "anchorOrigin.horizontal": {
    control: {
      options: horizontalAnchorOrigins,
      type: "select",
    },
  },
  autoHideDuration: {
    control: {
      max: 10000,
      min: 500,
      step: 500,
      type: "range",
    },
  },
};

export default argTypes;
