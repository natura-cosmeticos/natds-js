import { FabProps } from "@material-ui/core";
import colors from "./__fixtures__/colors";
import sizes from "./__fixtures__/sizes";

export const argTypes : Record<keyof FabProps | string, unknown> = {
  children: {
    control: {
      type: null,
    },
  },
  color: {
    control: {
      options: colors,
      type: "inline-radio",
    },
  },
  disabled: {
    control: {
      type: "boolean",
    },
  },
  size: {
    control: {
      options: sizes,
      type: "inline-radio",
    },
  },
};

export default argTypes;
